<script>
  import { Code, Download, ExternalLink, Copy, Terminal, BookOpen, FileText, Package, Link, Zap, Sparkles } from 'lucide-svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>JavaScript Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Complete guide to building Nostr applications with JavaScript. Learn to use nostr-tools, connect to Shugur relay, and build real-time apps." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-yellow-500 to-orange-500 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <FileText class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          JavaScript Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build Nostr applications with JavaScript and Node.js
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Node.js</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Browser</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">nostr-tools</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">WebSockets</span>
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-lg font-semibold mb-4">In this guide:</h2>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
      <a href="#setup" class="hover:text-primary flex items-center gap-2">
        <Package class="h-4 w-4" />
        Setup and Installation
      </a>
      <a href="#basic-connection" class="hover:text-primary flex items-center gap-2">
        <Link class="h-4 w-4" />
        Basic Connection
      </a>
      <a href="#events" class="hover:text-primary flex items-center gap-2">
        <FileText class="h-4 w-4" />
        Working with Events
      </a>
      <a href="#subscription" class="hover:text-primary flex items-center gap-2">
        <Terminal class="h-4 w-4" />
        Real-time Subscriptions
      </a>
      <a href="#examples" class="hover:text-primary flex items-center gap-2">
        <Code class="h-4 w-4" />
        Complete Examples
      </a>
    </div>
  </div>
</section>

<!-- Setup -->
<section id="setup" class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Package class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Setup and Installation</h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">Prerequisites</h3>
        <ul class="space-y-2 text-gray-600 mb-6">
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Node.js 16+ or modern browser
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Basic JavaScript knowledge
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Understanding of WebSockets (helpful)
          </li>
        </ul>

        <h3 class="font-semibold text-lg mb-4">Package Installation</h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs text-gray-400">Terminal</span>
            <button 
              on:click={() => copyToClipboard('npm install nostr-tools')}
              class="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm"><code>npm install nostr-tools</code></pre>
        </div>

        <p class="text-sm text-gray-600">
          <code class="bg-gray-100 px-2 py-1 rounded">nostr-tools</code> is the most popular JavaScript library for Nostr development.
        </p>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Alternative Libraries</h3>
        <div class="space-y-4">
          <div class="border p-4 rounded-lg">
            <h4 class="font-medium mb-2">nostr-tools</h4>
            <p class="text-sm text-gray-600 mb-2">The most popular and feature-complete library</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">npm install nostr-tools</code>
          </div>
          
          <div class="border p-4 rounded-lg">
            <h4 class="font-medium mb-2">@noble/secp256k1</h4>
            <p class="text-sm text-gray-600 mb-2">Lightweight cryptographic library</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">npm install @noble/secp256k1</code>
          </div>
          
          <div class="border p-4 rounded-lg">
            <h4 class="font-medium mb-2">websocket (Node.js)</h4>
            <p class="text-sm text-gray-600 mb-2">For Node.js WebSocket connections</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">npm install ws</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Basic Connection -->
<section id="basic-connection" class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Link class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Basic Connection</h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">Browser Implementation</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">browser.js</span>
            <button 
              on:click={() => copyToClipboard(`import { relayInit } from 'nostr-tools'

const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
  // Start subscribing to events
})

relay.on('error', () => {
  console.log('Failed to connect to relay')
})

relay.on('disconnect', () => {
  console.log('Disconnected from relay')
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

const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
  // Start subscribing to events
})

relay.on('error', () => {
  console.log('Failed to connect to relay')
})

relay.on('disconnect', () => {
  console.log('Disconnected from relay')
})

// Connect to the relay
await relay.connect()`}</code></pre>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Node.js Implementation</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">node.js</span>
            <button 
              on:click={() => copyToClipboard(`import { relayInit } from 'nostr-tools'
import WebSocket from 'ws'

// Configure WebSocket for Node.js
global.WebSocket = WebSocket

const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
})

relay.on('error', (err) => {
  console.error('Relay error:', err)
})

// Connect with error handling
try {
  await relay.connect()
} catch (error) {
  console.error('Connection failed:', error)
}`)}
              class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm overflow-x-auto"><code>{`import { relayInit } from 'nostr-tools'
import WebSocket from 'ws'

// Configure WebSocket for Node.js
global.WebSocket = WebSocket

const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
})

relay.on('error', (err) => {
  console.error('Relay error:', err)
})

