import React from 'react';
import { Filter, SortAsc, SortDesc, TrendingUp } from 'lucide-react';

interface BlogFiltersProps {
  categories: string[];
  tags: string[];
  selectedCategory: string;
  selectedTags: string[];
  sortBy: 'date' | 'popularity' | 'relevance';
  onCategoryChange: (category: string) => void;
  onTagsChange: (tags: string[]) => void;
  onSortChange: (sort: 'date' | 'popularity' | 'relevance') => void;
  totalPosts: number;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  sortBy,
  onCategoryChange,
  onTagsChange,
  onSortChange,
  totalPosts
}) => {
  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange('all');
    onTagsChange([]);
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
          {(selectedCategory !== 'all' || selectedTags.length > 0) && (
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

      {/* Tags */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 10).map(tag => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-[#FF5630]/20 text-[#FF5630] border border-[#FF5630]'
                  : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#3A3A3A]'
              }`}
            >
              {tag}
            </button>
          ))}
          {tags.length > 10 && (
            <span className="text-sm text-[#AAAAAA] px-3 py-1">
              +{tags.length - 10} more
            </span>
          )}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3">Sort By</h4>
        <div className="flex gap-2">
          <button
            onClick={() => onSortChange('date')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'date'
                ? 'bg-[#FF5630] text-white'
                : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#3A3A3A]'
            }`}
          >
            <SortDesc className="w-4 h-4" />
            Latest
          </button>
          <button
            onClick={() => onSortChange('popularity')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'popularity'
                ? 'bg-[#FF5630] text-white'
                : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#3A3A3A]'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Popular
          </button>
          <button
            onClick={() => onSortChange('relevance')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'relevance'
                ? 'bg-[#FF5630] text-white'
                : 'bg-[#2A2A2A] text-[#AAAAAA] hover:bg-[#3A3A3A]'
            }`}
          >
            <SortAsc className="w-4 h-4" />
            Relevance
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategory !== 'all' || selectedTags.length > 0) && (
        <div className="mt-6 pt-6 border-t border-[#2A2A2A]">
          <h4 className="text-sm font-semibold text-white mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== 'all' && (
              <span className="flex items-center gap-2 bg-[#FF5630]/20 text-[#FF5630] px-3 py-1 rounded-full text-sm">
                Category: {selectedCategory}
                <button
                  onClick={() => onCategoryChange('all')}
                  className="text-[#FF5630] hover:text-[#FF8A50]"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTags.map(tag => (
              <span key={tag} className="flex items-center gap-2 bg-[#FF5630]/20 text-[#FF5630] px-3 py-1 rounded-full text-sm">
                {tag}
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="text-[#FF5630] hover:text-[#FF8A50]"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 