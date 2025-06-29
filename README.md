# SOAP vs REST - Interactive Learning Guide

A comprehensive educational web application designed to help beginners understand the fundamental differences between SOAP and REST APIs through interactive examples, live testing, and practical code samples.

🔗 **[View Source Code on GitHub](https://github.com/rickysoo/soap-vs-rest-guide)**

## Features

- **Complete Beginner Guide**: "What is an API?" section with simple analogies and real-world examples
- **Visual Learning Path**: 4-step guided journey from basics to hands-on practice
- **Side-by-side Comparison**: Visual comparison of SOAP and REST characteristics with helpful tooltips
- **Interactive Code Examples**: Working code samples with syntax highlighting
- **Live API Testing**: Interactive panels to test both SOAP and REST requests with guidance
- **Best Practices Guide**: Decision matrix and recommendations for when to use each approach
- **Comprehensive Glossary**: Simple explanations of technical terms
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Zero Prerequisites**: No prior API knowledge required

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd soap-vs-rest-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000` to view the application.

## Usage Guide

### 1. Start with API Basics
- Begin with "What is an API?" to understand fundamental concepts
- Use the restaurant analogy to grasp how APIs work
- Review real-world examples like weather apps and online shopping

### 2. Follow the Learning Path
- **Step 1: Compare** - Learn key differences between SOAP and REST
- **Step 2: Examples** - See real code with explanations
- **Step 3: Practice** - Try interactive API testing
- **Step 4: Decide** - Learn when to use each approach

### 3. Interactive Comparison Section
- Review the side-by-side comparison cards with helpful tooltips
- Hover over technical terms for simple explanations
- Examine the detailed comparison table for specifications

### 4. Working Code Examples
- **SOAP Examples**: Complete XML envelope structure with JavaScript client code
- **REST Examples**: HTTP requests with JSON responses and JavaScript implementation
- **Syntax Highlighting**: Code blocks are highlighted for better readability

### 3. Interactive API Testing
- **SOAP Testing Panel**: 
  - Enter SOAP endpoint URL
  - Add SOAPAction header
  - Paste SOAP envelope XML
  - Send request and view response
  
- **REST Testing Panel**:
  - Select HTTP method (GET, POST, PUT, DELETE)
  - Enter REST endpoint URL
  - Add custom headers
  - Include JSON request body
  - Send request and view response

### 6. Best Practices & Decision Matrix
- Learn when to choose SOAP vs REST
- Review implementation best practices
- Use the decision matrix for project planning

### 7. Glossary
- Look up simple explanations of technical terms
- No jargon - everything explained in plain English
- Perfect reference while learning

## Educational Content Structure

### SOAP (Simple Object Access Protocol)
- **Protocol-based** approach with strict standards
- **XML messaging** format with envelope structure
- **Built-in security** with WS-Security standards
- **ACID compliance** support for transactions
- **Enterprise integration** capabilities

### REST (Representational State Transfer)
- **Architectural style** using HTTP methods
- **Multiple formats** (JSON, XML, HTML, Text)
- **Stateless operations** for scalability
- **HTTP status codes** for error handling
- **Lightweight** and performance-optimized

## Tech Stack

### Frontend
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Wouter** - Routing
- **TanStack Query** - Data fetching

### Backend
- **Express.js** - Web server
- **TypeScript** - Type safety
- **Zod** - Schema validation

## Project Structure

