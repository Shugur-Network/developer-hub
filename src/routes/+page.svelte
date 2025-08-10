<script>
  import { ExternalLink, BookOpen, Activity, Wrench, GitBranch, Zap } from 'lucide-svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import StatusCard from '$lib/components/StatusCard.svelte';
</script>

<svelte:head>
  <title>Shugur Developer Hub - Open, resilient infrastructure</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-dark to-gray-800 text-white py-20">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-primary/20 rounded-full">
        <GitBranch class="h-12 w-12 text-primary" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Developer Hub
    </h1>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Infrastructure, APIs, and tools for building open, resilient applications. 
      Everything you need to ship decentralized tech.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="#projects" 
        class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Explore Projects
      </a>
      <a 
        href="https://status.shugur.net" 
        class="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
      >
        View Status
      </a>
    </div>
  </div>
</section>

<!-- Quick Access Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-12">Quick Access</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <a 
        href="https://docs.relay.shugur.net" 
        class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
      >
        <BookOpen class="h-8 w-8 text-primary mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Documentation</h3>
        <p class="text-sm opacity-80">Complete guides, API references, and tutorials</p>
        <ExternalLink class="h-4 w-4 mt-3 opacity-60 group-hover:opacity-100" />
      </a>
      
      <a 
        href="https://status.shugur.net" 
        class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
      >
        <Activity class="h-8 w-8 text-green-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Status & Monitoring</h3>
        <p class="text-sm opacity-80">Real-time service status and uptime metrics</p>
        <ExternalLink class="h-4 w-4 mt-3 opacity-60 group-hover:opacity-100" />
      </a>
      
      <a 
        href="https://github.com/Shugur-Network" 
        class="p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
      >
        <Wrench class="h-8 w-8 text-blue-500 mb-4" />
        <h3 class="font-semibold mb-2 group-hover:text-primary">Source Code</h3>
        <p class="text-sm opacity-80">Open source repositories and contribution guides</p>
        <ExternalLink class="h-4 w-4 mt-3 opacity-60 group-hover:opacity-100" />
      </a>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display text-center mb-4">Active Projects</h2>
    <p class="text-center opacity-80 mb-12">Production-ready infrastructure and developer tools</p>
    
    <div class="grid md:grid-cols-2 gap-8">
      <ProjectCard
        title="Nostr Relay"
        description="Reliable, developer-friendly Nostr relay with transparent policies and comprehensive documentation."
        status="Production"
        statusColor="green"
        links={[
          { href: "https://relay.shugur.com", label: "Project Page", icon: "external" },
          { href: "https://docs.relay.shugur.net", label: "Documentation", icon: "book" },
          { href: "https://status.relay.shugur.net", label: "Status", icon: "activity" },
          { href: "wss://relay.shugur.net", label: "Connect", icon: "zap" }
        ]}
        features={[
          "WebSocket endpoint: wss://relay.shugur.net",
          "NIP-01, NIP-11, NIP-15, NIP-20 support",
          "Rate limiting and fair use policies",
          "Self-hosting guides available"
        ]}
      />
      
      <!-- Placeholder for future projects -->
      <div class="p-8 border-2 border-dashed border-gray-300 rounded-xl text-center opacity-60">
        <Zap class="h-12 w-12 mx-auto mb-4 opacity-50" />
        <h3 class="font-semibold mb-2">More Projects Coming</h3>
        <p class="text-sm">Additional infrastructure and tools in development</p>
      </div>
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
        endpoint="relay.shugur.net"
      />
      <StatusCard
        service="Documentation"
        status="Operational"
        uptime="99.9%"
        endpoint="docs.relay.shugur.net"
      />
      <StatusCard
        service="Status Page"
        status="Operational"
        uptime="99.8%"
        endpoint="status.shugur.net"
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
        href="https://status.shugur.net" 
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
    <h2 class="text-2xl font-display mb-4">Need Help?</h2>
    <p class="opacity-90 mb-8">
      Questions about our infrastructure or looking to integrate? We're here to help.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="https://github.com/Shugur-Network" 
        class="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
      >
        GitHub Issues
      </a>
      <a 
        href="mailto:developers@shugur.com" 
        class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Email Support
      </a>
    </div>
  </div>
</section>
