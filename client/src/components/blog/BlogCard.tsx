import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, BookOpen, Eye } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const isTopCropImage = post.slug === 'most-affordable-website-design-companies-edmonton-2025';
  const isBestCompaniesImage = post.slug === 'best-website-design-companies-edmonton-2025';
  
  let imageObjectPositionClass = 'object-center';
  if (isTopCropImage) {
    imageObjectPositionClass = 'object-top';
  } else if (isBestCompaniesImage) {
    imageObjectPositionClass = 'object-bottom';
  }

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
          className={`w-full h-40 sm:h-48 object-cover ${imageObjectPositionClass}`}
          loading="lazy"
        />
        {post.isPillar && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="bg-maverick-orange text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#AAAAAA] mb-3 sm:mb-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{formatDate(post.publishDate)}</span>
            <span className="sm:hidden">{formatDate(post.publishDate).split(' ').slice(0, 2).join(' ')}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            Bezal Benny
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            {post.readTime} min read
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 font-heading">
          <a 
            href={`/blog/${post.slug}`}
            className="hover:text-maverick-orange transition-colors"
          >
            {post.title}
          </a>
        </h2>

        {/* Excerpt */}
        <p className="text-[#AAAAAA] mb-4 line-clamp-3 text-sm sm:text-base">
          {post.excerpt}
        </p>

        {/* Engagement Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 text-xs sm:text-sm text-[#AAAAAA]">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{post.views.toLocaleString()}</span>
              <span className="sm:hidden">{post.views >= 1000 ? `${(post.views / 1000).toFixed(1)}k` : post.views}</span>
            </div>
          </div>
          
          {/* Read More Link */}
          <a 
            href={`/blog/${post.slug}`}
            className="text-[#FF5630] hover:text-[#FF8A50] font-semibold text-sm self-end sm:self-auto"
          >
            Read More →
          </a>
        </div>
      </div>
    </motion.article>
  );
}; 