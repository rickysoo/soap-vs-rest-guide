import { Card, CardContent } from "@/components/ui/card";
import { FileText, Globe } from "lucide-react";

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
                  XML-based messaging format
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Built-in error handling
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  ACID compliance support
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  WS-Security standards
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
                  JSON/XML data formats
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Stateless operations
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  HTTP status codes
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Lightweight and fast
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
