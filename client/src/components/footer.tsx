export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">SOAP vs REST Guide</h4>
            <p className="text-slate-300 text-sm">
              An interactive educational resource for understanding the differences between SOAP and REST APIs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('comparison')}
                  className="hover:text-white transition-colors"
                >
                  Comparison
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('examples')}
                  className="hover:text-white transition-colors"
                >
                  Code Examples
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testing')}
                  className="hover:text-white transition-colors"
                >
                  Interactive Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('best-practices')}
                  className="hover:text-white transition-colors"
                >
                  Best Practices
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><span className="text-slate-400">SOAP Specification</span></li>
              <li><span className="text-slate-400">REST Guidelines</span></li>
              <li><span className="text-slate-400">API Security Guide</span></li>
              <li><span className="text-slate-400">More Tutorials</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">&copy; 2024 SOAP vs REST Interactive Guide. Created for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
