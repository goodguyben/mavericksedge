import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, BookOpen, Share2, Eye, Heart } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const handleShare = async (platform: string) => {
    const url = `https://mavericksedge.ca/blog/${post.slug}`;
    const text = post.title;
    
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
        // You could add a toast notification here
        break;
    }
  };

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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#2A2A2A]"
    >
      {/* Featured Image */}
      <div className="relative">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {post.isPillar && (
          <div className="absolute top-4 left-4">
            <span className="bg-maverick-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <div className="flex gap-2">
            <button
              onClick={() => handleShare('twitter')}
              className="bg-black/90 backdrop-blur-sm p-2 rounded-full hover:bg-black transition-colors"
              aria-label="Share on Twitter"
            >
              <Share2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-[#AAAAAA] mb-4">
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
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 font-heading">
          <a 
            href={`/blog/${post.slug}`}
            className="hover:text-maverick-orange transition-colors"
          >
            {post.title}
          </a>
        </h2>

        {/* Excerpt */}
        <p className="text-[#AAAAAA] mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="bg-[#2A2A2A] text-[#AAAAAA] px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-[#AAAAAA] text-sm">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-between text-sm text-[#AAAAAA]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {post.socialShares.toLocaleString()}
            </div>
          </div>
          
          {/* Read More Link */}
          <a 
            href={`/blog/${post.slug}`}
            className="text-[#FF5630] hover:text-[#FF8A50] font-semibold text-sm"
          >
            Read More →
          </a>
        </div>
      </div>
    </motion.article>
  );
}; 