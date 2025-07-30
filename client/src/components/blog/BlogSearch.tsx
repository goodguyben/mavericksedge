import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export const BlogSearch: React.FC<BlogSearchProps> = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search articles..." 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className={`relative flex items-center bg-[#1A1A1A] rounded-full shadow-lg border-2 transition-all duration-200 ${
        isFocused ? 'border-[#FF5630] shadow-xl' : 'border-[#2A2A2A]'
      }`}>
        <div className="absolute left-4 text-[#AAAAAA]">
          <Search className="w-5 h-5" />
        </div>
        
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 text-lg text-white placeholder-[#AAAAAA] focus:outline-none bg-transparent"
        />
        
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-4 text-[#AAAAAA] hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Search suggestions */}
      {searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A] rounded-lg shadow-lg border border-[#2A2A2A] z-10">
          <div className="p-4">
            <p className="text-sm text-[#AAAAAA] mb-2">
              Popular searches for "{searchTerm}":
            </p>
            <div className="space-y-2">
              {[
                `${searchTerm} Edmonton`,
                `${searchTerm} automation`,
                `${searchTerm} 2025`,
                `${searchTerm} tips`
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onSearchChange(suggestion)}
                  className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-[#2A2A2A] rounded transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 