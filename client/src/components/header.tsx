export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-slate-900">SOAP vs REST</h1>
            <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">Interactive Guide</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('comparison')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Comparison
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Examples
            </button>
            <button 
              onClick={() => scrollToSection('testing')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Testing
            </button>
            <button 
              onClick={() => scrollToSection('best-practices')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Best Practices
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
