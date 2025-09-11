# Blog Publishing Guide - Mavericks Edge

## Overview

This guide provides a complete step-by-step process for publishing new blog posts on the Mavericks Edge website. This process assumes you will provide the content and featured image, and focuses on the technical implementation and SEO optimization steps.

## Prerequisites

- Access to the Mavericks Edge codebase
- Basic understanding of Markdown formatting
- Familiarity with SEO best practices
- Content and featured image ready for publication

## Step-by-Step Publishing Process

### 1. Create Markdown File

#### A. File Location
Create your markdown file in: `/blog-markdown/your-blog-post-slug.md`

#### B. YAML Front Matter Template
```yaml
---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
excerpt: "Compelling 1-2 sentence description that appears in search results and social shares. Include primary keyword naturally."
author: "Bezal Benny"
publishDate: "YYYY-MM-DD"
readTime: X
category: "Web Design" # or "SEO", "AI Services", "Marketing"
tags: ["primary keyword", "secondary keyword", "Edmonton", "relevant topics"]
featuredImage: "https://mavericksedge.ca/videos/your-image-name.png"
isPillar: true # Set to true for comprehensive, evergreen content
seoKeywords: [
  "primary keyword",
  "secondary keyword",
  "long-tail keyword",
  "Edmonton + keyword"
]
internalLinks: [
  "/web-design-services-edmonton",
  "/web-design-pricing-edmonton",
  "/contact"
]
externalLinks: [
  "https://authoritative-source.com",
  "https://another-authoritative-source.com"
]
socialShares: 0 # Set realistic initial number
views: 0 # Set realistic initial number
---
```

#### C. Content Integration
- **Content**: Paste your provided content below the YAML front matter
- **Featured Image**: Use the image URL you provided in the `featuredImage` field
- **Formatting**: Ensure proper Markdown formatting (headings, lists, links)
- **Internal Links**: Add links to relevant Mavericks Edge pages (services, pricing, contact)
- **External Links**: Include 3-8 high-authority external links to relevant concepts
- **Images**: Use descriptive alt text for all images
- **Call-to-Action**: Include relevant CTAs throughout the content

#### D. Humanized Writing Guidelines
When integrating content, ensure it follows these humanized writing principles:

**Avoid AI Writing Patterns:**
- Formulaic intros ("in today's digital age", "in an ever-changing world")
- Repetitive adjectives ("best," "leading," "top," "cutting-edge")
- Overly generic conclusions that just restate the intro
- Excessive filler phrases or robotic structure
- Use of em dashes (—) - use regular dashes (-) or commas instead
- Generic business speak without personality

**Use Local Context:**
- Mention Edmonton industries (oil & gas, agriculture, healthcare)
- Reference local pricing challenges and market realities
- Include small business realities specific to Alberta
- Use Edmonton neighborhoods and landmarks naturally
- Reference local economic conditions and business climate

**Writing Style:**
- Vary sentence length and rhythm for natural flow
- Use storytelling with concrete examples ("An Edmonton café owner might think...")
- Keep tone approachable, professional, and authoritative
- Write as if speaking to a colleague, not a corporate audience
- Use active voice and concrete language
- Include specific details and examples rather than vague statements

### 2. Add to Blog Data

#### A. Open `client/src/data/blogData.ts`
#### B. Add Your Post to the `blogData` Array
```typescript
{
  id: "your-blog-post-slug",
  title: "Your Blog Post Title",
  slug: "your-blog-post-slug",
  excerpt: "Your excerpt here...",
  content: `Your full content here...`,
  author: "Bezal Benny",
  publishDate: "YYYY-MM-DD",
  readTime: X,
  category: "Web Design",
  tags: ["tag1", "tag2", "tag3"],
  featuredImage: "https://mavericksedge.ca/videos/your-image-name.png",
  isPillar: true,
  seoKeywords: ["keyword1", "keyword2"],
  internalLinks: ["/web-design-services-edmonton"],
  externalLinks: ["https://example.com"],
  socialShares: 0,
  views: 0
}
```

#### C. Important Notes
- **Content**: Copy the full content from your markdown file
- **Consistency**: Ensure all metadata matches between markdown and blogData
- **Array Position**: Add new posts at the beginning of the array (most recent first)
- **Featured Image**: Use the URL path you provided for the featured image

### 3. Update Feeds and Sitemaps

Run these commands to update all distribution channels:

```bash
# Update RSS feed
npm run generate-rss

# Update blog sitemap
npm run generate-sitemap-blog

# Or run both at once
npm run publish-blog
```

### 4. Build and Deploy

#### A. Build the Site
```bash
npm run build
```

#### B. Deploy to Production
```bash
vercel --prod
```

## SEO Best Practices

### Keyword Optimization
- **Primary Keyword**: Use in title, first paragraph, and 2-3 times throughout content
- **Secondary Keywords**: Use naturally in headings and content
- **Keyword Density**: Keep under 2% to avoid over-optimization
- **Long-tail Keywords**: Include 2-3 long-tail variations

### Content Structure
- **Title**: Include primary keyword, keep under 60 characters
- **Meta Description**: 150-160 characters, include primary keyword
- **Headings**: Use H2/H3 structure, include keywords naturally
- **Internal Linking**: Link to relevant pages with descriptive anchor text
- **External Linking**: Link to authoritative sources for credibility

