import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArrowRightLeft, Database, Globe } from "lucide-react";

export default function ApiBasics() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">New to APIs? Start Here!</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            An API (Application Programming Interface) is like a waiter in a restaurant - it takes your order 
            and brings back what you asked for from the kitchen (the server).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">You Make a Request</h4>
              <p className="text-sm text-slate-600">Like asking a waiter for your favorite dish</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRightLeft className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">API Processes</h4>
              <p className="text-sm text-slate-600">The waiter takes your order to the kitchen</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Server Responds</h4>
              <p className="text-sm text-slate-600">The kitchen prepares your order</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">You Get Data</h4>
              <p className="text-sm text-slate-600">The waiter brings your food to the table</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-slate-200">
          <CardContent className="p-8">
            <h4 className="text-xl font-semibold text-slate-900 mb-4 text-center">Real-World API Examples</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌤️</span>
                </div>
                <h5 className="font-medium text-slate-900 mb-1">Weather Apps</h5>
                <p className="text-sm text-slate-600">Your weather app asks an API for today's forecast</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💳</span>
                </div>
                <h5 className="font-medium text-slate-900 mb-1">Online Shopping</h5>
                <p className="text-sm text-slate-600">When you buy something, APIs process your payment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h5 className="font-medium text-slate-900 mb-1">Social Media</h5>
                <p className="text-sm text-slate-600">APIs load your friends' posts and photos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}