import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, TestTube, CheckCircle } from "lucide-react";

export default function Introduction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Learn SOAP vs REST APIs</h2>
          <p className="text-lg text-slate-600 mb-2 max-w-2xl mx-auto">
            Master the fundamental differences between SOAP and REST APIs with interactive examples, 
            live testing, and practical code samples designed for beginners.
          </p>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-8">
            No prior experience required! This guide will take you from zero to understanding both technologies step by step.
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

        {/* Learning Path */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => scrollToSection('comparison')}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">1. Compare</h3>
              <p className="text-sm text-slate-600">Learn the key differences between SOAP and REST</p>
            </CardContent>
          </Card>

          <Card className="bg-emerald-50 border-emerald-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => scrollToSection('examples')}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">2. Examples</h3>
              <p className="text-sm text-slate-600">See real code examples with explanations</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => scrollToSection('testing')}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">3. Practice</h3>
              <p className="text-sm text-slate-600">Try interactive API testing hands-on</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => scrollToSection('best-practices')}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">4. Decide</h3>
              <p className="text-sm text-slate-600">Learn when to use each approach</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
