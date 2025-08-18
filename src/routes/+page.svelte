<script>
  import { Code, BookOpen, Zap, Globe, Server, Users, CheckCircle, ArrowRight, ExternalLink, Gamepad2, ShoppingCart, Bot, Settings } from 'lucide-svelte';

</script>

<svelte:head>
  <title>Shugur Developer Hub - Build Decentralized Apps with Nostr</title>
  <meta name="description" content="Complete developer platform for building on Nostr protocol. Quick start guides, protocol specs, and production-ready relay access." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-dark to-gray-800 text-white py-20">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-primary/20 rounded-full">
        <Code class="h-12 w-12 text-primary" />
      </div>
    </div>
    <h1 class="text-4xl md:text-6xl font-display tracking-tight mb-6">
      Build <span class="text-primary">Decentralized Apps</span><br/>
      <span class="text-3xl md:text-4xl opacity-80">with Nostr Protocol</span>
    </h1>
    <p class="text-xl md:text-2xl opacity-90 mb-4 max-w-4xl mx-auto leading-relaxed">
      Skip the centralized platforms. Build apps where users own their data, 
      can't be deplatformed, and have true freedom of expression.
    </p>
    
    <!-- Primary Actions -->
    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <a 
        href="/guides" 
        class="group px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-primary/25"
      >
        <Zap class="h-5 w-5" />
        Start Building Now
        <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
      <a 
        href="/guides/concepts" 
        class="group px-6 py-3 bg-white/10 backdrop-blur text-white rounded-xl font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-lg border border-white/20"
      >
        <BookOpen class="h-5 w-5" />
        Learn the Protocol
      </a>
    </div>
    
    <!-- Secondary Action -->
    <div class="mb-12">
      <a 
        href="/nips" 
        class="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-lg underline underline-offset-4"
      >
        <Globe class="h-5 w-5" />
        View 20+ NIPs Supported by <span class="font-brand">Shugur</span> Network
        <ArrowRight class="h-4 w-4" />
      </a>
    </div>

  </div>
</section>

