# Mavericks Edge - Web Development & Digital Marketing Platform

## Overview

Mavericks Edge is a full-stack web application for a digital marketing agency specializing in web development, marketing services, and AI integration for small and medium businesses (SMBs) and nonprofits. The platform features a modern React frontend with a Node.js/Express backend, PostgreSQL database, and comprehensive business service offerings.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion for smooth transitions
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Resend API with Nodemailer fallback
- **File Processing**: FFmpeg integration for media optimization
- **Development**: Hot reload with tsx

### Key Design Decisions
1. **Monorepo Structure**: Client, server, and shared code in single repository for easier development
2. **TypeScript Throughout**: Full type safety across frontend, backend, and shared schemas
3. **Performance-First**: Lazy loading, image optimization, and code splitting implemented
4. **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap generation
5. **Responsive Design**: Mobile-first approach with custom breakpoints

## Key Components

### Database Schema
- **Users**: Authentication and user management
- **Contact Submissions**: Lead capture and management
- Defined in `shared/schema.ts` with Zod validation

### API Endpoints
- **POST /api/contact**: Contact form submissions with email notifications
- **GET /api/check-video**: Media file verification
- Static file serving for robots.txt, sitemap.xml, favicon

### UI Component System
- Custom button components with multiple variants
- Reusable card components with hover effects
- Pricing cards with feature comparisons
- Contact forms with validation
- Mobile-responsive navigation with dropdown menus

### Page Structure
- **Home**: Hero, services overview, process, testimonials, contact
- **Services**: Web development, marketing, AI integration details
- **Pricing**: Tiered pricing for each service category
- **About**: Team information and company mission
- **Contact**: Contact form and business information
- **Legal**: Privacy policy, terms, accessibility, compliance pages

## Data Flow

### Contact Form Processing
1. Client submits form with Zod validation
2. Backend validates data against schema
3. Stores submission in PostgreSQL database
4. Sends notification email via Resend API
5. Returns success/error response to client

### Media Handling
1. Static files served from `/public` directory
2. Video files optimized with FFmpeg
3. Image optimization with WebP/AVIF support
4. Lazy loading implemented for performance

### SEO Data Flow
1. Structured data generated for each page type
2. Dynamic meta tags based on page content
3. Sitemap automatically includes all routes
4. Local SEO data for Edmonton market

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection (can be replaced with standard pg)
- **drizzle-orm**: Database ORM and migrations
- **@sendgrid/mail**: Email service integration
- **@radix-ui/***: UI component primitives
- **framer-motion**: Animation library
- **@tanstack/react-query**: Server state management

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Production server bundling
- **vite**: Frontend build tool and dev server
- **tailwindcss**: Utility-first CSS framework

### Media Processing
- **@ffmpeg-installer/ffmpeg**: Video processing capabilities
- **@vidstack/react**: Video player components

## Deployment Strategy

### Production Build
1. Frontend: `vite build` creates optimized static assets
2. Backend: `esbuild` bundles server code for production
3. Database: Drizzle migrations applied via `db:push`

### Environment Configuration
- **Development**: Uses `.env.development` with local database
- **Production**: Uses `.env.production` with environment variables
- **Database**: Requires `DATABASE_URL` environment variable

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Ports**: 5000 (backend), 5173 (frontend dev)
- **Deployment**: Autoscale with build and run commands configured
- **Development**: Parallel workflows for full-stack development

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 24, 2025. Initial setup