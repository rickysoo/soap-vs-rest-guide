import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";

export default function BestPractices() {
  return (
    <section id="best-practices" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Best Practices & When to Use</h3>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* SOAP Best Practices */}
          <Card className="bg-blue-50 rounded-xl border border-blue-200">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                SOAP Best Practices
              </h4>
              <div className="space-y-4">
                <Card className="bg-white rounded-lg border border-blue-200">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-blue-900 mb-2">✅ Use SOAP When:</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Enterprise-level security is required</li>
                      <li>• ACID compliance is necessary</li>
                      <li>• Formal contracts (WSDL) are needed</li>
                      <li>• Working with legacy systems</li>
                      <li>• Transactions involve multiple resources</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white rounded-lg border border-blue-200">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-blue-900 mb-2">💡 SOAP Tips:</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Always validate XML against schema</li>
                      <li>• Use proper namespace conventions</li>
                      <li>• Implement comprehensive error handling</li>
                      <li>• Consider message size for performance</li>
                      <li>• Use WS-Security for authentication</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* REST Best Practices */}
          <Card className="bg-emerald-50 rounded-xl border border-emerald-200">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                REST Best Practices
              </h4>
              <div className="space-y-4">
                <Card className="bg-white rounded-lg border border-emerald-200">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-emerald-900 mb-2">✅ Use REST When:</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Building web and mobile APIs</li>
                      <li>• Performance and scalability matter</li>
                      <li>• Simple CRUD operations are sufficient</li>
                      <li>• Working with microservices</li>
                      <li>• Public API development</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white rounded-lg border border-emerald-200">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-emerald-900 mb-2">💡 REST Tips:</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Use appropriate HTTP methods</li>
                      <li>• Implement proper status codes</li>
                      <li>• Design RESTful URLs</li>
                      <li>• Version your APIs properly</li>
                      <li>• Use JSON for data exchange</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decision Matrix */}
        <Card className="bg-slate-50 rounded-xl border border-slate-200">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-slate-900 mb-6 text-center">Decision Matrix: SOAP vs REST</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left py-3 px-4 font-medium text-slate-900">Scenario</th>
                    <th className="text-center py-3 px-4 font-medium text-blue-700">SOAP</th>
                    <th className="text-center py-3 px-4 font-medium text-emerald-700">REST</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-900">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3 px-4 text-sm">Mobile App API</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-sm text-slate-600">REST - Lightweight and fast</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 text-sm">Financial Transactions</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">⚠️</td>
                    <td className="py-3 px-4 text-sm text-slate-600">SOAP - ACID compliance needed</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm">Public Web Service</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-sm text-slate-600">REST - Easier to consume</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 text-sm">Enterprise Integration</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">⚠️</td>
                    <td className="py-3 px-4 text-sm text-slate-600">SOAP - Better for complex workflows</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm">Microservices Communication</td>
                    <td className="py-3 px-4 text-center">❌</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-sm text-slate-600">REST - Stateless and scalable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
