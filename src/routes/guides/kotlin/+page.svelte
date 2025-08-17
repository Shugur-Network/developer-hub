<script>
  import { Smartphone, Code, Copy, ExternalLink, Package, Link, FileText, Globe, Zap, Settings } from 'lucide-svelte';
  
  let copiedCode = '';
  
  function copyCode(code, id) {
    navigator.clipboard.writeText(code);
    copiedCode = id;
    setTimeout(() => copiedCode = '', 2000);
  }
</script>

<svelte:head>
  <title>Kotlin Nostr Development Guide - Shugur Developer Hub</title>
  <meta name="description" content="Learn to build Nostr applications with Kotlin for Android and multiplatform development. Complete guide with examples." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Smartphone class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Kotlin Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build modern Android apps and multiplatform Nostr applications
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Android Development</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Multiplatform</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Coroutines</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Modern JVM</span>
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-lg font-semibold mb-4">In this guide:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      <a href="#setup" class="hover:text-primary flex items-center gap-2">
        <Package class="h-4 w-4" />
        Setup and Installation
      </a>
      <a href="#basic-connection" class="hover:text-primary flex items-center gap-2">
        <Link class="h-4 w-4" />
        Basic Connection
      </a>
      <a href="#events" class="hover:text-primary flex items-center gap-2">
        <FileText class="h-4 w-4" />
        Working with Events
      </a>
      <a href="#android" class="hover:text-primary flex items-center gap-2">
        <Smartphone class="h-4 w-4" />
        Android Development
      </a>
      <a href="#multiplatform" class="hover:text-primary flex items-center gap-2">
        <Globe class="h-4 w-4" />
        Multiplatform
      </a>
      <a href="#examples" class="hover:text-primary flex items-center gap-2">
        <Code class="h-4 w-4" />
        Complete Examples
      </a>
    </div>
  </div>
</section>

