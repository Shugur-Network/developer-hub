<script>
  import { Copy, CheckCircle, XCircle } from 'lucide-svelte';
  import { relayConnectionGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  import Mermaid from '$lib/components/Mermaid.svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Connect to Shugur Relay - Nostr Development with Shugur</title>
  <meta name="description" content="Get connected to our production Nostr relay in minutes. Learn to connect to Shugur relay using WebSockets and various programming languages." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <svelte:component this={getIcon(relayConnectionGuide.heroIcon)} class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">Production Relay</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      {relayConnectionGuide.title}
    </h1>
    <p class="text-xl opacity-90 mb-8">
      {relayConnectionGuide.description}
    </p>
    
    <div class="flex flex-wrap gap-3">
      {#each relayConnectionGuide.tags as tag}
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{tag}</span>
      {/each}
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      {#each Object.entries(relayConnectionGuide.sections) as [key, section]}
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>{section.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Connection Details -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(relayConnectionGuide.sections.connectionInfo.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{relayConnectionGuide.sections.connectionInfo.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {relayConnectionGuide.sections.connectionInfo.description}
    </p>
    
    <div class="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
      <div class="flex items-center gap-2 mb-3">
        <CheckCircle class="h-5 w-5 text-green-600" />
        <span class="font-medium text-green-800">Shugur Relay Details</span>
      </div>
      <div class="space-y-2 text-green-700">
        <div><strong>WebSocket URL:</strong> <code class="bg-green-100 px-2 py-1 rounded">wss://shu01.shugur.net</code></div>
        <div><strong>Status:</strong> <span class="text-green-600 font-medium">Production Ready</span></div>
        <div><strong>Uptime:</strong> 99.9%+</div>
        <div><strong>Supported NIPs:</strong> 1, 2, 3, 4, 7, 9, 11, 12, 15, 16, 20, 25, 26, 28, 33, 40, 42, 50, 51, 65</div>
      </div>
    </div>
    
    <div class="bg-blue-50 border border-blue-200 p-6 rounded-lg">
      <div class="flex items-center gap-2 mb-3">
        <CheckCircle class="h-5 w-5 text-blue-600" />
        <span class="font-medium text-blue-800">Connection Requirements</span>
      </div>
      <ul class="text-blue-700 space-y-2">
        <li>• WebSocket support in your client</li>
        <li>• Valid Nostr event format</li>
        <li>• Proper event signing</li>
        <li>• Rate limiting compliance</li>
      </ul>
    </div>
    <div class="mt-8">
      <h3 class="font-semibold mb-3">Sequence Diagram</h3>
      <Mermaid chart={`sequenceDiagram
  participant C as Client
  participant R as Relay
  C->>R: CONNECT (WS)
  R-->>C: 101 Switching Protocols
  C->>R: REQ [filters]
  R-->>C: EVENT ...
  R-->>C: EOSE
  C->>R: EVENT [signed]
  R-->>C: OK [accepted]`} />
      <div class="text-xs text-gray-600 mt-3">
        <div><strong>Legend:</strong> Client opens WS, subscribes with REQ; Relay streams EVENTs until EOSE; Client publishes EVENT; Relay returns OK.</div>
      </div>
    </div>
  </div>
</section>

<!-- Connection Examples -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(relayConnectionGuide.sections.examples.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{relayConnectionGuide.sections.examples.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {relayConnectionGuide.sections.examples.description}
    </p>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- JavaScript Example -->
      <div class="bg-gray-900 text-gray-100 p-6 rounded-lg">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm text-gray-400">JavaScript</span>
          <button 
            on:click={() => copyToClipboard(`import { relayInit } from 'nostr-tools'

const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
})

relay.on('error', () => {
  console.log('Failed to connect')
})

await relay.connect()`)}
            class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
          >
            <Copy class="h-3 w-3" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre class="text-sm overflow-x-auto"><code>{`import { relayInit } from 'nostr-tools'

const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
})

relay.on('error', () => {
  console.log('Failed to connect')
})

await relay.connect()`}</code></pre>
      </div>
      
      <!-- Python Example -->
      <div class="bg-gray-900 text-gray-100 p-6 rounded-lg">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm text-gray-400">Python</span>
          <button 
            on:click={() => copyToClipboard(`import asyncio
import websockets
from nostr.tools import relay_init

async def connect():
    relay = relay_init('wss://shu01.shugur.net')
    await relay.connect()
    print('Connected to Shugur relay!')
    return relay

relay = asyncio.run(connect())`)}
            class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
          >
            <Copy class="h-3 w-3" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre class="text-sm overflow-x-auto"><code>{`import asyncio
import websockets
from nostr.tools import relay_init

async def connect():
    relay = relay_init('wss://shu01.shugur.net')
    await relay.connect()
    print('Connected to Shugur relay!')
    return relay

relay = asyncio.run(connect())`}</code></pre>
      </div>
    </div>
  </div>
</section>

<!-- Troubleshooting -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(relayConnectionGuide.sections.troubleshooting.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{relayConnectionGuide.sections.troubleshooting.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {relayConnectionGuide.sections.troubleshooting.description}
    </p>
    
    <div class="space-y-4">
      <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h3 class="font-medium text-yellow-800 mb-2">Connection Timeout</h3>
        <p class="text-yellow-700 text-sm">If you experience connection timeouts, check your network configuration and firewall settings.</p>
      </div>
      
      <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
        <h3 class="font-medium text-red-800 mb-2">Authentication Errors</h3>
        <p class="text-red-700 text-sm">Ensure your events are properly signed and follow the Nostr protocol specification.</p>
      </div>
      
      <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <h3 class="font-medium text-blue-800 mb-2">Rate Limiting</h3>
        <p class="text-blue-700 text-sm">Respect rate limits to avoid being temporarily blocked. Implement exponential backoff for retries.</p>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-green-600 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready to Connect?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You're now ready to connect to Shugur relay. Here's what to explore next:
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      {#each relayConnectionGuide.nextSteps as step}
        <a href={step.href} class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
          <div class="flex justify-center mb-3">
            <svelte:component this={getIcon(step.icon)} class="h-8 w-8 text-white" />
          </div>
          <h3 class="font-semibold mb-2">{step.title}</h3>
          <p class="text-sm opacity-90">{step.description}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
