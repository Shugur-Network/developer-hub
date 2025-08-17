<script>
  import { Globe, Zap, CheckCircle, Copy, AlertCircle } from 'lucide-svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Connect to Shugur Relay - Developer Guide</title>
  <meta name="description" content="Quick guide to connect your Nostr application to Shugur relay. WebSocket connection examples and troubleshooting tips." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Globe class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Connect to Shugur Relay
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Get connected to our production Nostr relay in minutes
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Connection Info -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">Connection Details</h2>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <div class="bg-gray-50 p-6 rounded-xl border">
          <h3 class="font-semibold text-lg mb-4 flex items-center gap-2">
            <Zap class="h-5 w-5 text-primary" />
            Shugur Relay
          </h3>
          
          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium text-gray-700">WebSocket URL</label>
              <div class="flex items-center gap-2 mt-1">
                <code class="flex-1 bg-white border px-3 py-2 rounded font-mono text-sm">wss://shugur.com</code>
                <button 
                  on:click={() => copyToClipboard('wss://shugur.com')}
                  class="px-3 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                >
                  <Copy class="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span class="text-gray-600">Status:</span>
                <div class="flex items-center gap-2 mt-1">
                  <CheckCircle class="h-4 w-4 text-green-500" />
                  <span class="text-green-600 font-medium">Operational</span>
                </div>
              </div>
              <div>
                <span class="text-gray-600">Uptime:</span>
                <div class="font-medium mt-1">99.9%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 class="font-semibold text-blue-800 mb-2">📋 Quick Facts</h4>
          <ul class="text-sm text-blue-700 space-y-1">
            <li>• Production-ready with 24/7 monitoring</li>
            <li>• Supports 13+ NIPs including core features</li>
            <li>• Rate limiting: 50 events/minute for free users</li>
            <li>• No registration required</li>
            <li>• Open source friendly policies</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold text-lg mb-4">Connection Test</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">JavaScript Test</span>
            <button 
              on:click={() => copyToClipboard(`const ws = new WebSocket('wss://shugur.com')

ws.onopen = () => {
  console.log('✅ Connected to Shugur relay!')
  
  // Send a REQ to test
  ws.send(JSON.stringify([
    "REQ", 
    "test-sub", 
    { "kinds": [1], "limit": 1 }
  ]))
}

ws.onmessage = (event) => {
  const message = JSON.parse(event.data)
  console.log('📨 Received:', message)
}

ws.onerror = (error) => {
  console.log('❌ Connection error:', error)
}`)}
              class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm overflow-x-auto"><code>{`const ws = new WebSocket('wss://shugur.com')

ws.onopen = () => {
  console.log('✅ Connected to Shugur relay!')
  
  // Send a REQ to test
  ws.send(JSON.stringify([
    "REQ", 
    "test-sub", 
    { "kinds": [1], "limit": 1 }
  ]))
}

ws.onmessage = (event) => {
  const message = JSON.parse(event.data)
  console.log('📨 Received:', message)
}

ws.onerror = (error) => {
  console.log('❌ Connection error:', error)
}`}</code></pre>
        </div>
        
        <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center gap-2 mb-2">
            <CheckCircle class="h-4 w-4 text-green-600" />
            <span class="font-medium text-green-800">Expected Response</span>
          </div>
          <p class="text-green-700 text-sm">
            You should see connection success, followed by event data and an EOSE message.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Language Examples -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">Connection Examples by Language</h2>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- JavaScript/Node.js -->
      <div class="bg-white p-6 rounded-xl border">
        <h3 class="font-semibold text-lg mb-4 flex items-center gap-2">
          <span class="text-2xl">🟨</span>
          JavaScript / Node.js
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
          <pre><code>{`import { relayInit } from 'nostr-tools'

const relay = relayInit('wss://shugur.com')

await relay.connect()
console.log('Connected to Shugur!')`}</code></pre>
        </div>
        <a href="/guides/javascript" class="inline-block mt-4 text-primary hover:underline text-sm">
          View full JavaScript guide →
        </a>
      </div>

      <!-- Python -->
      <div class="bg-white p-6 rounded-xl border">
        <h3 class="font-semibold text-lg mb-4 flex items-center gap-2">
          <span class="text-2xl">🐍</span>
          Python
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
          <pre><code>{`from nostr.relay import Relay

