<script>
  import { Layers, CheckCircle, Clock, ExternalLink, FileText, Rocket, Code, Settings } from 'lucide-svelte';
  
	const supportedNips = [
		{ id: '01', name: 'Basic Protocol Flow Description', status: 'Core', category: 'Core Protocol' },
		{ id: '02', name: 'Follow List', status: 'Core', category: 'Core Protocol' },
		{ id: '03', name: 'OpenTimestamps Attestations for Events', status: 'Core', category: 'Core Protocol' },
		{ id: '04', name: 'Encrypted Direct Message (deprecated, use NIP-17)', status: 'Deprecated', category: 'Core Protocol' },
		{ id: '09', name: 'Event Deletion Request', status: 'Core', category: 'Core Protocol' },
		{ id: '11', name: 'Relay Information Document', status: 'Core', category: 'Core Protocol' },
		{ id: '15', name: 'End of Stored Events Notice', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '16', name: 'Event Treatment', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '17', name: 'Private Direct Messages', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '20', name: 'Command Results', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '22', name: 'Comment', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '23', name: 'Long-form Content', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '24', name: 'Extra metadata fields and tags', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '25', name: 'Reactions', status: 'Enhanced', category: 'Enhanced Features' },
		{ id: '28', name: 'Public Chat', status: 'Advanced', category: 'Advanced Features' },
		{ id: '33', name: 'Parameterized Replaceable Events', status: 'Advanced', category: 'Advanced Features' },
		{ id: '40', name: 'Expiration Timestamp', status: 'Advanced', category: 'Advanced Features' },
		{ id: '44', name: 'Encrypted Payloads (Versioned)', status: 'Advanced', category: 'Advanced Features' },
		{ id: '50', name: 'Search Capability', status: 'Advanced', category: 'Advanced Features' },
		{ id: '59', name: 'Gift Wrap', status: 'Advanced', category: 'Advanced Features' },
		{ id: '65', name: 'Relay List Metadata', status: 'Advanced', category: 'Advanced Features' },
		{ id: '78', name: 'Application-specific data', status: 'Advanced', category: 'Advanced Features' }
	];  const statusColors = {
    'Core': 'bg-blue-100 text-blue-800',
    'Enhanced': 'bg-green-100 text-green-800',
    'Advanced': 'bg-purple-100 text-purple-800',
    'Deprecated': 'bg-red-100 text-red-800'
  };

  const categoryColors = {
    'Core Protocol': 'bg-gray-100 text-gray-800',
    'Enhanced Features': 'bg-yellow-100 text-yellow-800',
    'Advanced Features': 'bg-orange-100 text-orange-800'
  };
</script>

<svelte:head>
  <title>Supported NIPs - Shugur Developer Hub</title>
  <meta name="description" content="Complete list of Nostr Improvement Proposals (NIPs) supported by Shugur relay. Build compatible applications with confidence." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-white/20 rounded-full">
        <Layers class="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Supported NIPs
    </h1>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Nostr Improvement Proposals (NIPs) supported by Shugur relay. Build compatible applications with confidence.
    </p>
    <div class="flex justify-center gap-8 text-center">
      <div>
        <div class="text-3xl font-bold">{supportedNips.length}</div>
        <div class="text-sm opacity-80">NIPs Supported</div>
      </div>
      <div>
        <div class="text-3xl font-bold">99.9%</div>
        <div class="text-sm opacity-80">Compatibility</div>
      </div>
    </div>
  </div>
</section>

<!-- Connection Info -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-6xl px-4">
    <div class="bg-gray-50 p-6 rounded-xl">
      <h3 class="text-lg font-semibold mb-3">Connect to Shugur Relay</h3>
      <div class="flex items-center gap-4 text-sm">
        <div class="flex items-center gap-2">
          <span class="text-gray-600">WebSocket URL:</span>
          <code class="bg-white px-3 py-1 rounded border font-mono">wss://shu01.shugur.net</code>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle class="h-4 w-4 text-green-500" />
          <span class="text-green-600">Production Ready</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NIPs List -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-display">Supported NIPs</h2>
      <a 
        href="https://github.com/nostr-protocol/nips" 
        target="_blank"
        class="flex items-center gap-2 text-primary hover:underline"
      >
        View all NIPs on GitHub
        <ExternalLink class="h-4 w-4" />
      </a>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each supportedNips as nip}
        <div class="bg-white border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all">
          <div class="flex items-center gap-3 mb-4">
            <CheckCircle class="h-6 w-6 text-green-500" />
            <div>
              <span class="font-mono text-lg font-semibold">NIP-{nip.id}</span>
              <div class="flex gap-2 mt-1">
                <span class="px-2 py-1 text-xs rounded {categoryColors[nip.category]}">{nip.category}</span>
                <span class="px-2 py-1 text-xs rounded {statusColors[nip.status]}">{nip.status}</span>
              </div>
            </div>
          </div>
          
          <h3 class="font-semibold mb-3 text-gray-900">{nip.name}</h3>
          
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-3 text-gray-500">
              <span class="flex items-center gap-1">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Supported
              </span>
              <span class="flex items-center gap-1">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Real-time
              </span>
            </div>
            <a 
              href="https://github.com/nostr-protocol/nips/blob/master/{nip.id}.md"
              target="_blank"
              class="flex items-center gap-1 text-primary hover:underline"
            >
              <FileText class="h-4 w-4" />
              Docs
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Integration Guide -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-2xl font-display mb-4">Ready to Build?</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Start building your Nostr application with our comprehensive guides and examples.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="/guides" class="bg-white p-6 rounded-xl border hover:border-primary hover:shadow-lg transition-all">
        <div class="text-primary mb-3">
          <Rocket class="h-6 w-6" />
        </div>
        <h3 class="font-semibold mb-2">Quick Start Guide</h3>
        <p class="text-sm text-gray-600">5-step guide to handle Nostr events in any language</p>
      </a>
      
      <a href="/guides/concepts" class="bg-white p-6 rounded-xl border hover:border-primary hover:shadow-lg transition-all">
        <div class="text-primary mb-3">
          <Code class="h-6 w-6" />
        </div>
        <h3 class="font-semibold mb-2">Core Concepts</h3>
        <p class="text-sm text-gray-600">Understand keys, events, relays and the protocol</p>
      </a>
      
      <a href="/guides/architecture" class="bg-white p-6 rounded-xl border hover:border-primary hover:shadow-lg transition-all">
        <div class="text-primary mb-3">
          <Settings class="h-6 w-6" />
        </div>
        <h3 class="font-semibold mb-2">Advanced Topics</h3>
        <p class="text-sm text-gray-600">Architecture, performance, and production guides</p>
      </a>
    </div>
  </div>
</section>
