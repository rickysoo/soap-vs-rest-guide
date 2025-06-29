# SOAP vs REST - Interactive Learning Guide

A comprehensive educational web application designed to help beginners understand the fundamental differences between SOAP and REST APIs through interactive examples, live testing, and practical code samples.

## Features

- **Side-by-side Comparison**: Visual comparison of SOAP and REST characteristics
- **Interactive Code Examples**: Working code samples with syntax highlighting
- **Live API Testing**: Interactive panels to test both SOAP and REST requests
- **Best Practices Guide**: Decision matrix and recommendations for when to use each approach
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Educational Focus**: Beginner-friendly explanations with practical examples

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

### 1. Quick Comparison Section
- Review the side-by-side comparison cards showing key differences
- Examine the detailed comparison table for technical specifications
- Understand when to use SOAP vs REST based on requirements

### 2. Working Code Examples
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

### 4. Best Practices & Decision Matrix
- Learn when to choose SOAP vs REST
- Review implementation best practices
- Use the decision matrix for project planning

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

