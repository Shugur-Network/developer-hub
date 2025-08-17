<script>
  import { Code, Copy, Terminal, BookOpen, Package, FileText, Target, Settings, Sparkles, Hammer } from 'lucide-svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>TypeScript Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Build type-safe Nostr applications with TypeScript. Learn to use strong typing with nostr-tools and enhance your development experience." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Code class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          TypeScript Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build type-safe Nostr applications with TypeScript
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Type Safety</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">nostr-tools</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Node.js</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Modern JS</span>
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
      <a href="#types" class="hover:text-primary flex items-center gap-2">
        <FileText class="h-4 w-4" />
        Type Definitions
      </a>
      <a href="#events" class="hover:text-primary flex items-center gap-2">
        <Code class="h-4 w-4" />
        Working with Events
      </a>
      <a href="#interfaces" class="hover:text-primary flex items-center gap-2">
        <Target class="h-4 w-4" />
        Interfaces and Types
      </a>
      <a href="#compilation" class="hover:text-primary flex items-center gap-2">
        <Settings class="h-4 w-4" />
        Build Configuration
      </a>
      <a href="#examples" class="hover:text-primary flex items-center gap-2">
        <Terminal class="h-4 w-4" />
        Complete Examples
      </a>
    </div>
  </div>
</section>

<!-- Setup -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Package class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Setup and Installation</h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">Prerequisites</h3>
        <ul class="space-y-2 text-gray-600 mb-6">
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
            Node.js 16+ with TypeScript support
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
            TypeScript knowledge
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
            Understanding of modern JavaScript
          </li>
        </ul>

        <h3 class="font-semibold text-lg mb-4">Installation</h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs text-gray-400">Terminal</span>
            <button 
              on:click={() => copyToClipboard(`npm install nostr-tools
npm install -D typescript @types/node`)}
              class="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm"><code>npm install nostr-tools
