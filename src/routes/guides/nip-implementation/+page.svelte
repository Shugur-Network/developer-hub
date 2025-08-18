<script>
  import { Code, Settings, BookOpen, Layers, Zap } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Implementing NIPs - Nostr Development with Shugur</title>
  <meta name="description" content="Deep dive into Nostr Improvement Proposals (NIPs) and how to implement them in your applications." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Code class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Implementing NIPs
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Deep dive into Nostr Improvement Proposals
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Advanced</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">NIPs</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Protocol</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Standards</span>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex items-center gap-3 justify-center mb-6">
      <Settings class="h-6 w-6 text-gray-500" />
      <h2 class="text-2xl font-display">Coming Soon</h2>
    </div>
    <p class="text-gray-600 mb-8">
      This comprehensive guide for implementing Nostr Improvement Proposals (NIPs) is currently being written. 
      It will cover NIP standards, implementation patterns, and best practices for protocol compliance.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8 text-left">
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <BookOpen class="h-8 w-8 text-purple-600" />
        </div>
        <h3 class="font-semibold mb-2">NIP Standards</h3>
        <p class="text-sm text-gray-600">Learn about the official Nostr Improvement Proposals and their specifications</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Layers class="h-8 w-8 text-indigo-600" />
        </div>
        <h3 class="font-semibold mb-2">Implementation Patterns</h3>
        <p class="text-sm text-gray-600">Common patterns and best practices for implementing NIPs</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Zap class="h-8 w-8 text-blue-600" />
        </div>
        <h3 class="font-semibold mb-2">Testing & Validation</h3>
        <p class="text-sm text-gray-600">How to test and validate your NIP implementations</p>
      </div>
    </div>
    
    <div class="flex justify-center gap-4">
      <a href="/guides/advanced" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        Development Guidance
      </a>
      <a href="/nips" class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
        Browse NIPs
      </a>
    </div>
  </div>
</section>
