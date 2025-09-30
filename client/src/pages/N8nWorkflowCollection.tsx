import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, Copy, Download, Zap, Users, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/custom-button';
import GradientText from '@/components/ui/GradientText';
import { supabase, searchWorkflows, getFeaturedWorkflows, type Workflow } from '@/lib/supabase';

// Mock workflow data - in a real implementation, this would come from an API
const mockWorkflows = [
  {
    id: 1,
    name: 'Slack to Google Sheets Integration',
    description: 'Automatically log Slack messages to a Google Sheets spreadsheet',
    category: 'Communication',
    tags: ['slack', 'google-sheets', 'logging', 'automation'],
    json: '{"name":"Slack to Google Sheets","nodes":[{"name":"Slack Trigger","type":"slack"}]}',
    downloads: 1247,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Webhook to Email Notifier',
    description: 'Send email notifications when webhooks are received',
    category: 'Notifications',
    tags: ['webhook', 'email', 'notifications', 'alerts'],
    json: '{"name":"Webhook to Email","nodes":[{"name":"Webhook","type":"webhook"}]}',
    downloads: 892,
    rating: 4.6
  },
  {
    id: 3,
    name: 'CRM Lead Sync Automation',
    description: 'Sync leads between different CRM systems automatically',
    category: 'CRM',
    tags: ['crm', 'sync', 'leads', 'automation'],
    json: '{"name":"CRM Lead Sync","nodes":[{"name":"CRM Trigger","type":"crm"}]}',
    downloads: 2156,
    rating: 4.9
  },
  {
    id: 4,
    name: 'Social Media Cross-Posting',
    description: 'Automatically post content to multiple social media platforms',
    category: 'Social Media',
    tags: ['social-media', 'cross-posting', 'automation', 'content'],
    json: '{"name":"Social Media Cross-Post","nodes":[{"name":"Social Media","type":"social"}]}',
    downloads: 1834,
    rating: 4.7
  },
  {
    id: 5,
    name: 'Database Backup Automation',
    description: 'Automatically backup databases to cloud storage',
    category: 'DevOps',
    tags: ['database', 'backup', 'cloud', 'devops'],
    json: '{"name":"Database Backup","nodes":[{"name":"Database","type":"database"}]}',
    downloads: 945,
    rating: 4.8
  }
];

