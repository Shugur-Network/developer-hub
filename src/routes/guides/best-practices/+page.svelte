<script>
  import { BookOpen, Settings, Shield, Zap, Users } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Best Practices - Nostr Development with Shugur</title>
  <meta name="description" content="Security, performance, and user experience best practices for building Nostr applications." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <BookOpen class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Best Practices
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Security, performance, and user experience tips
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Intermediate</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Security</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Performance</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">UX</span>
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
      This comprehensive guide for Nostr development best practices is currently being written. 
      It will cover security considerations, performance optimization, and user experience best practices.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8 text-left">
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Shield class="h-8 w-8 text-green-600" />
        </div>
        <h3 class="font-semibold mb-2">Security Best Practices</h3>
        <p class="text-sm text-gray-600">Key security considerations for Nostr applications</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Zap class="h-8 w-8 text-emerald-600" />
        </div>
        <h3 class="font-semibold mb-2">Performance Optimization</h3>
        <p class="text-sm text-gray-600">Optimize your app for speed and efficiency</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="flex justify-center mb-3">
          <Users class="h-8 w-8 text-blue-600" />
        </div>
        <h3 class="font-semibold mb-2">User Experience</h3>
        <p class="text-sm text-gray-600">Create intuitive and accessible user interfaces</p>
      </div>
    </div>
    
    <div class="flex justify-center gap-4">
      <a href="/guides" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        Back to Guides
      </a>
      <a href="/guides" class="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
        Quick Start Guide
      </a>
    </div>
  </div>
</section>
