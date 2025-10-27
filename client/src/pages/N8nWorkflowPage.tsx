import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Copy, CheckCircle, ArrowLeft, Download, Share2, ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/custom-button';
import { getWorkflowBySlug, getRelatedWorkflows, generateWorkflowDescription, type Workflow, type WorkflowDescription } from '@/lib/supabase';

const N8nWorkflowPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [relatedWorkflows, setRelatedWorkflows] = useState<Workflow[]>([]);
  const [workflowDescription, setWorkflowDescription] = useState<WorkflowDescription | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Get slug from URL
  const getSlugFromUrl = () => {
    const path = window.location.pathname;
    const slug = path.split('/').pop();
    return slug;
  };

  // Load workflow by slug
  useEffect(() => {
    const loadWorkflow = async () => {
      try {
        setLoading(true);
        const slug = getSlugFromUrl();
        
        if (!slug) {
          setError('Workflow not found');
          return;
        }

        const data = await getWorkflowBySlug(slug);
        setWorkflow(data);
        
        // Generate workflow description
        const description = generateWorkflowDescription(data);
        setWorkflowDescription(description);
        
        // Load related workflows
        setRelatedLoading(true);
        try {
          const related = await getRelatedWorkflows(data, 6);
          setRelatedWorkflows(related);
        } catch (err) {
          console.error('Error loading related workflows:', err);
        } finally {
          setRelatedLoading(false);
        }
      } catch (err) {
        console.error('Error loading workflow:', err);
        setError('Failed to load workflow');
      } finally {
        setLoading(false);
      }
    };

    loadWorkflow();
  }, []);

  const handleCopyJson = async () => {
    if (!workflow) return;
    
    try {
      const jsonString = typeof workflow.json_data === 'string' 
        ? workflow.json_data 
        : JSON.stringify(workflow.json_data, null, 2);
      
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy JSON:', err);
    }
  };

  const handleShare = async () => {
    if (!workflow) return;
    
    const url = window.location.href;
    const title = workflow.title;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - n8n Workflow`,
          text: `Check out this n8n workflow: ${title}`,
          url: url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(url);
        // You could show a toast notification here
      } catch (err) {
        console.error('Failed to copy URL:', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maverick-orange mx-auto mb-4"></div>
          <p className="text-maverick-cream/70">Loading workflow...</p>
        </div>
      </div>
    );
  }

  if (error || !workflow) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-maverick-cream mb-4">Workflow Not Found</h1>
          <p className="text-maverick-cream/70 mb-8">{error || 'The requested workflow could not be found.'}</p>
          <Button href="/largest-n8n-workflow-collection" variant="primary">
            Back to Collection
          </Button>
        </div>
      </div>
    );
  }

  const jsonString = typeof workflow.json_data === 'string' 
    ? workflow.json_data 
    : JSON.stringify(workflow.json_data, null, 2);

  const canonicalUrl = `https://mavericksedge.ca/largest-n8n-workflow-collection/${workflow.slug}`;

  // Build meta description - use stored description if available
  const metaDescription = workflow.description 
    ? workflow.description.substring(0, 155)
    : workflowDescription?.description?.substring(0, 155) || 
      `Download and import this n8n workflow: ${workflow.title}. Copy the JSON and import directly into your n8n instance.`;

  // Extract keywords from title for richer keyword tags
  const titleKeywords = workflow.title.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2)
    .slice(0, 5)
    .join(', ');

  const keywords = `n8n workflow, ${workflow.title}, automation, workflow template, AI automation, business process automation, workflow import, free n8n template, ${titleKeywords}, automation workflow, n8n templates`;

  return (
    <>
      <SEOHead
        title={`${workflow.title} | n8n Workflow Collection`}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        keywords={keywords}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": workflow.title,
          "description": metaDescription,
          "url": canonicalUrl,
          "identifier": workflow.id.toString(),
          "genre": "Workflow Automation",
          "inLanguage": "en",
          "isAccessibleForFree": true,
          "dateCreated": workflow.created_at,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Mavericks Edge",
            "url": "https://mavericksedge.ca",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mavericksedge.ca"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "n8n Workflow Collection",
                "item": "https://mavericksedge.ca/largest-n8n-workflow-collection"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": workflow.title,
                "item": canonicalUrl
              }
            ]
          },
          "howTo": {
            "@type": "HowTo",
            "name": `How to Import ${workflow.title}`,
            "description": "Learn how to import and use this n8n workflow template",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Copy the Workflow JSON",
                "text": "Click the 'Copy JSON' button to copy the workflow code to your clipboard."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Open Your n8n Instance",
                "text": "Log into your n8n instance and navigate to the Workflows section."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Import the Workflow",
                "text": "Click 'Import from JSON', paste the copied code, and click 'Import'."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Configure Credentials",
                "text": "Set up any required credentials for the services used in the workflow."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Activate and Test",
                "text": "Save and activate the workflow, then test it to ensure everything works correctly."
              }
            ]
          }
        }}
      />

      <div className="min-h-screen bg-[#121212]">
        {/* Header */}
        <div className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Button */}
              <button
                onClick={() => setLocation('/largest-n8n-workflow-collection')}
                className="flex items-center gap-2 text-[#AAAAAA] hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Collection
              </button>

              {/* Workflow Header */}
              <div className="bg-gradient-to-br from-[#252525] to-[#1f1f1f] rounded-2xl p-4 sm:p-8 border border-[#333] mb-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-maverick-cream mb-4 leading-tight">
                      {workflow.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-[#AAAAAA]">
                      <span>ID: {workflow.id}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>n8n Workflow</span>
                      <span className="hidden sm:inline">•</span>
                      <span>Created: {new Date(workflow.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleShare}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#333] text-[#AAAAAA] rounded-lg hover:bg-[#444] transition-colors text-sm sm:text-base"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                    <button
                      onClick={handleCopyJson}
                      className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                        copied
                          ? 'bg-green-600 text-white'
                          : 'bg-maverick-orange text-white hover:bg-maverick-light-orange hover:scale-105'
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy JSON</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-[#1A1A1A] rounded-lg p-4 sm:p-6 border border-[#333]">
                  <h3 className="text-lg font-semibold text-maverick-cream mb-3">How to Import</h3>
                  <ol className="text-sm text-maverick-cream/70 space-y-2">
                    <li>1. Click "Copy JSON" above to copy the workflow</li>
                    <li>2. Open your n8n instance</li>
                    <li>3. Go to Workflows → Import from JSON</li>
                    <li>4. Paste the JSON and click "Import"</li>
                    <li>5. Configure any required credentials and activate</li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Workflow Description & Use Cases */}
        {workflowDescription && (
          <div className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-[#252525] to-[#1f1f1f] rounded-2xl p-6 sm:p-8 border border-[#333]">
                  {/* Main Description */}
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-maverick-cream mb-4">
                      What This Workflow Does
                    </h2>
                    <p className="text-lg text-maverick-cream/80 leading-relaxed">
                      {workflowDescription.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Use Cases */}
                    <div>
                      <h3 className="text-xl font-semibold text-maverick-cream mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-maverick-orange rounded-full"></div>
                        Common Use Cases
                      </h3>
                      <ul className="space-y-3">
                        {workflowDescription.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-maverick-cream/80">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-maverick-cream mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-maverick-orange rounded-full"></div>
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {workflowDescription.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-maverick-cream/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* JSON Code Block */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] rounded-2xl border border-[#333] overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 border-b border-[#333] gap-2 sm:gap-0">
                  <h3 className="text-lg font-semibold text-maverick-cream">Workflow JSON</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#AAAAAA]">
                      {jsonString.length.toLocaleString()} characters
                    </span>
                    <button
                      onClick={handleCopyJson}
                      className="flex items-center gap-1 px-3 py-1 bg-[#333] text-[#AAAAAA] rounded text-xs hover:bg-[#444] transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <pre className="text-xs sm:text-sm text-[#CCCCCC] overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                    {jsonString}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Workflows */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-maverick-cream mb-4">
                  Related Workflows
                </h3>
                <p className="text-lg text-maverick-cream/80 mb-8">
                  Discover similar workflows that might interest you
                </p>
              </div>

              {relatedLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maverick-orange mx-auto mb-4"></div>
                  <p className="text-maverick-cream/70">Loading related workflows...</p>
                </div>
              ) : relatedWorkflows.length > 0 ? (
                <div className="grid grid-cols-1 mini:grid-cols-2 pro:grid-cols-3 gap-4 phone:gap-6 mb-12">
                  {relatedWorkflows.map((relatedWorkflow, index) => (
                    <motion.div
                      key={relatedWorkflow.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="group bg-gradient-to-br from-[#252525] to-[#1f1f1f] rounded-xl p-4 phone:p-6 border border-[#333] hover:border-maverick-orange/60 transition-all duration-300 hover:shadow-lg hover:shadow-maverick-orange/10 hover:-translate-y-1 min-w-0"
                    >
                      <div className="mb-4 min-w-0">
                        <a 
                          href={`/largest-n8n-workflow-collection/${relatedWorkflow.slug}`}
                          className="block group-hover:text-white transition-colors duration-300 min-w-0"
                        >
                          <h4 className="text-base phone:text-lg font-semibold text-maverick-cream mb-2 leading-tight group-hover:text-white transition-colors duration-300 break-words overflow-wrap-anywhere">
                            {relatedWorkflow.title}
                          </h4>
                        </a>
                        <div className="flex items-center gap-2 text-xs text-[#AAAAAA] flex-wrap">
                          <span className="whitespace-nowrap">n8n Workflow</span>
                          <span>•</span>
                          <span className="whitespace-nowrap">ID: {relatedWorkflow.id}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 min-w-0">
                        <a
                          href={`/largest-n8n-workflow-collection/${relatedWorkflow.slug}`}
                          className="flex-1 flex items-center justify-center gap-1.5 phone:gap-2 px-3 phone:px-4 py-2 bg-[#333] text-[#AAAAAA] rounded-lg hover:bg-[#444] hover:text-white transition-colors text-sm min-w-0"
                        >
                          <ExternalLink className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">View</span>
                        </a>
                        <button
                          onClick={() => {
                            const jsonString = typeof relatedWorkflow.json_data === 'string' 
                              ? relatedWorkflow.json_data 
                              : JSON.stringify(relatedWorkflow.json_data, null, 2);
                            navigator.clipboard.writeText(jsonString);
                          }}
                          className="flex items-center justify-center gap-1.5 phone:gap-2 px-3 phone:px-4 py-2 bg-maverick-orange text-white rounded-lg hover:bg-maverick-light-orange transition-colors text-sm flex-shrink-0"
                        >
                          <Copy className="w-4 h-4 flex-shrink-0" />
                          <span className="hidden xs:inline">Copy</span>
                          <span className="xs:hidden">Copy</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-maverick-cream/70 mb-6">No related workflows found.</p>
                </div>
              )}

              <div className="text-center">
                <Button href="/largest-n8n-workflow-collection" variant="primary" className="text-lg px-8 py-4">
                  Browse All Workflows
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* What is n8n? Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-maverick-cream mb-6">
                What is n8n?
              </h2>
              <div className="text-maverick-cream/80 space-y-4 leading-relaxed">
                <p>
                  n8n is an open-source workflow automation tool that connects your business applications without writing code. Think of it as the plumbing between all your software: when something happens in one app, n8n automatically triggers actions in another.
                </p>
                <p>
                  Unlike subscription-based automation platforms that charge per task, n8n runs on your own infrastructure. You download it, install it on your server, and you're done. No monthly fees that scale with usage. No restrictions on how many workflows you can run or how much data you can process.
                </p>
                <p>
                  The platform uses a visual workflow editor where you drag nodes onto a canvas and connect them. Each node represents an action: fetch data from an API, send a Slack message, update a spreadsheet, process webhook data. String enough nodes together and you've built an automation that handles tasks you used to do manually.
                </p>
                <p>
                  Since n8n is open source, developers can extend it with custom nodes, modify the source code, or integrate it deeply into existing systems. For businesses, this means you're never locked into someone else's roadmap. If you need a specific integration or feature, you can build it yourself or hire someone who can.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Use n8n Workflow Automations? Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-maverick-cream mb-6">
                Why Use n8n Workflow Automations?
              </h2>
              <div className="text-maverick-cream/80 space-y-4 leading-relaxed">
                <p>
                  Your team wastes hours every week on repetitive tasks. Copy data from emails into spreadsheets. Check one system and update another. Send the same notification to five different places. These aren't strategic activities, but someone has to do them.
                </p>
                <p>
                  n8n workflows handle that grunt work automatically. Set up a workflow once, and it runs forever. Your CRM gets a new lead? The workflow scores it, adds it to your spreadsheet, notifies your sales team in Slack, and creates a follow-up task in your project management tool. All of this happens in seconds, without human intervention.
                </p>
                <p>
                  The business case is straightforward. If your team spends 10 hours a week on manual data entry and coordination, that's 520 hours a year. At $50 per hour, you're burning $26,000 annually on work a computer should handle. Most businesses can automate these tasks with n8n workflows in a few days.
                </p>
                <p>
                  Beyond cost savings, automation means consistency. Humans forget steps, make typos, or skip processes when they're busy. Workflows execute the same way every single time. Your data stays clean, your notifications go out on schedule, and nothing falls through the cracks because someone was out sick or dealing with an emergency.
                </p>
                <p>
                  The workflows in this collection give you a head start. Instead of building automations from scratch, copy the JSON, import it into n8n, and customize it for your specific tools and processes. What might take days to build takes minutes to deploy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* About Mavericks Edge Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-[#1A1A1A] border-t border-[#333]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-maverick-cream mb-6">
                Need Help Implementing Automation?
              </h2>
              <div className="text-maverick-cream/80 space-y-4 leading-relaxed">
                <p>
                  At Mavericks Edge, we help Edmonton businesses automate workflows and build web solutions that work together seamlessly. Our{' '}
                  <a 
                    href="https://mavericksedge.ca/ai-automation-services-edmonton" 
                    className="text-maverick-orange hover:text-maverick-light-orange transition-colors underline decoration-1 underline-offset-2"
                  >
                    AI Services
                  </a>
                  {' '}team specializes in custom n8n integrations, API development, and complete digital infrastructure that connects the pieces to make your business run smoother.
                </p>
                <p>
                  Looking to complement your automation with a professional web presence? Our{' '}
                  <a 
                    href="https://mavericksedge.ca/web-design-services-edmonton" 
                    className="text-maverick-orange hover:text-maverick-light-orange transition-colors underline decoration-1 underline-offset-2"
                  >
                    Edmonton Web Design
                  </a>
                  {' '}services create websites that integrate directly with your automated workflows. From custom dashboards to client portals, we build digital experiences that leverage the power of automation.
                </p>
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 min-h-[44px] rounded-lg text-base font-medium transition-all duration-300 touch-manipulation bg-[#FF5630] text-[#FFFFFF] hover:bg-[#FF5630]/90"
                    style={{ color: '#FFFFFF' }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default N8nWorkflowPage;
