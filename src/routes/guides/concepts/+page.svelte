<script>
  import { Key, FileText, Globe, Users, Lock, Zap } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Nostr Core Concepts - Shugur Developer Hub</title>
  <meta name="description" content="Understand the fundamental concepts of the Nostr protocol: keys, events, relays, and NIPs. Essential knowledge for Nostr developers." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-white/20 rounded-full">
        <FileText class="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Core Concepts
    </h1>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Master the fundamental building blocks of the Nostr protocol to build robust decentralized applications.
    </p>
  </div>
</section>

<!-- What is Nostr -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">What is Nostr?</h2>
    
    <div class="prose prose-lg max-w-none mb-8">
      <p class="text-gray-600 text-lg mb-6">
        <strong>Nostr</strong> (Notes and Other Stuff Transmitted by Relays) is a simple, open protocol that enables 
        truly decentralized social networks and applications. Unlike traditional platforms, Nostr doesn't rely on 
        a central authority or server.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="text-center">
        <div class="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Key class="h-8 w-8 text-primary" />
        </div>
        <h3 class="font-semibold text-lg mb-2">Self-Sovereign Identity</h3>
        <p class="text-gray-600">You control your identity through cryptographic keys, not usernames or emails.</p>
      </div>
      
      <div class="text-center">
        <div class="mx-auto w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
          <Globe class="h-8 w-8 text-blue-500" />
        </div>
        <h3 class="font-semibold text-lg mb-2">Decentralized Network</h3>
        <p class="text-gray-600">No single point of failure. Data flows through multiple independent relays.</p>
      </div>
      
      <div class="text-center">
        <div class="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
          <Zap class="h-8 w-8 text-green-500" />
        </div>
        <h3 class="font-semibold text-lg mb-2">Simple Protocol</h3>
        <p class="text-gray-600">Minimal, extensible design that's easy to implement and understand.</p>
      </div>
    </div>
  </div>
</section>

<!-- Keys -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Key class="h-8 w-8 text-primary" />
      <h2 class="text-2xl font-display">Keys: Your Digital Identity</h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">How Keys Work</h3>
        <p class="text-gray-600 mb-6">
          In Nostr, your identity is defined by a cryptographic keypair. Unlike traditional social media 
          where you register with an email and password, Nostr uses public-key cryptography.
        </p>
        
        <div class="space-y-4">
          <div class="bg-white p-4 border rounded-lg">
            <h4 class="font-semibold text-primary mb-2">🔒 Private Key (nsec)</h4>
            <p class="text-sm text-gray-600">
              Your private key is your secret identity. It's used to sign events and prove you authored them. 
              <strong>Never share this with anyone!</strong>
            </p>
          </div>
          
          <div class="bg-white p-4 border rounded-lg">
            <h4 class="font-semibold text-blue-600 mb-2">🔓 Public Key (npub)</h4>
            <p class="text-sm text-gray-600">
              Your public key is your address on Nostr. Others use it to find you, send you messages, 
              and verify that events came from you.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold text-lg mb-4">Key Formats</h3>
        <div class="space-y-4">
          <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <div class="text-sm text-gray-400 mb-2">Private Key (Hex)</div>
            <code class="text-xs break-all">d8b5a6c7e9f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7</code>
          </div>
          
          <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <div class="text-sm text-gray-400 mb-2">Private Key (Bech32 - nsec)</div>
            <code class="text-xs break-all">nsec1mz66d3l5v3sku5k43xrshd2zrs0e0xgdt3xk7hnxmu5v9kqmp2kqqt7srf</code>
          </div>
          
          <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <div class="text-sm text-gray-400 mb-2">Public Key (Bech32 - npub)</div>
            <code class="text-xs break-all">npub1d8h5k2j9xm7n4p3v8b6s1a5c9e2f4h7k0m3q6t9w2e5r8u1i4o7p0s3d6</code>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div class="flex items-center gap-2 mb-2">
            <Lock class="h-4 w-4 text-yellow-600" />
            <span class="font-medium text-yellow-800">Security Best Practices</span>
          </div>
          <ul class="text-sm text-yellow-700 space-y-1">
            <li>• Store private keys securely (password managers, hardware wallets)</li>
            <li>• Never send private keys over insecure channels</li>
            <li>• Use bech32 format (nsec/npub) for better error detection</li>
            <li>• Generate keys offline when possible</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Events -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <FileText class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">Events: The Building Blocks</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      Everything in Nostr is an event. Posts, reactions, follows, profile updates - they're all structured as events 
      with specific formats and signatures.
    </p>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">Event Structure</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
          <pre class="text-sm overflow-x-auto"><code>{`{
  "id": "event_hash_in_hex",
  "pubkey": "author_public_key",
  "created_at": 1672531200,
  "kind": 1,
  "tags": [
    ["e", "referenced_event_id"],
    ["p", "mentioned_pubkey"]
  ],
  "content": "Hello Nostr!",
  "sig": "event_signature"
}`}</code></pre>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold text-lg mb-4">Common Event Kinds</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div class="font-medium">Text Note</div>
              <div class="text-sm text-gray-600">Regular posts and messages</div>
            </div>
          </div>
          
          <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div class="font-medium">Contact List</div>
              <div class="text-sm text-gray-600">Following relationships</div>
            </div>
          </div>
          
          <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <div class="font-medium">Encrypted DM</div>
              <div class="text-sm text-gray-600">Private direct messages</div>
            </div>
          </div>
          
          <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">7</div>
            <div>
              <div class="font-medium">Reaction</div>
              <div class="text-sm text-gray-600">Likes, dislikes, emoji reactions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
      <h4 class="font-semibold text-blue-800 mb-3">Event Validation</h4>
      <p class="text-blue-700 text-sm mb-3">
        Every event must be properly signed and validated. The signature proves the event was created by the holder of the private key.
      </p>
      <div class="text-sm text-blue-600">
        <strong>Hash:</strong> SHA-256 of the serialized event data<br>
        <strong>Signature:</strong> Schnorr signature using secp256k1
      </div>
    </div>
  </div>
