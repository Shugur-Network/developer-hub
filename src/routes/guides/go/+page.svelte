<script>
  import { Zap, Settings } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Go Guide - Nostr Development with Shugur</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-cyan-600 to-blue-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Zap class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Go Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build scalable Nostr applications with Go
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Concurrency</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">go-nostr</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Goroutines</span>
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
      This comprehensive Go guide for Nostr development is currently being written. 
      It will cover go-nostr, goroutines, and building concurrent Nostr services.
    </p>
    <div class="flex justify-center gap-4">
      <a href="/guides" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        Back to Guides
      </a>
      <a href="/guides/python" class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
        Python Guide
      </a>
    </div>
  </div>
</section>
