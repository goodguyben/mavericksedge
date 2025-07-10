# Cursor Rules Documentation - Mavericks Edge

This directory contains Cursor Rules that help maintain code quality and consistency across the Mavericks Edge web application - a full-stack digital solutions platform for SMBs and nonprofits.

## Application Overview
- **Purpose**: Digital solutions agency platform for SMBs and nonprofits
- **Services**: Web development, marketing, and AI integration
- **Architecture**: Full-stack TypeScript with React frontend and Express.js backend

## Available Rules

### 1. Project Structure (`project-structure.mdc`)
- **Always Applied**: Yes
- **Description**: Provides comprehensive overview of the Mavericks Edge application architecture
- **Key Information**: System architecture, entry points, project structure, configuration files, path aliases, development scripts, and environment configuration

### 2. TypeScript Standards (`typescript-standards.mdc`)
- **Applied To**: All TypeScript files (`*.ts`, `*.tsx`)
- **Description**: Coding standards for TypeScript development with Mavericks Edge specific patterns
- **Key Guidelines**: Type annotations, import patterns, React/TSX guidelines, external dependencies integration, error handling, database operations, API integration, and third-party service integration

### 3. Styling Standards (`styling-standards.mdc`)
- **Applied To**: CSS, SCSS, TSX, and TS files
- **Description**: Guidelines for styling and UI development with Mavericks Edge branding
- **Key Guidelines**: Tailwind CSS usage, Mavericks Edge brand colors, component styling, typography, animations, Radix UI integration, dark mode, service-specific styling, and accessibility

### 4. Backend Standards (`backend-standards.mdc`)
- **Applied To**: Server-side TypeScript files (`server/**/*.ts`)
- **Description**: Standards for Express.js backend development with Mavericks Edge services
- **Key Guidelines**: API design, key backend services (Contact API, Static File Serving, SEO Routes, Error Handling), database operations, authentication, email services, file storage, third-party integrations, environment configuration, and monitoring

### 5. Frontend Standards (`frontend-standards.mdc`)
- **Applied To**: Client-side TypeScript files (`client/src/**/*.tsx`, `client/src/**/*.ts`)
- **Description**: Standards for React frontend development with Mavericks Edge components
- **Key Guidelines**: Component architecture, key frontend components (Layout System, Service Sections, Contact Forms, SEO Components), state management, routing, form handling, UI components, performance optimization, accessibility, asset management, and animation guidelines

### 6. Database Standards (`database-standards.mdc`)
- **Applied To**: Shared and server TypeScript files
- **Description**: Guidelines for database development with Drizzle ORM and Mavericks Edge schema
- **Key Guidelines**: Drizzle ORM patterns, core tables (Users, Contact Submissions), schema design, migration management, query patterns, data validation, connection management, security best practices, performance optimization, and data flow

### 7. Build & Deployment (`build-deployment.mdc`)
- **Always Applied**: No (manual application)
- **Description**: Standards for build processes and deployment with Mavericks Edge configuration
- **Key Guidelines**: Build configuration, development environment, production deployment, environment configuration, database deployment, asset management, performance optimization, security considerations, monitoring, logging, and third-party services

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Wouter for routing
- React Query (TanStack Query) for state management
- Tailwind CSS with custom design system
- Radix UI primitives with shadcn/ui components
- Framer Motion for animations

### Backend
- Node.js with TypeScript
- Express.js for API endpoints
- PostgreSQL with Drizzle ORM
- Resend API for emails (Nodemailer fallback)
- Zod for validation

### Third-Party Services
- Neon serverless PostgreSQL
- Resend for email services
- FFmpeg for media processing
- SEO tracking and analytics

## Usage

These rules are automatically applied by Cursor based on their configuration:
- **Always Applied**: Rules that apply to every request
- **Glob Patterns**: Rules that apply to specific file types or directories
- **Manual Application**: Rules that need to be explicitly requested

## Customization

To modify these rules:
1. Edit the corresponding `.mdc` file
2. Update the frontmatter metadata as needed
3. Rules will be automatically reloaded by Cursor

## Rule Format

Each rule uses Markdown format with Cursor-specific extensions:
- File references use `[filename](mdc:filename)` format
- Frontmatter controls rule application
- Content provides guidelines and best practices specific to Mavericks Edge

## Development Workflow

- **Development**: `npm run dev` (frontend: port 5173, backend: port 5000)
- **Build**: `npm run build` for production
- **Start**: `npm run start` for production server
- **Database**: `npm run db:push` for schema changes

## Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `RESEND_API_KEY` - Email service API key 