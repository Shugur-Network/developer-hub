<script>
  import { Smartphone, Settings } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Swift Guide - Nostr Development with Shugur</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Smartphone class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Swift Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build native iOS and macOS Nostr apps with Swift
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">iOS Native</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">NostrSDK</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">SwiftUI</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">macOS</span>
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
      This comprehensive Swift guide for Nostr development is currently being written. 
      It will cover NostrSDK, SwiftUI integration, and building native iOS/macOS apps.
    </p>
    <div class="flex justify-center gap-4">
      <a href="/guides" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        Back to Guides
      </a>
      <a href="/guides/typescript" class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
        TypeScript Guide
      </a>
    </div>
  </div>
</section>
