import { Button } from "@/components/ui/button";

export default function Introduction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Learn SOAP vs REST APIs</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Master the fundamental differences between SOAP and REST APIs with interactive examples, 
            live testing, and practical code samples designed for beginners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('comparison')}
              className="bg-primary text-white px-6 py-3 hover:bg-blue-700 transition-colors font-medium"
            >
              Start Learning
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('examples')}
              className="border border-slate-300 text-slate-700 px-6 py-3 hover:bg-slate-50 transition-colors font-medium"
            >
              View Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