const N8nWorkflowCollection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [featuredWorkflows, setFeaturedWorkflows] = useState<Workflow[]>([]);
  const [copiedWorkflow, setCopiedWorkflow] = useState<number | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchError, setSearchError] = useState<string | null>(null);
  
  // New intelligent search states
  const [searchSuggestions, setSearchSuggestions] = useState<Workflow[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [totalWorkflows, setTotalWorkflows] = useState<number>(0);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);


  // Load initial data and popular searches
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        const featured = await getFeaturedWorkflows(6);
        setFeaturedWorkflows(featured);
        setWorkflows(featured); // Show featured workflows initially
        
        // Load popular searches (first 20 workflows as popular)
        const popular = await searchWorkflows('', 20);
        const popularTitles = popular.map(w => w.title);
        setPopularSearches(popularTitles);
        
        // Load random featured workflows (different from the initial 6)
        const randomFeatured = await searchWorkflows('', 50); // Get more to randomize
        const shuffled = randomFeatured.sort(() => 0.5 - Math.random());
        setFeaturedWorkflows(shuffled.slice(0, 6)); // Take first 6 after shuffle
        
        // Get total workflow count
        const total = await searchWorkflows('', 1);
        // We'll get the actual count from the test script result (4859)
        setTotalWorkflows(4859);
      } catch (error) {
        console.error('Error loading initial data:', error);
        setSearchError('Failed to load workflows. Please try again.');
        // Fallback to mock data
        setWorkflows(mockWorkflows.map(w => ({
          id: w.id,
          title: w.name,
          slug: w.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-'),
          json_data: w.json,
          created_at: new Date().toISOString()
        })));
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Debounced search with suggestions
  const debouncedSearch = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        setWorkflows(featuredWorkflows);
        setSearchSuggestions([]);
        return;
      }

      try {
        setIsSearching(true);
        setSearchError(null);
        
        // Search for main results
        const results = await searchWorkflows(query, 20);
        setWorkflows(results);
        
        // Get suggestions for dropdown
        const suggestions = await searchWorkflows(query, 8);
        setSearchSuggestions(suggestions);
        
      } catch (error) {
        console.error('Error searching workflows:', error);
        setSearchError('Search failed. Please try again.');
      } finally {
        setIsSearching(false);
      }
    },
    [featuredWorkflows]
  );

  // Debounce search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      debouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, debouncedSearch]);

  const handleCopyJson = async (workflowId: number, jsonData: any) => {
    try {
      const jsonString = typeof jsonData === 'string' ? jsonData : JSON.stringify(jsonData, null, 2);
      await navigator.clipboard.writeText(jsonString);
      setCopiedWorkflow(workflowId);
      setTimeout(() => setCopiedWorkflow(null), 2000);
    } catch (err) {
      console.error('Failed to copy JSON:', err);
    }
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion: Workflow) => {
    setSearchTerm(suggestion.title);
    setShowSuggestions(false);
    searchInputRef.current?.blur();
  };

  // Handle popular search click
  const handlePopularSearchClick = (query: string) => {
    setSearchTerm(query);
    setShowSuggestions(false);
  };


  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        !searchInputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const exampleQueries = [
    'Slack automation',
    'Google Sheets integration',
    'Webhook listener',
    'Email notifications',
    'CRM sync',
    'Social media posting'
  ];

  return (
    <>
      <SEOHead
        title="Largest n8n Workflow Collection | Free Templates & Automation Examples"
        description="Explore the largest n8n workflow collection and repository of templates and automation examples. Search, copy JSON, and import directly into n8n to start automating instantly."
        canonicalUrl="https://mavericksedge.ca/largest-n8n-workflow-collection"
        keywords="n8n workflow collection, n8n workflow repository, free n8n templates, n8n automation examples, download n8n workflows, import n8n JSON, n8n templates, workflow automation"
      />

      <div className="min-h-screen bg-[#121212]">
        {/* Hero Section */}
        <section className="relative pt-8 xxs:pt-12 xs:pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-8 xxs:mt-12 xs:mt-16 sm:mt-0"
              >
                <span className="text-maverick-cream block mb-2">
                  The World's Largest
                </span>
                <GradientText
                  colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                  animationSpeed={6}
                  className="text-4xl sm:text-5xl lg:text-6xl"
                >
                  n8n Workflow Collection
                </GradientText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-maverick-cream/80 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Stop spending weeks building automations from scratch when thousands of ready-to-use workflows are just one click away. Our repository contains 5,000+ professionally crafted n8n templates that can transform your business operations in minutes. From lead generation to customer support, discover workflows that scale your business while you sleep.
                <br />
                <span className="text-lg text-maverick-orange/90 font-medium">
                  Search → Copy JSON → Import to n8n
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12"
              >
                <Button href="#search" variant="primary" className="text-lg px-8 py-4">
                  Start Searching Workflows
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Intro Copy */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-maverick-cream">
                Thousands of Ready-to-Use Workflows
              </h2>
              <p className="text-lg text-maverick-cream/80 leading-relaxed mb-8">
                Our repository contains thousands of professionally crafted n8n workflows 
                covering everything from simple automations to complex enterprise integrations. 
                Each workflow is tested, documented, and ready to import directly into your n8n instance.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-maverick-cream/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-maverick-orange" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-maverick-orange" />
                  <span>Regularly updated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-maverick-orange" />
                  <span>Community driven</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section id="search" className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-maverick-cream">
                Find Your Perfect n8n Workflow
              </h2>
              <p className="text-lg text-maverick-cream/80 mb-8">
                Search through our collection by keywords, categories, or use cases
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative max-w-2xl mx-auto mb-8 z-50"
            >
              <div className={`relative flex items-center bg-[#1A1A1A] rounded-full shadow-lg border-2 transition-all duration-200 ${
                isFocused ? 'border-maverick-orange shadow-xl shadow-maverick-orange/20' : 'border-[#2A2A2A]'
              }`}>
                <div className="absolute left-6 text-[#AAAAAA]">
                  {isSearching ? (
                    <div className="w-6 h-6 border-2 border-maverick-orange border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Search className="w-6 h-6" />
                  )}
                </div>
                
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => {
                    setIsFocused(true);
                    setShowSuggestions(true);
                  }}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setShowSuggestions(false);
                      searchInputRef.current?.blur();
                    }
                  }}
                  placeholder="Search workflows... (e.g., 'Slack automation', 'Google Sheets')"
                  className="w-full pl-16 pr-6 py-6 text-lg text-white placeholder-[#AAAAAA] focus:outline-none bg-transparent"
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
              </div>

              {/* Intelligent Search Suggestions Dropdown */}
              {showSuggestions && (searchSuggestions.length > 0 || popularSearches.length > 0) && (
                <motion.div
                  ref={suggestionsRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-2xl z-[9999] max-h-96 overflow-y-auto"
                >
                  {/* Search Suggestions */}
                  {searchSuggestions.length > 0 && (
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Search className="w-4 h-4 text-maverick-orange" />
                        <span className="text-sm font-medium text-maverick-cream">Suggestions</span>
                      </div>
                      {searchSuggestions.map((workflow) => (
                        <button
                          key={workflow.id}
                          onClick={() => handleSuggestionClick(workflow)}
                          className="w-full text-left p-3 rounded-lg hover:bg-[#2A2A2A] transition-colors group"
                        >
                          <div className="text-white group-hover:text-maverick-orange transition-colors">
                            {workflow.title}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}


                  {/* Popular Searches */}
                  {!searchTerm && popularSearches.length > 0 && (
                    <div className="p-4 border-t border-[#2A2A2A]">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-maverick-orange" />
                        <span className="text-sm font-medium text-maverick-cream">Popular Workflows</span>
                      </div>
                      {popularSearches.slice(0, 5).map((title, index) => (
                        <button
                          key={index}
                          onClick={() => handlePopularSearchClick(title)}
                          className="w-full text-left p-2 rounded-lg hover:bg-[#2A2A2A] transition-colors text-sm text-[#AAAAAA] hover:text-maverick-orange"
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Example queries */}
              <div className="mt-4 px-4">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 items-center">
                  <span className="text-xs sm:text-sm text-[#AAAAAA] mr-1 sm:mr-2 mb-1 sm:mb-0">Try:</span>
                  {exampleQueries.map((query, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularSearchClick(query)}
                      className="text-xs sm:text-sm text-maverick-orange hover:text-maverick-light-orange transition-colors cursor-pointer mb-1 sm:mb-0"
                    >
                      "{query}"
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results count */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-8 px-4"
            >
              <p className="text-maverick-cream/70 mb-4">
                {isLoading ? 'Loading...' : (
                  searchTerm 
                    ? `${workflows.length} workflow${workflows.length !== 1 ? 's' : ''} found for "${searchTerm}"`
                    : `${totalWorkflows} workflow${totalWorkflows !== 1 ? 's' : ''} available`
                )}
              </p>
              
              {searchError && (
                <p className="text-red-400 text-sm mt-2">{searchError}</p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Search Results / Featured Workflows */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-maverick-cream">
                {searchTerm ? `Search Results for "${searchTerm}"` : 'Featured n8n Workflows'}
              </h2>
              <p className="text-lg text-maverick-cream/80">
                {searchTerm 
                  ? `Found ${workflows.length} workflow${workflows.length !== 1 ? 's' : ''} matching your search`
                  : 'Hand-picked, high-quality workflows curated by our team'
                }
              </p>
            </motion.div>

            <div className="flex flex-col mini:grid mini:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-[#252525] to-[#1f1f1f] rounded-2xl p-8 border border-[#333] hover:border-maverick-orange/60 transition-all duration-500 hover:shadow-2xl hover:shadow-maverick-orange/20 hover:-translate-y-2"
                >
                  {/* Content */}
                  <div className="mb-8">
                    <a 
                      href={`/largest-n8n-workflow-collection/${workflow.slug}`}
                      className="block group-hover:text-white transition-colors duration-300"
                    >
                      <h3 className="text-xl font-bold text-maverick-cream mb-4 leading-tight group-hover:text-white transition-colors duration-300">
                        {workflow.title}
                      </h3>
                    </a>
                    <div className="flex items-center gap-2 text-xs text-[#AAAAAA]">
                      <span>n8n Workflow</span>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyJson(workflow.id, workflow.json_data)}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      copiedWorkflow === workflow.id
                        ? 'bg-green-600 text-white scale-105'
                        : 'bg-gradient-to-r from-maverick-orange to-maverick-light-orange text-white hover:from-maverick-light-orange hover:to-maverick-orange hover:scale-105 hover:shadow-lg hover:shadow-maverick-orange/30'
                    }`}
                  >
                    {copiedWorkflow === workflow.id ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Copied to Clipboard!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copy Workflow JSON
                      </>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Import Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-maverick-cream">
                How to Import an n8n Workflow
              </h2>
              <p className="text-lg text-maverick-cream/80">
                Get started with any workflow in just three simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Search for a workflow",
                  description: "Use our search bar to find workflows by keywords, categories, or use cases.",
                  icon: Search
                },
                {
                  step: 2,
                  title: "Copy the JSON code",
                  description: "Click 'Copy JSON' on any workflow to copy the complete workflow configuration.",
                  icon: Copy
                },
                {
                  step: 3,
                  title: "Import to n8n",
                  description: "Open n8n → Import Workflow → Paste JSON → Save and activate your workflow.",
                  icon: Download
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-maverick-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-maverick-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-maverick-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-maverick-cream/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Repository Matters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-maverick-cream">
                Why This Repository Matters
              </h2>
              <p className="text-lg text-maverick-cream/80">
                Join thousands of developers and businesses who save time and accelerate their automation projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Save Time",
                  description: "Skip weeks of development with ready-made workflows that have been tested and optimized by the community."
                },
                {
                  icon: Users,
                  title: "Learn Faster",
                  description: "Explore real-world examples to understand best practices and advanced n8n techniques."
                },
                {
                  icon: Zap,
                  title: "Jumpstart Automations",
                  description: "Start automating immediately with professional-grade workflows that cover common business needs."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-maverick-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-maverick-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-maverick-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-maverick-cream/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-maverick-cream">
                Ready to Start Automating?
              </h2>
              <p className="text-lg text-maverick-cream/80 mb-8">
                Browse our collection and find the perfect workflow for your automation needs
              </p>
              <Button href="#search" variant="primary" className="text-lg px-8 py-4">
                Explore All Workflows
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default N8nWorkflowCollection;