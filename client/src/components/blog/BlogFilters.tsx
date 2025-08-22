import React from 'react';
import { Filter, TrendingUp, Calendar } from 'lucide-react';

interface BlogFiltersProps {
  categories: string[];
  selectedCategory: string;
  sortBy: 'date' | 'popularity';
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: 'date' | 'popularity') => void;
  totalPosts: number;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  selectedCategory,
  sortBy,
  onCategoryChange,
  onSortChange,
  totalPosts
}) => {
  const clearAllFilters = () => {
    onCategoryChange('all');
    onSortChange('date');
  };

  return (
    <div className="bg-[#1A1A1A] rounded-xl shadow-lg p-6 border border-[#2A2A2A]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-[#AAAAAA]" />
          <h3 className="text-lg font-semibold text-white">Filters</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#AAAAAA]">
            {totalPosts} articles found
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-[#FF5630] hover:text-[#FF8A50] font-medium"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#FF5630] text-white'
                  : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#3A3A3A]'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3">Sort By</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSortChange('date')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              sortBy === 'date'
                ? 'bg-[#FF5630] text-white'
                : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#3A3A3A]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Date
          </button>
          <button
            onClick={() => onSortChange('popularity')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              sortBy === 'popularity'
                ? 'bg-[#FF5630] text-white'
                : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#3A3A3A]'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Popularity
          </button>
        </div>
      </div>
    </div>
  );
}; 