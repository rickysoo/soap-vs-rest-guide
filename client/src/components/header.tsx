import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-slate-900">SOAP vs REST</h1>
            <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">Interactive Guide</span>
          </div>
          <div className="flex items-center">
            <a 
              href="https://github.com/rickysoo/soap-vs-rest-guide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md hover:bg-slate-50"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
