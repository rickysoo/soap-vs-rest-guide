export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">SOAP vs REST Guide</h4>
            <p className="text-slate-300 text-sm">
              An interactive educational resource for understanding the differences between SOAP and REST APIs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a 
                  href="https://www.w3.org/TR/soap/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  SOAP Specification (W3C)
                </a>
              </li>
              <li>
                <a 
                  href="https://restfulapi.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  REST API Guidelines
                </a>
              </li>
              <li>
                <a 
                  href="https://owasp.org/www-project-api-security/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  API Security Guide (OWASP)
                </a>
              </li>
              <li>
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  HTTP Methods (MDN)
                </a>
              </li>
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
