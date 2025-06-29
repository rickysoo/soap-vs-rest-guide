import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FileText, Globe, HelpCircle } from "lucide-react";

export default function Comparison() {
  return (
    <section id="comparison" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Quick Comparison</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* SOAP Card */}
          <Card className="bg-white rounded-xl shadow-sm border border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">SOAP</h4>
              </div>
              <p className="text-slate-600 mb-4">Simple Object Access Protocol - A protocol-based approach with strict standards</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    XML-based messaging format
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>XML is a markup language like HTML, used to structure data in a readable format</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    Built-in error handling
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Automatic system for catching and reporting errors when things go wrong</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    ACID compliance support
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>ACID ensures database transactions are reliable (Atomic, Consistent, Isolated, Durable)</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    WS-Security standards
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Built-in security features for authentication and encryption</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* REST Card */}
          <Card className="bg-white rounded-xl shadow-sm border border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">REST</h4>
              </div>
              <p className="text-slate-600 mb-4">Representational State Transfer - An architectural style using HTTP methods</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    JSON/XML data formats
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>JSON is like a simple text format for data, similar to a shopping list or address book</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    Stateless operations
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Each request is independent - like ordering food where each order is separate</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    HTTP status codes
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Standard numbers that tell you if a request worked (200 = success, 404 = not found)</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="flex items-center gap-1">
                    Lightweight and fast
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Uses less data and works faster, like sending a text message vs a letter</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Comparison Table */}
        <Card className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h4 className="text-lg font-semibold text-slate-900">Detailed Comparison</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">SOAP</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">REST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Protocol</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Protocol-based</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Architectural style</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Data Format</td>
                  <td className="px-6 py-4 text-sm text-slate-600">XML only</td>
                  <td className="px-6 py-4 text-sm text-slate-600">JSON, XML, HTML, Text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Transport</td>
                  <td className="px-6 py-4 text-sm text-slate-600">HTTP, SMTP, TCP, UDP</td>
                  <td className="px-6 py-4 text-sm text-slate-600">HTTP/HTTPS only</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Security</td>
                  <td className="px-6 py-4 text-sm text-slate-600">WS-Security, SSL</td>
                  <td className="px-6 py-4 text-sm text-slate-600">HTTPS, OAuth, JWT</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Performance</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Slower (XML overhead)</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Faster (lightweight)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
