<script>
  import { Copy, CheckCircle, XCircle } from 'lucide-svelte';
  import { typescriptGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>TypeScript Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Build type-safe Nostr applications with TypeScript. Learn to use nostr-tools with full type safety and modern development practices." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <svelte:component this={getIcon(typescriptGuide.heroIcon)} class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">Type Safety & Modern JS</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      {typescriptGuide.title}
    </h1>
    <p class="text-xl opacity-90 mb-8">
      {typescriptGuide.description}
    </p>
    
    <div class="flex flex-wrap gap-3">
      {#each typescriptGuide.tags as tag}
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
      {#each Object.entries(typescriptGuide.sections) as [key, section]}
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
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
      <svelte:component this={getIcon(typescriptGuide.sections.setup.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{typescriptGuide.sections.setup.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {typescriptGuide.sections.setup.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Terminal</span>
        <button 
          on:click={() => copyToClipboard(`npm install -D typescript @types/node
npm install nostr-tools`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>npm install -D typescript @types/node
npm install nostr-tools</code></pre>
    </div>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">tsconfig.json</span>
        <button 
          on:click={() => copyToClipboard(`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Type Definitions -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(typescriptGuide.sections.types.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{typescriptGuide.sections.types.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {typescriptGuide.sections.types.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">types.ts</span>
        <button 
          on:click={() => copyToClipboard(`import { Event, Filter } from 'nostr-tools'

// Custom event types
export interface TextNoteEvent extends Event {
  kind: 1
  content: string
  tags: string[][]
}

export interface ReactionEvent extends Event {
  kind: 7
  content: string
  tags: [['e', string], ['p', string]]
}

// Custom filter types
export interface TextNoteFilter extends Filter {
  kinds: [1]
  limit?: number
  since?: number
  until?: number
}

export interface AuthorFilter extends Filter {
  authors: string[]
  kinds?: number[]
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { Event, Filter } from 'nostr-tools'

// Custom event types
export interface TextNoteEvent extends Event {
  kind: 1
  content: string
  tags: string[][]
}

export interface ReactionEvent extends Event {
  kind: 7
  content: string
  tags: [['e', string], ['p', string]]
}

// Custom filter types
export interface TextNoteFilter extends Filter {
  kinds: [1]
  limit?: number
  since?: number
  until?: number
}

export interface AuthorFilter extends Filter {
  authors: string[]
  kinds?: number[]
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Working with Events -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(typescriptGuide.sections.events.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{typescriptGuide.sections.events.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {typescriptGuide.sections.events.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">events.ts</span>
        <button 
          on:click={() => copyToClipboard(`import { getEventHash, signEvent, Event } from 'nostr-tools'
import { TextNoteEvent, ReactionEvent } from './types'

export function createTextNote(
  content: string,
  pubkey: string,
  privateKey: string
): TextNoteEvent {
  const event: Omit<TextNoteEvent, 'id' | 'sig'> = {
    kind: 1,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content,
    pubkey
  }
  
  event.id = getEventHash(event)
  event.sig = signEvent(event, privateKey)
  
  return event as TextNoteEvent
}

export function createReaction(
  eventId: string,
  authorPubkey: string,
  content: string,
  pubkey: string,
  privateKey: string
): ReactionEvent {
  const event: Omit<ReactionEvent, 'id' | 'sig'> = {
    kind: 7,
    created_at: Math.floor(Date.now() / 1000),
    tags: [['e', eventId], ['p', authorPubkey]],
    content,
    pubkey
  }
  
  event.id = getEventHash(event)
  event.sig = signEvent(event, privateKey)
  
  return event as ReactionEvent
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { getEventHash, signEvent, Event } from 'nostr-tools'
import { TextNoteEvent, ReactionEvent } from './types'

export function createTextNote(
  content: string,
  pubkey: string,
  privateKey: string
): TextNoteEvent {
  const event: Omit<TextNoteEvent, 'id' | 'sig'> = {
    kind: 1,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content,
    pubkey
  }
  
  event.id = getEventHash(event)
  event.sig = signEvent(event, privateKey)
  
  return event as TextNoteEvent
}

export function createReaction(
  eventId: string,
  authorPubkey: string,
  content: string,
  pubkey: string,
  privateKey: string
): ReactionEvent {
  const event: Omit<ReactionEvent, 'id' | 'sig'> = {
    kind: 7,
    created_at: Math.floor(Date.now() / 1000),
    tags: [['e', eventId], ['p', authorPubkey]],
    content,
    pubkey
  }
  
  event.id = getEventHash(event)
  event.sig = signEvent(event, privateKey)
  
  return event as ReactionEvent
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Interfaces and Types -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(typescriptGuide.sections.interfaces.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{typescriptGuide.sections.interfaces.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {typescriptGuide.sections.interfaces.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">interfaces.ts</span>
        <button 
          on:click={() => copyToClipboard(`// Relay connection interface
export interface RelayConnection {
  url: string
  status: 'connecting' | 'connected' | 'disconnected' | 'error'
  lastConnected?: Date
  errorCount: number
}

// Event handler interface
export interface EventHandler<T extends Event = Event> {
  (event: T): void | Promise<void>
}

// Relay manager interface
export interface RelayManager {
  addRelay(url: string): void
  removeRelay(url: string): void
  connect(url: string): Promise<void>
  disconnect(url: string): void
  publish(event: Event): Promise<void>
  subscribe(filter: Filter, handler: EventHandler): void
}

// Configuration interface
export interface NostrConfig {
  relays: string[]
  maxReconnectAttempts: number
  reconnectDelay: number
  eventTimeout: number
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`// Relay connection interface
export interface RelayConnection {
  url: string
  status: 'connecting' | 'connected' | 'disconnected' | 'error'
  lastConnected?: Date
  errorCount: number
}

// Event handler interface
export interface EventHandler<T extends Event = Event> {
  (event: T): void | Promise<void>
}

// Relay manager interface
export interface RelayManager {
  addRelay(url: string): void
  removeRelay(url: string): void
  connect(url: string): Promise<void>
  disconnect(url: string): void
  publish(event: Event): Promise<void>
  subscribe(filter: Filter, handler: EventHandler): void
}

// Configuration interface
export interface NostrConfig {
  relays: string[]
  maxReconnectAttempts: number
  reconnectDelay: number
  eventTimeout: number
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Build Configuration -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(typescriptGuide.sections.compilation.icon)} class="h-8 w-8 text-blue-600" />
      <h2 class="text-2xl font-display">{typescriptGuide.sections.compilation.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {typescriptGuide.sections.compilation.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">package.json</span>
        <button 
          on:click={() => copyToClipboard(`{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/index.js",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/index.js",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-blue-700 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready for More?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You've mastered TypeScript with Nostr. Here's what to explore next:
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      {#each typescriptGuide.nextSteps as step}
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
