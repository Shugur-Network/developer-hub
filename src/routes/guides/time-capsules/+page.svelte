<script>
  import { Clock, ExternalLink, FileText, Code, CheckCircle, Globe, Lock, Zap, Settings, ArrowRight, Copy } from 'lucide-svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Time Capsules Guide - Revolutionary Timelock Encryption with Nostr</title>
  <meta name="description" content="Learn how to use Time Capsules - revolutionary timelock encryption that automatically decrypts messages at future times using drand network integration." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-pink-600 to-purple-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Clock class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Time Capsules
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Revolutionary timelock encryption for the Nostr protocol
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Timelock Encryption</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Drand Network</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Future Decryption</span>
    </div>
  </div>
</section>

<!-- Quick Links -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex flex-wrap gap-4 justify-center">
      <a 
        href="http://capsules.shugur.com" 
        target="_blank"
        class="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
      >
        <ExternalLink class="h-5 w-5" />
        Try Live Demo
      </a>
      <a 
        href="https://github.com/Shugur-Network/NIP-XX_Time-Capsules" 
        target="_blank"
        class="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors font-medium"
      >
        <FileText class="h-5 w-5" />
        Read Specification
      </a>
      <a 
        href="https://github.com/Shugur-Network/time-capsules" 
        target="_blank"
        class="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors font-medium"
      >
        <Code class="h-5 w-5" />
        View Source Code
      </a>
    </div>
  </div>
</section>

<!-- What are Time Capsules -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-3xl font-display text-center mb-8">What are Time Capsules?</h2>
    
    <div class="prose prose-lg max-w-none mb-8">
      <p class="text-gray-700 text-lg leading-relaxed">
        Time Capsules represent a revolutionary advancement in cryptographic messaging, allowing you to create messages that can only be decrypted at a specific future time. Unlike traditional encryption where you control when to decrypt, Time Capsules use the drand network's distributed randomness beacon to create truly time-bound encryption.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
        <div class="flex items-center gap-3 mb-4">
          <Clock class="h-6 w-6 text-pink-600" />
          <h3 class="font-semibold text-lg">Automatic Decryption</h3>
        </div>
        <p class="text-gray-700">
          Messages automatically become readable at the specified future time, powered by the drand network's distributed beacon.
        </p>
      </div>

      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
        <div class="flex items-center gap-3 mb-4">
          <Globe class="h-6 w-6 text-blue-600" />
          <h3 class="font-semibold text-lg">Decentralized Trust</h3>
        </div>
        <p class="text-gray-700">
          No single entity controls when decryption happens - it's guaranteed by the drand network's cryptographic beacon.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-3xl font-display text-center mb-12">How Time Capsules Work</h2>
    
    <div class="grid md:grid-cols-4 gap-6 mb-12">
      <div class="text-center">
        <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl font-bold text-pink-600">1</span>
        </div>
        <h3 class="font-semibold mb-2">Create Message</h3>
        <p class="text-sm text-gray-600">Write your message and choose when it should be revealed</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl font-bold text-purple-600">2</span>
        </div>
        <h3 class="font-semibold mb-2">Timelock Encrypt</h3>
        <p class="text-sm text-gray-600">Message is encrypted using future drand randomness that doesn't exist yet</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl font-bold text-blue-600">3</span>
        </div>
        <h3 class="font-semibold mb-2">Publish to Nostr</h3>
        <p class="text-sm text-gray-600">Encrypted capsule is published as a Nostr event (kind 1041)</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl font-bold text-green-600">4</span>
        </div>
        <h3 class="font-semibold mb-2">Auto Decrypt</h3>
        <p class="text-sm text-gray-600">When the time arrives, anyone can decrypt using the drand beacon</p>
      </div>
    </div>
  </div>
</section>