<!-- What You Can Build -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">What You Can Build</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Nostr enables a new generation of decentralized applications. Here's what developers are building.
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-8 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-blue-100 rounded-lg">
            <Users class="h-6 w-6 text-blue-600" />
          </div>
          <h3 class="font-semibold text-lg">Social Networks</h3>
        </div>
        <p class="text-gray-600 mb-4">
          Decentralized Twitter-like platforms where users own their data and can't be deplatformed.
        </p>
        <ul class="text-sm text-gray-600 space-y-1">
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>User-owned profiles</span>
          </li>
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Real-time messaging</span>
          </li>
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Censorship resistance</span>
          </li>
        </ul>
      </div>

      <div class="p-8 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-green-100 rounded-lg">
            <Server class="h-6 w-6 text-green-600" />
          </div>
          <h3 class="font-semibold text-lg">Chat Applications</h3>
        </div>
        <p class="text-gray-600 mb-4">
          End-to-end encrypted messaging apps that work across multiple clients and relays.
        </p>
        <ul class="text-sm text-gray-600 space-y-1">
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Cross-platform messaging</span>
          </li>
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Group conversations</span>
          </li>
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>No vendor lock-in</span>
          </li>
        </ul>
      </div>

      <div class="p-8 border rounded-xl hover:border-primary hover:shadow-lg transition-all">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-purple-100 rounded-lg">
            <Globe class="h-6 w-6 text-purple-600" />
          </div>
          <h3 class="font-semibold text-lg">Content Platforms</h3>
        </div>
        <p class="text-gray-600 mb-4">
          Blogging, news, and media platforms where creators maintain full ownership of their content.
        </p>
        <ul class="text-sm text-gray-600 space-y-1">
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Creator monetization</span>
          </li>
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Global distribution</span>
          </li>
          <li class="flex items-center gap-2">
            <CheckCircle class="h-4 w-4 text-green-500" />
            <span>Portable audiences</span>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Endless Possibilities -->
    <div class="mt-16 text-center">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-2xl font-display mb-6">...and So Much More</h3>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          These are just the beginning. With Nostr's open protocol, developers are constantly pushing boundaries 
          and creating innovative applications we never imagined possible.
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <div class="mb-3 flex justify-center">
              <div class="p-2 bg-blue-100 rounded-lg">
                <Gamepad2 class="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div class="font-medium">Gaming Platforms</div>
            <div class="text-sm text-gray-600">Decentralized gaming ecosystems</div>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <div class="mb-3 flex justify-center">
              <div class="p-2 bg-green-100 rounded-lg">
                <ShoppingCart class="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div class="font-medium">Marketplaces</div>
            <div class="text-sm text-gray-600">P2P trading and commerce</div>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <div class="mb-3 flex justify-center">
              <div class="p-2 bg-purple-100 rounded-lg">
                <BookOpen class="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div class="font-medium">Learning Platforms</div>
            <div class="text-sm text-gray-600">Decentralized education</div>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <div class="mb-3 flex justify-center">
              <div class="p-2 bg-orange-100 rounded-lg">
                <Bot class="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div class="font-medium">AI Assistants</div>
            <div class="text-sm text-gray-600">Distributed AI services</div>
          </div>
        </div>
        
        <div class="p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl border border-primary/20">
          <h4 class="text-xl font-semibold mb-4">Your Imagination is the Only Limit</h4>
          <p class="text-gray-700 mb-6 max-w-3xl mx-auto">
            Nostr protocol provides the foundation for any decentralized application you can dream of. 
            From financial services to IoT networks, from data analytics to entertainment platforms – 
            if it involves communication and data exchange, you can build it on Nostr.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a 
              href="/guides" 
              class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Building Your Vision
            </a>
            <a 
              href="/guides/concepts" 
              class="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Explore the Protocol
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Shugur Relay Info -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Production-Ready Relay Network</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Connect to the <span class="font-brand">Shugur</span> distributed relay cluster for reliable, high-performance Nostr infrastructure. Unlike traditional setups requiring multiple relay connections, our HA cluster lets you connect to a single endpoint while automatically ensuring data availability and failover protection.
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <div class="bg-white p-8 rounded-xl border hover:shadow-lg transition-shadow">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="p-3 bg-primary/10 rounded-lg">
              <Server class="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 class="text-xl font-semibold"><span class="font-brand">Shugur</span> Relay Network</h3>
              <p class="text-gray-600">Enterprise-grade infrastructure with multiple endpoints and 20+ NIPs supported</p>
            </div>
          </div>
          <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Production Ready
          </span>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 class="font-semibold mb-3">Network Endpoint</h4>
            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              wss://shu01.shugur.net
            </div>
            <p class="text-sm text-gray-600 mt-2">Primary endpoint - view network status for all available endpoints</p>
          </div>
          <div>
            <h4 class="font-semibold mb-3">Supported Features</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Single connection with distributed HA cluster</li>
              <li>• 20+ NIPs implemented across the network</li>
              <li>• Rate limiting protection</li>
              <li>• Real-time monitoring and status tracking</li>
              <li>• Free for development</li>
            </ul>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-4">
          <a 
            href="/guides" 
            class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Get Started
          </a>
          <a 
            href="/nips" 
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:text-primary transition-colors font-medium"
          >
            View Supported NIPs
          </a>
          <a 
            href="https://shugur.net" 
            target="_blank"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:text-primary transition-colors font-medium flex items-center gap-2"
          >
            <ExternalLink class="h-4 w-4" />
            View Network Status
          </a>
          <a 
            href="https://github.com/Shugur-Network/relay" 
            target="_blank"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:text-primary transition-colors font-medium flex items-center gap-2"
          >
            <ExternalLink class="h-4 w-4" />
            Relay Repository
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Advanced Topics Preview -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Professional Development Resources</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Enterprise-grade development guidance for building robust, scalable Nostr applications.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="p-6 border rounded-xl">
        <div class="p-3 bg-blue-100 rounded-lg mb-4 w-fit">
          <Globe class="h-6 w-6 text-blue-600" />
        </div>
        <h3 class="font-semibold mb-2">System Architecture</h3>
        <p class="text-sm text-gray-600">Design scalable and resilient applications</p>
      </div>
      
      <div class="p-6 border rounded-xl">
        <div class="p-3 bg-green-100 rounded-lg mb-4 w-fit">
          <Zap class="h-6 w-6 text-green-600" />
        </div>
        <h3 class="font-semibold mb-2">Performance</h3>
        <p class="text-sm text-gray-600">Optimize connections and event handling</p>
      </div>
      
      <div class="p-6 border rounded-xl">
        <div class="p-3 bg-purple-100 rounded-lg mb-4 w-fit">
          <CheckCircle class="h-6 w-6 text-purple-600" />
        </div>
        <h3 class="font-semibold mb-2">Testing</h3>
        <p class="text-sm text-gray-600">Comprehensive testing strategies</p>
      </div>
      
      <div class="p-6 border rounded-xl">
        <div class="p-3 bg-orange-100 rounded-lg mb-4 w-fit">
          <Server class="h-6 w-6 text-orange-600" />
        </div>
        <h3 class="font-semibold mb-2">Best Practices</h3>
        <p class="text-sm text-gray-600">Security and operational excellence</p>
      </div>
    </div>
    
    <div class="text-center">
      <a 
        href="/guides/advanced" 
        class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        <Settings class="h-5 w-5" />
        View Development Guidance
        <ArrowRight class="h-4 w-4" />
      </a>
    </div>
  </div>
</section>


<!-- Call to Action -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-3xl font-display mb-4">Ready to Build?</h2>
    <p class="text-xl opacity-90 mb-8">
      Join thousands of developers building the future of decentralized applications.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="/guides" 
        class="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Start Building Now
      </a>
      <a 
        href="https://github.com/Shugur-Network" 
        target="_blank"
        class="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
      >
        <ExternalLink class="h-5 w-5" />
        View on GitHub
      </a>
    </div>
  </div>
</section>