# SOAP vs REST - Interactive Learning Guide

## Overview

This is an educational web application designed to help beginners understand the fundamental differences between SOAP and REST APIs through interactive examples, live testing, and practical code samples. The application provides side-by-side comparisons, working code examples, and interactive testing panels to facilitate hands-on learning.

## System Architecture

The application follows a full-stack architecture with a React frontend and Express.js backend, utilizing modern web development practices and tools.

### Frontend Architecture
- **Framework**: React 18+ with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **API Design**: RESTful endpoints with SOAP testing simulation
- **Request Validation**: Zod schemas for type-safe validation
- **Development**: Hot module replacement with Vite integration

## Key Components

### Educational Content Structure
1. **Interactive Introduction**: Landing section with navigation to key learning areas
2. **Side-by-side Comparison**: Visual comparison cards showing SOAP vs REST characteristics
3. **Code Examples**: Syntax-highlighted code samples with explanations
4. **Interactive Testing**: Live API testing panels for both SOAP and REST
5. **Best Practices Guide**: Decision matrix and recommendations

### Technical Components
- **Component Library**: Comprehensive UI component system based on shadcn/ui
- **Code Highlighting**: Custom syntax highlighting for XML, JavaScript, and JSON
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Toast Notifications**: User feedback system for API testing results

## Data Flow

### Frontend to Backend Communication
1. User interacts with testing panels (SOAP/REST)
2. Form data validated using Zod schemas
3. API requests sent via TanStack Query mutations
4. Backend processes requests and returns mock responses
5. Frontend displays results with syntax highlighting and user feedback

### Mock API Simulation
- **SOAP Endpoint**: `/api/soap/test` - Simulates SOAP service responses with XML format
- **REST Endpoint**: `/api/rest/test` - Simulates REST API responses with JSON format
- Both endpoints return educational mock data for demonstration purposes

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type checking
- **Icons**: Lucide React for consistent iconography

### Database Integration
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Driver**: Neon Database serverless driver
- **Schema Management**: Drizzle Kit for migrations
- Note: Database functionality is prepared but minimal user data is currently stored in memory

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Code Quality**: ESLint and Prettier configurations
- **Development**: Hot module replacement and error overlay

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to optimized static assets
2. **Backend Build**: esbuild bundles Express server for production
3. **Asset Management**: Static files served from `dist/public` directory
4. **Environment Variables**: Database URL and other configs via environment

### Production Configuration
- **Server**: Express.js serves both API endpoints and static frontend
- **Database**: PostgreSQL via Neon serverless (when configured)
- **Static Assets**: Efficient serving of compiled frontend assets
- **Error Handling**: Comprehensive error boundaries and API error responses

### Development vs Production
- **Development**: Vite dev server with HMR, detailed error reporting
- **Production**: Optimized builds, error logging, performance monitoring
- **Database**: Memory storage fallback when database not provisioned

## Changelog
- June 29, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.