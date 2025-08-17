<script>
  import { Clock, CheckCircle, ExternalLink, Copy, Terminal } from 'lucide-svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Getting Started - Nostr Development with Shugur</title>
  <meta name="description" content="Get started with Nostr protocol development in 5 minutes. Connect to Shugur relay and build your first decentralized application." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary to-blue-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Clock class="h-8 w-8" />
      <span class="text-lg">5 minute setup</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Getting Started with Nostr
    </h1>
    <p class="text-xl opacity-90 mb-8">
      Learn the fundamentals of Nostr protocol and connect to Shugur relay in just a few minutes.
    </p>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-2 gap-4 text-sm">
      <div class="flex items-center gap-2">
        <CheckCircle class="h-4 w-4 text-green-500" />
        <span>What is Nostr and why it matters</span>
      </div>
      <div class="flex items-center gap-2">
        <CheckCircle class="h-4 w-4 text-green-500" />
        <span>Generate your first keypair</span>
      </div>
      <div class="flex items-center gap-2">
        <CheckCircle class="h-4 w-4 text-green-500" />
        <span>Connect to Shugur relay</span>
      </div>
      <div class="flex items-center gap-2">
        <CheckCircle class="h-4 w-4 text-green-500" />
        <span>Send your first event</span>
      </div>
    </div>
  </div>
</section>

<!-- What is Nostr -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">What is Nostr?</h2>
    
    <div class="prose prose-lg max-w-none">
      <p class="text-gray-600 mb-6">
        Nostr (Notes and Other Stuff Transmitted by Relays) is a simple, open protocol for decentralized social networking. 
        Unlike traditional social media platforms, Nostr doesn't rely on a central server or authority.
      </p>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="border rounded-lg p-6 text-center">
          <div class="text-3xl mb-3">🔑</div>
          <h3 class="font-semibold mb-2">Your Keys, Your Identity</h3>
          <p class="text-sm text-gray-600">You own your identity through cryptographic keys</p>
        </div>
        <div class="border rounded-lg p-6 text-center">
          <div class="text-3xl mb-3">📡</div>
          <h3 class="font-semibold mb-2">Relay Network</h3>
          <p class="text-sm text-gray-600">Messages are distributed across multiple relays</p>
        </div>
        <div class="border rounded-lg p-6 text-center">
          <div class="text-3xl mb-3">🌐</div>
          <h3 class="font-semibold mb-2">Truly Decentralized</h3>
          <p class="text-sm text-gray-600">No single point of failure or censorship</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Core Concepts -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">Core Concepts</h2>
    
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-3">🔐 Keys</h3>
        <p class="text-gray-600 mb-4">
          Every user has a keypair consisting of a private key (secret) and a public key (identity). 
          The private key signs events, while the public key identifies you to others.
        </p>
        <div class="bg-gray-50 p-4 rounded text-sm">
          <div class="mb-2"><strong>Private Key:</strong> Kept secret, used to sign events</div>
          <div><strong>Public Key:</strong> Shared publicly, your unique identifier</div>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-3">📝 Events</h3>
        <p class="text-gray-600 mb-4">
          All data in Nostr is structured as events. Posts, reactions, follows, and DMs are all different types of events.
        </p>
        <div class="bg-gray-50 p-4 rounded text-sm">
          <div class="mb-2"><strong>Kind 1:</strong> Text notes (posts)</div>
          <div class="mb-2"><strong>Kind 3:</strong> Contact lists (follows)</div>
          <div><strong>Kind 4:</strong> Encrypted direct messages</div>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-3">📡 Relays</h3>
        <p class="text-gray-600 mb-4">
          Relays are servers that store and forward events. You connect to multiple relays to ensure your messages reach their intended audience.
        </p>
        <div class="bg-primary/10 p-4 rounded border border-primary/20">
          <div class="font-medium text-primary mb-1">Shugur Relay</div>
          <div class="text-sm">wss://shu01.shugur.net - Production-ready with extensive NIP support</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Step 1: Generate Keys -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
      <h2 class="text-2xl font-display">Generate Your Keypair</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      First, you'll need to generate a keypair. Here's how to do it with JavaScript:
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">JavaScript</span>
        <button 
          on:click={() => copyToClipboard(`npm install nostr-tools

import { generatePrivateKey, getPublicKey } from 'nostr-tools'

// Generate a private key
const privateKey = generatePrivateKey()

// Derive the public key
const publicKey = getPublicKey(privateKey)

console.log('Private key:', privateKey)
console.log('Public key:', publicKey)`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`npm install nostr-tools

import { generatePrivateKey, getPublicKey } from 'nostr-tools'

// Generate a private key
const privateKey = generatePrivateKey()

// Derive the public key
const publicKey = getPublicKey(privateKey)

console.log('Private key:', privateKey)
console.log('Public key:', publicKey)`}</code></pre>
    </div>
    
    <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-yellow-600">⚠️</span>
        <span class="font-medium text-yellow-800">Security Note</span>
      </div>
      <p class="text-yellow-700 text-sm">
        Never share your private key with anyone. Store it securely - if you lose it, you lose access to your identity forever.
      </p>
    </div>
  </div>
</section>

<!-- Step 2: Connect to Relay -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
      <h2 class="text-2xl font-display">Connect to Shugur Relay</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      Now let's connect to the Shugur relay and listen for events:
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">JavaScript</span>
        <button 
          on:click={() => copyToClipboard(`import { relayInit } from 'nostr-tools'

// Initialize connection to Shugur relay
const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('🎉 Connected to Shugur relay!')
})

relay.on('error', () => {
  console.log('❌ Failed to connect')
})

// Connect to the relay
await relay.connect()`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { relayInit } from 'nostr-tools'

// Initialize connection to Shugur relay
const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('🎉 Connected to Shugur relay!')
})

relay.on('error', () => {
  console.log('❌ Failed to connect')
})

// Connect to the relay
await relay.connect()`}</code></pre>
    </div>
  </div>
</section>

<!-- Step 3: Send Your First Event -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
      <h2 class="text-2xl font-display">Send Your First Event</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      Let's create and publish your first note to the Nostr network:
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">JavaScript</span>
        <button 
          on:click={() => copyToClipboard(`import { getEventHash, signEvent } from 'nostr-tools'

// Create a new event
let event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello Nostr! This is my first post on Shugur relay 🚀',
  pubkey: publicKey,
}

