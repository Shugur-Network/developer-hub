<script>
  import { Zap, Settings, Server, Database, Globe } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Running Your Own Relay - Nostr Development with Shugur</title>
  <meta name="description" content="Set up and configure your own Nostr relay for development, testing, or production use." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Zap class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Running Your Own Relay
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Set up and configure your own Nostr relay
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Advanced</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Infrastructure</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Deployment</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Performance</span>
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
      This comprehensive guide for setting up and running your own Nostr relay is currently being written. 
      It will cover relay implementation, deployment strategies, and performance optimization.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8 text-left">
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Server class="h-8 w-8 text-orange-600" />
        </div>
        <h3 class="font-semibold mb-2">Relay Implementation</h3>
        <p class="text-sm text-gray-600">Choose and implement the right relay software for your needs</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Database class="h-8 w-8 text-red-600" />
        </div>
        <h3 class="font-semibold mb-2">Deployment & Scaling</h3>
        <p class="text-sm text-gray-600">Deploy your relay and scale it for production use</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Globe class="h-8 w-8 text-blue-600" />
        </div>
        <h3 class="font-semibold mb-2">Performance & Monitoring</h3>
        <p class="text-sm text-gray-600">Monitor performance and optimize your relay operations</p>
      </div>
    </div>
    
    <div class="flex justify-center gap-4">
      <a href="/guides/advanced" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        Development Guidance
      </a>
      <a href="/guides/relay-connection" class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
        Connect to Relay
      </a>
    </div>
  </div>
</section>