relay = Relay("wss://shugur.com")
relay.connect()
print("Connected to Shugur!")`}</code></pre>
        </div>
        <a href="/guides/python" class="inline-block mt-4 text-primary hover:underline text-sm">
          View full Python guide →
        </a>
      </div>

      <!-- Rust -->
      <div class="bg-white p-6 rounded-xl border">
        <h3 class="font-semibold text-lg mb-4 flex items-center gap-2">
          <span class="text-2xl">🦀</span>
          Rust
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
          <pre><code>{`use nostr_sdk::Client;

let client = Client::new();
client.add_relay("wss://shugur.com").await?;
client.connect().await;`}</code></pre>
        </div>
        <a href="/guides/rust" class="inline-block mt-4 text-primary hover:underline text-sm">
          View full Rust guide →
        </a>
      </div>

      <!-- Go -->
      <div class="bg-white p-6 rounded-xl border">
        <h3 class="font-semibold text-lg mb-4 flex items-center gap-2">
          <span class="text-2xl">🐹</span>
          Go
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
          <pre><code>{`import "github.com/nbd-wtf/go-nostr"

relay, _ := nostr.RelayConnect(
  ctx, "wss://shugur.com"
)
fmt.Println("Connected!")`}</code></pre>
        </div>
        <a href="/guides/go" class="inline-block mt-4 text-primary hover:underline text-sm">
          View full Go guide →
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Troubleshooting -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">Troubleshooting</h2>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">Common Issues</h3>
        <div class="space-y-4">
          <div class="p-4 border rounded-lg">
            <div class="flex items-start gap-3">
              <AlertCircle class="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 class="font-medium">Connection Timeout</h4>
                <p class="text-sm text-gray-600 mt-1">
                  Check your network connection and firewall settings. Some corporate networks block WebSocket connections.
                </p>
              </div>
            </div>
          </div>
          
          <div class="p-4 border rounded-lg">
            <div class="flex items-start gap-3">
              <AlertCircle class="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 class="font-medium">SSL Certificate Error</h4>
                <p class="text-sm text-gray-600 mt-1">
                  Ensure you're using <code class="bg-gray-100 px-1 rounded">wss://</code> (secure WebSocket) not <code class="bg-gray-100 px-1 rounded">ws://</code>.
                </p>
              </div>
            </div>
          </div>
          
          <div class="p-4 border rounded-lg">
            <div class="flex items-start gap-3">
              <AlertCircle class="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 class="font-medium">Rate Limiting</h4>
                <p class="text-sm text-gray-600 mt-1">
                  If you're hitting rate limits, implement backoff and retry logic in your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold text-lg mb-4">Best Practices</h3>
        <div class="space-y-4">
          <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 class="font-medium text-green-800 mb-2">✅ Connection Management</h4>
            <ul class="text-sm text-green-700 space-y-1">
              <li>• Implement automatic reconnection logic</li>
              <li>• Handle connection state changes gracefully</li>
              <li>• Use connection pooling for multiple relays</li>
            </ul>
          </div>
          
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 class="font-medium text-blue-800 mb-2">⚡ Performance</h4>
            <ul class="text-sm text-blue-700 space-y-1">
              <li>• Close subscriptions when no longer needed</li>
              <li>• Use appropriate filter limits</li>
              <li>• Consider using multiple relays for redundancy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">You're Connected! What's Next?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Now that you're connected to Shugur relay, let's start building something awesome.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <a href="/guides/getting-started" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">🚀</div>
        <h3 class="font-semibold mb-2">Send Your First Event</h3>
        <p class="text-sm opacity-90">Learn to publish events to the network</p>
      </a>
      
      <a href="/guides/javascript" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">💻</div>
        <h3 class="font-semibold mb-2">Choose Your Language</h3>
        <p class="text-sm opacity-90">Deep dive into language-specific guides</p>
      </a>
      
      <a href="/examples" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">🔧</div>
        <h3 class="font-semibold mb-2">Explore Examples</h3>
        <p class="text-sm opacity-90">Ready-to-use project templates</p>
      </a>
    </div>
  </div>
</section>