// Add the event hash
event.id = getEventHash(event)

// Sign the event with your private key
event.sig = signEvent(event, privateKey)

// Publish to the relay
let pub = relay.publish(event)

pub.on('ok', () => {
  console.log('✅ Event published successfully!')
})

pub.on('failed', reason => {
  console.log('❌ Failed to publish:', reason)
})`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { getEventHash, signEvent } from 'nostr-tools'

// Create a new event
let event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello Nostr! This is my first post on Shugur relay 🚀',
  pubkey: publicKey,
}

// Add the event hash
event.id = getEventHash(event)

// Sign the event with your private key
event.sig = signEvent(event, privateKey)

// Publish to the relay
let pub = relay.publish(event)

pub.on('ok', () => {
  console.log('✅ Event published successfully!')
})

pub.on('failed', reason => {
  console.log('❌ Failed to publish:', reason)
})`}</code></pre>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">🎉 Congratulations!</h2>
    <p class="text-xl opacity-90 mb-8">
      You've successfully connected to Shugur relay and published your first Nostr event. Here's what to explore next:
    </p>
    
    <div class="grid md:grid-cols-2 gap-6">
      <a href="/guides/javascript" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <h3 class="font-semibold mb-2">📚 Language-Specific Guides</h3>
        <p class="text-sm opacity-90">Deep dive into building with your preferred programming language</p>
      </a>
      
      <a href="/nips" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <h3 class="font-semibold mb-2">🔧 Explore NIPs</h3>
        <p class="text-sm opacity-90">Learn about the Nostr Improvement Proposals supported by Shugur</p>
      </a>
      
      <a href="/examples" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <h3 class="font-semibold mb-2">💻 Code Examples</h3>
        <p class="text-sm opacity-90">Browse complete project examples and code snippets</p>
      </a>
      
      <a href="/guides/best-practices" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <h3 class="font-semibold mb-2">✨ Best Practices</h3>
        <p class="text-sm opacity-90">Learn security, performance, and UX best practices</p>
      </a>
    </div>
  </div>
</section>