// Connect with error handling
try {
  await relay.connect()
} catch (error) {
  console.error('Connection failed:', error)
}`}</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Working with Events -->
<section id="events" class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <FileText class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Working with Events</h2>
    </div>
    
    <h3 class="font-semibold text-lg mb-4">Creating and Signing Events</h3>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">events.js</span>
        <button 
          on:click={() => copyToClipboard(`import { 
  generatePrivateKey, 
  getPublicKey, 
  getEventHash, 
  signEvent 
} from 'nostr-tools'

// Generate keys (do this once and store securely)
const privateKey = generatePrivateKey()
const publicKey = getPublicKey(privateKey)

// Create a text note event
function createTextNote(content) {
  let event = {
    kind: 1,                                    // Kind 1 = text note
    created_at: Math.floor(Date.now() / 1000), // Current timestamp
    tags: [],                                   // Empty tags for now
    content: content,                           // The message content
    pubkey: publicKey                           // Your public key
  }

  // Calculate event hash
  event.id = getEventHash(event)
  
  // Sign the event
  event.sig = signEvent(event, privateKey)
  
  return event
}

// Example usage
const event = createTextNote("Hello Nostr from JavaScript!")
console.log('Event created:', event)`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { 
  generatePrivateKey, 
  getPublicKey, 
  getEventHash, 
  signEvent 
} from 'nostr-tools'

// Generate keys (do this once and store securely)
const privateKey = generatePrivateKey()
const publicKey = getPublicKey(privateKey)

// Create a text note event
function createTextNote(content) {
  let event = {
    kind: 1,                                    // Kind 1 = text note
    created_at: Math.floor(Date.now() / 1000), // Current timestamp
    tags: [],                                   // Empty tags for now
    content: content,                           // The message content
    pubkey: publicKey                           // Your public key
  }

  // Calculate event hash
  event.id = getEventHash(event)
  
  // Sign the event
  event.sig = signEvent(event, privateKey)
  
  return event
}

// Example usage
const event = createTextNote("Hello Nostr from JavaScript!")
console.log('Event created:', event)`}</code></pre>
    </div>
  </div>
</section>