npm install -D typescript @types/node</code></pre>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">TypeScript Configuration</h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs text-gray-400">tsconfig.json</span>
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
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`)}
              class="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
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
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`}</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Type Definitions -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <FileText class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Type Definitions</h2>
    </div>
    
    <p class="text-gray-600 mb-6">TypeScript provides excellent type safety for Nostr development. Here are the key types:</p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">types.ts</span>
        <button 
          on:click={() => copyToClipboard(`import { Event as NostrEvent, Relay } from 'nostr-tools'

// Extend the basic Event type
export interface ExtendedEvent extends NostrEvent {
  id: string
  pubkey: string
  created_at: number
  kind: number
  tags: string[][]
  content: string
  sig: string
}

// User profile interface
export interface Profile {
  name?: string
  about?: string
  picture?: string
  nip05?: string
  lud06?: string
  lud16?: string
}

// Relay information
export interface RelayInfo {
  name?: string
  description?: string
  pubkey?: string
  contact?: string
  supported_nips?: number[]
  software?: string
  version?: string
}

// Filter with strict typing
export interface Filter {
  ids?: string[]
  authors?: string[]
  kinds?: number[]
  '#e'?: string[]
  '#p'?: string[]
  since?: number
  until?: number
  limit?: number
}

// Connection status
export type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'error'

// Event kinds enum
export enum EventKind {
  TextNote = 1,
  RecommendRelay = 2,
  Contacts = 3,
  EncryptedDirectMessage = 4,
  EventDeletion = 5,
  Repost = 6,
  Reaction = 7,
  ChannelCreation = 40,
  ChannelMetadata = 41,
  ChannelMessage = 42,
  ChannelHideMessage = 43,
  ChannelMuteUser = 44
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { Event as NostrEvent, Relay } from 'nostr-tools'

// Extend the basic Event type
export interface ExtendedEvent extends NostrEvent {
  id: string
  pubkey: string
  created_at: number
  kind: number
  tags: string[][]
  content: string
  sig: string
}

// User profile interface
export interface Profile {
  name?: string
  about?: string
  picture?: string
  nip05?: string
  lud06?: string
  lud16?: string
}

// Relay information
export interface RelayInfo {
  name?: string
  description?: string
  pubkey?: string
  contact?: string
  supported_nips?: number[]
  software?: string
  version?: string
}

// Filter with strict typing
export interface Filter {
  ids?: string[]
  authors?: string[]
  kinds?: number[]
  '#e'?: string[]
  '#p'?: string[]
  since?: number
  until?: number
  limit?: number
}

// Connection status
export type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'error'

// Event kinds enum
export enum EventKind {
  TextNote = 1,
  RecommendRelay = 2,
  Contacts = 3,
  EncryptedDirectMessage = 4,
  EventDeletion = 5,
  Repost = 6,
  Reaction = 7,
  ChannelCreation = 40,
  ChannelMetadata = 41,
  ChannelMessage = 42,
  ChannelHideMessage = 43,
  ChannelMuteUser = 44
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Typed Client -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Hammer class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Type-Safe Nostr Client</h2>
    </div>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">NostrClient.ts</span>
        <button 
          on:click={() => copyToClipboard(`import { relayInit, Relay } from 'nostr-tools'
import type { 
  ExtendedEvent, 
  Filter, 
  ConnectionStatus, 
  EventKind 
} from './types'

export class NostrClient {
  private relay: Relay
  private connectionStatus: ConnectionStatus = 'disconnected'
  private eventHandlers: Map<string, (event: ExtendedEvent) => void> = new Map()

  constructor(private relayUrl: string) {
    this.relay = relayInit(relayUrl)
    this.setupEventHandlers()
  }

  private setupEventHandlers(): void {
    this.relay.on('connect', () => {
      this.connectionStatus = 'connected'
      console.log('✅ Connected to relay:', this.relayUrl)
    })

    this.relay.on('disconnect', () => {
      this.connectionStatus = 'disconnected'
      console.log('📵 Disconnected from relay')
    })

    this.relay.on('error', () => {
      this.connectionStatus = 'error'
      console.log('❌ Relay connection error')
    })
  }

  async connect(): Promise<void> {
    this.connectionStatus = 'connecting'
    await this.relay.connect()
  }

  disconnect(): void {
    this.relay.close()
    this.connectionStatus = 'disconnected'
  }

  getConnectionStatus(): ConnectionStatus {
    return this.connectionStatus
  }

  subscribe(
    filters: Filter[], 
    onEvent: (event: ExtendedEvent) => void,
    onEose?: () => void
  ): string {
    const subscriptionId = Math.random().toString(36).substring(7)
    
    const sub = this.relay.sub(filters)
    
    sub.on('event', (event: ExtendedEvent) => {
      if (this.validateEvent(event)) {
        onEvent(event)
      }
    })

    if (onEose) {
      sub.on('eose', onEose)
    }

    this.eventHandlers.set(subscriptionId, onEvent)
    return subscriptionId
  }

  async publishEvent(event: ExtendedEvent): Promise<boolean> {
    return new Promise((resolve) => {
      const pub = this.relay.publish(event)
      
      pub.on('ok', () => {
        console.log('✅ Event published successfully')
        resolve(true)
      })
      
      pub.on('failed', (reason: string) => {
        console.error('❌ Failed to publish event:', reason)
        resolve(false)
      })
    })
  }

  private validateEvent(event: ExtendedEvent): boolean {
    return !!(
      event.id &&
      event.pubkey &&
      event.created_at &&
      typeof event.kind === 'number' &&
      Array.isArray(event.tags) &&
      typeof event.content === 'string' &&
      event.sig
    )
  }

  // Helper method to create text notes
  createTextNote(content: string, tags: string[][] = []): Partial<ExtendedEvent> {
    return {
      kind: EventKind.TextNote,
      created_at: Math.floor(Date.now() / 1000),
      tags,
      content
    }
  }

  // Helper method to create reactions
  createReaction(
    eventId: string, 
    eventAuthor: string, 
    content: string = '🤙'
  ): Partial<ExtendedEvent> {
    return {
      kind: EventKind.Reaction,
      created_at: Math.floor(Date.now() / 1000),
      tags: [
        ['e', eventId],
        ['p', eventAuthor]
      ],
      content
    }
  }
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { relayInit, Relay } from 'nostr-tools'
import type { 
  ExtendedEvent, 
  Filter, 
  ConnectionStatus, 
  EventKind 
} from './types'

export class NostrClient {
  private relay: Relay
  private connectionStatus: ConnectionStatus = 'disconnected'
  private eventHandlers: Map<string, (event: ExtendedEvent) => void> = new Map()

  constructor(private relayUrl: string) {
    this.relay = relayInit(relayUrl)
    this.setupEventHandlers()
  }

  private setupEventHandlers(): void {
    this.relay.on('connect', () => {
      this.connectionStatus = 'connected'
      console.log('✅ Connected to relay:', this.relayUrl)
    })

    this.relay.on('disconnect', () => {
      this.connectionStatus = 'disconnected'
      console.log('📵 Disconnected from relay')
    })

    this.relay.on('error', () => {
      this.connectionStatus = 'error'
      console.log('❌ Relay connection error')
    })
  }

  async connect(): Promise<void> {
    this.connectionStatus = 'connecting'
    await this.relay.connect()
  }

  disconnect(): void {
    this.relay.close()
    this.connectionStatus = 'disconnected'
  }

  getConnectionStatus(): ConnectionStatus {
    return this.connectionStatus
  }

  subscribe(
    filters: Filter[], 
    onEvent: (event: ExtendedEvent) => void,
    onEose?: () => void
  ): string {
    const subscriptionId = Math.random().toString(36).substring(7)
    
    const sub = this.relay.sub(filters)
    
    sub.on('event', (event: ExtendedEvent) => {
      if (this.validateEvent(event)) {
        onEvent(event)
      }
    })

    if (onEose) {
      sub.on('eose', onEose)
    }

    this.eventHandlers.set(subscriptionId, onEvent)
    return subscriptionId
  }

  async publishEvent(event: ExtendedEvent): Promise<boolean> {
    return new Promise((resolve) => {
      const pub = this.relay.publish(event)
      
      pub.on('ok', () => {
        console.log('✅ Event published successfully')
        resolve(true)
      })
      
      pub.on('failed', (reason: string) => {
        console.error('❌ Failed to publish event:', reason)
        resolve(false)
      })
    })
  }

  private validateEvent(event: ExtendedEvent): boolean {
    return !!(
      event.id &&
      event.pubkey &&
      event.created_at &&
      typeof event.kind === 'number' &&
      Array.isArray(event.tags) &&
      typeof event.content === 'string' &&
      event.sig
    )
  }

  // Helper method to create text notes
  createTextNote(content: string, tags: string[][] = []): Partial<ExtendedEvent> {
    return {
      kind: EventKind.TextNote,
      created_at: Math.floor(Date.now() / 1000),
      tags,
      content
    }
  }

  // Helper method to create reactions
  createReaction(
    eventId: string, 
    eventAuthor: string, 
    content: string = '🤙'
  ): Partial<ExtendedEvent> {
    return {
      kind: EventKind.Reaction,
      created_at: Math.floor(Date.now() / 1000),
      tags: [
        ['e', eventId],
        ['p', eventAuthor]
      ],
      content
    }
  }
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Usage Example -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Terminal class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Usage Example</h2>
    </div>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">main.ts</span>
        <button 
          on:click={() => copyToClipboard(`import { 
  generatePrivateKey, 
  getPublicKey, 
  getEventHash, 
  signEvent 
} from 'nostr-tools'
import { NostrClient } from './NostrClient'
import type { ExtendedEvent, EventKind } from './types'

async function main(): Promise<void> {
  // Initialize client
  const client = new NostrClient('wss://shu01.shugur.net')
  
  try {
    // Connect to relay
    await client.connect()
    
    // Generate keys
    const privateKey = generatePrivateKey()
    const publicKey = getPublicKey(privateKey)
    
    console.log('🔑 Generated keypair')
    console.log('Public key:', publicKey)
    
    // Subscribe to text notes
    client.subscribe(
      [{ kinds: [EventKind.TextNote], limit: 10 }],
      (event: ExtendedEvent) => {
        console.log('📝 New event:', event.content)
      },
      () => {
        console.log('📦 End of stored events')
      }
    )
    
    // Create and publish a text note
    const noteTemplate = client.createTextNote(
      'Hello Nostr from TypeScript! 🔷'
    )
    
    const event: ExtendedEvent = {
      ...noteTemplate,
      pubkey: publicKey,
      id: '',
      sig: ''
    } as ExtendedEvent
    
    // Calculate hash and sign
    event.id = getEventHash(event)
    event.sig = signEvent(event, privateKey)
    
    // Publish event
    const published = await client.publishEvent(event)
    
    if (published) {
      console.log('✅ Successfully published event!')
    } else {
      console.log('❌ Failed to publish event')
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

// Run the example
main().catch(console.error)`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import { 
  generatePrivateKey, 
  getPublicKey, 
  getEventHash, 
  signEvent 
} from 'nostr-tools'
import { NostrClient } from './NostrClient'
import type { ExtendedEvent, EventKind } from './types'

async function main(): Promise<void> {
  // Initialize client
  const client = new NostrClient('wss://shu01.shugur.net')
  
  try {
    // Connect to relay
    await client.connect()
    
    // Generate keys
    const privateKey = generatePrivateKey()
    const publicKey = getPublicKey(privateKey)
    
    console.log('🔑 Generated keypair')
    console.log('Public key:', publicKey)
    
    // Subscribe to text notes
    client.subscribe(
      [{ kinds: [EventKind.TextNote], limit: 10 }],
      (event: ExtendedEvent) => {
        console.log('📝 New event:', event.content)
      },
      () => {
        console.log('📦 End of stored events')
      }
    )
    
    // Create and publish a text note
    const noteTemplate = client.createTextNote(
      'Hello Nostr from TypeScript! 🔷'
    )
    
    const event: ExtendedEvent = {
      ...noteTemplate,
      pubkey: publicKey,
      id: '',
      sig: ''
    } as ExtendedEvent
    
    // Calculate hash and sign
    event.id = getEventHash(event)
    event.sig = signEvent(event, privateKey)
    
    // Publish event
    const published = await client.publishEvent(event)
    
    if (published) {
      console.log('✅ Successfully published event!')
    } else {
      console.log('❌ Failed to publish event')
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

// Run the example
main().catch(console.error)`}</code></pre>
    </div>
  </div>
</section>

<!-- Benefits -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Sparkles class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Benefits of TypeScript</h2>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">🛡️ Type Safety</h3>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Catch errors at compile time, not runtime</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>IntelliSense and autocompletion for better DX</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Enforce correct event structure and signatures</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Better refactoring and code navigation</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">🔧 Development Benefits</h3>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Clear interfaces for Nostr events and filters</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Enum-based event kinds for consistency</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Better team collaboration with typed APIs</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Easier testing with well-defined types</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready to Build Type-Safe Apps?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You now have a solid foundation for building type-safe Nostr applications with TypeScript.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <a href="/guides/javascript" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">🟨</div>
        <h3 class="font-semibold mb-2">JavaScript Guide</h3>
        <p class="text-sm opacity-90">Learn the JavaScript foundations</p>
      </a>
      
      <a href="/examples" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="p-2 bg-green-500/10 rounded-full mb-3">
          <Terminal class="h-6 w-6 text-green-500" />
        </div>
        <h3 class="font-semibold mb-2">TypeScript Examples</h3>
        <p class="text-sm opacity-90">Explore typed project examples</p>
      </a>
      
      <a href="/guides/react" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="text-3xl mb-3">⚛️</div>
        <h3 class="font-semibold mb-2">React Integration</h3>
        <p class="text-sm opacity-90">Build React apps with TypeScript</p>
      </a>
    </div>
  </div>
</section>
