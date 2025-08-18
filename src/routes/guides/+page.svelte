<script>
  import { BookOpen, Code, Terminal, Globe, Layers, Zap, FileText, Smartphone, Server, Monitor, ExternalLink, Settings } from 'lucide-svelte';
  import UniversalQuickStart from '$lib/components/UniversalQuickStart.svelte';
  import { quickStartExamples } from '$lib/data/quickStartExamples.js';
  
  let selectedLanguage = 'javascript';
  
  const languageOptions = [
    { id: 'javascript', name: 'JavaScript', category: 'Web', color: 'text-yellow-600' },
    { id: 'typescript', name: 'TypeScript', category: 'Web', color: 'text-blue-600' },
    { id: 'python', name: 'Python', category: 'Server', color: 'text-green-600' },
    { id: 'rust', name: 'Rust', category: 'Server', color: 'text-orange-600' },
    { id: 'go', name: 'Go', category: 'Server', color: 'text-cyan-600' },
    { id: 'swift', name: 'Swift', category: 'Mobile', color: 'text-gray-600' },
    { id: 'kotlin', name: 'Kotlin', category: 'Mobile', color: 'text-purple-600' },
    { id: 'flutter', name: 'Flutter', category: 'Mobile', color: 'text-blue-500' }
  ];
</script>

<svelte:head>
  <title>Nostr Development Guides - Shugur Developer Hub</title>
  <meta name="description" content="Complete guides for building on Nostr protocol. Learn with step-by-step tutorials in multiple programming languages." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary to-blue-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-white/20 rounded-full">
        <Zap class="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Quick Start Guide
    </h1>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Universal 5-step guide to handle Nostr events in any programming language. Get publishing and receiving events in minutes.
    </p>
  </div>
</section>

<!-- Quick Start Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-2xl font-display mb-4">Choose Your Language</h2>
      <p class="opacity-80 mb-8">Same 5 steps, different syntax - pick your preferred programming language</p>
      
      <!-- Language Selector -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        {#each languageOptions as lang}
          <button
            on:click={() => selectedLanguage = lang.id}
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all {selectedLanguage === lang.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
          >
            <span class={lang.color}>{lang.name}</span>
            <span class="text-xs text-gray-500 ml-2">{lang.category}</span>
          </button>
        {/each}
      </div>
    </div>

    <!-- Universal Quick Start Component -->
    <div class="max-w-4xl mx-auto">
      {#if quickStartExamples[selectedLanguage] || quickStartExamples.javascript}
        <UniversalQuickStart 
          language={languageOptions.find(l => l.id === selectedLanguage)?.name || 'JavaScript'}
          examples={quickStartExamples[selectedLanguage] || quickStartExamples.javascript} 
        />
      {:else}
        <div class="text-center py-8">
          <p class="text-gray-600">Loading examples...</p>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Additional Resources -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-12">Next Steps</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Understanding Nostr -->
      <div class="bg-white p-8 border rounded-xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-blue-100 rounded-lg">
            <BookOpen class="h-6 w-6 text-blue-600" />
          </div>
          <h3 class="font-semibold text-lg">Learn the Protocol</h3>
        </div>
        <p class="text-gray-600 mb-6">Deep dive into Nostr fundamentals and core concepts.</p>
        <div class="space-y-3">
          <a href="/guides/concepts" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-blue-600">Core Concepts</div>
            <div class="text-sm text-gray-600">Keys, events, relays, and security</div>
          </a>
          <a href="/nips" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-blue-600">Protocol Specs (NIPs)</div>
            <div class="text-sm text-gray-600">20+ NIPs supported by <span class="font-brand">Shugur</span> network</div>
          </a>
        </div>
      </div>

      <!-- Building Apps -->
      <div class="bg-white p-8 border rounded-xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-green-100 rounded-lg">
            <Code class="h-6 w-6 text-green-600" />
          </div>
          <h3 class="font-semibold text-lg">Build Applications</h3>
        </div>
        <p class="text-gray-600 mb-6">Production-ready guides for building robust Nostr apps.</p>
        <div class="space-y-3">
          <a href="/guides/architecture" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-green-600">System Architecture</div>
            <div class="text-sm text-gray-600">Design scalable applications</div>
          </a>
          <a href="/guides/performance" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-green-600">Performance & Optimization</div>
            <div class="text-sm text-gray-600">Fast, efficient implementations</div>
          </a>
          <a href="/guides/testing" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-green-600">Testing Strategies</div>
            <div class="text-sm text-gray-600">Comprehensive testing approaches</div>
          </a>
        </div>
      </div>

      <!-- Advanced Topics -->
      <div class="bg-white p-8 border rounded-xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-purple-100 rounded-lg">
            <Settings class="h-6 w-6 text-purple-600" />
          </div>
          <h3 class="font-semibold text-lg">Advanced Topics</h3>
        </div>
        <p class="text-gray-600 mb-6">Specialized guides for production deployments.</p>
        <div class="space-y-3">
          <a href="/guides/best-practices" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-purple-600">Best Practices</div>
            <div class="text-sm text-gray-600">Security and operational excellence</div>
          </a>
          <a href="/guides/analytics" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-purple-600">Analytics & Monitoring</div>
            <div class="text-sm text-gray-600">Track performance and usage</div>
          </a>
          <a href="/guides/machine-learning" class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="font-medium text-purple-600">Machine Learning</div>
            <div class="text-sm text-gray-600">AI-powered Nostr applications</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
