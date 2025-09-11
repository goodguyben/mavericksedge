import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Share2, Calendar, User, Tag, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { blogData } from '@/data/blogData';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogFilters } from '@/components/blog/BlogFilters';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { BlogSchema } from '@/components/blog/BlogSchema';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  category: string;
  featuredImage: string;
  isPillar: boolean;
  seoKeywords: string[];
  internalLinks: string[];
  externalLinks: string[];
  socialShares: number;
  views: number;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'popularity'>('date');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(blogData.map(post => post.category))];
    return ['all', ...cats];
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = blogData.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesCategory;
    });

    // Sort posts
    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => (b.views + b.socialShares) - (a.views + a.socialShares));
        break;
      case 'date':
      default:
        filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Featured post (pillar post)
  const featuredPost = blogData.find(post => post.isPillar);

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Beyond the Edge | Digital Marketing & Web Design Blog | Edmonton SEO Tips & Trends</title>
        <meta name="description" content="Beyond the Edge exists to bridge the gap between complex digital trends and real business growth. We curate the most effective web strategies, SEO innovations, and AI applications, then present them as clear, implementable tactics for solopreneurs and small business owners." />
        <meta name="keywords" content="web design edmonton, website design edmonton, SEO services edmonton, AI automation services, digital marketing edmonton, edmonton web design, edmonton SEO" />
        <meta property="og:title" content="Beyond the Edge | Digital Marketing & Web Design Blog | Edmonton SEO Tips & Trends" />
        <meta property="og:description" content="Beyond the Edge exists to bridge the gap between complex digital trends and real business growth. We curate the most effective web strategies, SEO innovations, and AI applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.ca/blog" />
        <meta property="og:image" content="https://mavericksedge.ca/images/logo-transparent-thumb4x.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beyond the Edge | Digital Marketing & Web Design Blog | Edmonton SEO Tips & Trends" />
        <meta name="twitter:description" content="Beyond the Edge exists to bridge the gap between complex digital trends and real business growth." />
        <link rel="canonical" href="https://mavericksedge.ca/blog" />
      </Helmet>

      <BlogSchema />

      <div className="min-h-screen bg-[#121212]">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
                Beyond the Edge
                <span className="block text-maverick-orange">Insights & Trends</span>
              </h1>
              <p className="text-xl text-[#AAAAAA] max-w-4xl mx-auto mb-8">
                Beyond the Edge exists to bridge the gap between complex digital trends and real business growth. We curate the most effective web strategies, SEO innovations, and AI applications, then present them as clear, implementable tactics for solopreneurs and small business owners. Your time is valuable, so we focus on delivering insights that create immediate impact and long-term success.
              </p>
              <div className="flex items-center justify-center">
                <a 
                  href="/rss.xml" 
                  className="flex items-center gap-2 text-maverick-orange hover:text-white transition-colors px-4 py-2 rounded-lg border border-maverick-orange hover:border-white"
                  title="Subscribe to RSS feed"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"/>
                    <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1z"/>
                    <path d="M3 15a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  Subscribe to RSS Feed
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1A1A] rounded-2xl shadow-xl overflow-hidden border border-[#2A2A2A]"
              >
                <div className="relative">
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-96 object-cover"
                    style={{ objectPosition: 'center 70%' }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-maverick-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-[#AAAAAA] mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.publishDate)}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Bezal Benny
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {featuredPost.readTime} min read
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-[#AAAAAA] mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href={`/blog/${featuredPost.slug}`}
                      className="maverick-button maverick-button-primary"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filters and Sort */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <BlogFilters
              categories={categories}
              selectedCategory={selectedCategory}
              sortBy={sortBy}
              onCategoryChange={setSelectedCategory}
              onSortChange={setSortBy}
              totalPosts={filteredPosts.length}
            />
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {currentPosts.length > 0 ? (
              <motion.div 
                className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {currentPosts.map((post, index) => (
                  <BlogCard 
                    key={post.id} 
                    post={post}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-[#AAAAAA] mb-4">
                  <BookOpen className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No posts found
                </h3>
                <p className="text-[#AAAAAA]">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
        )}


      </div>
    </>
  );
};

export default Blog; 