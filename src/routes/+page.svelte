<script>
  import { ExternalLink, BookOpen, Activity, Wrench, GitBranch, Zap, Code, Layers, Globe, FileText, Smartphone, Server, Monitor } from 'lucide-svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import StatusCard from '$lib/components/StatusCard.svelte';
</script>

<svelte:head>
  <title>Shugur Developer Hub - Nostr Protocol Development Guide</title>
  <meta name="description" content="Complete developer guide for building on Nostr protocol with Shugur relay. Multi-language examples and NIP implementations." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-dark to-gray-800 text-white py-20">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-primary/20 rounded-full">
        <Code class="h-12 w-12 text-primary" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Nostr Development Hub
    </h1>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Your complete guide to building decentralized applications on the Nostr protocol. 
      Learn with examples in multiple programming languages and connect to Shugur relay.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="/guides" 
        class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Start Building
      </a>
      <a 
        href="/nips" 
        class="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
      >
        Explore NIPs
      </a>
    </div>
  </div>
</section>

<!-- Quick Access Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-12">Start Your Nostr Journey</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <a 
        href="/guides" 
        class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
      >
        <BookOpen class="h-8 w-8 text-primary mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Development Guides</h3>
        <p class="text-sm opacity-80">Step-by-step tutorials organized by programming language</p>
      </a>
      
      <a 
        href="/nips" 
        class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
      >
        <Layers class="h-8 w-8 text-blue-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Supported NIPs</h3>
        <p class="text-sm opacity-80">Explore Nostr Improvement Proposals supported by Shugur relay</p>
      </a>
      
      <a 
        href="/examples" 
        class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
      >
        <Wrench class="h-8 w-8 text-green-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Code Examples</h3>
        <p class="text-sm opacity-80">Ready-to-use code snippets and complete project examples</p>
      </a>
    </div>
  </div>
</section>

<!-- Programming Languages Section -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-4">Multi-Language Support</h2>
    <p class="text-center opacity-80 mb-12">Choose your preferred programming language and get started quickly</p>
    
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      <a href="/guides/javascript" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <FileText class="h-6 w-6 text-yellow-500" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">JavaScript</div>
        <div class="text-xs text-gray-500 mt-1">Web</div>
      </a>
      <a href="/guides/typescript" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <FileText class="h-6 w-6 text-blue-600" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">TypeScript</div>
        <div class="text-xs text-gray-500 mt-1">Web</div>
      </a>
      <a href="/guides/python" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <Code class="h-6 w-6 text-green-600" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">Python</div>
        <div class="text-xs text-gray-500 mt-1">Backend</div>
      </a>
      <a href="/guides/rust" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <Server class="h-6 w-6 text-orange-600" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">Rust</div>
        <div class="text-xs text-gray-500 mt-1">Backend</div>
      </a>
      <a href="/guides/go" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <Zap class="h-6 w-6 text-cyan-600" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">Go</div>
        <div class="text-xs text-gray-500 mt-1">Backend</div>
      </a>
      <a href="/guides/swift" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <Smartphone class="h-6 w-6 text-gray-800" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">Swift</div>
        <div class="text-xs text-gray-500 mt-1">Mobile</div>
      </a>
      <a href="/guides/kotlin" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <Smartphone class="h-6 w-6 text-purple-600" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">Kotlin</div>
        <div class="text-xs text-gray-500 mt-1">Mobile</div>
      </a>
      <a href="/guides/flutter" class="p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group">
        <div class="flex justify-center mb-2">
          <Monitor class="h-6 w-6 text-blue-500" />
        </div>
        <div class="text-sm font-medium group-hover:text-primary">Flutter</div>
        <div class="text-xs text-gray-500 mt-1">Mobile</div>
      </a>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="relay" class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-4">Shugur Relay</h2>
    <p class="text-center opacity-80 mb-12">A reliable, developer-friendly Nostr relay with comprehensive NIP support</p>
    
    <div class="max-w-4xl mx-auto">
      <ProjectCard
        title="Shugur Nostr Relay"
        description="Production-ready Nostr relay with transparent policies, comprehensive documentation, and multi-NIP support for your decentralized applications."
        status="Production"
        statusColor="green"
        links={[
          { href: "wss://shu01.shugur.net", label: "Connect (wss://shu01.shugur.net)", icon: "zap" },
          { href: "/nips", label: "Supported NIPs", icon: "layers" },
          { href: "https://shugur.net", label: "Status & Uptime", icon: "activity" },
          { href: "/guides", label: "Integration Guide", icon: "book" }
        ]}
        features={[
          "WebSocket endpoint: wss://shu01.shugur.net",
          "22 NIPs supported: 01, 02, 03, 04, 09, 11, 15, 16, 17, 20, 22, 23, 24, 25, 28, 33, 40, 44, 50, 59, 65, 78",
          "Rate limiting with generous limits for developers",
          "Real-time monitoring and 99.9% uptime SLA",
          "Free for personal projects and open source"
        ]}
      />
    </div>
  </div>
</section>

<!-- Status Overview -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-12">System Status</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatusCard
        service="Nostr Relay"
        status="Operational"
        uptime="99.9%"
        endpoint="shugur.com"
      />
      <StatusCard
        service="Documentation"
        status="Operational"
        uptime="99.9%"
        endpoint="docs.shugur.com"
      />
      <StatusCard
        service="Status Page"
        status="Operational"
        uptime="99.8%"
        endpoint="shugur.net"
      />
      <StatusCard
        service="Company Site"
        status="Operational"
        uptime="99.9%"
        endpoint="shugur.com"
      />
    </div>
    
    <div class="text-center mt-8">
      <a 
        href="https://shugur.net" 
        class="inline-flex items-center gap-2 text-primary hover:underline"
      >
        View detailed status page
        <ExternalLink class="h-4 w-4" />
      </a>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="py-16 bg-dark text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-4">Join the Nostr Community</h2>
    <p class="opacity-90 mb-8">
      Questions about Nostr development or need help with Shugur relay? Connect with the community.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="https://github.com/Shugur-Network" 
        class="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
      >
        GitHub
      </a>
      <a 
        href="/guides/getting-started" 
        class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Get Started
      </a>
      <a 
        href="mailto:developers@shugur.com" 
        class="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
      >
        Email Support
      </a>
    </div>
  </div>
</section>
