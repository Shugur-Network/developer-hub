<script>
  import { 
    Globe, 
    Zap, 
    CheckCircle, 
    Server, 
    Activity, 
    Cpu, 
    Smartphone, 
    GitBranch, 
    Shield, 
    Settings, 
    Database, 
    Network, 
    Code, 
    BookOpen,
    ArrowRight
  } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Development Guidance - Shugur Developer Hub</title>
  <meta name="description" content="Professional development guidance for building production-ready Nostr applications: architecture, performance, testing, analytics, and more." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-dark to-gray-800 text-white py-16">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-primary/20 rounded-full">
        <Settings class="h-12 w-12 text-primary" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Development Guidance
    </h1>
    <p class="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
      Professional development guidance for building robust, scalable, and production-ready 
      Nostr applications with industry best practices.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="/guides" 
        class="px-6 py-3 bg-white/10 backdrop-blur text-white rounded-xl font-medium hover:bg-white/20 transition-all flex items-center gap-2"
      >
        <Code class="h-5 w-5" />
        Start with Quick Start
      </a>
      <a 
        href="/guides/concepts" 
        class="px-6 py-3 bg-white/10 backdrop-blur text-white rounded-xl font-medium hover:bg-white/20 transition-all flex items-center gap-2"
      >
        <BookOpen class="h-5 w-5" />
        Learn Core Concepts
      </a>
    </div>
  </div>
</section>

<!-- System Architecture & Design -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">System Architecture & Design</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Design scalable, resilient, and maintainable Nostr applications from the ground up.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="/guides/architecture" class="group p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-blue-50 rounded-lg mb-4 w-fit">
          <Globe class="h-6 w-6 text-blue-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">System Architecture</h3>
        <p class="text-sm text-gray-600 mb-4">Design scalable and resilient Nostr applications with proper patterns</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
      
      <a href="/guides/relay-connection" class="group p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-green-50 rounded-lg mb-4 w-fit">
          <Network class="h-6 w-6 text-green-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Relay Connection</h3>
        <p class="text-sm text-gray-600 mb-4">Advanced relay strategies, failover, and multi-relay management</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
      
      <a href="/guides/relay-setup" class="group p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-purple-50 rounded-lg mb-4 w-fit">
          <Database class="h-6 w-6 text-purple-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Relay Setup</h3>
        <p class="text-sm text-gray-600 mb-4">Deploy and configure your own Nostr relay infrastructure</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Performance & Optimization -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Performance & Optimization</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Optimize your applications for speed, efficiency, and scalability.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <a href="/guides/performance" class="group p-6 bg-white border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-yellow-50 rounded-lg mb-4 w-fit">
          <Zap class="h-6 w-6 text-yellow-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Performance Optimization</h3>
        <p class="text-sm text-gray-600 mb-4">Techniques to reduce latency and increase throughput</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
      
      <a href="/guides/best-practices" class="group p-6 bg-white border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-orange-50 rounded-lg mb-4 w-fit">
          <Shield class="h-6 w-6 text-orange-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Best Practices</h3>
        <p class="text-sm text-gray-600 mb-4">Security, privacy, and operational excellence</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Testing & Quality Assurance -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Testing & Quality Assurance</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Comprehensive testing strategies to ensure reliability and correctness.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <a href="/guides/testing" class="group p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-emerald-50 rounded-lg mb-4 w-fit">
          <CheckCircle class="h-6 w-6 text-emerald-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Testing Strategies</h3>
        <p class="text-sm text-gray-600 mb-4">Unit, integration, property-based, and load testing</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
      
      <a href="/guides/nip-implementation" class="group p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-slate-50 rounded-lg mb-4 w-fit">
          <Code class="h-6 w-6 text-slate-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">NIP Implementation</h3>
        <p class="text-sm text-gray-600 mb-4">Implementing and testing Nostr Improvement Proposals</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Analytics & Intelligence -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Analytics & Intelligence</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Data-driven insights and machine learning for enhanced user experiences.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <a href="/guides/analytics" class="group p-6 bg-white border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-teal-50 rounded-lg mb-4 w-fit">
          <Activity class="h-6 w-6 text-teal-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Analytics</h3>
        <p class="text-sm text-gray-600 mb-4">Privacy-first telemetry and product analytics</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
      
      <a href="/guides/machine-learning" class="group p-6 bg-white border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-rose-50 rounded-lg mb-4 w-fit">
          <Cpu class="h-6 w-6 text-rose-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Machine Learning</h3>
        <p class="text-sm text-gray-600 mb-4">Ranking, moderation, embeddings, and summarization</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Mobile & Platform-Specific -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Mobile & Platform-Specific</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Platform-specific considerations for mobile and specialized deployments.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <a href="/guides/app-store" class="group p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-cyan-50 rounded-lg mb-4 w-fit">
          <Smartphone class="h-6 w-6 text-cyan-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">App Store Guidelines</h3>
        <p class="text-sm text-gray-600 mb-4">Mobile app distribution: privacy, security, UX, and compliance</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
      
      <a href="/guides/contributing" class="group p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="p-3 bg-indigo-50 rounded-lg mb-4 w-fit">
          <GitBranch class="h-6 w-6 text-indigo-700" />
        </div>
        <h3 class="font-semibold mb-2 group-hover:text-primary">Contributing</h3>
        <p class="text-sm text-gray-600 mb-4">Contribute to the Nostr ecosystem and open source projects</p>
        <div class="flex items-center text-primary text-sm font-medium">
          Learn more <ArrowRight class="h-4 w-4 ml-1" />
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Getting Started with Advanced Topics -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-3xl font-display mb-4">Ready for Professional Development?</h2>
    <p class="text-xl opacity-90 mb-8">
      Follow our development guidance to build enterprise-grade, scalable Nostr applications.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="/guides/architecture" 
        class="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
      >
        <Globe class="h-5 w-5" />
        Start with System Architecture
      </a>
      <a 
        href="/guides/performance" 
        class="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
      >
        <Zap class="h-5 w-5" />
        Optimize Performance
      </a>
    </div>
  </div>
</section>