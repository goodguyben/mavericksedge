# Mavericks Edge Web Application

## Overview

This is a full-stack web application for Mavericks Edge, a digital solutions agency specializing in web development, marketing, and AI integration services for SMBs and nonprofits. The application features a React frontend with a Node.js backend, utilizing modern web technologies and best practices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth page transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Email Service**: Resend API for transactional emails with fallback to Nodemailer
- **Validation**: Zod for schema validation and type safety

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Contact Submissions Table**: Stores contact form submissions with timestamps
- **Schema Management**: Drizzle Kit for migrations and schema synchronization

## Key Components

### Frontend Components
1. **Layout System**: Responsive layout with header, footer, and page transitions
2. **Service Sections**: Modular sections for different service offerings
3. **Contact Forms**: Form handling with validation and submission to backend
4. **SEO Components**: Meta tags, structured data, and local SEO optimization
5. **Performance Optimizations**: Lazy loading, image optimization, and code splitting

### Backend Services
1. **Contact API**: Handles form submissions and email notifications
2. **Static File Serving**: Serves optimized assets and media files
3. **SEO Routes**: Robots.txt, sitemap.xml for search engine optimization
4. **Error Handling**: Centralized error handling and logging

### Third-Party Integrations
1. **Email Services**: Resend for production emails, Nodemailer for development
2. **Database**: Neon serverless PostgreSQL for production
3. **Media Processing**: FFmpeg for video/audio optimization
4. **Analytics**: Structured data and SEO tracking

## Data Flow

1. **User Interaction**: Client-side routing and form interactions
2. **API Requests**: React Query manages API calls to Express backend
3. **Data Validation**: Zod schemas validate incoming data
4. **Database Operations**: Drizzle ORM handles database queries
5. **Email Notifications**: Automated emails sent via Resend/Nodemailer
6. **Response Handling**: Standardized API responses with error handling

## External Dependencies

### Production Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **Email**: @sendgrid/mail and Resend for email services
- **UI Libraries**: Radix UI components for accessible interfaces
- **Validation**: Zod for runtime type checking
- **Animations**: Framer Motion for smooth transitions

### Development Dependencies
- **Build Tools**: Vite, TypeScript, ESBuild for development and production builds
- **Styling**: Tailwind CSS with PostCSS for styling
- **Code Quality**: TypeScript for type safety

## Deployment Strategy

### Development Environment
- **Run Command**: `npm run dev` starts both frontend (port 5173) and backend (port 5000)
- **Database**: Uses environment variables for database connection
- **Hot Reload**: Vite provides instant feedback during development

### Production Deployment
- **Build Process**: `npm run build` creates optimized production bundle
- **Server**: `npm run start` runs the production server
- **Database**: Requires DATABASE_URL environment variable
- **Email**: Requires RESEND_API_KEY for email functionality
- **Autoscaling**: Configured for automatic scaling based on traffic

### Environment Configuration
- **Development**: Uses local development server with hot reload
- **Production**: Optimized build with environment-specific configurations
- **Database**: Drizzle migrations handle schema updates

## Changelog

- June 24, 2025. Initial setup
- July 21, 2025. Performance Optimizations:
  - Reduced video loading from 36 concurrent to 2 concurrent videos for better LCP
  - Implemented lazy loading for ShowcaseGallery videos with progressive loading
  - Optimized CardSwap component with intersection observer to animate only when in view
  - Changed from elastic to power2 easing in CardSwap for smoother performance
  - Added preconnect hints for video CDN (mavericksedge.ca)
  - Added WebVitalsMonitor to track FCP, LCP, CLS, and Speed Index metrics
  - Reduced initial video load from 36 to 12 videos, rest lazy-loaded on scroll
- July 22, 2025. WebM Video Optimization:
  - Replaced all MP4 videos with WebM format for optimal compression and performance
  - Updated video components to use WebM as primary format with MP4 fallback
  - Added proper video/webm codecs specification (vp9,opus) 
  - Updated preload hints in HTML to prioritize WebM format
  - Enhanced OptimizedVideo component with multi-source support and format detection
  - Updated logo animation video to use WebM with MP4 fallback
  - Successfully implemented 38 WebM videos with console logging confirming format selection
  - Removed debug overlays and restored clean video presentation
  - Updated CyclingVideoPlayer component to prioritize WebM format with MP4 fallback for cascade section videos

## User Preferences

Preferred communication style: Simple, everyday language.