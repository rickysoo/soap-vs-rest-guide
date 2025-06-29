import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function InteractiveTesting() {
  const { toast } = useToast();
  
  // SOAP form state
  const [soapEndpoint, setSoapEndpoint] = useState("https://example.com/soap/service");
  const [soapAction, setSoapAction] = useState("GetUserInfo");
  const [soapEnvelope, setSoapEnvelope] = useState(`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <GetUserInfo>
            <UserId>12345</UserId>
        </GetUserInfo>
    </soap:Body>
</soap:Envelope>`);
  const [soapResponse, setSoapResponse] = useState("");

  // REST form state
  const [restMethod, setRestMethod] = useState("GET");
  const [restEndpoint, setRestEndpoint] = useState("https://api.example.com/users/123");
  const [restHeaders, setRestHeaders] = useState(`Authorization: Bearer token
Content-Type: application/json`);
  const [restBody, setRestBody] = useState(`{"name": "John Doe", "email": "john@example.com"}`);
  const [restResponse, setRestResponse] = useState("");

  // SOAP mutation
  const soapMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/soap/test", {
        endpoint: soapEndpoint,
        soapAction: soapAction,
        envelope: soapEnvelope
      });
      return await response.text();
    },
    onSuccess: (data) => {
      setSoapResponse(data);
      toast({
        title: "SOAP Request Successful",
        description: "Response received successfully",
      });
    },
    onError: (error) => {
      setSoapResponse(`Error: ${error.message}`);
      toast({
        title: "SOAP Request Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // REST mutation
  const restMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/rest/test", {
        method: restMethod,
        endpoint: restEndpoint,
        headers: restHeaders,
        body: restBody
      });
      return await response.json();
    },
    onSuccess: (data) => {
      setRestResponse(JSON.stringify(data, null, 2));
      toast({
        title: "REST Request Successful",
        description: "Response received successfully",
      });
    },
    onError: (error) => {
      setRestResponse(`Error: ${error.message}`);
      toast({
        title: "REST Request Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSOAPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soapMutation.mutate();
  };

  const handleRESTSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    restMutation.mutate();
  };

  return (
    <section id="testing" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Interactive API Testing</h3>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Now it's time to get hands-on! Try sending real requests to see how SOAP and REST work. 
            Don't worry - these are safe practice endpoints that won't affect anything.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* SOAP Testing Panel */}
          <Card className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-200 bg-blue-50">
              <h4 className="text-lg font-semibold text-blue-900">Test SOAP API</h4>
              <p className="text-sm text-blue-700 mt-1">SOAP uses XML messages wrapped in "envelopes" - try the example below!</p>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handleSOAPSubmit} className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium text-slate-700 mb-2">SOAP Endpoint URL</Label>
                  <Input 
                    type="url" 
                    value={soapEndpoint}
                    onChange={(e) => setSoapEndpoint(e.target.value)}
                    placeholder="https://example.com/soap/service"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-slate-700 mb-2">SOAPAction Header</Label>
                  <Input 
                    type="text" 
                    value={soapAction}
                    onChange={(e) => setSoapAction(e.target.value)}
                    placeholder="GetUserInfo"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-slate-700 mb-2">SOAP Envelope</Label>
                  <Textarea 
                    rows={8} 
                    value={soapEnvelope}
                    onChange={(e) => setSoapEnvelope(e.target.value)}
                    placeholder="Paste your SOAP envelope here..."
                    className="w-full font-mono text-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={soapMutation.isPending}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
                >
                  {soapMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send SOAP Request"
                  )}
                </Button>
              </form>
              
              {/* Response Area */}
              <div className="mt-6">
                <h5 className="font-medium text-slate-900 mb-2">Response:</h5>
                <div className="bg-slate-100 rounded-md p-4 min-h-[100px] border">
                  <div className="text-sm text-slate-600 font-mono whitespace-pre-wrap">
                    {soapResponse || <span className="text-slate-400">Response will appear here...</span>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* REST Testing Panel */}
          <Card className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-200 bg-emerald-50">
              <h4 className="text-lg font-semibold text-emerald-900">Test REST API</h4>
              <p className="text-sm text-emerald-700 mt-1">REST uses simple HTTP methods like GET and POST - much simpler than SOAP!</p>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handleRESTSubmit} className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Label className="block text-sm font-medium text-slate-700 mb-2">Method</Label>
                    <Select value={restMethod} onValueChange={setRestMethod}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GET">GET</SelectItem>
                        <SelectItem value="POST">POST</SelectItem>
                        <SelectItem value="PUT">PUT</SelectItem>
                        <SelectItem value="DELETE">DELETE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <Label className="block text-sm font-medium text-slate-700 mb-2">REST Endpoint URL</Label>
                    <Input 
                      type="url" 
                      value={restEndpoint}
                      onChange={(e) => setRestEndpoint(e.target.value)}
                      placeholder="https://api.example.com/users/123"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <Label className="block text-sm font-medium text-slate-700 mb-2">Headers</Label>
                  <Textarea 
                    rows={3} 
                    value={restHeaders}
                    onChange={(e) => setRestHeaders(e.target.value)}
                    placeholder="Authorization: Bearer token
Content-Type: application/json"
                    className="w-full font-mono text-sm"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-slate-700 mb-2">Request Body (JSON)</Label>
                  <Textarea 
                    rows={5} 
                    value={restBody}
                    onChange={(e) => setRestBody(e.target.value)}
                    placeholder='{"name": "John Doe", "email": "john@example.com"}'
                    className="w-full font-mono text-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={restMutation.isPending}
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium"
                >
                  {restMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send REST Request"
                  )}
                </Button>
              </form>
              
              {/* Response Area */}
              <div className="mt-6">
                <h5 className="font-medium text-slate-900 mb-2">Response:</h5>
                <div className="bg-slate-100 rounded-md p-4 min-h-[100px] border">
                  <div className="text-sm text-slate-600 font-mono whitespace-pre-wrap">
                    {restResponse || <span className="text-slate-400">Response will appear here...</span>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
