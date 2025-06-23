# Mavericks Edge - Replit.md

## Overview

Mavericks Edge is a full-stack web application built as a digital agency website specializing in web development, marketing, and AI integration services. The application features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data storage and deployed on Replit's infrastructure.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Dual implementation (Resend API + Nodemailer fallback)
- **Media Processing**: FFmpeg integration for media optimization
- **API Design**: RESTful endpoints with proper error handling

### Data Storage Solutions
- **Primary Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle with type-safe schema definitions
- **Tables**: Users, contact submissions with proper relationships
- **Migration**: Drizzle-kit for database schema management

## Key Components

### Frontend Components
1. **Layout System**: Responsive layout with header, main content, and footer
2. **Page Components**: Home, Services, Pricing, About, Contact, Work pages
3. **Reusable Components**: Cards, buttons, forms, modals, loading screens
4. **SEO Components**: Meta tags, structured data, sitemap generation

### Backend Services
1. **Storage Layer**: Abstracted storage interface with in-memory and database implementations
2. **Email Service**: Contact form handling with dual email provider support
3. **Media Handling**: Video and image optimization utilities
4. **API Routes**: Contact submissions, health checks, static file serving

### SEO & Performance
1. **Structured Data**: JSON-LD for organization, local business, and FAQ schemas
2. **Meta Tags**: Dynamic Open Graph and Twitter card generation
3. **Sitemap**: XML sitemap with multiple sections
4. **Performance**: Lazy loading, image optimization, code splitting

## Data Flow

1. **User Interaction**: User interacts with React components
2. **Form Submission**: Contact forms send data to Express backend
3. **Data Validation**: Zod schemas validate incoming data
4. **Database Storage**: Drizzle ORM handles data persistence
5. **Email Notifications**: Contact submissions trigger email notifications
6. **Response**: Success/error responses sent back to frontend

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **@radix-ui/react-***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **drizzle-orm**: Type-safe database toolkit
- **zod**: Runtime type validation

### Email Services
- **resend**: Primary email service provider
- **nodemailer**: Fallback email service with test accounts

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: esbuild bundles server code for production
3. **Asset Optimization**: Images and media are optimized for web delivery
4. **Static Generation**: SEO files (sitemap, robots.txt) are generated

### Environment Configuration
- **Development**: Uses tsx for hot reloading, dev server on port 5000
- **Production**: Compiled JavaScript with optimized assets
- **Database**: Environment-based DATABASE_URL configuration
- **Ports**: 5000 (backend), 5173 (frontend dev server)

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Autoscale deployment target
- **Workflows**: Parallel execution of install and dev server startup

## Changelog
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.