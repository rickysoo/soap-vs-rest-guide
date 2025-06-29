import { useEffect, useRef } from "react";

interface CodeBlockProps {
  language: string;
  children: string;
  className?: string;
}

export default function CodeBlock({ language, children, className = "" }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple syntax highlighting for basic cases
    if (codeRef.current) {
      const code = codeRef.current;
      let highlightedCode = children;

      // Basic XML highlighting
      if (language === 'xml') {
        highlightedCode = children
          .replace(/(&lt;[^&]*&gt;)/g, '<span style="color: #e06c75;">$1</span>')
          .replace(/(".*?")/g, '<span style="color: #98c379;">$1</span>');
      }

      // Basic JavaScript highlighting
      if (language === 'javascript') {
        highlightedCode = children
          .replace(/(async|function|const|let|var|return|if|else|try|catch|await)/g, '<span style="color: #c678dd;">$1</span>')
          .replace(/('.*?'|".*?")/g, '<span style="color: #98c379;">$1</span>')
          .replace(/(\/\/.*)/g, '<span style="color: #5c6370;">$1</span>');
      }

      // Basic JSON highlighting
      if (language === 'json') {
        highlightedCode = children
          .replace(/(".*?")\s*:/g, '<span style="color: #e06c75;">$1</span>:')
          .replace(/:\s*(".*?")/g, ': <span style="color: #98c379;">$1</span>')
          .replace(/:\s*(\d+)/g, ': <span style="color: #d19a66;">$1</span>');
      }

      code.innerHTML = highlightedCode;
    }
  }, [children, language]);

  return (
    <pre className={`bg-slate-800 rounded-lg p-4 overflow-x-auto ${className}`}>
      <code 
        ref={codeRef}
        className={`language-${language} text-sm text-slate-100`}
      >
        {children}
      </code>
    </pre>
  );
}