<!-- Quick Start -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-8">Quick Start</h2>
    
    <div class="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
      <div class="flex">
        <div class="flex-shrink-0">
          <Settings class="h-6 w-6 text-orange-500" />
        </div>
        <div class="ml-3">
          <h3 class="text-lg font-medium text-amber-800">Coming Soon</h3>
          <div class="mt-2 text-sm text-amber-700">
            <p>We're working on comprehensive Kotlin guides for Nostr development. This will include:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Android app development with Kotlin and Compose</li>
              <li>Kotlin Multiplatform Mobile (KMM) solutions</li>
              <li>Coroutines for async Nostr operations</li>
              <li>Best practices for mobile Nostr clients</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="space-y-6">
        <h3 class="text-xl font-semibold">What You'll Learn</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>Setting up Kotlin projects for Nostr development</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>Building Android apps with Jetpack Compose</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>Implementing async operations with Coroutines</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>Multiplatform development for iOS and Android</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>Connecting to Shugur relay</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>Handling real-time events and updates</span>
          </li>
        </ul>
      </div>
      
      <div class="space-y-6">
        <h3 class="text-xl font-semibold">Prerequisites</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>Basic Kotlin programming knowledge</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>Android Studio or IntelliJ IDEA</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>Understanding of Android development</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>Familiarity with REST APIs and WebSockets</span>
          </li>
        </ul>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Recommended Resources</h4>
          <div class="space-y-2 text-sm">
            <a href="https://kotlinlang.org/docs/getting-started.html" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <ExternalLink class="h-4 w-4" />
              Kotlin Documentation
            </a>
            <a href="https://developer.android.com/kotlin" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <ExternalLink class="h-4 w-4" />
              Android Kotlin Guide
            </a>
            <a href="https://kotlinlang.org/docs/multiplatform.html" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <ExternalLink class="h-4 w-4" />
              Kotlin Multiplatform
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Preview Code -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-8">Preview: Kotlin Nostr Client</h2>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <div class="flex items-center justify-between mb-4">
        <span class="text-gray-400">// Kotlin Nostr Client Example</span>
        <button 
          on:click={() => copyCode(`class NostrClient(private val relayUrl: String) {
    private val scope = CoroutineScope(Dispatchers.IO)
    private var webSocket: WebSocket? = null
    
    suspend fun connect(): Boolean = withContext(Dispatchers.IO) {
        try {
            val request = Request.Builder()
                .url(relayUrl)
                .build()
            
            val client = OkHttpClient()
            webSocket = client.newWebSocket(request, object : WebSocketListener() {
                override fun onOpen(webSocket: WebSocket, response: Response) {
                    println("Connected to Nostr relay")
                }
                
                override fun onMessage(webSocket: WebSocket, text: String) {
                    handleMessage(text)
                }
            })
            true
        } catch (e: Exception) {
            false
        }
    }
    
    fun publishEvent(event: NostrEvent) {
        val message = """["EVENT", ${event.toJson()}]"""
        webSocket?.send(message)
    }
}`, 'kotlin-client')}
          class="p-2 bg-gray-700 hover:bg-gray-600 rounded text-xs"
        >
          {copiedCode === 'kotlin-client' ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code>{`class NostrClient(private val relayUrl: String) {
    private val scope = CoroutineScope(Dispatchers.IO)
    private var webSocket: WebSocket? = null
    
    suspend fun connect(): Boolean = withContext(Dispatchers.IO) {
        try {
            val request = Request.Builder()
                .url(relayUrl)
                .build()
            
            val client = OkHttpClient()
            webSocket = client.newWebSocket(request, object : WebSocketListener() {
                override fun onOpen(webSocket: WebSocket, response: Response) {
                    println("Connected to Nostr relay")
                }
                
                override fun onMessage(webSocket: WebSocket, text: String) {
                    handleMessage(text)
                }
            })
            true
        } catch (e: Exception) {
            false
        }
    }
    
    fun publishEvent(event: NostrEvent) {
        val message = """["EVENT", \${event.toJson()}]"""
        webSocket?.send(message)
    }
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Features -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-12">Kotlin for Nostr Development</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="p-6 border rounded-lg">
        <div class="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <span class="text-2xl">🤖</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Android Native</h3>
        <p class="text-gray-600 text-sm">First-class Android development with Jetpack Compose and modern Android architecture.</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Globe class="h-6 w-6 text-blue-500" />
        </div>
        <h3 class="text-lg font-semibold mb-2">Multiplatform</h3>
        <p class="text-gray-600 text-sm">Share business logic between Android and iOS using Kotlin Multiplatform Mobile.</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <Zap class="h-6 w-6 text-yellow-500" />
        </div>
        <h3 class="text-lg font-semibold mb-2">Coroutines</h3>
        <p class="text-gray-600 text-sm">Handle async operations elegantly with Kotlin coroutines and structured concurrency.</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
          <span class="text-2xl">🔧</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Modern Tooling</h3>
        <p class="text-gray-600 text-sm">Excellent IDE support, debugging tools, and extensive ecosystem.</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
          <span class="text-2xl">🛡️</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Type Safety</h3>
        <p class="text-gray-600 text-sm">Null safety and expressive type system help prevent runtime errors.</p>
      </div>
      
      <div class="p-6 border rounded-lg">
        <div class="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
          <Smartphone class="h-6 w-6 text-green-500" />
        </div>
        <h3 class="text-lg font-semibold mb-2">Mobile-First</h3>
        <p class="text-gray-600 text-sm">Designed for mobile development with excellent performance and battery efficiency.</p>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-8">Next Steps</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <a href="/guides/getting-started" class="p-6 bg-white border rounded-lg hover:border-primary hover:shadow-lg transition-all group">
        <h3 class="font-semibold mb-2 group-hover:text-primary">Start with Basics</h3>
        <p class="text-sm text-gray-600 mb-4">Learn Nostr fundamentals before diving into Kotlin-specific implementation</p>
        <span class="text-primary text-sm font-medium">Read guide →</span>
      </a>
      
      <a href="/guides/concepts" class="p-6 bg-white border rounded-lg hover:border-primary hover:shadow-lg transition-all group">
        <h3 class="font-semibold mb-2 group-hover:text-primary">Core Concepts</h3>
        <p class="text-sm text-gray-600 mb-4">Understand keys, events, and relays before building your app</p>
        <span class="text-primary text-sm font-medium">Learn concepts →</span>
      </a>
      
      <a href="/examples" class="p-6 bg-white border rounded-lg hover:border-primary hover:shadow-lg transition-all group">
        <h3 class="font-semibold mb-2 group-hover:text-primary">Code Examples</h3>
        <p class="text-sm text-gray-600 mb-4">Browse working examples and templates for inspiration</p>
        <span class="text-primary text-sm font-medium">View examples →</span>
      </a>
      
      <a href="/nips" class="p-6 bg-white border rounded-lg hover:border-primary hover:shadow-lg transition-all group">
        <h3 class="font-semibold mb-2 group-hover:text-primary">Supported NIPs</h3>
        <p class="text-sm text-gray-600 mb-4">See which Nostr features are available on Shugur relay</p>
        <span class="text-primary text-sm font-medium">Check NIPs →</span>
      </a>
    </div>
  </div>
</section>