<!-- Two Modes -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-3xl font-display text-center mb-12">Two Capsule Modes</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Public Mode -->
      <div class="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
        <div class="flex items-center gap-3 mb-4">
          <Globe class="h-6 w-6 text-blue-600" />
          <h3 class="font-semibold text-xl text-blue-800">Public Time Capsules</h3>
        </div>
        <p class="text-gray-700 mb-4">
          Anyone can decrypt the message once the specified time arrives. Perfect for public announcements, predictions, or time-delayed revelations.
        </p>
        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Completely public decryption</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>No recipient restrictions</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Perfect for announcements</span>
          </div>
        </div>
      </div>

      <!-- Private Mode -->
      <div class="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
        <div class="flex items-center gap-3 mb-4">
          <Lock class="h-6 w-6 text-purple-600" />
          <h3 class="font-semibold text-xl text-purple-800">Private Time Capsules</h3>
        </div>
        <p class="text-gray-700 mb-4">
          Only specific recipients can decrypt the message after the time arrives. Combines timelock encryption with recipient-specific encryption using NIP-44 and NIP-59.
        </p>
        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Recipient-specific decryption</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>NIP-44 v2 encryption</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>NIP-59 gift wrapping</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Use Cases -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-3xl font-display text-center mb-12">Real-World Use Cases</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl border">
        <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
          <Zap class="h-6 w-6 text-yellow-600" />
        </div>
        <h3 class="font-semibold mb-2">Future Predictions</h3>
        <p class="text-sm text-gray-600">Make predictions about future events and reveal them automatically when the time comes.</p>
      </div>

      <div class="bg-white p-6 rounded-xl border">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <Lock class="h-6 w-6 text-green-600" />
        </div>
        <h3 class="font-semibold mb-2">Scheduled Announcements</h3>
        <p class="text-sm text-gray-600">Schedule important announcements to be revealed at specific times without manual intervention.</p>
      </div>

      <div class="bg-white p-6 rounded-xl border">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Settings class="h-6 w-6 text-blue-600" />
        </div>
        <h3 class="font-semibold mb-2">Digital Will</h3>
        <p class="text-sm text-gray-600">Leave messages for the future that are automatically revealed after a specified time period.</p>
      </div>

      <div class="bg-white p-6 rounded-xl border">
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <Globe class="h-6 w-6 text-purple-600" />
        </div>
        <h3 class="font-semibold mb-2">Time-Sensitive Secrets</h3>
        <p class="text-sm text-gray-600">Share sensitive information that should only be revealed after a specific event or time.</p>
      </div>

      <div class="bg-white p-6 rounded-xl border">
        <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
          <Code class="h-6 w-6 text-red-600" />
        </div>
        <h3 class="font-semibold mb-2">Coordinated Reveals</h3>
        <p class="text-sm text-gray-600">Coordinate simultaneous reveals across multiple parties without central coordination.</p>
      </div>

      <div class="bg-white p-6 rounded-xl border">
        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
          <Clock class="h-6 w-6 text-indigo-600" />
        </div>
        <h3 class="font-semibold mb-2">Time Capsule Messages</h3>
        <p class="text-sm text-gray-600">Send birthday wishes, anniversary messages, or other personal notes to be delivered in the future.</p>
      </div>
    </div>
  </div>
</section>

<!-- Technical Integration -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-3xl font-display text-center mb-8">Technical Integration</h2>
    
    <div class="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-gray-300">Example: Creating a Time Capsule Event</span>
        <button 
          on:click={() => copyToClipboard('wss://shu01.shugur.net')}
          class="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>{`{
  "kind": 1041,
  "content": "<encrypted_payload>",
  "tags": [
    ["tlock", "<drand_round>", "<mode>"],
    ["p", "<recipient_pubkey>"] // only for private mode
  ],
  "created_at": 1696118400,
  "pubkey": "...",
  "id": "...",
  "sig": "..."
}`}</pre>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-pink-50 p-6 rounded-xl border border-pink-200">
        <h3 class="font-semibold mb-3 text-pink-800">Implementation Resources</h3>
        <div class="space-y-3">
          <a 
            href="https://github.com/Shugur-Network/NIP-XX_Time-Capsules" 
            target="_blank"
            class="flex items-center gap-2 text-pink-700 hover:text-pink-800 text-sm"
          >
            <FileText class="h-4 w-4" />
            Complete NIP-XX Specification
          </a>
          <a 
            href="https://github.com/Shugur-Network/time-capsules" 
            target="_blank"
            class="flex items-center gap-2 text-pink-700 hover:text-pink-800 text-sm"
          >
            <Code class="h-4 w-4" />
            Reference Implementation
          </a>
          <a 
            href="http://capsules.shugur.com" 
            target="_blank"
            class="flex items-center gap-2 text-pink-700 hover:text-pink-800 text-sm"
          >
            <ExternalLink class="h-4 w-4" />
            Interactive Demo
          </a>
        </div>
      </div>

      <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h3 class="font-semibold mb-3 text-blue-800">Relay Support</h3>
        <div class="space-y-2 text-sm text-gray-700">
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Shugur Relay Network</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Event validation & storage</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Real-time broadcasting</span>
          </div>
          <div class="text-xs text-gray-500 mt-3">
            Connect to: <code>wss://shu01.shugur.net</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Get Started -->
<section class="py-16 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-3xl font-display mb-6">Start Using Time Capsules Today</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Experience the future of time-bound messaging with our live demo and comprehensive documentation.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="http://capsules.shugur.com" 
        target="_blank"
        class="px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
      >
        <ExternalLink class="h-5 w-5" />
        Try Interactive Demo
        <ArrowRight class="h-4 w-4" />
      </a>
      <a 
        href="https://github.com/Shugur-Network/NIP-XX_Time-Capsules" 
        target="_blank"
        class="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/20"
      >
        <FileText class="h-5 w-5" />
        Read Full Specification
      </a>
    </div>
  </div>
</section>