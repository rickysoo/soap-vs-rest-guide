import { Card, CardContent } from "@/components/ui/card";
import { FileText, Globe } from "lucide-react";
import CodeBlock from "./code-block";

export default function CodeExamples() {
  const soapExample = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope 
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:user="http://example.com/user">
    <soap:Header>
        <user:Authentication>
            <user:Username>admin</user:Username>
            <user:Password>secret</user:Password>
        </user:Authentication>
    </soap:Header>
    <soap:Body>
        <user:GetUserInfo>
            <user:UserId>12345</user:UserId>
        </user:GetUserInfo>
    </soap:Body>
</soap:Envelope>`;

  const soapJavaScript = `// SOAP client implementation
async function callSOAPService(userId) {
    const soapEnvelope = \`
        <?xml version="1.0" encoding="UTF-8"?>
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <GetUserInfo>
                    <UserId>\${userId}</UserId>
                </GetUserInfo>
            </soap:Body>
        </soap:Envelope>
    \`;
    
    try {
        const response = await fetch('/api/soap/users/' + userId, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml; charset=utf-8',
                'SOAPAction': 'GetUserInfo'
            },
            body: soapEnvelope
        });
        
        const xmlText = await response.text();
        // Parse XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        return xmlDoc;
    } catch (error) {
        console.error('SOAP request failed:', error);
    }
}`;

  const restJavaScript = `// REST client implementation
async function callRESTService(userId) {
    try {
        const response = await fetch(\`/api/rest/users/\${userId}\`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer your-jwt-token',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('REST request failed:', error);
        throw error;
    }
}

// Example usage
callRESTService('12345')
    .then(user => console.log('User data:', user))
    .catch(error => console.error('Error:', error));`;

  const restResponse = `{
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "developer",
    "created_at": "2024-01-15T10:30:00Z",
    "last_login": "2024-01-20T14:25:00Z"
}`;

  return (
    <section id="examples" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Working Code Examples</h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* SOAP Example */}
          <Card className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-blue-50 border-b border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                SOAP Request Example
              </h4>
            </div>
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 mb-4">A SOAP request to get user information:</p>
              <CodeBlock language="xml">{soapExample}</CodeBlock>
              
              <div className="mt-6">
                <h5 className="font-medium text-slate-900 mb-2">JavaScript Client Code:</h5>
                <CodeBlock language="javascript">{soapJavaScript}</CodeBlock>
              </div>
            </CardContent>
          </Card>

          {/* REST Example */}
          <Card className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-200">
              <h4 className="text-lg font-semibold text-emerald-900 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                REST Request Example
              </h4>
            </div>
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 mb-4">A REST request to get user information:</p>
              <CodeBlock language="bash">{`GET /api/users/12345 HTTP/1.1
Host: api.example.com
Authorization: Bearer your-jwt-token
Content-Type: application/json
Accept: application/json`}</CodeBlock>
              
              <div className="mt-6">
                <h5 className="font-medium text-slate-900 mb-2">JavaScript Client Code:</h5>
                <CodeBlock language="javascript">{restJavaScript}</CodeBlock>
              </div>

              <div className="mt-6">
                <h5 className="font-medium text-slate-900 mb-2">Expected JSON Response:</h5>
                <CodeBlock language="json">{restResponse}</CodeBlock>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
