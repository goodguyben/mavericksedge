import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Copy, CheckCircle, ArrowLeft, Download, Share2, ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/custom-button';
import { getWorkflowBySlug, type Workflow } from '@/lib/supabase';

const N8nWorkflowPage: React.FC = () => {
  const [, setLocation] = useLocation();
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [loading, setLoading] = useState(true);
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

  return (
    <>
      <SEOHead
        title={`${workflow.title} | n8n Workflow Collection`}
        description={`Download and import this n8n workflow: ${workflow.title}. Copy the JSON and import directly into your n8n instance.`}
        canonicalUrl={`https://mavericksedge.ca/largest-n8n-workflow-collection/${workflow.slug}`}
        keywords={`n8n workflow, ${workflow.title}, automation, workflow template, n8n import`}
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
              <div className="bg-gradient-to-br from-[#252525] to-[#1f1f1f] rounded-2xl p-8 border border-[#333] mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h1 className="text-3xl sm:text-4xl font-bold text-maverick-cream mb-4 leading-tight">
                      {workflow.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#AAAAAA]">
                      <span>ID: {workflow.id}</span>
                      <span>•</span>
                      <span>n8n Workflow</span>
                      <span>•</span>
                      <span>Created: {new Date(workflow.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 bg-[#333] text-[#AAAAAA] rounded-lg hover:bg-[#444] transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button
                      onClick={handleCopyJson}
                      className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                        copied
                          ? 'bg-green-600 text-white'
                          : 'bg-maverick-orange text-white hover:bg-maverick-light-orange hover:scale-105'
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy JSON
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#333]">
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

        {/* JSON Code Block */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] rounded-2xl border border-[#333] overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#333]">
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
                <div className="p-6">
                  <pre className="text-sm text-[#CCCCCC] overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                    {jsonString}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Workflows */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-maverick-cream mb-4">
                  Explore More Workflows
                </h3>
                <p className="text-maverick-cream/70 mb-8">
                  Discover thousands of other n8n workflows in our collection
                </p>
                <Button href="/largest-n8n-workflow-collection" variant="primary" className="text-lg px-8 py-4">
                  Browse All Workflows
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default N8nWorkflowPage;
