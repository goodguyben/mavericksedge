
// Image optimization utilities
export const getOptimizedImageUrl = (src: string, width?: number, height?: number, format?: 'webp' | 'avif' | 'jpg') => {
  // For external URLs (Unsplash), add optimization parameters
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    if (format) url.searchParams.set('fm', format);
    url.searchParams.set('q', '80'); // Quality 80%
    url.searchParams.set('auto', 'format'); // Auto format
    return url.toString();
  }
  
  return src;
};

export const createPictureElement = (src: string, alt: string, width?: number, height?: number) => {
  const webpSrc = getOptimizedImageUrl(src, width, height, 'webp');
  const avifSrc = getOptimizedImageUrl(src, width, height, 'avif');
  const fallbackSrc = getOptimizedImageUrl(src, width, height, 'jpg');
  
  return {
    webpSrc,
    avifSrc,
    fallbackSrc,
    alt
  };
};

// Lazy loading with intersection observer
export const lazyLoadImage = (img: HTMLImageElement) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          observer.unobserve(image);
        }
      }
    });
  });
  
  imageObserver.observe(img);
};
