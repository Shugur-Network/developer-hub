<script>
  import { Network, Users, Shield, Database, Terminal, Download, AlertTriangle, ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Shugur Relay Setup - Nostr Development with Shugur</title>
  <meta name="description" content="Deploy your own high-availability distributed Nostr relay cluster. Single connection point with automatic failover and data redundancy." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Network class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          <span class="font-brand">Shugur</span> Relay Cluster
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Deploy a high-availability distributed Nostr relay network
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">High Availability</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Distributed Cluster</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Auto Failover</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">20+ NIPs</span>
    </div>
  </div>
</section>

<!-- Key Benefits Section -->
<section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Why Choose <span class="font-brand">Shugur</span> Distributed Architecture?</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Unlike traditional single-relay setups, Shugur provides a distributed cluster that eliminates single points of failure while maintaining simplicity for developers.
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-xl shadow-sm border">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-green-100 rounded-lg">
            <Users class="h-8 w-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold">Single Connection Point</h3>
        </div>
        <p class="text-gray-600 mb-4">
          Connect to one relay endpoint and access the entire distributed network. No need to manage multiple relay connections in your applications.
        </p>
        <div class="text-sm text-green-700 bg-green-50 p-3 rounded">
          <strong>Developer Benefit:</strong> Simplified client code with built-in redundancy
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-xl shadow-sm border">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-blue-100 rounded-lg">
            <Shield class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold">Automatic Failover</h3>
        </div>
        <p class="text-gray-600 mb-4">
          If one relay in the cluster fails, your connection automatically routes to healthy nodes. Data remains accessible without client-side intervention.
        </p>
        <div class="text-sm text-blue-700 bg-blue-50 p-3 rounded">
          <strong>Reliability:</strong> 99.9% uptime with transparent failover
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-xl shadow-sm border">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-3 bg-purple-100 rounded-lg">
            <Database class="h-8 w-8 text-purple-600" />
          </div>
          <h3 class="text-xl font-semibold">Data Redundancy</h3>
        </div>
        <p class="text-gray-600 mb-4">
          Events are replicated across multiple nodes in real-time. Your data is safe even if individual relays go offline for maintenance.
        </p>
        <div class="text-sm text-purple-700 bg-purple-50 p-3 rounded">
          <strong>Data Safety:</strong> Multi-node replication with consistency guarantees
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quick Start Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Get Started in Minutes</h2>
      <p class="text-xl text-gray-600">
        Deploy your first Shugur relay cluster with a single command, then scale seamlessly as your network grows.
      </p>
    </div>
    
    <div class="bg-gray-50 rounded-xl p-8 border">
      <div class="flex items-center gap-3 mb-6">
        <Download class="h-6 w-6 text-orange-600" />
        <h3 class="text-xl font-semibold">Quick Deployment</h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 class="font-semibold mb-3">Standalone Deployment</h4>
          <p class="text-sm text-gray-600 mb-3">Perfect for development, testing, or small-scale production</p>
          <div class="bg-gray-900 rounded-lg p-4">
            <pre class="text-gray-100 text-xs overflow-x-auto"><code>curl -fsSL https://github.com/Shugur-Network/relay/raw/main/scripts/install.standalone.sh | sudo bash</code></pre>
          </div>
          <ul class="text-xs text-gray-600 mt-2 space-y-1">
            <li>• Single-node deployment</li>
            <li>• Automatic SSL certificates</li>
            <li>• Web interface included</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-3">Distributed Deployment</h4>
          <p class="text-sm text-gray-600 mb-3">Production-ready, high-availability multi-node setup</p>
          <div class="bg-gray-900 rounded-lg p-4">
            <pre class="text-gray-100 text-xs overflow-x-auto"><code>curl -fsSL https://github.com/Shugur-Network/relay/raw/main/scripts/install.distributed.sh | sudo bash</code></pre>
          </div>
          <ul class="text-xs text-gray-600 mt-2 space-y-1">
            <li>• Multi-node HA cluster</li>
            <li>• Load balancing & failover</li>
            <li>• CockroachDB storage</li>
          </ul>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-4 bg-blue-50 rounded-lg">
          <h4 class="font-semibold text-blue-900 mb-2">What Happens Next</h4>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>• Automated setup with SSL certificates</li>
            <li>• CockroachDB distributed storage configured</li>
            <li>• Load balancing and failover protection active</li>
            <li>• Single endpoint ready for client connections</li>
          </ul>
        </div>
        
        <div class="p-4 bg-green-50 rounded-lg">
          <h4 class="font-semibold text-green-900 mb-2">Production Ready</h4>
          <ul class="text-sm text-green-800 space-y-1">
            <li>• 20+ NIPs supported for maximum compatibility</li>
            <li>• Enterprise-grade security and rate limiting</li>
            <li>• Comprehensive monitoring and observability</li>
            <li>• Go-based implementation for high performance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Architecture Comparison -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Traditional vs. Distributed Architecture</h2>
      <p class="text-xl text-gray-600">
        See how Shugur's distributed cluster simplifies development while improving reliability.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-8 rounded-xl border">
        <h3 class="font-semibold mb-4 text-red-700">Traditional Multi-Relay Setup</h3>
        <div class="space-y-3 text-sm text-gray-600 mb-6">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Client manages multiple connections manually</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Complex failover handling in application code</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Data inconsistency between different relays</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Increased development and maintenance complexity</span>
          </div>
        </div>
        <div class="bg-red-50 p-4 rounded text-xs font-mono">
          Client → Relay A (manual)<br>
          Client → Relay B (manual)<br>
          Client → Relay C (manual)<br>
          <span class="text-red-600">// Complex client-side management</span>
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-xl border">
        <h3 class="font-semibold mb-4 text-green-700">Shugur Distributed Cluster</h3>
        <div class="space-y-3 text-sm text-gray-600 mb-6">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Single connection point for all clients</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Transparent automatic failover and load balancing</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Real-time data synchronization across nodes</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Simple client implementation and maintenance</span>
          </div>
        </div>
        <div class="bg-green-50 p-4 rounded text-xs font-mono">
          Client → <span class="font-brand">Shugur</span> Cluster Endpoint<br>
          &nbsp;&nbsp;&nbsp;├─ Node A (active)<br>
          &nbsp;&nbsp;&nbsp;├─ Node B (standby)<br>
          &nbsp;&nbsp;&nbsp;└─ Node C (standby)<br>
          <span class="text-green-600">// Automatic cluster management</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Documentation and Resources -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-display mb-4">Complete Setup Documentation</h2>
      <p class="text-xl text-gray-600">
        Everything you need to deploy, configure, and maintain your Shugur relay cluster.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-gray-50 p-8 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">Quick Start Guide</h3>
        <p class="text-gray-600 mb-6">
          The fastest way to deploy Shugur Relay with automated installation scripts. Choose between standalone or distributed deployment options with comprehensive setup instructions.
        </p>
        <a href="https://docs.shugur.com/quick-start/" class="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
          View Quick Start Guide
          <ExternalLink class="h-4 w-4" />
        </a>
      </div>
      
      <div class="bg-gray-50 p-8 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">Installation & Configuration</h3>
        <p class="text-gray-600 mb-6">
          Complete installation guide with Docker, bare metal, and distributed options. Includes configuration management, performance tuning, and troubleshooting resources.
        </p>
        <a href="https://www.shugur.com/#installation" class="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
          View Installation Guide
          <ExternalLink class="h-4 w-4" />
        </a>
      </div>
    </div>
    
    <div class="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
      <div class="flex items-start gap-3">
        <AlertTriangle class="h-5 w-5 text-blue-600 mt-0.5" />
        <div>
          <h4 class="font-semibold text-blue-900 mb-2">Key Benefits for Developers</h4>
          <p class="text-sm text-blue-800">
            The Shugur distributed relay architecture means you no longer need to implement complex multi-relay management in your applications. 
            Connect to a single endpoint and get automatic high availability, load distribution, and data redundancy - 
            all transparent to your client code while ensuring your users can always access their data.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Deploy Your HA Relay Network</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Experience the simplicity of single-connection Nostr infrastructure with enterprise-grade reliability.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <a href="https://github.com/Shugur-Network/relay" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="flex justify-center mb-3">
          <Terminal class="h-8 w-8 text-white" />
        </div>
        <h3 class="font-semibold mb-2">Get the Code</h3>
        <p class="text-sm opacity-90">Clone the repository and start your cluster</p>
      </a>
      <a href="https://docs.shugur.com" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="flex justify-center mb-3">
          <Database class="h-8 w-8 text-white" />
        </div>
        <h3 class="font-semibold mb-2">Full Documentation</h3>
        <p class="text-sm opacity-90">Complete setup and operations guide</p>
      </a>
      <a href="/guides/relay-connection" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="flex justify-center mb-3">
          <Users class="h-8 w-8 text-white" />
        </div>
        <h3 class="font-semibold mb-2">Connect Clients</h3>
        <p class="text-sm opacity-90">Learn how apps connect to your cluster</p>
      </a>
    </div>
  </div>
</section>