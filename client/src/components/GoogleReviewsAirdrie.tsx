import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import StructuredData from '@/components/StructuredData';
import { Star } from 'lucide-react';

type Review = {
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  text: string;
  time: number;
  relativeTimeDescription?: string;
  authorUrl?: string;
};

type ReviewsResponse = {
  success: boolean;
  name?: string;
  url?: string;
  rating?: number;
  userRatingsTotal?: number;
  reviews: Review[];
};

interface GoogleReviewsProps {
  limit?: number;
}

export default function GoogleReviewsAirdrie({ limit = 12 }: GoogleReviewsProps) {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef<boolean>(false);
  const positionRef = useRef<number>(0);
  const halfWidthRef = useRef<number>(0);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchReviews() {
      try {
        // Use relative path; dev server proxies to Express, prod to Vercel function
        const res = await fetch('/api/google-reviews', { signal: controller.signal });
        const json = await res.json();
        if (!res.ok || !json.success) {
          throw new Error(json?.message || 'Failed to fetch reviews');
        }
        if (isMounted) setData(json);
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Error loading reviews');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchReviews();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // Only include reviews that have non-empty text
  const textReviews = useMemo(() => {
    const all = data?.reviews || [];
    // Filter to only reviews with text, then de-duplicate by authorUrl+time+text
    const filtered = all.filter((r) => (r.text || '').trim().length > 0);
    const seen = new Set<string>();
    const unique: Review[] = [];
    for (const r of filtered) {
      const key = `${r.authorUrl || r.authorName}-${r.time}-${(r.text || '').trim()}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(r);
      }
    }
    return unique;
  }, [data]);

  // Respect optional limit, otherwise show all text reviews
  const baseReviews = useMemo(() => {
    if (!textReviews.length) return [] as Review[];
    return typeof limit === 'number' ? textReviews.slice(0, limit) : textReviews;
  }, [textReviews, limit]);

  // Duplicate reviews to create a seamless loop effect
  // Build loop track by concatenating reviews twice for a seamless loop
  const displayReviews = useMemo(() => {
    return baseReviews.length > 0
      ? baseReviews.concat(baseReviews).map((r, i) => ({ review: r, cycle: Math.floor(i / baseReviews.length), idx: i % baseReviews.length }))
      : [] as Array<{ review: Review; cycle: number; idx: number }>;
  }, [baseReviews]);

  // Autoplay continuous loop
  useEffect(() => {
    const clip = containerRef.current;
    const track = trackRef.current;
    if (!clip || !track || !displayReviews.length) return;

    // Measure half track width (one full set of cards)
    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    let raf = 0;
    const speedPxPerFrame = 0.6;
    const step = () => {
      if (!isPausedRef.current) {
        positionRef.current += speedPxPerFrame;
        if (positionRef.current >= halfWidthRef.current) {
          positionRef.current = 0;
        }
        track.style.transform = `translateX(-${positionRef.current}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onEnter = () => { isPausedRef.current = true; };
    const onLeave = () => { isPausedRef.current = false; };
    clip.addEventListener('mouseenter', onEnter);
    clip.addEventListener('mouseleave', onLeave);
    clip.addEventListener('touchstart', onEnter, { passive: true } as any);
    clip.addEventListener('touchend', onLeave, { passive: true } as any);

    const onResize = () => {
      // Re-measure on resize and clamp position
      measure();
      positionRef.current = positionRef.current % (halfWidthRef.current || 1);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      clip.removeEventListener('mouseenter', onEnter);
      clip.removeEventListener('mouseleave', onLeave);
      clip.removeEventListener('touchstart', onEnter as any);
      clip.removeEventListener('touchend', onLeave as any);
      window.removeEventListener('resize', onResize);
    };
  }, [displayReviews.length]);

  const reviewStructuredData = useMemo(() => {
    if (!data?.name || !data?.rating || !data?.userRatingsTotal) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: data.name,
      url: data.url || 'https://mavericksedge.ca',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.rating,
        reviewCount: data.userRatingsTotal,
      },
      review: (data.reviews || [])
        .filter((r) => (r.text || '').trim().length > 0)
        .map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.authorName },
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
        reviewBody: r.text,
        datePublished: new Date(r.time * 1000).toISOString(),
      })),
    };
  }, [data]);

  return (
    <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
      {reviewStructuredData && <StructuredData data={reviewStructuredData} />}
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">What Airdrie Businesses Say</h2>
          <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
            Real Google reviews from our clients in Airdrie.
          </p>
        </motion.div>

        {isLoading && (
          <div className="text-center text-[#AAAAAA]">Loading reviews…</div>
        )}
        {error && (
          <div className="text-center text-red-400">{error}</div>
        )}
        {!isLoading && !error && (
          <div className="relative">
            {/* Clipping container - hides scrollbar */}
            <div ref={containerRef} className="overflow-hidden pb-2" role="region" aria-label="Google reviews carousel">
              {/* Animated track */}
              <div ref={trackRef} className="flex gap-6 will-change-transform">
                {displayReviews.map(({ review, cycle, idx }, index) => (
                  <motion.div
                    key={`review-${cycle}-${idx}-${review.time}-${review.authorName}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.02 }}
                    className="w-[320px] md:w-[420px] flex-shrink-0 bg-[#121212] rounded-2xl p-8 border border-gray-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-[#CCCCCC]">{Number(review.rating).toFixed(1)}</span>
                    </div>
                    {(review.text || '').trim().length > 0 && (
                      <blockquote className="text-lg mb-6 leading-relaxed">“{review.text}”</blockquote>
                    )}
                    <div className="flex items-center gap-3">
                      {review.profilePhotoUrl ? (
                        <img
                          src={review.profilePhotoUrl}
                          alt={review.authorName}
                          className="w-8 h-8 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#333] to-[#222] flex items-center justify-center text-xs text-[#bbb]">
                          {review.authorName?.[0] ?? '·'}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold">{review.authorName}</div>
                        <div className="text-xs text-[#888]">{review.relativeTimeDescription}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Edge fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#1E1E1E] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#1E1E1E] to-transparent" />
          </div>
        )}

        {/* Google Reviews badge + link side by side */}
        {data && (
          <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
            {/* Google Reviews Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-700/50 bg-gradient-to-r from-[#1a1a1a] to-[#151515] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-600/70">
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true" className="flex-shrink-0">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303C33.799,32.657,29.29,36,24,36c-6.627,0-12-5.373-12-12
                s5.373-12,12-12c3.059,0,5.842,1.156,7.938,3.046l5.657-5.657C33.536,6.053,28.982,4,24,4C12.955,4,4,12.955,4,24
                s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,12,24,12c3.059,0,5.842,1.156,7.938,3.046l5.657-5.657
                C33.536,6.053,28.982,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.206,0,9.899-1.994,13.453-5.256l-6.215-5.252C29.211,35.899,26.715,37,24,37
                c-5.266,0-9.754-3.317-11.387-7.946l-6.519,5.026C9.389,39.556,16.105,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-1.734,4.657-6.14,8-11.303,8c-2.855,0-5.477-0.955-7.562-2.558
                l-6.519,5.026C12.053,41.474,17.671,44,24,44c9.389,0,17.318-6.449,19.611-15.083C43.862,21.35,44,22.659,44,24
                C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-white">Google Reviews</span>
                {typeof data.rating === 'number' && (
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < Math.floor(data.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-[#CCCCCC] font-medium">{data.rating.toFixed(1)} · {data.userRatingsTotal} reviews</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* View All Reviews Link */}
            {data.url && (
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-maverick-orange/10 to-maverick-orange/5 border border-maverick-orange/20 text-maverick-orange hover:from-maverick-orange/20 hover:to-maverick-orange/10 hover:border-maverick-orange/30 transition-all duration-300 group"
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
                <span className="font-medium">View all reviews on Google</span>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}


