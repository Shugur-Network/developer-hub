<script>
  import { Copy, CheckCircle, Key, Globe, Zap, Lock, Users, Server, MessageSquare, Shield, Network, Database, XCircle, Settings } from 'lucide-svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Core Concepts - Nostr Development with Shugur</title>
  <meta name="description" content="Master the fundamental building blocks of the Nostr protocol to build robust decentralized applications." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <MessageSquare class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">Protocol Fundamentals</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Nostr Core Concepts
    </h1>
    <p class="text-xl opacity-90 mb-8">
      Master the fundamental building blocks of the Nostr protocol. Understand keys, events, relays, and NIPs to build robust decentralized applications.
    </p>
    
    <div class="flex flex-wrap gap-3">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Fundamentals</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Protocol</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Architecture</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Cryptography</span>
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span>What is Nostr?</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span>Cryptographic Keys</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span>Events & Messages</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span>Relays & Network</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span>NIPs & Extensions</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span>Security Model</span>
      </div>
    </div>
  </div>
</section>

<!-- What is Nostr -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <MessageSquare class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">What is Nostr?</h2>
    </div>
    
    <div class="prose prose-lg max-w-none">
      <p class="text-gray-600 mb-6">
        Nostr (Notes and Other Stuff Transmitted by Relays) is a simple, open protocol designed to facilitate decentralized, censorship-resistant social networking. Unlike traditional platforms that rely on centralized servers, Nostr operates through a network of independent relays and clients, ensuring users have full control over their data and interactions.
      </p>
      
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 class="font-semibold text-purple-800 mb-3 flex items-center gap-2">
          <Shield class="h-5 w-5" />
          Why Nostr is Revolutionary
        </h3>
        <p class="text-gray-700 mb-4">
          Nostr eliminates single points of failure and censorship by design. Your identity is secured by cryptographic keys that only you control, 
          not by any centralized platform. This means no entity can permanently ban you, delete your content, or restrict your communications.
        </p>
        <ul class="text-sm text-gray-700 space-y-2">
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span><strong>User Sovereignty:</strong> You maintain ownership of your identity through cryptographic key pairs</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span><strong>Censorship Resistance:</strong> The distributed nature ensures content cannot be globally censored</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span><strong>Protocol Simplicity:</strong> Emphasizes simplicity, making it reliable, efficient, and easy to implement</span>
          </li>
        </ul>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="border rounded-lg p-6 text-center">
          <div class="flex justify-center mb-3">
            <Key class="h-8 w-8 text-purple-600" />
          </div>
          <h3 class="font-semibold mb-2">Self-Sovereign Identity</h3>
          <p class="text-sm text-gray-600">You control your identity through cryptographic keys, not usernames or emails</p>
        </div>
        <div class="border rounded-lg p-6 text-center">
          <div class="flex justify-center mb-3">
            <Globe class="h-8 w-8 text-purple-600" />
          </div>
          <h3 class="font-semibold mb-2">Decentralized Network</h3>
          <p class="text-sm text-gray-600">No single point of failure. Data flows through multiple independent relays</p>
        </div>
        <div class="border rounded-lg p-6 text-center">
          <div class="flex justify-center mb-3">
            <Zap class="h-8 w-8 text-purple-600" />
          </div>
          <h3 class="font-semibold mb-2">Simple Protocol</h3>
          <p class="text-sm text-gray-600">Minimal, extensible design that's easy to implement and understand</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Keys Section -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Key class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">Cryptographic Keys: Your Digital Identity</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      In Nostr, your identity is defined by a cryptographic keypair. This is fundamentally different from traditional social networks where you're identified by usernames or email addresses.
    </p>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg border">
        <div class="flex items-center gap-3 mb-3">
          <Lock class="h-6 w-6 text-red-600" />
          <h3 class="font-semibold text-lg">Private Key (nsec)</h3>
        </div>
        <p class="text-gray-600 mb-4">Your private key is your secret identity. It's used to sign events and prove you authored them. <strong>Never share this with anyone!</strong></p>
        <div class="bg-gray-100 p-3 rounded text-sm font-mono text-gray-800">nsec1abc...def</div>
      </div>
      <div class="bg-white p-6 rounded-lg border">
        <div class="flex items-center gap-3 mb-3">
          <Key class="h-6 w-6 text-green-600" />
          <h3 class="font-semibold text-lg">Public Key (npub)</h3>
        </div>
        <p class="text-gray-600 mb-4">Your public key is your address on Nostr. Others use it to find you and verify your events. Safe to share publicly.</p>
        <div class="bg-gray-100 p-3 rounded text-sm font-mono text-gray-800">npub1xyz...789</div>
      </div>
    </div>
    
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <div class="flex items-start gap-3">
        <Shield class="h-6 w-6 text-blue-600 mt-1" />
        <div>
          <h4 class="font-semibold text-blue-900 mb-2">Security Best Practice</h4>
          <p class="text-blue-800 text-sm">Always generate your keys locally and store your private key securely. Consider using hardware wallets or secure key management tools for production applications.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Events Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <MessageSquare class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">Events: The Building Blocks</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      Everything in Nostr is an "event" - whether it's a text note, a like, a profile update, or any other action. Events are JSON objects that contain your message and metadata.
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Event Structure</span>
        <button 
          on:click={() => copyToClipboard(`{
  "id": "abc123...",
  "pubkey": "your-public-key",
  "created_at": 1693920000,
  "kind": 1,
  "tags": [],
  "content": "Hello Nostr!",
  "sig": "signature..."
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`{
  "id": "abc123...",           // Event ID (SHA256 hash)
  "pubkey": "your-public-key", // Your public key  
  "created_at": 1693920000,    // Unix timestamp
  "kind": 1,                   // Event type (1 = text note)
  "tags": [],                  // Metadata tags
  "content": "Hello Nostr!",    // Your message
  "sig": "signature..."        // Cryptographic signature
}`}</code></pre>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-3">Kind 1: Text Notes</h4>
        <p class="text-sm text-gray-600">The most common event type for sharing thoughts, updates, and messages.</p>
      </div>
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-3">Kind 0: Metadata</h4>
        <p class="text-sm text-gray-600">Profile information like name, bio, and picture URL.</p>
      </div>
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-3">Kind 3: Contacts</h4>
        <p class="text-sm text-gray-600">Your following list and relay recommendations.</p>
      </div>
    </div>
  </div>
</section>

<!-- Relays Section -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Server class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">Relays: The Network Infrastructure</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      Relays are simple servers that store and forward events. Unlike traditional social networks, you can connect to multiple relays simultaneously, and anyone can run a relay. However, managing multiple relay connections adds complexity to client applications.
    </p>
    
    <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
      <h3 class="font-semibold text-green-800 mb-3 flex items-center gap-2">
        <Shield class="h-5 w-5" />
        <span class="font-brand">Shugur</span> Distributed Relay Cluster
      </h3>
      <p class="text-green-700 text-sm mb-3">
        Shugur solves the multi-relay complexity problem with a distributed cluster architecture. Connect to a single endpoint and get automatic high availability:
      </p>
      <ul class="text-green-700 text-sm space-y-1">
        <li>• <strong>Single Connection:</strong> Connect to one endpoint, access the entire cluster</li>
        <li>• <strong>Automatic Failover:</strong> If one relay fails, others seamlessly take over</li>
        <li>• <strong>Data Redundancy:</strong> Events replicated across multiple nodes in real-time</li>
        <li>• <strong>Simplified Development:</strong> No complex multi-relay management in your app</li>
      </ul>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 class="font-semibold mb-4 flex items-center gap-2">
          <Network class="h-5 w-5 text-purple-600" />
          Multi-Relay Strategy
        </h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-500 mt-0.5" />
            <span>Connect to 3-5 relays for redundancy</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-500 mt-0.5" />
            <span>Choose geographically diverse relays</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-500 mt-0.5" />
            <span>Include both public and specialized relays</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4 flex items-center gap-2">
          <Database class="h-5 w-5 text-purple-600" />
          Relay Types
        </h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><strong>Public:</strong> Open to everyone (like wss://shu01.shugur.net)</li>
          <li><strong>Paid:</strong> Subscription-based for better quality</li>
          <li><strong>Private:</strong> Invite-only or personal relays</li>
          <li><strong>Specialized:</strong> Topic or community-specific</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-green-50 p-6 rounded-lg border border-green-200">
      <div class="flex items-start gap-3">
        <Globe class="h-6 w-6 text-green-600 mt-1" />
        <div>
          <h4 class="font-semibold text-green-900 mb-2">Shugur Relay</h4>
          <p class="text-green-800 text-sm">Connect to <code class="bg-green-100 px-2 py-1 rounded">wss://shu01.shugur.net</code> - a high-performance relay optimized for developers with excellent uptime and low latency.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NIPs Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Zap class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">NIPs: Nostr Improvement Proposals</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      NIPs are standardized extensions to the Nostr protocol. They define new event types, features, and behaviors that clients and relays can implement.
    </p>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-2">NIP-01: Basic Protocol</h4>
        <p class="text-sm text-gray-600">Core specification for events, signatures, and relay communication.</p>
      </div>
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-2">NIP-02: Contact List</h4>
        <p class="text-sm text-gray-600">Follow lists and relay recommendations for users.</p>
      </div>
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-2">NIP-04: Encrypted DMs</h4>
        <p class="text-sm text-gray-600">Private messaging using end-to-end encryption.</p>
      </div>
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-2">NIP-05: DNS Verification</h4>
        <p class="text-sm text-gray-600">Link your Nostr identity to a domain name for verification.</p>
      </div>
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-2">NIP-09: Event Deletion</h4>
        <p class="text-sm text-gray-600">Request deletion of your own events from relays.</p>
      </div>
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold mb-2">NIP-11: Relay Information</h4>
        <p class="text-sm text-gray-600">Discover relay capabilities and policies.</p>
      </div>
    </div>
    
    <div class="mt-8 text-center">
      <a href="/nips" class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
        <Zap class="h-4 w-4" />
        View All Supported NIPs
      </a>
    </div>
  </div>
</section>

<!-- Security Model -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Shield class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">Security Model</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      Nostr's security is built on cryptographic primitives and decentralized architecture. Understanding the security model is crucial for building robust applications.
    </p>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold mb-4 text-green-700">What Nostr Protects Against</h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-500 mt-0.5" />
            <span>Identity impersonation (via signatures)</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-500 mt-0.5" />
            <span>Message tampering (via cryptographic hashes)</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-500 mt-0.5" />
            <span>Censorship (via multiple relays)</span>
          </li>
          <li class="flex items-start gap-2">
            <CheckCircle class="h-4 w-4 text-green-500 mt-0.5" />
            <span>Account seizure (you own your keys)</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4 text-red-700">What You Must Protect</h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2">
            <XCircle class="h-4 w-4 text-red-500 mt-0.5" />
            <span>Private key security (your responsibility)</span>
          </li>
          <li class="flex items-start gap-2">
            <XCircle class="h-4 w-4 text-red-500 mt-0.5" />
            <span>Metadata privacy (relay can see IP/timing)</span>
          </li>
          <li class="flex items-start gap-2">
            <XCircle class="h-4 w-4 text-red-500 mt-0.5" />
            <span>Content moderation (relays can filter)</span>
          </li>
          <li class="flex items-start gap-2">
            <XCircle class="h-4 w-4 text-red-500 mt-0.5" />
            <span>Spam and abuse (protocol-level solutions needed)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-purple-600 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready to Start Building?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Now that you understand the core concepts, it's time to start building your first Nostr application.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <a href="/guides" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="flex justify-center mb-3">
          <Zap class="h-8 w-8 text-white" />
        </div>
        <h3 class="font-semibold mb-2">Quick Start Guide</h3>
        <p class="text-sm opacity-90">Get up and running in 5 minutes with native tools</p>
      </a>
      <a href="/nips" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="flex justify-center mb-3">
          <MessageSquare class="h-8 w-8 text-white" />
        </div>
        <h3 class="font-semibold mb-2">Explore NIPs</h3>
        <p class="text-sm opacity-90">Discover all supported protocol extensions</p>
      </a>
      <a href="/guides/advanced" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="flex justify-center mb-3">
          <Settings class="h-8 w-8 text-white" />
        </div>
        <h3 class="font-semibold mb-2">Development Guidance</h3>
        <p class="text-sm opacity-90">Professional development practices and guidance</p>
      </a>
    </div>
  </div>
</section>
