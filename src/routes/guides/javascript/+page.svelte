<script>
  import { Copy, CheckCircle, XCircle, Heart, ThumbsUp } from 'lucide-svelte';
  import { javascriptGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>JavaScript Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Build Nostr applications with JavaScript and Node.js. Learn to connect to Shugur relay and build decentralized social applications." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <svelte:component this={getIcon(javascriptGuide.heroIcon)} class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">JavaScript & Node.js</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      {javascriptGuide.title}
    </h1>
    <p class="text-xl opacity-90 mb-8">
      {javascriptGuide.description}
    </p>
    
    <div class="flex flex-wrap gap-3">
      {#each javascriptGuide.tags as tag}
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{tag}</span>
      {/each}
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      {#each Object.entries(javascriptGuide.sections) as [key, section]}
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>{section.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Setup and Installation -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(javascriptGuide.sections.setup.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{javascriptGuide.sections.setup.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {javascriptGuide.sections.setup.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Terminal</span>
        <button 
          on:click={() => copyToClipboard(`npm install nostr-tools`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>npm install nostr-tools</code></pre>
    </div>
  </div>
</section>

<!-- Basic Connection -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(javascriptGuide.sections.basicConnection.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{javascriptGuide.sections.basicConnection.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {javascriptGuide.sections.basicConnection.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">JavaScript</span>
        <button 
          on:click={() => copyToClipboard(`import { relayInit } from 'nostr-tools'

// Initialize connection to Shugur relay
const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
})

relay.on('error', () => {
  console.log('Failed to connect')
})

// Connect to the relay
await relay.connect()`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { relayInit } from 'nostr-tools'

// Initialize connection to Shugur relay
const relay = relayInit('wss://shu01.shugur.net')

relay.on('connect', () => {
  console.log('Connected to Shugur relay!')
})

relay.on('error', () => {
  console.log('Failed to connect')
})

// Connect to the relay
await relay.connect()`}</code></pre>
    </div>
  </div>
</section>

<!-- Working with Events -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(javascriptGuide.sections.events.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{javascriptGuide.sections.events.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {javascriptGuide.sections.events.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">JavaScript</span>
        <button 
          on:click={() => copyToClipboard(`import { getEventHash, signEvent } from 'nostr-tools'

// Create a text note
let event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello Nostr! This is my first post!',
  pubkey: publicKey,
}

// Add the event hash
event.id = getEventHash(event)

// Sign the event with your private key
event.sig = signEvent(event, privateKey)

// Publish to the relay
let pub = relay.publish(event)

pub.on('ok', () => {
  console.log('Event published successfully!')
})`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { getEventHash, signEvent } from 'nostr-tools'

// Create a text note
let event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello Nostr! This is my first post!',
  pubkey: publicKey,
}

// Add the event hash
event.id = getEventHash(event)

// Sign the event with your private key
event.sig = signEvent(event, privateKey)

// Publish to the relay
let pub = relay.publish(event)

pub.on('ok', () => {
  console.log('Event published successfully!')
})`}</code></pre>
    </div>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">JavaScript</span>
        <button 
          on:click={() => copyToClipboard(`// Create a reaction to another event
let reactionEvent = {
  kind: 7,
  created_at: Math.floor(Date.now() / 1000),
  tags: [
    ['e', 'event_id_to_react_to'],
    ['p', 'author_of_event']
  ],
  content: '+',
  pubkey: publicKey,
}

reactionEvent.id = getEventHash(reactionEvent)
reactionEvent.sig = signEvent(reactionEvent, privateKey)

relay.publish(reactionEvent)`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`// Create a reaction to another event
let reactionEvent = {
  kind: 7,
  created_at: Math.floor(Date.now() / 1000),
  tags: [
    ['e', 'event_id_to_react_to'],
    ['p', 'author_of_event']
  ],
  content: '+',
  pubkey: publicKey,
}

reactionEvent.id = getEventHash(reactionEvent)
reactionEvent.sig = signEvent(reactionEvent, privateKey)

relay.publish(reactionEvent)`}</code></pre>
    </div>
  </div>
</section>

<!-- Security Section -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">Security</h2>
    
    <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
      <div class="flex items-center gap-2 mb-3">
        <CheckCircle class="h-5 w-5 text-yellow-600" />
        <span class="font-medium text-yellow-800">Security Best Practices</span>
      </div>
      <ul class="text-yellow-700 space-y-2">
        <li>• Never share your private key</li>
        <li>• Use environment variables for production</li>
        <li>• Validate all incoming events</li>
        <li>• Implement rate limiting</li>
        <li>• Use HTTPS/WSS in production</li>
      </ul>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-blue-600 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready for More?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You've mastered the basics of JavaScript and Nostr. Here's what to explore next:
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      {#each javascriptGuide.nextSteps as step}
        <a href={step.href} class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
          <div class="flex justify-center mb-3">
            <svelte:component this={getIcon(step.icon)} class="h-8 w-8 text-white" />
          </div>
          <h3 class="font-semibold mb-2">{step.title}</h3>
          <p class="text-sm opacity-90">{step.description}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
