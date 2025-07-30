import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  User, 
  BookOpen, 
  Share2, 
  Eye, 
  Heart, 
  ArrowLeft,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon
} from 'lucide-react';
import { blogData } from '@/data/blogData';
import { BlogCard } from '@/components/blog/BlogCard';

const BlogPost: React.FC = () => {
  const [, setLocation] = useLocation();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.split('/').pop();
    const foundPost = blogData.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts
      const related = blogData
        .filter(p => p.id !== foundPost.id)
        .filter(p => 
          p.category === foundPost.category ||
          p.tags.some(tag => foundPost.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
  }, []);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = post?.title || '';
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-[#AAAAAA] mb-6">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => setLocation('/blog')}
            className="bg-[#FF5630] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF8A50] transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Beyond the Edge Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.seoKeywords.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://mavericksedge.ca/blog/${post.slug}`} />
        <meta property="og:image" content={post.featuredImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content="Bezal Benny" />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag: string, index: number) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://mavericksedge.ca/blog/${post.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-[#121212]">
        {/* Back Button */}
        <div className="pt-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setLocation('/blog')}
              className="flex items-center gap-2 text-[#AAAAAA] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Meta Information */}
              <div className="flex items-center gap-6 text-sm text-[#AAAAAA] mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishDate)}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Bezal Benny
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {post.readTime} min read
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {post.views.toLocaleString()} views
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-[#AAAAAA] mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="bg-[#2A2A2A] text-[#AAAAAA] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-[#1A1A1A] rounded-lg shadow-sm border border-[#2A2A2A]">
                <span className="text-sm font-semibold text-white">Share this article:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className={`p-2 transition-colors ${
                      copied ? 'text-[#10B981]' : 'text-[#AAAAAA] hover:text-white'
                    }`}
                    aria-label="Copy link"
                  >
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
                {copied && (
                  <span className="text-sm text-[#10B981]">Link copied!</span>
                )}
              </div>
            </motion.div>
          </div>
        </article>

        {/* Article Content */}
        <article className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none bg-[#1A1A1A] rounded-xl shadow-lg p-8 md:p-12 border border-[#2A2A2A] prose-headings:text-white prose-p:text-[#AAAAAA] prose-strong:text-[#FF5630] prose-a:text-[#FF5630] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#FF5630] prose-blockquote:bg-[#2A2A2A] prose-blockquote:text-[#AAAAAA] prose-code:bg-[#2A2A2A] prose-code:text-[#FF5630] prose-pre:bg-[#2A2A2A] prose-pre:text-[#AAAAAA]"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-heading">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <BlogCard 
                      key={relatedPost.id} 
                      post={relatedPost}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-[#AAAAAA] mb-8">
                Let our team help you implement the strategies discussed in this article.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation('/contact')}
                  className="bg-[#FF5630] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF8A50] transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => setLocation('/services')}
                  className="border-2 border-[#FF5630] text-[#FF5630] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF5630] hover:text-white transition-colors"
                >
                  View Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost; 