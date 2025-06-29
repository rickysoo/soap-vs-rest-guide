import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

export default function Glossary() {
  const terms = [
    {
      term: "API",
      definition: "Application Programming Interface - A way for different software programs to talk to each other, like a translator between apps."
    },
    {
      term: "HTTP",
      definition: "HyperText Transfer Protocol - The language that web browsers and servers use to communicate, like the postal system for the internet."
    },
    {
      term: "JSON",
      definition: "JavaScript Object Notation - A simple way to format data that looks like: {\"name\": \"John\", \"age\": 25}. Easy for both humans and computers to read."
    },
    {
      term: "XML",
      definition: "eXtensible Markup Language - A way to structure data using tags like HTML. More verbose than JSON but very organized."
    },
    {
      term: "Endpoint",
      definition: "A specific URL where you can send requests to get or send data, like a specific address where you mail a letter."
    },
    {
      term: "Status Code",
      definition: "A number that tells you if your request worked. 200 means success, 404 means not found, 500 means server error."
    },
    {
      term: "Request",
      definition: "When you ask an API for something, like asking a librarian to find a book for you."
    },
    {
      term: "Response",
      definition: "What the API sends back to you after your request, like the librarian bringing you the book you asked for."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
            <Book className="w-6 h-6" />
            Glossary - Tech Terms Made Simple
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Confused by technical terms? Here are simple explanations of common API words you'll encounter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {terms.map((item, index) => (
            <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2 text-lg">{item.term}</h4>
                <p className="text-slate-600">{item.definition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}