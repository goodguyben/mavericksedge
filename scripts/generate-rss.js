import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to format date for RSS
function formatDateForRSS(dateString) {
  const date = new Date(dateString);
  return date.toUTCString();
}

// Function to generate RSS content
function generateRSSContent(blogData) {
  const currentDate = new Date().toUTCString();
  
  // Use the consistent domain for RSS generation (mavericksedge.ca)
  const currentDomain = 'https://mavericksedge.ca';
  
  let rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Beyond the Edge | Mavericks Edge Digital Marketing Blog</title>
    <description>Expert insights on web design Edmonton, SEO services Edmonton, AI automation, and digital marketing. Stay ahead with our latest industry trends and actionable tips.</description>
    <link>${currentDomain}/blog</link>
    <atom:link href="${currentDomain}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-ca</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${currentDomain}/images/logo-transparent-thumb4x.png</url>
      <title>Beyond the Edge | Mavericks Edge Digital Marketing Blog</title>
      <link>${currentDomain}/blog</link>
    </image>
    
    <!-- Blog Posts -->`;

  // Add each blog post
  blogData.forEach(post => {
    const pubDate = formatDateForRSS(post.publishDate);
    const content = post.excerpt.replace(/"/g, '&quot;').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    rssContent += `
    <item>
      <title>${post.title.replace(/"/g, '&quot;').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>
      <description>${content}</description>
      <link>${currentDomain}/blog/${post.slug}</link>
      <guid>${currentDomain}/blog/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${post.category}</category>
      <content:encoded><![CDATA[<p>${content}</p>]]></content:encoded>`;
    
    // Add featured image with Media RSS namespace if available
    if (post.featuredImage && post.featuredImage.trim() !== '') {
      const imageUrl = post.featuredImage.startsWith('http') ? post.featuredImage : `https://mavericksedge.ca${post.featuredImage}`;
      const imageTitle = post.title.replace(/"/g, '&quot;').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
      rssContent += `
      <media:content url="${imageUrl}" medium="image" type="image/jpeg">
        <media:title>${imageTitle}</media:title>
        <media:description>${content}</media:description>
        <media:thumbnail url="${imageUrl}" width="300" height="200" />
      </media:content>`;
    }
    
    rssContent += `
    </item>`;
  });

  rssContent += `
  </channel>
</rss>`;

  return rssContent;
}

// Function to extract blog data from the TypeScript file
function extractBlogData() {
  try {
    const blogDataPath = path.join(__dirname, '../client/src/data/blogData.ts');
    const blogDataContent = fs.readFileSync(blogDataPath, 'utf8');
    
    // Simple regex to extract the blogData array
    // This is a basic approach - in production you might want to use a proper TypeScript parser
    const blogDataMatch = blogDataContent.match(/export const blogData: BlogPost\[\] = (\[[\s\S]*?\]);/);
    
    if (blogDataMatch) {
      // Convert the TypeScript array to JavaScript
      const blogDataString = blogDataMatch[1];
      
      // Remove TypeScript type annotations and convert to valid JavaScript
      const cleanBlogDataString = blogDataString
        .replace(/:\s*string/g, '')
        .replace(/:\s*number/g, '')
        .replace(/:\s*boolean/g, '')
        .replace(/:\s*string\[\]/g, '')
        .replace(/:\s*number\[\]/g, '')
        .replace(/:\s*boolean\[\]/g, '');
      
      // Evaluate the string to get the actual data
      // Note: This approach assumes the data is safe to evaluate
      const blogData = eval(cleanBlogDataString);
      return blogData;
    }
    
    throw new Error('Could not extract blogData from TypeScript file');
  } catch (error) {
    console.error('Error extracting blog data:', error);
    return [];
  }
}

// Main function
function main() {
  console.log('Generating RSS feed...');
  
  const blogData = extractBlogData();
  
  if (blogData.length === 0) {
    console.error('No blog data found. RSS generation failed.');
    process.exit(1);
  }
  
  console.log(`Found ${blogData.length} blog posts`);
  
  const rssContent = generateRSSContent(blogData);
  const outputPath = path.join(__dirname, '../public/rss.xml');
  
  try {
    fs.writeFileSync(outputPath, rssContent, 'utf8');
    console.log(`RSS feed generated successfully at ${outputPath}`);
  } catch (error) {
    console.error('Error writing RSS file:', error);
    process.exit(1);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateRSSContent, extractBlogData };