</section>

<!-- Relays -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Globe class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">Relays: The Network Infrastructure</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      Relays are simple servers that accept, store, and forward events. They form the backbone of the Nostr network, 
      providing redundancy and ensuring your messages reach their destination.
    </p>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">How Relays Work</h3>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
            <div>
              <div class="font-medium">Accept Events</div>
              <div class="text-sm text-gray-600">Clients send signed events to relays via WebSocket</div>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
            <div>
              <div class="font-medium">Validate & Store</div>
              <div class="text-sm text-gray-600">Relays verify signatures and store valid events</div>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
            <div>
              <div class="font-medium">Forward & Query</div>
              <div class="text-sm text-gray-600">Other clients can query and receive events from relays</div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">Shugur Relay</h4>
          <p class="text-green-700 text-sm mb-2">
            <code class="bg-white px-2 py-1 rounded">wss://shugur.com</code>
          </p>
          <p class="text-green-600 text-sm">
            Production-ready relay with comprehensive NIP support and 99.9% uptime.
          </p>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold text-lg mb-4">Relay Diversity</h3>
        <p class="text-gray-600 mb-4">
          Using multiple relays increases redundancy and censorship resistance. Different relays may have different policies.
        </p>
        
        <div class="space-y-3">
          <div class="p-3 bg-white border rounded-lg">
            <div class="font-medium text-sm">Public Relays</div>
            <div class="text-xs text-gray-600">Open to everyone, may have rate limits</div>
          </div>
          
          <div class="p-3 bg-white border rounded-lg">
            <div class="font-medium text-sm">Private Relays</div>
            <div class="text-xs text-gray-600">Restricted access, often for specific communities</div>
          </div>
          
          <div class="p-3 bg-white border rounded-lg">
            <div class="font-medium text-sm">Paid Relays</div>
            <div class="text-xs text-gray-600">Premium features, higher limits, better reliability</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NIPs -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Users class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">NIPs: Protocol Evolution</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      Nostr Improvement Proposals (NIPs) define how the protocol works and evolves. They specify everything from 
      basic event handling to advanced features like encrypted messaging.
    </p>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
        <h3 class="font-semibold text-blue-800 mb-2">Core NIPs</h3>
        <p class="text-blue-600 text-sm mb-3">Essential protocol features</p>
        <div class="space-y-1 text-xs">
          <div>• NIP-01: Basic protocol</div>
          <div>• NIP-02: Contact lists</div>
          <div>• NIP-09: Event deletion</div>
        </div>
      </div>
      
      <div class="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg">
        <h3 class="font-semibold text-green-800 mb-2">Communication</h3>
        <p class="text-green-600 text-sm mb-3">Messaging and social features</p>
        <div class="space-y-1 text-xs">
          <div>• NIP-04: Encrypted DMs</div>
          <div>• NIP-25: Reactions</div>
          <div>• NIP-28: Public chat</div>
        </div>
      </div>
      
      <div class="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
        <h3 class="font-semibold text-purple-800 mb-2">Infrastructure</h3>
        <p class="text-purple-600 text-sm mb-3">Relay and network features</p>
        <div class="space-y-1 text-xs">
          <div>• NIP-11: Relay info</div>
          <div>• NIP-15: End of events</div>
          <div>• NIP-20: Command results</div>
        </div>
      </div>
    </div>
    
    <div class="mt-8 text-center">
      <a href="/nips" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        <Users class="h-4 w-4" />
        View All Supported NIPs
      </a>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready to Start Building?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Now that you understand the core concepts, it's time to start building your first Nostr application.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <a href="/guides/getting-started" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">🚀</div>
        <h3 class="font-semibold mb-2">Quick Start</h3>
        <p class="text-sm opacity-90">Get up and running in 5 minutes</p>
      </a>
      
      <a href="/guides/javascript" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">💻</div>
        <h3 class="font-semibold mb-2">Choose Your Language</h3>
        <p class="text-sm opacity-90">Language-specific guides and examples</p>
      </a>
      
      <a href="/examples" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">🔧</div>
        <h3 class="font-semibold mb-2">Explore Examples</h3>
        <p class="text-sm opacity-90">Complete project templates</p>
      </a>
    </div>
  </div>
</section>
