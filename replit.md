# Mavericks Edge - Replit Development Guide

## Overview

Mavericks Edge is a full-stack web application built for a digital marketing agency specializing in web development, marketing services, and AI integration. The application features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data storage and Drizzle ORM for database management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with custom styling
- **Animation**: Framer Motion for smooth transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle with PostgreSQL
- **Email Service**: Multiple providers (Resend, Nodemailer)
- **Authentication**: Basic setup for user management
- **File Processing**: FFmpeg integration for media optimization

### Design System
- **Typography**: Inter (primary), Outfit (headings), Space Grotesk (body), Sansation (logo)
- **Color Scheme**: Dark theme with orange accent (#FF5630)
- **Components**: Shadcn/ui components customized for the brand
- **Responsive Design**: Mobile-first approach with custom breakpoints

## Key Components

### Database Schema
- **Users Table**: Basic user authentication
- **Contact Submissions Table**: Form submissions from website visitors
- **Schema Validation**: Zod schemas for type safety

### Frontend Components
- **Layout System**: Header, Footer, PageTransition components
- **Section Components**: Hero, Services, Pricing, Contact sections
- **UI Components**: Custom buttons, cards, forms with hover effects
- **SEO Components**: Structured data, meta tags, sitemap generation

### Backend Services
- **Email Service**: Multi-provider email handling with fallback
- **Storage Service**: In-memory and database storage abstraction
- **Media Processing**: Video optimization and serving
- **API Routes**: Contact form, file serving, health checks

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Email Processing**: Contact form submissions trigger email notifications
5. **Response Handling**: Standardized JSON responses with error handling

## External Dependencies

### Core Dependencies
- **Database**: PostgreSQL via Neon serverless
- **Email Services**: Resend (primary), Nodemailer (fallback)
- **Media Processing**: FFmpeg for video optimization
- **CDN**: Optimized image loading from Unsplash

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Production builds for server-side code
- **Drizzle Kit**: Database schema management and migrations
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Production Environment
- **Platform**: Replit autoscale deployment
- **Build Process**: Vite builds frontend, ESBuild bundles backend
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Assets**: Served directly from Express with caching headers

### Development Workflow
- **Dev Server**: Concurrent frontend (port 5173) and backend (port 5000)
- **Hot Reload**: Vite HMR for frontend, TSX for backend reloading
- **Database Sync**: Drizzle push for schema updates

### Performance Optimizations
- **Image Optimization**: WebP format, lazy loading, responsive images
- **Code Splitting**: Lazy-loaded React components
- **Caching**: Static asset caching and query optimization
- **SEO**: Server-side meta tags, structured data, sitemap generation

## Changelog
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.