<!-- Subscriptions -->
<section id="subscriptions" class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">📡 Subscriptions and Filters</h2>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">Basic Subscription</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <pre class="text-sm overflow-x-auto"><code>{`// Subscribe to recent text notes
const sub = relay.sub([
  {
    kinds: [1],      // Text notes
    limit: 10        // Last 10 events
  }
])

sub.on('event', event => {
  console.log('New event:', event.content)
})

sub.on('eose', () => {
  console.log('End of stored events')
})`}</code></pre>
        </div>

        <h3 class="font-semibold text-lg mb-4">Author-Specific Filter</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <pre class="text-sm overflow-x-auto"><code>{`// Subscribe to events from specific authors
const authorSub = relay.sub([
  {
    kinds: [1],
    authors: [
      'author1_pubkey_hex',
      'author2_pubkey_hex'
    ],
    limit: 50
  }
])`}</code></pre>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Time-Based Filter</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <pre class="text-sm overflow-x-auto"><code>{`// Get events from the last hour
const oneHourAgo = Math.floor(Date.now() / 1000) - 3600

const timeSub = relay.sub([
  {
    kinds: [1],
    since: oneHourAgo,
    limit: 100
  }
])`}</code></pre>
        </div>

        <h3 class="font-semibold text-lg mb-4">Tag-Based Filter</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <pre class="text-sm overflow-x-auto"><code>{`// Subscribe to replies to a specific event
const replySub = relay.sub([
  {
    kinds: [1],
    '#e': ['event_id_to_reply_to']
  }
])

// Subscribe to mentions of a user
const mentionSub = relay.sub([
  {
    kinds: [1],
    '#p': ['user_pubkey_hex']
  }
])`}</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Publishing -->
<section id="publishing" class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">📤 Publishing Events</h2>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">publishing.js</span>
        <button 
          on:click={() => copyToClipboard(`// Publish an event to the relay
function publishEvent(event) {
  const pub = relay.publish(event)
  
  pub.on('ok', () => {
    console.log('✅ Event published successfully!')
  })
  
  pub.on('failed', reason => {
    console.log('❌ Failed to publish:', reason)
  })
  
  return pub
}

// Publish a text note
const textEvent = createTextNote("Building on Nostr is awesome! 🎉")
publishEvent(textEvent)

// Publish a reaction (like)
function createReaction(eventId, content = "🤙") {
  let event = {
    kind: 7,                                    // Kind 7 = reaction
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ['e', eventId],                           // Event being reacted to
      ['p', originalEventAuthorPubkey]          // Author of original event
    ],
    content: content,                           // Reaction emoji/text
    pubkey: publicKey
  }
  
  event.id = getEventHash(event)
  event.sig = signEvent(event, privateKey)
  
  return event
}

// React to an event
const reaction = createReaction('event_id_here', '❤️')
publishEvent(reaction)`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`// Publish an event to the relay
function publishEvent(event) {
  const pub = relay.publish(event)
  
  pub.on('ok', () => {
    console.log('✅ Event published successfully!')
  })
  
  pub.on('failed', reason => {
    console.log('❌ Failed to publish:', reason)
  })
  
  return pub
}

// Publish a text note
const textEvent = createTextNote("Building on Nostr is awesome! 🎉")
publishEvent(textEvent)

// Publish a reaction (like)
function createReaction(eventId, content = "🤙") {
  let event = {
    kind: 7,                                    // Kind 7 = reaction
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ['e', eventId],                           // Event being reacted to
      ['p', originalEventAuthorPubkey]          // Author of original event
    ],
    content: content,                           // Reaction emoji/text
    pubkey: publicKey
  }
  
  event.id = getEventHash(event)
  event.sig = signEvent(event, privateKey)
  
  return event
}

// React to an event
const reaction = createReaction('event_id_here', '❤️')
publishEvent(reaction)`}</code></pre>
    </div>
  </div>
</section>

<!-- Complete Examples -->
<section id="examples" class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Code class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Complete Examples</h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">Simple Twitter-like Client</h3>
        <p class="text-gray-600 mb-4">A basic social media client that displays a timeline of posts</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/nostr-simple-client" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="https://demo.shugur.com/simple-client" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <Terminal class="h-4 w-4" />
            Live Demo
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: Real-time timeline, post creation, basic profiles
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">Nostr Chat Application</h3>
        <p class="text-gray-600 mb-4">Real-time chat using Nostr's messaging capabilities</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/nostr-chat-app" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="https://demo.shugur.com/chat" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <Terminal class="h-4 w-4" />
            Live Demo
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: Public channels, DMs, emoji reactions
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">Bot Framework</h3>
        <p class="text-gray-600 mb-4">Automated bot that responds to mentions and commands</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/nostr-bot-js" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="/guides/javascript/bot-tutorial" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <BookOpen class="h-4 w-4" />
            Tutorial
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: Command processing, auto-replies, rate limiting
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">React Component Library</h3>
        <p class="text-gray-600 mb-4">Reusable React components for Nostr applications</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/react-nostr-components" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="https://storybook.shugur.com/nostr" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <Terminal class="h-4 w-4" />
            Storybook
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: Profile cards, event feeds, connection status
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Best Practices -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Sparkles class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Best Practices</h2>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">🔐 Security</h3>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
            <span>Never expose private keys in client-side code</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
            <span>Use secure key storage (browser: localStorage with encryption, Node.js: environment variables)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
            <span>Validate all events before processing</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
            <span>Implement rate limiting for publishing</span>
          </li>
        </ul>
      </div>

      <div>
        <div class="flex items-center gap-2 mb-4">
          <Zap class="h-5 w-5 text-primary" />
          <h3 class="font-semibold text-lg">Performance</h3>
        </div>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Use appropriate filter limits to avoid overwhelming clients</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Close subscriptions when no longer needed</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Implement connection pooling for multiple relays</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Cache events locally to reduce relay queries</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready to Build More?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You now have the foundation to build powerful Nostr applications with JavaScript. Explore these next steps:
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <a href="/guides/typescript" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="p-2 bg-blue-500/10 rounded-full mb-3">
          <FileText class="h-6 w-6 text-blue-500" />
        </div>
        <h3 class="font-semibold mb-2">TypeScript Guide</h3>
        <p class="text-sm opacity-90">Add type safety to your Nostr applications</p>
      </a>
      
      <a href="/examples" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="p-2 bg-green-500/10 rounded-full mb-3">
          <Code class="h-6 w-6 text-green-500" />
        </div>
        <h3 class="font-semibold mb-2">More Examples</h3>
        <p class="text-sm opacity-90">Explore complete project examples</p>
      </a>
      
      <a href="/nips" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="p-2 bg-purple-500/10 rounded-full mb-3">
          <BookOpen class="h-6 w-6 text-purple-500" />
        </div>
        <h3 class="font-semibold mb-2">Explore NIPs</h3>
        <p class="text-sm opacity-90">Learn about supported protocol features</p>
      </a>
    </div>
  </div>
</section>
