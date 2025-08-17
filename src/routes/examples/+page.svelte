<script>
  import { Code, Download, ExternalLink, GitBranch, Play } from 'lucide-svelte';
  
  const examples = [
    {
      title: 'Simple Nostr Client',
      description: 'Basic client that connects to Shugur relay and fetches events',
      languages: ['JavaScript', 'Python', 'Rust'],
      difficulty: 'Beginner',
      features: ['Connect to relay', 'Fetch events', 'Display timeline'],
      github: 'https://github.com/Shugur-Network/nostr-simple-client',
      demo: 'https://demo.shugur.com/simple-client'
    },
    {
      title: 'Nostr Bot Framework',
      description: 'Automated bot that responds to mentions and DMs',
      languages: ['Python', 'Node.js', 'Go'],
      difficulty: 'Intermediate',
      features: ['Auto-reply', 'Command handling', 'Rate limiting'],
      github: 'https://github.com/Shugur-Network/nostr-bot-framework',
      demo: null
    },
    {
      title: 'React Nostr App',
      description: 'Full-featured social media app built with React and Nostr',
      languages: ['TypeScript', 'React'],
      difficulty: 'Advanced',
      features: ['Real-time feed', 'User profiles', 'Direct messaging'],
      github: 'https://github.com/Shugur-Network/react-nostr-app',
      demo: 'https://demo.shugur.com/react-app'
    },
    {
      title: 'Nostr Relay Monitor',
      description: 'Dashboard to monitor relay health and statistics',
      languages: ['Python', 'JavaScript'],
      difficulty: 'Intermediate',
      features: ['Real-time metrics', 'Uptime monitoring', 'Alert system'],
      github: 'https://github.com/Shugur-Network/nostr-relay-monitor',
      demo: 'https://monitor.shugur.com'
    },
    {
      title: 'Mobile Nostr Client',
      description: 'Cross-platform mobile app for iOS and Android',
      languages: ['Swift', 'Kotlin', 'React Native'],
      difficulty: 'Advanced',
      features: ['Push notifications', 'Offline support', 'Biometric auth'],
      github: 'https://github.com/Shugur-Network/mobile-nostr-client',
      demo: null
    },
    {
      title: 'Nostr Event Publisher',
      description: 'CLI tool to publish events to multiple relays',
      languages: ['Rust', 'Go'],
      difficulty: 'Beginner',
      features: ['Batch publishing', 'Multi-relay', 'JSON import'],
      github: 'https://github.com/Shugur-Network/nostr-publisher-cli',
      demo: null
    }
  ];

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };

  const languageColors = {
    'JavaScript': 'bg-yellow-100 text-yellow-800',
    'TypeScript': 'bg-blue-100 text-blue-800',
    'Python': 'bg-green-100 text-green-800',
    'Rust': 'bg-orange-100 text-orange-800',
    'Go': 'bg-cyan-100 text-cyan-800',
    'Swift': 'bg-purple-100 text-purple-800',
    'Kotlin': 'bg-indigo-100 text-indigo-800',
    'React': 'bg-blue-100 text-blue-800',
    'Node.js': 'bg-green-100 text-green-800',
    'React Native': 'bg-blue-100 text-blue-800'
  };
</script>

<svelte:head>
  <title>Code Examples - Shugur Developer Hub</title>
  <meta name="description" content="Ready-to-use code examples and complete project templates for building Nostr applications. Multiple programming languages supported." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-white/20 rounded-full">
        <Code class="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      Code Examples
    </h1>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Ready-to-use code examples and complete project templates for building Nostr applications.
    </p>
    <div class="flex justify-center gap-8 text-center">
      <div>
        <div class="text-3xl font-bold">{examples.length}</div>
        <div class="text-sm opacity-80">Example Projects</div>
      </div>
      <div>
        <div class="text-3xl font-bold">6</div>
        <div class="text-sm opacity-80">Languages</div>
      </div>
    </div>
  </div>
</section>

<!-- Quick Start -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-2xl font-display mb-4">Quick Start Examples</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Copy and paste these minimal examples to get started immediately.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- JavaScript Example -->
      <div class="border rounded-xl p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold">Connect to Shugur Relay</h3>
          <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">JavaScript</span>
        </div>
        <pre class="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto"><code>{`import { relayInit } from 'nostr-tools'

const relay = relayInit('wss://shu01.shugur.net')
relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
})

await relay.connect()`}</code></pre>
        <div class="mt-4 flex gap-2">
          <a href="/guides/javascript/quick-start" class="text-sm text-primary hover:underline">Full Tutorial</a>
          <span class="text-gray-300">•</span>
          <a href="https://github.com/Shugur-Network/examples/tree/main/javascript" class="text-sm text-primary hover:underline">GitHub</a>
        </div>
      </div>

      <!-- Python Example -->
      <div class="border rounded-xl p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold">Fetch Events with Python</h3>
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Python</span>
        </div>
        <pre class="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto"><code>{`from nostr.relay import Relay
from nostr.filter import Filter

relay = Relay("wss://shu01.shugur.net")
filters = Filter(kinds=[1], limit=10)
events = relay.query_sync(filters)

for event in events:
    print(event.content)`}</code></pre>
        <div class="mt-4 flex gap-2">
          <a href="/guides/python/quick-start" class="text-sm text-primary hover:underline">Full Tutorial</a>
          <span class="text-gray-300">•</span>
          <a href="https://github.com/Shugur-Network/examples/tree/main/python" class="text-sm text-primary hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Project Examples -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-2xl font-display mb-4">Complete Project Examples</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Full-featured applications you can clone, modify, and deploy.
      </p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      {#each examples as example}
        <div class="bg-white border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-lg mb-2">{example.title}</h3>
              <p class="text-gray-600 text-sm">{example.description}</p>
            </div>
            <span class="px-2 py-1 text-xs rounded {difficultyColors[example.difficulty]}">{example.difficulty}</span>
          </div>
          
          <div class="mb-4">
            <h4 class="text-sm font-medium mb-2">Features:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              {#each example.features as feature}
                <li class="flex items-center gap-2">
                  <div class="w-1 h-1 bg-primary rounded-full"></div>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
          
          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Languages:</h4>
            <div class="flex flex-wrap gap-2">
              {#each example.languages as language}
                <span class="px-2 py-1 text-xs rounded {languageColors[language]}">{language}</span>
              {/each}
            </div>
          </div>
          
          <div class="flex gap-3">
            <a 
              href={example.github}
              target="_blank"
              class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-sm"
            >
              <GitBranch class="h-4 w-4" />
              Source Code
            </a>
            {#if example.demo}
              <a 
                href={example.demo}
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors text-sm"
              >
                <Play class="h-4 w-4" />
                Live Demo
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Community Examples -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center mb-12">
      <h2 class="text-2xl font-display mb-4">Community Contributions</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Examples and projects shared by the Nostr developer community.
      </p>
    </div>
    
    <div class="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-xl p-8 text-center">
      <GitBranch class="h-12 w-12 text-primary mx-auto mb-4" />
      <h3 class="text-xl font-semibold mb-4">Share Your Example</h3>
      <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
        Built something cool with Nostr and Shugur relay? Share it with the community! 
        Submit a pull request to add your example to this collection.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a 
          href="https://github.com/Shugur-Network/developer-hub-examples"
          target="_blank"
          class="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <GitBranch class="h-4 w-4" />
          Contribute Example
        </a>
        <a 
          href="/guides/contributing"
          class="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          Contribution Guide
        </a>
      </div>
    </div>
  </div>
</section>
