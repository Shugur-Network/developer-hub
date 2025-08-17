<script>
  import { BookOpen, Code, Terminal, Globe, Layers, Zap, FileText, Smartphone, Server, Monitor } from 'lucide-svelte';
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
        <BookOpen class="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Development Guides
    </h1>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Learn to build decentralized applications on the Nostr protocol with comprehensive guides and examples.
    </p>
  </div>
</section>

<!-- Getting Started -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-12">Getting Started</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="/guides/getting-started" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Terminal class="h-8 w-8 text-primary mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Quick Start</h3>
        <p class="text-sm opacity-80 mb-4">Get up and running with Nostr in 5 minutes</p>
        <div class="text-xs text-primary">Beginner • 5 min read</div>
      </a>
      
      <a href="/guides/concepts" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Layers class="h-8 w-8 text-blue-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Core Concepts</h3>
        <p class="text-sm opacity-80 mb-4">Understand keys, events, relays, and NIPs</p>
        <div class="text-xs text-blue-500">Beginner • 10 min read</div>
      </a>
      
      <a href="/guides/relay-connection" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Globe class="h-8 w-8 text-green-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Connect to Shugur Relay</h3>
        <p class="text-sm opacity-80 mb-4">Connect your app to wss://shu01.shugur.net</p>
        <div class="text-xs text-green-500">Beginner • 5 min read</div>
      </a>
    </div>
  </div>
</section>

<!-- Programming Languages -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-4">Choose Your Platform & Language</h2>
    <p class="text-center opacity-80 mb-12">Step-by-step tutorials organized by development platform</p>
    
    <!-- Web Development -->
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-2 bg-blue-500/10 rounded-full">
          <Globe class="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">Web Development</h3>
          <p class="text-sm opacity-80">Browser and web applications</p>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- JavaScript -->
        <a href="/guides/javascript" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <FileText class="h-8 w-8 text-yellow-500" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">JavaScript</h4>
              <div class="text-sm opacity-80">Node.js & Browser</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Build Nostr apps with JavaScript using popular libraries and WebSocket connections.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">nostr-tools</span>
            <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">WebSocket</span>
          </div>
        </a>

        <!-- TypeScript -->
        <a href="/guides/typescript" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <FileText class="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">TypeScript</h4>
              <div class="text-sm opacity-80">Type-safe development</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Build robust Nostr applications with TypeScript for better development experience.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Types</span>
            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">nostr-tools</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Backend & Systems -->
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="flex justify-center">
          <Server class="h-8 w-8 text-gray-600" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">Backend & Systems</h3>
          <p class="text-sm opacity-80">Server-side and system applications</p>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Python -->
        <a href="/guides/python" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <Code class="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">Python</h4>
              <div class="text-sm opacity-80">Data science & backends</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Create Nostr bots, data analysis tools, and backend services with Python.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">python-nostr</span>
            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">asyncio</span>
          </div>
        </a>

        <!-- Rust -->
        <a href="/guides/rust" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <Server class="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">Rust</h4>
              <div class="text-sm opacity-80">Performance & safety</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Build high-performance Nostr applications and relays with Rust.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">nostr-sdk</span>
            <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">tokio</span>
          </div>
        </a>

        <!-- Go -->
        <a href="/guides/go" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <Zap class="h-8 w-8 text-cyan-600" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">Go</h4>
              <div class="text-sm opacity-80">Concurrent & scalable</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Develop scalable Nostr services and microservices with Go.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">go-nostr</span>
            <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">gorilla/websocket</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Mobile Development -->
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="flex justify-center">
          <Smartphone class="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">Mobile Development</h3>
          <p class="text-sm opacity-80">iOS, Android, and cross-platform apps</p>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Swift -->
        <a href="/guides/swift" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <Smartphone class="h-8 w-8 text-gray-800" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">Swift</h4>
              <div class="text-sm opacity-80">iOS & macOS apps</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Create native iOS and macOS Nostr applications with Swift.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">NostrSDK</span>
            <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">SwiftUI</span>
          </div>
        </a>

        <!-- Kotlin -->
        <a href="/guides/kotlin" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <Smartphone class="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">Kotlin</h4>
              <div class="text-sm opacity-80">Android & multiplatform</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Build modern Android apps and multiplatform Nostr applications.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Multiplatform</span>
            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Coroutines</span>
          </div>
        </a>

        <!-- Flutter/Dart -->
        <a href="/guides/flutter" class="bg-white p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex justify-center">
              <Monitor class="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <h4 class="font-semibold group-hover:text-primary">Flutter/Dart</h4>
              <div class="text-sm opacity-80">Cross-platform mobile</div>
            </div>
          </div>
          <p class="text-sm opacity-80 mb-4">Cross-platform mobile apps with single codebase for iOS and Android.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Cross-platform</span>
            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Single codebase</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Advanced Topics -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-12">Advanced Topics</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="/guides/nip-implementation" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Code class="h-8 w-8 text-purple-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Implementing NIPs</h3>
        <p class="text-sm opacity-80 mb-4">Deep dive into Nostr Improvement Proposals</p>
        <div class="text-xs text-purple-500">Advanced • 20 min read</div>
      </a>
      
      <a href="/guides/relay-setup" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Zap class="h-8 w-8 text-orange-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Running Your Own Relay</h3>
        <p class="text-sm opacity-80 mb-4">Set up and configure your own Nostr relay</p>
        <div class="text-xs text-orange-500">Advanced • 30 min read</div>
      </a>
      
      <a href="/guides/best-practices" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <BookOpen class="h-8 w-8 text-green-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Best Practices</h3>
        <p class="text-sm opacity-80 mb-4">Security, performance, and user experience tips</p>
        <div class="text-xs text-green-500">Intermediate • 15 min read</div>
      </a>

      <a href="/guides/architecture" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Layers class="h-8 w-8 text-blue-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">System Architecture</h3>
        <p class="text-sm opacity-80 mb-4">Design scalable Nostr systems</p>
        <div class="text-xs text-blue-500">Intermediate • 20 min read</div>
      </a>

      <a href="/guides/performance" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Zap class="h-8 w-8 text-orange-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Performance</h3>
        <p class="text-sm opacity-80 mb-4">Optimize latency and throughput</p>
        <div class="text-xs text-orange-500">Intermediate • 15 min read</div>
      </a>

      <a href="/guides/testing" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <CheckCircle class="h-8 w-8 text-emerald-600 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Testing</h3>
        <p class="text-sm opacity-80 mb-4">Unit, integration, E2E, and load</p>
        <div class="text-xs text-emerald-600">Intermediate • 15 min read</div>
      </a>

      <a href="/guides/analytics" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Activity class="h-8 w-8 text-purple-600 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Analytics</h3>
        <p class="text-sm opacity-80 mb-4">Privacy-first product and ops metrics</p>
        <div class="text-xs text-purple-600">Intermediate • 15 min read</div>
      </a>

      <a href="/guides/machine-learning" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <Cpu class="h-8 w-8 text-rose-600 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Machine Learning</h3>
        <p class="text-sm opacity-80 mb-4">Ranking, moderation, embeddings</p>
        <div class="text-xs text-rose-600">Advanced • 20 min read</div>
      </a>

      <a href="/guides/app-store" class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group">
        <CheckCircle class="h-8 w-8 text-teal-600 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">App Store Guidelines</h3>
        <p class="text-sm opacity-80 mb-4">Ship iOS/Android apps with confidence</p>
        <div class="text-xs text-teal-600">Intermediate • 15 min read</div>
      </a>
    </div>
  </div>
</section>