### Technical SEO
- **Featured Image**: Optimized for social sharing (1200x630px)
- **Alt Text**: Descriptive alt text for all images
- **URL Structure**: Clean, keyword-rich URLs
- **Schema Markup**: Automatically generated for blog posts

## Quality Checklist

Before publishing, ensure:

### Content Quality
- [ ] Content is provided and ready for integration
- [ ] Proper grammar and spelling checked
- [ ] Clear, engaging writing style
- [ ] Logical flow and structure
- [ ] Relevant to Edmonton businesses
- [ ] Avoids AI writing patterns (formulaic intros, repetitive adjectives, em dashes)
- [ ] Uses local Edmonton context and storytelling
- [ ] Varies sentence length and rhythm naturally
- [ ] Tone is approachable yet professional

### SEO Optimization
- [ ] Primary keyword in title and first paragraph
- [ ] Meta description under 160 characters
- [ ] Proper heading structure (H2/H3)
- [ ] Internal links to relevant pages
- [ ] External links to authoritative sources
- [ ] Featured image optimized and properly named

### Technical Requirements
- [ ] Markdown file created with proper front matter
- [ ] Provided content integrated into markdown file
- [ ] Content added to blogData.ts
- [ ] Featured image URL properly set
- [ ] All metadata consistent between files
- [ ] RSS feed regenerated
- [ ] Blog sitemap updated
- [ ] Site built successfully
- [ ] Deployed to production

### Social Sharing
- [ ] Featured image looks good on social platforms
- [ ] Title is engaging for social shares
- [ ] Excerpt works well as social description

## Common Issues and Solutions

### Issue: RSS Feed Not Updating
**Solution**: Run `npm run generate-rss` and check console for errors

### Issue: Featured Image Not Displaying
**Solution**: Verify the provided image URL is correct and accessible

### Issue: Internal Links Not Working
**Solution**: Ensure links use correct paths (e.g., `/web-design-services-edmonton`)

### Issue: Build Errors
**Solution**: Check for syntax errors in blogData.ts, especially missing commas or quotes

### Issue: SEO Keywords Not Appearing
**Solution**: Verify keywords are included in the seoKeywords array and used naturally in content

## File Structure Reference

```
/blog-markdown/
  ├── your-blog-post-slug.md
  └── README.md

/client/src/data/
  └── blogData.ts

/public/
  ├── rss.xml
  ├── sitemap-blog.xml
  └── sitemap.xml

/scripts/
  ├── generate-rss.js
  └── generate-sitemap-blog.js
```

## Available Commands

```bash
# Generate RSS feed only
npm run generate-rss

# Generate blog sitemap only
npm run generate-sitemap-blog

# Generate both feeds and build site
npm run publish-blog

# Build site for production
npm run build

# Deploy to Vercel production
vercel --prod
```

## Content Guidelines

### Heading Structure
- **No H1 headings in content**: The blog template already renders the title as an H1, so content should start with H2 (##) headings to avoid duplicate H1s
- Use H2 (##) for main sections
- Use H3 (###) for subsections
- Use H4 (####) for sub-subsections if needed

### Writing Style
- **Tone**: Professional but approachable, conversational
- **Voice**: Write as if speaking to a colleague, authoritative but not corporate
- **Length**: Comprehensive posts (1,000-2,000 words)
- **Structure**: Clear headings, bullet points, numbered lists
- **Rhythm**: Vary sentence length and structure for natural flow
- **Storytelling**: Use concrete examples and local scenarios

### Edmonton Context
- Include local references (neighborhoods, landmarks, businesses)
- Use Canadian spelling and terminology
- Reference local market conditions and challenges
- Include Edmonton-specific examples and case studies
- Mention local industries (oil & gas, agriculture, healthcare)
- Reference Alberta small business realities and pricing challenges

### Link Strategy
- **Internal Links**: 3-5 links to relevant Mavericks Edge pages
- **External Links**: 3-8 links to authoritative sources
- **Anchor Text**: Descriptive, keyword-rich anchor text
- **Link Placement**: Natural placement within content flow

## Maintenance

### Regular Tasks
- Monitor blog post performance in analytics
- Update internal links when pages change
- Refresh content periodically for evergreen posts
- Check external links for broken URLs

### Content Updates
- Update statistics and data annually
- Refresh examples and case studies
- Update pricing information when it changes
- Add new internal links as new pages are created

## Support

If you encounter issues:
1. Check the console output when running generation scripts
2. Verify all required fields are present in blogData.ts
3. Ensure markdown front matter matches blogData structure
4. Check file permissions for public directory
5. Validate RSS feed using online validators

## Success Metrics

Track these metrics to measure blog success:
- **Organic Traffic**: Google Analytics organic search traffic
- **Engagement**: Time on page, bounce rate, scroll depth
- **Conversions**: Contact form submissions, service page visits
- **Social Shares**: Shares across social platforms
- **Backlinks**: External sites linking to your content

---

**Last Updated**: September 10, 2025  
**Version**: 1.0

For questions or support, contact the development team or refer to the existing documentation in `RSS_FEED_SETUP.md` and `DEPLOYMENT.md`.
