export interface GuideSection {
  title: string;
  description: string;
  icon: string;
  bgColor?: string;
  iconColor?: string;
  content?: string;
  codeExample?: {
    language: string;
    code: string;
    title?: string;
    description?: string;
  };
  features?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  steps?: Array<{
    title: string;
    description: string;
    code?: string;
    tip?: string;
  }>;
  examples?: Array<{
    title: string;
    description: string;
    code: string;
    language: string;
  }>;
  tips?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  warnings?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface GuideContent {
  title: string;
  description: string;
  heroIcon: string;
  tags: string[];
  sections: {
    [key: string]: GuideSection;
  };
  nextSteps: Array<{
    title: string;
    description: string;
    icon: string;
    href: string;
  }>;
}

export interface IconMapping {
  [key: string]: string;
}

// Centralized icon mapping
export const iconMapping: IconMapping = {
  // Navigation & UI
  rocket: 'Rocket',
  wrench: 'Wrench',
  book: 'BookOpen',
  code: 'Code',
  globe: 'Globe',
  key: 'Key',
  shield: 'Shield',
  monitor: 'Monitor',
  smartphone: 'Smartphone',
  database: 'Database',
  lock: 'Lock',
  users: 'Users',
  fileText: 'FileText',
  zap: 'Zap',
  clipboard: 'ClipboardList',
  bot: 'Bot',
  terminal: 'Terminal',
  externalLink: 'ExternalLink',
  copy: 'Copy',
  checkCircle: 'CheckCircle',
  alertCircle: 'AlertCircle',
  xCircle: 'XCircle',
  heart: 'Heart',
  thumbsUp: 'ThumbsUp',
  partyPopper: 'PartyPopper',
  radio: 'Radio',
  sparkles: 'Sparkles',
  hammer: 'Hammer',
  target: 'Target',
  settings: 'Settings',
  package: 'Package',
  link: 'Link',
  download: 'Download',
  layers: 'Layers',
  activity: 'Activity',
  gitBranch: 'GitBranch',
  server: 'Server',
  react: 'React',
  circle: 'Circle',
  cpu: 'Cpu',
  info: 'Info',
  arrowRight: 'ArrowRight'
};

// Getting Started Guide
export const gettingStartedGuide: GuideContent = {
  title: "Getting Started with Nostr",
  description: "Learn the fundamentals of Nostr protocol and connect to Shugur relay in just a few minutes. Master the basics and start building decentralized applications today.",
  heroIcon: "Clock",
  tags: ["5 minute setup", "Fundamentals", "Quick Start", "Beginner Friendly"],
  sections: {
    whatIsNostr: {
      title: "What is Nostr?",
      description: "Nostr (Notes and Other Stuff Transmitted by Relays) is a simple, open protocol for decentralized social networking. Unlike traditional social media platforms, Nostr doesn't rely on a central server or authority.",
      icon: "FileText",
      bgColor: "bg-white",
      iconColor: "text-primary",
      content: `
        <p class="text-gray-600 mb-6">Nostr represents a paradigm shift in how we think about social networking and digital communication. It's built on three core principles:</p>
        
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="border rounded-lg p-6 text-center">
            <div class="flex justify-center mb-3">
              <svelte:component this={getIcon('key')} class="h-8 w-8 text-primary" />
            </div>
            <h3 class="font-semibold mb-2">Your Keys, Your Identity</h3>
            <p class="text-sm text-gray-600">You own your identity through cryptographic keys. No usernames, no passwords, no account recovery emails.</p>
          </div>
          
          <div class="border rounded-lg p-6 text-center">
            <div class="flex justify-center mb-3">
              <svelte:component this={getIcon('radio')} class="h-8 w-8 text-primary" />
            </div>
            <h3 class="font-semibold mb-2">Relay Network</h3>
            <p class="text-sm text-gray-600">Messages are distributed across multiple relays. No single point of failure or censorship.</p>
          </div>
          
          <div class="border rounded-lg p-6 text-center">
            <div class="flex justify-center mb-3">
              <svelte:component this={getIcon('globe')} class="h-8 w-8 text-primary" />
            </div>
            <h3 class="font-semibold mb-2">Truly Decentralized</h3>
            <p class="text-sm text-gray-600">No central authority controls your data or communication. You're in complete control.</p>
          </div>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svelte:component this={getIcon('info')} class="h-5 w-5 text-blue-400" />
            </div>
            <div class="ml-3">
              <p class="text-sm text-blue-700">
                <strong>Why Nostr Matters:</strong> In an era of increasing centralization and surveillance, Nostr provides a way to communicate freely without relying on big tech companies or governments.
              </p>
            </div>
          </div>
        </div>
      `,
      features: [
        {
          title: "Your Keys, Your Identity",
          description: "You own your identity through cryptographic keys",
          icon: "Key"
        },
        {
          title: "Relay Network",
          description: "Messages are distributed across multiple relays",
          icon: "Radio"
        },
        {
          title: "Truly Decentralized",
          description: "No single point of failure or censorship",
          icon: "Globe"
        }
      ]
    },
    
    coreConcepts: {
      title: "Core Concepts",
      description: "Master the fundamental building blocks of Nostr protocol",
      icon: "Layers",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <svelte:component this={getIcon('key')} class="h-5 w-5 text-blue-600" />
              Cryptographic Keys
            </h3>
            <p class="text-gray-600 mb-3">Every Nostr user has a keypair consisting of a private key (nsec) and public key (npub).</p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400"># Private Key (keep secret!)</div>
              <div>nsec1abc123...</div>
              <div class="text-green-400 mt-2"># Public Key (share freely)</div>
              <div>npub1xyz789...</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <svelte:component this={getIcon('radio')} class="h-5 w-5 text-blue-600" />
              Events
            </h3>
            <p class="text-gray-600 mb-3">All data in Nostr is transmitted as signed events. Each event has a type, content, and timestamp.</p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm">
              <div class="text-yellow-400">Event Types:</div>
              <div class="ml-4">
                <div>• <span class="text-blue-400">0</span> - Metadata (profile info)</div>
                <div>• <span class="text-blue-400">1</span> - Short Text Note</div>
                <div>• <span class="text-blue-400">3</span> - Contact List</div>
                <div>• <span class="text-blue-400">7</span> - Reaction</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <svelte:component this={getIcon('globe')} class="h-5 w-5 text-blue-600" />
              Relays
            </h3>
            <p class="text-gray-600 mb-3">Relays are servers that store and forward Nostr events. You can connect to multiple relays for redundancy.</p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm">
              <div class="text-green-400"># Shugur Relay</div>
              <div>wss://shu01.shugur.net</div>
              <div class="text-gray-400 mt-2"># Other Popular Relays</div>
              <div>wss://relay.damus.io</div>
              <div>wss://nos.lol</div>
            </div>
          </div>
        </div>
      `
    },
    
    quickStart: {
      title: "Quick Start: Your First Connection",
      description: "Connect to Shugur relay and publish your first event in under 5 minutes",
      icon: "Rocket",
      bgColor: "bg-white",
      iconColor: "text-green-600",
      steps: [
        {
          title: "Generate Your Keys",
          description: "Create a new Nostr keypair for development",
          code: `npm install nostr-tools
npx nostr-tools generate`,
          tip: "For development, you can use any keypair. For production, use a secure key generation method."
        },
        {
          title: "Connect to Shugur Relay",
          description: "Establish WebSocket connection to our relay",
          code: `import { relayInit } from 'nostr-tools'

const relay = relayInit('wss://shu01.shugur.net')
await relay.connect()`,
          tip: "Shugur relay is optimized for developers and provides reliable, fast connections."
        },
        {
          title: "Publish Your First Event",
          description: "Create and sign a text note event",
          code: `import { finishEvent, getPublicKey } from 'nostr-tools'

const event = finishEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello Nostr! This is my first event from Shugur relay.'
}, privateKey)

await relay.publish(event)`,
          tip: "Event kind 1 is for short text notes, similar to tweets or posts."
        }
      ],
      codeExample: {
        language: "JavaScript",
        title: "Complete Working Example",
        description: "Copy this code and run it to get started immediately",
        code: `import { relayInit, finishEvent, getPublicKey } from 'nostr-tools'

async function quickStart() {
  // Generate a keypair (for development only)
  const privateKey = 'your-private-key-here'
  const publicKey = getPublicKey(privateKey)
  
  // Connect to Shugur relay
  const relay = relayInit('wss://shu01.shugur.net')
  await relay.connect()
  
  // Create and publish event
  const event = finishEvent({
    kind: 1,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: 'Hello Nostr! Testing Shugur relay.'
  }, privateKey)
  
  await relay.publish(event)
  console.log('Event published successfully!')
  console.log('Public key:', publicKey)
  
  relay.close()
}

quickStart().catch(console.error)`
      }
    },
    
    nextSteps: {
      title: "What's Next?",
      description: "You've mastered the basics! Here's where to go from here",
      icon: "ArrowRight",
      bgColor: "bg-gray-50",
      iconColor: "text-purple-600",
      content: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="font-semibold mb-3 text-purple-600">Build Your First App</h3>
            <p class="text-sm text-gray-600 mb-4">Choose your preferred programming language and build a complete Nostr application.</p>
            <div class="space-y-2">
              <a href="/guides" class="block text-sm text-blue-600 hover:underline">→ JavaScript/Node.js Quick Start</a>
              <a href="/guides" class="block text-sm text-blue-600 hover:underline">→ Python Quick Start</a>
              <a href="/guides" class="block text-sm text-blue-600 hover:underline">→ Flutter Quick Start</a>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="font-semibold mb-3 text-purple-600">Explore Advanced Features</h3>
            <p class="text-sm text-gray-600 mb-4">Dive deeper into Nostr's capabilities and advanced patterns.</p>
            <div class="space-y-2">
              <a href="/guides/concepts" class="block text-sm text-blue-600 hover:underline">→ Core Concepts Deep Dive</a>
              <a href="/guides/relay-connection" class="block text-sm text-blue-600 hover:underline">→ Relay Connection Patterns</a>
              <a href="/nips" class="block text-sm text-blue-600 hover:underline">→ NIP Standards</a>
            </div>
          </div>
        </div>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svelte:component this={getIcon('checkCircle')} class="h-5 w-5 text-green-400" />
            </div>
            <div class="ml-3">
              <p class="text-sm text-green-700">
                <strong>Congratulations!</strong> You've successfully connected to Nostr and published your first event. You're now part of the decentralized future!
              </p>
            </div>
          </div>
        </div>
      `
    }
  },
  nextSteps: [
    {
      title: "JavaScript Guide",
      description: "Build web applications with JavaScript and Node.js",
      icon: "FileText",
      href: "/guides/javascript"
    },
    {
      title: "TypeScript Guide",
      description: "Build type-safe applications with TypeScript",
      icon: "Code",
      href: "/guides/typescript"
    },
    {
      title: "Python Guide",
      description: "Build bots and backend services",
      icon: "Terminal",
      href: "/guides/python"
    },
    {
      title: "Mobile Development",
      description: "Build mobile apps with Flutter and Kotlin",
      icon: "Smartphone",
      href: "/guides/flutter"
    }
  ]
};

// JavaScript Guide
export const javascriptGuide: GuideContent = {
  title: "JavaScript Guide",
  description: "Build powerful Nostr applications with JavaScript and Node.js. From simple bots to complex web applications, learn everything you need to create decentralized social experiences.",
  heroIcon: "FileText",
  tags: ["Node.js", "Browser", "nostr-tools", "WebSockets", "Real-time", "Full-stack"],
  sections: {
    setup: {
      title: "Setup and Installation",
      description: "Get started with JavaScript and nostr-tools in minutes",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svelte:component this={getIcon('info')} class="h-5 w-5 text-blue-400" />
              </div>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  <strong>Prerequisites:</strong> Basic JavaScript knowledge, Node.js installed, and a code editor.
                </p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-blue-600">1. Install Node.js</h3>
              <p class="text-sm text-gray-600 mb-3">Download and install Node.js from the official website.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Check Node.js version</div>
                <div>node --version</div>
                <div class="text-green-400 mt-2"># Check npm version</div>
                <div>npm --version</div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-blue-600">2. Create Project</h3>
              <p class="text-sm text-gray-600 mb-3">Initialize a new Node.js project and install nostr-tools.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Create project directory</div>
                <div>mkdir my-nostr-app</div>
                <div>cd my-nostr-app</div>
                <div class="text-green-400 mt-2"># Initialize project</div>
                <div>npm init -y</div>
                <div class="text-green-400 mt-2"># Install nostr-tools</div>
                <div>npm install nostr-tools</div>
              </div>
            </div>
          </div>
        </div>
      `,
      steps: [
        {
          title: "Install Node.js",
          description: "Download and install Node.js from nodejs.org",
          code: "node --version",
          tip: "Use LTS version for production applications"
        },
        {
          title: "Create Project Directory",
          description: "Set up your development environment",
          code: `mkdir my-nostr-app
cd my-nostr-app
npm init -y`,
          tip: "Use descriptive project names that reflect your app's purpose"
        },
        {
          title: "Install Dependencies",
          description: "Add nostr-tools and other required packages",
          code: `npm install nostr-tools
npm install ws # For WebSocket support`,
          tip: "nostr-tools is the official JavaScript library for Nostr development"
        }
      ]
    },
    
    basicConnection: {
      title: "Basic Connection",
      description: "Establish WebSocket connections to Shugur relay and manage connections efficiently",
      icon: "Link",
      bgColor: "bg-gray-50",
      iconColor: "text-green-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-green-600">Connection Management</h3>
            <p class="text-gray-600 mb-4">Learn how to connect to Shugur relay and handle connection lifecycle events.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Basic connection to Shugur relay</div>
              <div>import { relayInit } from 'nostr-tools'</div>
              <div class="text-gray-400 mt-2">const relay = relayInit('wss://shu01.shugur.net')</div>
              <div class="text-gray-400">await relay.connect()</div>
              <div class="text-gray-400">console.log('Connected to Shugur relay!')</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-green-600">Connection Events</h3>
            <p class="text-gray-600 mb-4">Handle connection state changes and errors gracefully.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Handle connection events</div>
              <div>relay.on('connect', () => {</div>
              <div class="text-gray-400 ml-4">console.log('Connected to relay')</div>
              <div>})</div>
              <div class="text-gray-400 mt-2">relay.on('disconnect', () => {</div>
              <div class="text-gray-400 ml-4">console.log('Disconnected from relay')</div>
              <div>})</div>
              <div class="text-gray-400 mt-2">relay.on('error', (error) => {</div>
              <div class="text-gray-400 ml-4">console.error('Relay error:', error)</div>
              <div>})</div>
            </div>
          </div>
        </div>
      `,
      codeExample: {
        language: "JavaScript",
        title: "Complete Connection Example",
        description: "A robust connection manager with error handling and reconnection logic",
        code: `import { relayInit } from 'nostr-tools'

class NostrConnectionManager {
  constructor(relayUrl) {
    this.relayUrl = relayUrl
    this.relay = null
    this.isConnected = false
    this.reconnectAttempts = 0
    this.maxReconnectAttempts = 5
  }
  
  async connect() {
    try {
      this.relay = relayInit(this.relayUrl)
      
      this.relay.on('connect', () => {
        console.log('Connected to Shugur relay')
        this.isConnected = true
        this.reconnectAttempts = 0
      })
      
      this.relay.on('disconnect', () => {
        console.log('Disconnected from relay')
        this.isConnected = false
        this.attemptReconnect()
      })
      
      this.relay.on('error', (error) => {
        console.error('Relay error:', error)
        this.isConnected = false
      })
      
      await this.relay.connect()
      return true
    } catch (error) {
      console.error('Connection failed:', error)
      return false
    }
  }
  
  async attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++
      console.log(\`Reconnection attempt \${this.reconnectAttempts}\`)
      
      setTimeout(async () => {
        await this.connect()
      }, 1000 * this.reconnectAttempts)
    }
  }
  
  disconnect() {
    if (this.relay) {
      this.relay.close()
      this.isConnected = false
    }
  }
}

// Usage
const connectionManager = new NostrConnectionManager('wss://shu01.shugur.net')
await connectionManager.connect()`
      }
    },
    
    events: {
      title: "Working with Events",
      description: "Create, sign, and publish various types of Nostr events with proper validation",
      icon: "FileText",
      bgColor: "bg-white",
      iconColor: "text-purple-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-purple-600">Event Types</h3>
            <p class="text-gray-600 mb-4">Nostr supports various event types for different use cases.</p>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Text Notes (Kind 1)</h4>
                <p class="text-xs text-gray-600">Short text posts, similar to tweets</p>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Metadata (Kind 0)</h4>
                <p class="text-xs text-gray-600">Profile information and settings</p>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Reactions (Kind 7)</h4>
                <p class="text-xs text-gray-600">Likes, dislikes, and custom reactions</p>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Contact List (Kind 3)</h4>
                <p class="text-xs text-gray-600">Follow lists and contact information</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-purple-600">Creating Events</h3>
            <p class="text-gray-600 mb-4">Learn the proper way to create and sign Nostr events.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Create a text note event</div>
              <div>import { finishEvent, getPublicKey } from 'nostr-tools'</div>
              <div class="text-gray-400 mt-2">const event = finishEvent({</div>
              <div class="text-gray-400 ml-4">kind: 1,</div>
              <div class="text-gray-400 ml-4">created_at: Math.floor(Date.now() / 1000),</div>
              <div class="text-gray-400 ml-4">tags: [],</div>
              <div class="text-gray-400 ml-4">content: 'Hello Nostr from Shugur relay!'</div>
              <div class="text-gray-400">}, privateKey)</div>
              <div class="text-gray-400 mt-2">// Publish to relay</div>
              <div class="text-gray-400">await relay.publish(event)</div>
            </div>
          </div>
        </div>
      `,
      examples: [
        {
          title: "Text Note Event",
          description: "Create and publish a simple text note",
          language: "JavaScript",
          code: `import { finishEvent, getPublicKey } from 'nostr-tools'

async function publishTextNote(content, privateKey) {
  const event = finishEvent({
    kind: 1,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: content
  }, privateKey)
  
  await relay.publish(event)
  return event
}

// Usage
await publishTextNote('Hello Nostr! Testing Shugur relay.', privateKey)`
        },
        {
          title: "Profile Metadata Event",
          description: "Update user profile information",
          language: "JavaScript",
          code: `import { finishEvent } from 'nostr-tools'

async function updateProfile(profile, privateKey) {
  const event = finishEvent({
    kind: 0,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: JSON.stringify({
      name: profile.name,
      about: profile.about,
      picture: profile.picture,
      website: profile.website
    })
  }, privateKey)
  
  await relay.publish(event)
  return event
}

// Usage
await updateProfile({
  name: 'Nostr Developer',
  about: 'Building the decentralized future',
  picture: 'https://example.com/avatar.jpg',
  website: 'https://example.com'
}, privateKey)`
        }
      ]
    },
    
    subscription: {
      title: "Real-time Subscriptions",
      description: "Subscribe to events and handle real-time updates with efficient filtering",
      icon: "Terminal",
      bgColor: "bg-gray-50",
      iconColor: "text-orange-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-orange-600">Subscription Basics</h3>
            <p class="text-gray-600 mb-4">Learn how to subscribe to specific events and handle incoming data.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Subscribe to text notes from a specific user</div>
              <div>const sub = relay.sub([</div>
              <div class="text-gray-400 ml-4">['authors', [publicKey]],</div>
              <div class="text-gray-400 ml-4">['kinds', [1]]</div>
              <div>])</div>
              <div class="text-gray-400 mt-2">sub.on('event', (event) => {</div>
              <div class="text-gray-400 ml-4">console.log('New event:', event)</div>
              <div class="text-gray-400">})</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-orange-600">Filtering Events</h3>
            <p class="text-gray-600 mb-4">Use powerful filters to get exactly the events you need.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm">
              <div class="text-green-400">Filter Examples:</div>
              <div class="ml-4">
                <div>• <span class="text-blue-400">['authors', [pubkey]]</span> - Events from specific users</div>
                <div>• <span class="text-blue-400">['kinds', [1, 7]]</span> - Text notes and reactions</div>
                <div>• <span class="text-blue-400">['since', timestamp]</span> - Events after specific time</div>
                <div>• <span class="text-blue-400">['limit', 100]</span> - Limit number of events</div>
              </div>
            </div>
          </div>
        </div>
      `,
      codeExample: {
        language: "JavaScript",
        title: "Advanced Subscription Manager",
        description: "A comprehensive subscription system with filtering and event handling",
        code: `import { relayInit } from 'nostr-tools'

class NostrSubscriptionManager {
  constructor(relay) {
    this.relay = relay
    this.subscriptions = new Map()
  }
  
  subscribeToUserEvents(publicKey, callback) {
    const sub = this.relay.sub([
      ['authors', [publicKey]],
      ['kinds', [0, 1, 3, 7]] // Metadata, text notes, contacts, reactions
    ])
    
    sub.on('event', callback)
    sub.on('eose', () => console.log('Subscription ended'))
    
    this.subscriptions.set(publicKey, sub)
    return sub
  }
  
  subscribeToGlobalFeed(callback, limit = 100) {
    const sub = this.relay.sub([
      ['kinds', [1]], // Only text notes
      ['limit', limit]
    ])
    
    sub.on('event', callback)
    sub.on('eose', () => console.log('Global feed subscription ended'))
    
    this.subscriptions.set('global', sub)
    return sub
  }
  
  subscribeToHashtags(tags, callback) {
    const sub = this.relay.sub([
      ['#t', tags],
      ['kinds', [1]]
    ])
    
    sub.on('event', callback)
    sub.on('eose', () => console.log('Hashtag subscription ended'))
    
    this.subscriptions.set(\`hashtags-\${tags.join('-')}\`, sub)
    return sub
  }
  
  unsubscribe(subscriptionId) {
    const sub = this.subscriptions.get(subscriptionId)
    if (sub) {
      sub.unsub()
      this.subscriptions.delete(subscriptionId)
    }
  }
  
  unsubscribeAll() {
    for (const [id, sub] of this.subscriptions) {
      sub.unsub()
    }
    this.subscriptions.clear()
  }
}

// Usage
const subManager = new NostrSubscriptionManager(relay)

// Subscribe to user events
subManager.subscribeToUserEvents(publicKey, (event) => {
  console.log('User event:', event)
})

// Subscribe to global feed
subManager.subscribeToGlobalFeed((event) => {
  console.log('Global event:', event)
})

// Subscribe to hashtags
subManager.subscribeToHashtags(['nostr', 'decentralized'], (event) => {
  console.log('Hashtag event:', event)
})`
      }
    },
    
    examples: {
      title: "Complete Examples",
      description: "Full project examples and templates to get you started quickly",
      icon: "Code",
      bgColor: "bg-white",
      iconColor: "text-indigo-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-indigo-600">Available Examples</h3>
            <p class="text-gray-600 mb-4">Explore these complete examples to learn different patterns and approaches.</p>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Simple Bot</h4>
                <p class="text-xs text-gray-600">Basic bot that responds to mentions</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Web Dashboard</h4>
                <p class="text-xs text-gray-600">Real-time dashboard for monitoring events</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Event Archiver</h4>
                <p class="text-xs text-gray-600">Save events to database for analysis</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Multi-Relay Client</h4>
                <p class="text-xs text-gray-600">Connect to multiple relays simultaneously</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
            </div>
          </div>
        </div>
      `,
      tips: [
        {
          title: "Start Simple",
          description: "Begin with basic examples and gradually add complexity",
          icon: "Target"
        },
        {
          title: "Use TypeScript",
          description: "Consider TypeScript for better type safety and developer experience",
          icon: "Code"
        },
        {
          title: "Handle Errors",
          description: "Always implement proper error handling for production applications",
          icon: "AlertCircle"
        }
      ]
    }
  },
  nextSteps: [
    {
      title: "TypeScript Guide",
      description: "Build type-safe Nostr applications",
      icon: "Code",
      href: "/guides/typescript"
    },
    {
      title: "Python Guide",
      description: "Build bots and backend services",
      icon: "Terminal",
      href: "/guides/python"
    },
    {
      title: "Advanced Guides",
      description: "Explore complete project examples",
      icon: "Code",
      href: "/guides"
    }
  ]
};

// TypeScript Guide
export const typescriptGuide: GuideContent = {
  title: "TypeScript Guide",
  description: "Build type-safe Nostr applications with TypeScript. Leverage strong typing, IntelliSense, and modern tooling to create robust, maintainable decentralized applications with confidence.",
  heroIcon: "Code",
  tags: ["Type Safety", "nostr-tools", "Node.js", "Modern JS", "Enterprise", "Developer Experience"],
  sections: {
    setup: {
      title: "Setup and Installation",
      description: "Configure TypeScript with nostr-tools for maximum type safety and developer experience",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svelte:component this={getIcon('info')} class="h-5 w-5 text-blue-400" />
              </div>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  <strong>Why TypeScript for Nostr?</strong> TypeScript provides compile-time type checking, better IDE support, and catches errors before they reach production.
                </p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-blue-600">1. Project Initialization</h3>
              <p class="text-sm text-gray-600 mb-3">Create a new TypeScript project with proper configuration.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Create project directory</div>
                <div>mkdir nostr-ts-app</div>
                <div>cd nostr-ts-app</div>
                <div class="text-green-400 mt-2"># Initialize with TypeScript</div>
                <div>npm init -y</div>
                <div>npm install -D typescript @types/node ts-node</div>
                <div>npx tsc --init</div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-blue-600">2. Install Nostr Dependencies</h3>
              <p class="text-sm text-gray-600 mb-3">Add nostr-tools with proper type definitions.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Install core dependencies</div>
                <div>npm install nostr-tools</div>
                <div class="text-green-400 mt-2"># Install additional types</div>
                <div>npm install -D @types/ws</div>
                <div class="text-green-400 mt-2"># For web development</div>
                <div>npm install -D @types/dom</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="font-semibold mb-3 text-blue-600">TypeScript Configuration</h3>
            <p class="text-sm text-gray-600 mb-3">Optimize your tsconfig.json for Nostr development.</p>
            <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono">
              <div class="text-green-400">// tsconfig.json</div>
              <div>{</div>
              <div class="ml-2">"compilerOptions": {</div>
              <div class="ml-4">"target": "ES2020",</div>
              <div class="ml-4">"module": "commonjs",</div>
              <div class="ml-4">"lib": ["ES2020", "DOM"],</div>
              <div class="ml-4">"outDir": "./dist",</div>
              <div class="ml-4">"rootDir": "./src",</div>
              <div class="ml-4">"strict": true,</div>
              <div class="ml-4">"esModuleInterop": true,</div>
              <div class="ml-4">"skipLibCheck": true,</div>
              <div class="ml-4">"forceConsistentCasingInFileNames": true</div>
              <div class="ml-2">}</div>
              <div>}</div>
            </div>
          </div>
        </div>
      `,
      steps: [
        {
          title: "Initialize TypeScript Project",
          description: "Set up a new TypeScript project with proper configuration",
          code: `mkdir nostr-ts-app && cd nostr-ts-app
npm init -y
npm install -D typescript @types/node ts-node nodemon
npx tsc --init`,
          tip: "Use ts-node for development and nodemon for auto-reloading"
        },
        {
          title: "Install Nostr Dependencies",
          description: "Add nostr-tools and required type definitions",
          code: `npm install nostr-tools
npm install -D @types/ws @types/dom`,
          tip: "Always install type definitions for better IDE support"
        },
        {
          title: "Configure Development Scripts",
          description: "Add useful scripts to package.json",
          code: `"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}`,
          tip: "Use nodemon for development and tsc for production builds"
        }
      ]
    },
    
    types: {
      title: "Type Definitions",
      description: "Master TypeScript types for Nostr events, filters, and relay operations with complete type safety",
      icon: "FileText",
      bgColor: "bg-gray-50",
      iconColor: "text-purple-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-purple-600">Core Nostr Types</h3>
            <p class="text-gray-600 mb-4">TypeScript interfaces for all Nostr protocol components.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Core event interface</div>
              <div>interface NostrEvent {</div>
              <div class="ml-2">id: string</div>
              <div class="ml-2">pubkey: string</div>
              <div class="ml-2">created_at: number</div>
              <div class="ml-2">kind: number</div>
              <div class="ml-2">tags: string[][]</div>
              <div class="ml-2">content: string</div>
              <div class="ml-2">sig: string</div>
              <div>}</div>
              <div class="text-gray-400 mt-2">// Event kinds enum</div>
              <div>enum EventKind {</div>
              <div class="ml-2">Metadata = 0,</div>
              <div class="ml-2">TextNote = 1,</div>
              <div class="ml-2">RecommendRelay = 2,</div>
              <div class="ml-2">Contacts = 3,</div>
              <div class="ml-2">EncryptedDirectMessage = 4,</div>
              <div class="ml-2">Deletion = 5,</div>
              <div class="ml-2">Reaction = 7</div>
              <div>}</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-purple-600">Filter Types</h3>
            <p class="text-gray-600 mb-4">Type-safe subscription filters with IntelliSense support.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Subscription filter interface</div>
              <div>interface Filter {</div>
              <div class="ml-2">ids?: string[]</div>
              <div class="ml-2">authors?: string[]</div>
              <div class="ml-2">kinds?: EventKind[]</div>
              <div class="ml-2">since?: number</div>
              <div class="ml-2">until?: number</div>
              <div class="ml-2">limit?: number</div>
              <div class="ml-2">'#e'?: string[]  // referenced event ids</div>
              <div class="ml-2">'#p'?: string[]  // referenced pubkeys</div>
              <div class="ml-2">'#t'?: string[]  // hashtags</div>
              <div class="ml-2">[key: string]: string[] | number | undefined</div>
              <div>}</div>
            </div>
          </div>
        </div>
      `,
      codeExample: {
        language: "TypeScript",
        title: "Complete Type Definitions",
        description: "A comprehensive type definition file for Nostr development",
        code: `// types/nostr.ts
export interface NostrEvent {
  id: string
  pubkey: string
  created_at: number
  kind: EventKind
  tags: string[][]
  content: string
  sig: string
}

export enum EventKind {
  Metadata = 0,
  TextNote = 1,
  RecommendRelay = 2,
  Contacts = 3,
  EncryptedDirectMessage = 4,
  Deletion = 5,
  Reaction = 7,
  BadgeAward = 8,
  GroupChatMessage = 9,
  GroupChatThreadedReply = 10,
  GroupThread = 11,
  GroupThreadReply = 12
}

export interface Filter {
  ids?: string[]
  authors?: string[]
  kinds?: EventKind[]
  since?: number
  until?: number
  limit?: number
  '#e'?: string[]
  '#p'?: string[]
  '#t'?: string[]
  [key: string]: string[] | number | undefined
}

export interface UnsignedEvent {
  kind: EventKind
  created_at: number
  tags: string[][]
  content: string
}

export interface RelayInformation {
  name?: string
  description?: string
  pubkey?: string
  contact?: string
  supported_nips?: number[]
  software?: string
  version?: string
}

export interface RelayPolicy {
  payment_required?: boolean
  created_at_lower_limit?: number
  created_at_upper_limit?: number
  max_message_length?: number
  max_subscriptions?: number
  max_filters?: number
  max_limit?: number
  max_subid_length?: number
  min_prefix?: number
  max_event_tags?: number
  max_content_length?: number
  restricted_writes?: boolean
  auth_required?: boolean
}

export type RelayURL = string
export type SubscriptionId = string
export type EventId = string
export type PublicKey = string
export type PrivateKey = string`
      }
    },
    
    events: {
      title: "Working with Events",
      description: "Create, validate, and handle Nostr events with complete type safety and error handling",
      icon: "Code",
      bgColor: "bg-white",
      iconColor: "text-green-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-green-600">Type-Safe Event Creation</h3>
            <p class="text-gray-600 mb-4">Create events with full type checking and validation.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Type-safe event builder</div>
              <div>class EventBuilder {</div>
              <div class="ml-2">static createTextNote(content: string): UnsignedEvent {</div>
              <div class="ml-4">return {</div>
              <div class="ml-6">kind: EventKind.TextNote,</div>
              <div class="ml-6">created_at: Math.floor(Date.now() / 1000),</div>
              <div class="ml-6">tags: [],</div>
              <div class="ml-6">content</div>
              <div class="ml-4">}</div>
              <div class="ml-2">}</div>
              <div class="text-gray-400 mt-2">  static createMetadata(profile: UserProfile): UnsignedEvent {</div>
              <div class="ml-4">return {</div>
              <div class="ml-6">kind: EventKind.Metadata,</div>
              <div class="ml-6">created_at: Math.floor(Date.now() / 1000),</div>
              <div class="ml-6">tags: [],</div>
              <div class="ml-6">content: JSON.stringify(profile)</div>
              <div class="ml-4">}</div>
              <div class="ml-2">}</div>
              <div>}</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-green-600">Event Validation</h3>
            <p class="text-gray-600 mb-4">Validate events with TypeScript guards and schemas.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Event validation functions</div>
              <div>function isValidEvent(event: any): event is NostrEvent {</div>
              <div class="ml-2">return (</div>
              <div class="ml-4">typeof event.id === 'string' &&</div>
              <div class="ml-4">typeof event.pubkey === 'string' &&</div>
              <div class="ml-4">typeof event.created_at === 'number' &&</div>
              <div class="ml-4">typeof event.kind === 'number' &&</div>
              <div class="ml-4">Array.isArray(event.tags) &&</div>
              <div class="ml-4">typeof event.content === 'string' &&</div>
              <div class="ml-4">typeof event.sig === 'string'</div>
              <div class="ml-2">)</div>
              <div>}</div>
            </div>
          </div>
        </div>
      `,
      examples: [
        {
          title: "Type-Safe Event Publisher",
          description: "A complete event publishing system with type safety",
          language: "TypeScript",
          code: `import { finishEvent, getPublicKey } from 'nostr-tools'
import { NostrEvent, UnsignedEvent, EventKind } from './types/nostr'

class NostrEventPublisher {
  constructor(private privateKey: string) {}

  async publishTextNote(content: string, tags: string[][] = []): Promise<NostrEvent> {
    const unsignedEvent: UnsignedEvent = {
      kind: EventKind.TextNote,
      created_at: Math.floor(Date.now() / 1000),
      tags,
      content
    }

    const signedEvent = finishEvent(unsignedEvent, this.privateKey)
    
    if (!this.validateEvent(signedEvent)) {
      throw new Error('Invalid event created')
    }

    await this.relay.publish(signedEvent)
    return signedEvent
  }

  async publishReaction(eventId: string, reaction: string = '+'): Promise<NostrEvent> {
    const unsignedEvent: UnsignedEvent = {
      kind: EventKind.Reaction,
      created_at: Math.floor(Date.now() / 1000),
      tags: [['e', eventId]],
      content: reaction
    }

    const signedEvent = finishEvent(unsignedEvent, this.privateKey)
    await this.relay.publish(signedEvent)
    return signedEvent
  }

  private validateEvent(event: NostrEvent): boolean {
    return (
      event.id.length === 64 &&
      event.pubkey.length === 64 &&
      event.created_at > 0 &&
      Object.values(EventKind).includes(event.kind) &&
      Array.isArray(event.tags) &&
      typeof event.content === 'string' &&
      event.sig.length === 128
    )
  }
}`
        },
        {
          title: "Event Handler with Generics",
          description: "Generic event handlers with type constraints",
          language: "TypeScript",
          code: `interface EventHandler<T extends NostrEvent = NostrEvent> {
  handle(event: T): Promise<void>
}

class TextNoteHandler implements EventHandler<NostrEvent & { kind: EventKind.TextNote }> {
  async handle(event: NostrEvent & { kind: EventKind.TextNote }): Promise<void> {
    console.log(\`New text note from \${event.pubkey}: \${event.content}\`)
    
    // Process hashtags
    const hashtags = event.tags
      .filter(tag => tag[0] === 't')
      .map(tag => tag[1])
    
    if (hashtags.length > 0) {
      console.log('Hashtags:', hashtags)
    }
  }
}

class ReactionHandler implements EventHandler<NostrEvent & { kind: EventKind.Reaction }> {
  async handle(event: NostrEvent & { kind: EventKind.Reaction }): Promise<void> {
    const referencedEvent = event.tags.find(tag => tag[0] === 'e')?.[1]
    console.log(\`Reaction \${event.content} to event \${referencedEvent}\`)
  }
}`
        }
      ]
    },
    
    interfaces: {
      title: "Custom Interfaces and Types",
      description: "Define domain-specific interfaces and utility types for your Nostr application",
      icon: "Target",
      bgColor: "bg-gray-50",
      iconColor: "text-indigo-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-indigo-600">Application-Specific Types</h3>
            <p class="text-gray-600 mb-4">Create types that match your application's domain.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// User profile types</div>
              <div>interface UserProfile {</div>
              <div class="ml-2">name?: string</div>
              <div class="ml-2">about?: string</div>
              <div class="ml-2">picture?: string</div>
              <div class="ml-2">website?: string</div>
              <div class="ml-2">nip05?: string</div>
              <div class="ml-2">lud06?: string</div>
              <div class="ml-2">lud16?: string</div>
              <div>}</div>
              <div class="text-gray-400 mt-2">// Enhanced event with metadata</div>
              <div>interface EnhancedEvent extends NostrEvent {</div>
              <div class="ml-2">authorProfile?: UserProfile</div>
              <div class="ml-2">reactionCount?: number</div>
              <div class="ml-2">replies?: NostrEvent[]</div>
              <div class="ml-2">isBookmarked?: boolean</div>
              <div>}</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-indigo-600">Utility Types</h3>
            <p class="text-gray-600 mb-4">Leverage TypeScript's utility types for Nostr development.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// Utility types for events</div>
              <div>type EventWithoutSignature = Omit&lt;NostrEvent, 'id' | 'sig'&gt;</div>
              <div>type EventMetadata = Pick&lt;NostrEvent, 'pubkey' | 'created_at' | 'kind'&gt;</div>
              <div>type RequiredProfile = Required&lt;Pick&lt;UserProfile, 'name' | 'about'&gt;&gt;</div>
              <div class="text-gray-400 mt-2">// Conditional types</div>
              <div>type EventContent&lt;T extends EventKind&gt; = T extends EventKind.Metadata</div>
              <div class="ml-2">? UserProfile</div>
              <div class="ml-2">: T extends EventKind.TextNote</div>
              <div class="ml-2">? string</div>
              <div class="ml-2">: unknown</div>
            </div>
          </div>
        </div>
      `,
      codeExample: {
        language: "TypeScript",
        title: "Complete Interface System",
        description: "A comprehensive interface system for a Nostr application",
        code: `// interfaces/nostr-app.ts
export interface UserProfile {
  name?: string
  about?: string
  picture?: string
  website?: string
  nip05?: string
  lud06?: string
  lud16?: string
  banner?: string
  display_name?: string
}

export interface ContactListEntry {
  pubkey: string
  relay?: string
  petname?: string
}

export interface RelayMetadata {
  url: string
  read: boolean
  write: boolean
  lastConnected?: Date
  status: 'connected' | 'disconnected' | 'connecting' | 'error'
}

export interface Subscription {
  id: string
  filters: Filter[]
  relay: string
  isActive: boolean
  createdAt: Date
}

export interface EventWithMetadata extends NostrEvent {
  authorProfile?: UserProfile
  relayUrl?: string
  receivedAt: Date
  reactionCount: number
  replyCount: number
  mentionsCount: number
  isBookmarked: boolean
  isMuted: boolean
  repostedBy?: PublicKey[]
}

// State management interfaces
export interface AppState {
  user: {
    profile: UserProfile | null
    privateKey: string | null
    publicKey: string | null
    contactList: ContactListEntry[]
  }
  relays: {
    [url: string]: RelayMetadata
  }
  events: {
    [id: string]: EventWithMetadata
  }
  subscriptions: {
    [id: string]: Subscription
  }
  ui: {
    activeView: 'home' | 'profile' | 'messages' | 'settings'
    isLoading: boolean
    error: string | null
  }
}

// Event processors
export interface EventProcessor<T extends NostrEvent = NostrEvent> {
  canProcess(event: NostrEvent): event is T
  process(event: T): Promise<void>
}

// Configuration types
export interface NostrClientConfig {
  defaultRelays: string[]
  autoConnect: boolean
  reconnectInterval: number
  maxReconnectAttempts: number
  subscriptionTimeout: number
  eventValidation: boolean
}

// API response types
export type Result<T, E = Error> = {
  success: true
  data: T
} | {
  success: false
  error: E
}

export type EventResult = Result<NostrEvent, 'invalid_event' | 'publish_failed' | 'network_error'>
export type ProfileResult = Result<UserProfile, 'not_found' | 'invalid_metadata'>`
      }
    },
    
    compilation: {
      title: "Build Configuration",
      description: "Optimize TypeScript compilation for different deployment targets and environments",
      icon: "Settings",
      bgColor: "bg-white",
      iconColor: "text-orange-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-orange-600">Production Build Setup</h3>
            <p class="text-gray-600 mb-4">Configure TypeScript for different environments and targets.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
              <div class="text-green-400">// tsconfig.json for Node.js</div>
              <div>{</div>
              <div class="ml-2">"compilerOptions": {</div>
              <div class="ml-4">"target": "ES2020",</div>
              <div class="ml-4">"module": "commonjs",</div>
              <div class="ml-4">"lib": ["ES2020"],</div>
              <div class="ml-4">"outDir": "./dist",</div>
              <div class="ml-4">"rootDir": "./src",</div>
              <div class="ml-4">"strict": true,</div>
              <div class="ml-4">"declaration": true,</div>
              <div class="ml-4">"declarationMap": true,</div>
              <div class="ml-4">"sourceMap": true,</div>
              <div class="ml-4">"removeComments": true,</div>
              <div class="ml-4">"noUnusedLocals": true,</div>
              <div class="ml-4">"noUnusedParameters": true</div>
              <div class="ml-2">}</div>
              <div>}</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-orange-600">Multiple Configurations</h3>
            <p class="text-gray-600 mb-4">Set up different builds for development, testing, and production.</p>
            
            <div class="bg-gray-900 text-gray-100 p-4 rounded text-sm">
              <div class="text-green-400">Package.json Scripts:</div>
              <div>{</div>
              <div class="ml-2">"scripts": {</div>
              <div class="ml-4">"dev": "nodemon --exec ts-node src/index.ts",</div>
              <div class="ml-4">"build": "tsc",</div>
              <div class="ml-4">"build:watch": "tsc --watch",</div>
              <div class="ml-4">"build:prod": "tsc --project tsconfig.prod.json",</div>
              <div class="ml-4">"test": "jest",</div>
              <div class="ml-4">"test:watch": "jest --watch",</div>
              <div class="ml-4">"lint": "eslint src/**/*.ts",</div>
              <div class="ml-4">"lint:fix": "eslint src/**/*.ts --fix"</div>
              <div class="ml-2">}</div>
              <div>}</div>
            </div>
          </div>
        </div>
      `,
      tips: [
        {
          title: "Use Path Mapping",
          description: "Configure path aliases for cleaner imports",
          icon: "Link"
        },
        {
          title: "Enable Strict Mode",
          description: "Use strict TypeScript settings for better code quality",
          icon: "Shield"
        },
        {
          title: "Source Maps",
          description: "Generate source maps for easier debugging in production",
          icon: "Bug"
        }
      ]
    },
    
    examples: {
      title: "Complete Examples",
      description: "Full TypeScript project examples with best practices, testing, and deployment",
      icon: "Terminal",
      bgColor: "bg-gray-50",
      iconColor: "text-green-600",
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-semibold mb-3 text-green-600">Available Examples</h3>
            <p class="text-gray-600 mb-4">Complete TypeScript projects ready for production use.</p>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Type-Safe Nostr Client</h4>
                <p class="text-xs text-gray-600">Full-featured client with state management</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Event Processing Service</h4>
                <p class="text-xs text-gray-600">Microservice for processing Nostr events</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">Real-time Dashboard</h4>
                <p class="text-xs text-gray-600">TypeScript + React dashboard</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-sm">CLI Tool</h4>
                <p class="text-xs text-gray-600">Command-line interface for Nostr operations</p>
                <a href="/guides" class="text-xs text-blue-600 hover:underline">View Guide →</a>
              </div>
            </div>
          </div>
        </div>
      `,
      codeExample: {
        language: "TypeScript",
        title: "Production-Ready Nostr Client",
        description: "A complete, type-safe Nostr client implementation",
        code: `// src/client/NostrClient.ts
import { relayInit, finishEvent, getPublicKey } from 'nostr-tools'
import { NostrEvent, Filter, EventKind, RelayURL } from '../types/nostr'
import { EventEmitter } from 'events'

interface NostrClientOptions {
  privateKey?: string
  defaultRelays: RelayURL[]
  autoConnect: boolean
  reconnectInterval: number
  maxReconnectAttempts: number
}

export class NostrClient extends EventEmitter {
  private relays = new Map<RelayURL, any>()
  private subscriptions = new Map<string, any>()
  private options: NostrClientOptions
  private publicKey?: string

  constructor(options: Partial<NostrClientOptions> = {}) {
    super()
    this.options = {
      defaultRelays: ['wss://shu01.shugur.net'],
      autoConnect: true,
      reconnectInterval: 5000,
      maxReconnectAttempts: 5,
      ...options
    }

    if (this.options.privateKey) {
      this.publicKey = getPublicKey(this.options.privateKey)
    }

    if (this.options.autoConnect) {
      this.connectToRelays()
    }
  }

  async connectToRelays(): Promise<void> {
    const connections = this.options.defaultRelays.map(url => 
      this.connectToRelay(url)
    )
    
    await Promise.allSettled(connections)
  }

  async connectToRelay(url: RelayURL): Promise<void> {
    try {
      const relay = relayInit(url)
      
      relay.on('connect', () => {
        console.log(\`Connected to \${url}\`)
        this.emit('relay:connected', url)
      })

      relay.on('disconnect', () => {
        console.log(\`Disconnected from \${url}\`)
        this.emit('relay:disconnected', url)
      })

      relay.on('error', (error: Error) => {
        console.error(\`Relay error (\${url}):\`, error)
        this.emit('relay:error', { url, error })
      })

      await relay.connect()
      this.relays.set(url, relay)
    } catch (error) {
      console.error(\`Failed to connect to \${url}:\`, error)
      throw error
    }
  }

  subscribe(filters: Filter[], subscriptionId?: string): string {
    const subId = subscriptionId || this.generateSubscriptionId()
    
    for (const [url, relay] of this.relays) {
      const sub = relay.sub(filters)
      
      sub.on('event', (event: NostrEvent) => {
        if (this.validateEvent(event)) {
          this.emit('event', { event, relay: url })
        }
      })

      sub.on('eose', () => {
        this.emit('subscription:eose', subId)
      })

      this.subscriptions.set(\`\${subId}:\${url}\`, sub)
    }

    return subId
  }

  async publish(event: Omit<NostrEvent, 'id' | 'sig'>): Promise<NostrEvent[]> {
    if (!this.options.privateKey) {
      throw new Error('Private key required for publishing')
    }

    const signedEvent = finishEvent(event, this.options.privateKey)
    const results: NostrEvent[] = []

    for (const [url, relay] of this.relays) {
      try {
        await relay.publish(signedEvent)
        results.push(signedEvent)
        this.emit('event:published', { event: signedEvent, relay: url })
      } catch (error) {
        this.emit('event:publish_failed', { event: signedEvent, relay: url, error })
      }
    }

    return results
  }

  async publishTextNote(content: string, tags: string[][] = []): Promise<NostrEvent[]> {
    return this.publish({
      kind: EventKind.TextNote,
      created_at: Math.floor(Date.now() / 1000),
      tags,
      content,
      pubkey: this.publicKey!
    })
  }

  unsubscribe(subscriptionId: string): void {
    for (const [key, sub] of this.subscriptions) {
      if (key.startsWith(subscriptionId)) {
        sub.unsub()
        this.subscriptions.delete(key)
      }
    }
  }

  disconnect(): void {
    for (const [url, relay] of this.relays) {
      relay.close()
    }
    this.relays.clear()
    this.subscriptions.clear()
  }

  private validateEvent(event: NostrEvent): boolean {
    return (
      typeof event.id === 'string' &&
      typeof event.pubkey === 'string' &&
      typeof event.created_at === 'number' &&
      typeof event.kind === 'number' &&
      Array.isArray(event.tags) &&
      typeof event.content === 'string' &&
      typeof event.sig === 'string'
    )
  }

  private generateSubscriptionId(): string {
    return \`sub_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`
  }
}`
      }
    }
  },
  nextSteps: [
    {
      title: "JavaScript Guide",
      description: "Learn the JavaScript foundations",
      icon: "FileText",
      href: "/guides/javascript"
    },
    {
      title: "Python Guide",
      description: "Build bots and backend services",
      icon: "Terminal",
      href: "/guides/python"
    },
    {
      title: "Testing Guide",
      description: "Test your TypeScript Nostr applications",
      icon: "CheckCircle",
      href: "/guides/testing"
    },
    {
      title: "Advanced Guides",
      description: "Explore complete TypeScript project examples",
      icon: "Code",
      href: "/guides"
    }
  ]
};

// Python Guide
export const pythonGuide: GuideContent = {
  title: "Python Guide",
  description: "Build powerful Nostr applications with Python for bots, analytics, machine learning, and backend services. Perfect for automation, data processing, and intelligent Nostr interactions.",
  heroIcon: "Terminal",
  tags: ["Python", "Async", "Bots", "Backend", "Data Science", "Machine Learning", "Automation"],
  sections: {
    setup: {
      title: "Setup and Installation",
      description: "Install Python dependencies and configure your development environment for Nostr development",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-green-600",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 border-l-4 border-green-400 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svelte:component this={getIcon('info')} class="h-5 w-5 text-green-400" />
              </div>
              <div class="ml-3">
                <p class="text-sm text-green-700">
                  <strong>Why Python for Nostr?</strong> Python excels at rapid prototyping, data processing, machine learning, and automation - perfect for building intelligent Nostr bots and analytics tools.
                </p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-green-600">1. Python Installation</h3>
              <p class="text-sm text-gray-600 mb-3">Ensure you have Python 3.8+ installed with pip package manager.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Check Python version</div>
                <div>python --version</div>
                <div class="text-green-400 mt-2"># Create virtual environment</div>
                <div>python -m venv nostr-env</div>
                <div class="text-green-400 mt-2"># Activate environment</div>
                <div>source nostr-env/bin/activate  # Linux/Mac</div>
                <div># or nostr-env\\Scripts\\activate  # Windows</div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-green-600">2. Install Dependencies</h3>
              <p class="text-sm text-gray-600 mb-3">Install essential packages for Nostr development.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Core Nostr libraries</div>
                <div>pip install python-nostr websockets</div>
                <div class="text-green-400 mt-2"># Additional useful packages</div>
                <div>pip install asyncio aiohttp</div>
                <div>pip install cryptography</div>
                <div class="text-green-400 mt-2"># For bots and automation</div>
                <div>pip install schedule python-dotenv</div>
              </div>
            </div>
          </div>
        </div>
      `,
      steps: [
        {
          title: "Create Virtual Environment",
          description: "Isolate your Python dependencies for the project",
          code: `python -m venv nostr-env
source nostr-env/bin/activate  # Linux/Mac
# or nostr-env\\Scripts\\activate  # Windows`,
          tip: "Always use virtual environments to avoid dependency conflicts"
        },
        {
          title: "Install Core Dependencies",
          description: "Install essential Python packages for Nostr development",
          code: `pip install python-nostr websockets asyncio aiohttp
pip install cryptography python-dotenv schedule`,
          tip: "Use requirements.txt to track dependencies for easy deployment"
        },
        {
          title: "Create Project Structure",
          description: "Set up a maintainable project structure",
          code: `mkdir -p src config tests
touch src/__init__.py src/client.py src/events.py src/bot.py
touch config/settings.py requirements.txt .env main.py`,
          tip: "Good project structure makes your code easier to maintain and test"
        }
      ]
    },
    basicConnection: {
      title: "Basic Connection",
      description: "Establish WebSocket connections to Shugur relay using Python's asyncio for efficient real-time communication",
      icon: "Link",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      codeExample: {
        language: "Python",
        title: "Complete Connection Manager",
        description: "A production-ready connection manager with reconnection and health monitoring",
        code: `import asyncio
import websockets
import json
import logging
from typing import Optional, Callable, Dict, Any

class NostrConnectionManager:
    def __init__(self, relay_url: str = "wss://shu01.shugur.net"):
        self.relay_url = relay_url
        self.websocket: Optional[websockets.WebSocketServerProtocol] = None
        self.is_connected = False
        self.reconnect_attempts = 0
        self.max_reconnect_attempts = 5
        self.message_handlers: Dict[str, Callable] = {}
        self.logger = logging.getLogger(__name__)
        
    async def connect(self) -> bool:
        """Establish connection to the relay."""
        try:
            self.websocket = await websockets.connect(self.relay_url)
            self.is_connected = True
            self.reconnect_attempts = 0
            self.logger.info(f"Connected to {self.relay_url}")
            return True
        except Exception as e:
            self.logger.error(f"Connection failed: {e}")
            self.is_connected = False
            return False
    
    async def send_message(self, message: Dict) -> bool:
        """Send a message to the relay."""
        if not self.is_connected or not self.websocket:
            return False
        
        try:
            await self.websocket.send(json.dumps(message))
            return True
        except Exception as e:
            self.logger.error(f"Failed to send message: {e}")
            self.is_connected = False
            return False
    
    async def listen(self):
        """Listen for incoming messages."""
        while self.is_connected and self.websocket:
            try:
                message = await self.websocket.recv()
                data = json.loads(message)
                await self._handle_message(data)
            except Exception as e:
                self.logger.error(f"Error receiving message: {e}")
                self.is_connected = False
                break

# Usage
async def main():
    manager = NostrConnectionManager()
    if await manager.connect():
        await manager.listen()

if __name__ == "__main__":
    asyncio.run(main())`
      }
    },
    events: {
      title: "Working with Events",
      description: "Create, sign, validate, and publish Nostr events using Python with proper error handling and validation",
      icon: "FileText",
      bgColor: "bg-white",
      iconColor: "text-purple-600",
      examples: [
        {
          title: "Event Factory Pattern",
          description: "A factory class for creating different types of Nostr events",
          language: "Python",
          code: `from nostr.event import Event
from nostr.key import PrivateKey
import json
import time
from typing import List, Dict, Any

class NostrEventFactory:
    def __init__(self, private_key: PrivateKey):
        self.private_key = private_key
        self.public_key = private_key.public_key
    
    def create_text_note(self, content: str, tags: List[List[str]] = None) -> Event:
        """Create a text note event (kind 1)."""
        return self._create_event(
            kind=1,
            content=content,
            tags=tags or []
        )
    
    def create_metadata(self, profile: Dict[str, Any]) -> Event:
        """Create a metadata event (kind 0)."""
        return self._create_event(
            kind=0,
            content=json.dumps(profile),
            tags=[]
        )
    
    def create_reaction(self, event_id: str, reaction: str = "+") -> Event:
        """Create a reaction event (kind 7)."""
        return self._create_event(
            kind=7,
            content=reaction,
            tags=[["e", event_id]]
        )
    
    def _create_event(self, kind: int, content: str, tags: List[List[str]]) -> Event:
        """Create and sign an event."""
        event = Event(
            content=content,
            public_key=self.public_key.hex(),
            created_at=int(time.time()),
            kind=kind,
            tags=tags
        )
        event.sign(self.private_key.hex())
        return event

# Usage example
private_key = PrivateKey()
factory = NostrEventFactory(private_key)
text_note = factory.create_text_note("Hello from Python!")`
        }
      ]
    },
    async: {
      title: "Async Implementation",
      description: "Master Python's asyncio for efficient concurrent Nostr operations, handling multiple connections and real-time data streams",
      icon: "Zap",
      bgColor: "bg-gray-50",
      iconColor: "text-orange-600",
      tips: [
        {
          title: "Use asyncio.gather()",
          description: "Run multiple async operations concurrently for better performance",
      icon: "Zap"
        },
        {
          title: "Connection Pooling",
          description: "Manage multiple relay connections efficiently with connection pools",
          icon: "Activity"
        },
        {
          title: "Error Handling",
          description: "Implement proper exception handling for async operations",
          icon: "AlertCircle"
        }
      ]
    },
    bots: {
      title: "Building Intelligent Bots",
      description: "Create sophisticated Nostr bots with AI integration, scheduled tasks, and intelligent content generation",
      icon: "Bot",
      bgColor: "bg-white",
      iconColor: "text-indigo-600",
      examples: [
        {
          title: "Simple Response Bot",
          description: "A bot that responds to mentions with customizable responses",
          language: "Python",
          code: `import asyncio
import logging
from nostr.event import Event
from nostr.key import PrivateKey

class NostrBot:
    def __init__(self, private_key: str, relay_urls: list):
        self.private_key = PrivateKey.from_hex(private_key)
        self.public_key = self.private_key.public_key
        self.relay_urls = relay_urls
        self.logger = logging.getLogger(__name__)
        
    async def start(self):
        """Start the bot and begin listening for events."""
        self.logger.info("Starting Nostr bot...")
        
        # Set up event handlers
        await self._setup_handlers()
        
        # Start listening for events
        await self._listen_for_events()
    
    async def on_mention(self, event_data: dict):
        """Handle mention events."""
        content = event_data.get("content", "").lower()
        
        if "hello" in content:
            response = "Hello! How can I help you today? 👋"
        elif "help" in content:
            response = "I'm a helpful Nostr bot! Mention me anytime."
        else:
            response = "Thanks for mentioning me!"
        
        await self._send_reply(event_data, response)
    
    async def _send_reply(self, original_event: dict, content: str):
        """Send a reply to an event."""
        reply_event = Event(
            content=content,
            public_key=self.public_key.hex(),
            kind=1,
            tags=[
                ["e", original_event["id"], "", "reply"],
                ["p", original_event["pubkey"]]
            ]
        )
        reply_event.sign(self.private_key.hex())
        
        # Publish to relay (implementation depends on your client)
        await self._publish_event(reply_event)

# Usage
bot = NostrBot("your_private_key", ["wss://shu01.shugur.net"])
asyncio.run(bot.start())`
        }
      ]
    }
  },
  nextSteps: [
    {
      title: "Machine Learning Guide",
      description: "Build AI-powered Nostr applications with Python",
      icon: "Cpu",
      href: "/guides/machine-learning"
    },
    {
      title: "Data Analytics",
      description: "Analyze Nostr network data with Python tools",
      icon: "Activity",
      href: "/guides/analytics"
    },
    {
      title: "Rust Guide",
      description: "Build high-performance applications with Rust",
      icon: "Zap",
      href: "/guides/rust"
    },
    {
      title: "Advanced Guides",
      description: "Explore complete Python project examples",
      icon: "Code",
      href: "/guides"
    }
  ]
};

// Relay Connection Guide
export const relayConnectionGuide: GuideContent = {
  title: "Connect to Shugur Relay",
  description: "Get connected to our production Nostr relay in minutes",
  heroIcon: "Globe",
  tags: ["WebSocket", "Connection", "Production"],
  sections: {
    connectionInfo: {
      title: "Connection Details",
      description: "Essential information for connecting to Shugur relay",
      icon: "Zap"
    },
    examples: {
      title: "Connection Examples",
      description: "Code examples in different programming languages",
      icon: "Code"
    },
    troubleshooting: {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: "AlertCircle"
    }
  },
  nextSteps: [
    {
      title: "Send Your First Event",
      description: "Learn to publish events to the network",
      icon: "Rocket",
      href: "/guides/getting-started"
    },
    {
      title: "Choose Your Language",
      description: "Deep dive into language-specific guides",
      icon: "Monitor",
      href: "/guides/javascript"
    },
    {
      title: "Explore Examples",
      description: "Ready-to-use project templates",
      icon: "Wrench",
      href: "/guides"
    }
  ]
};

// Concepts Guide
export const conceptsGuide: GuideContent = {
  title: "Core Concepts",
  description: "Master the fundamental building blocks of the Nostr protocol to build robust decentralized applications",
  heroIcon: "FileText",
  tags: ["Fundamentals", "Protocol", "Architecture"],
  sections: {
    whatIsNostr: {
      title: "What is Nostr?",
      description: "Nostr (Notes and Other Stuff Transmitted by Relays) is a simple, open protocol that enables truly decentralized social networks and applications",
      icon: "FileText",
      features: [
        {
          title: "Self-Sovereign Identity",
          description: "You control your identity through cryptographic keys, not usernames or emails",
          icon: "Key"
        },
        {
          title: "Decentralized Network",
          description: "No single point of failure. Data flows through multiple independent relays",
          icon: "Globe"
        },
        {
          title: "Simple Protocol",
          description: "Minimal, extensible design that's easy to implement and understand",
          icon: "Zap"
        }
      ]
    },
    keys: {
      title: "Keys: Your Digital Identity",
      description: "In Nostr, your identity is defined by a cryptographic keypair",
      icon: "Key",
      features: [
        {
          title: "Private Key (nsec)",
          description: "Your private key is your secret identity. It's used to sign events and prove you authored them",
          icon: "Lock"
        },
        {
          title: "Public Key (npub)",
          description: "Your public key is your address on Nostr. Others use it to find you and verify events",
          icon: "Key"
        }
      ]
    }
  },
  nextSteps: [
    {
      title: "Quick Start",
      description: "Get up and running in 5 minutes",
      icon: "Rocket",
      href: "/guides/getting-started"
    },
    {
      title: "Choose Your Language",
      description: "Language-specific guides and examples",
      icon: "Monitor",
      href: "/guides/javascript"
    },
    {
      title: "Explore Examples",
      description: "Complete project templates",
      icon: "Wrench",
      href: "/guides"
    }
  ]
};

// Kotlin Guide
export const kotlinGuide: GuideContent = {
  title: "Kotlin Guide",
  description: "Build modern Android apps and multiplatform Nostr applications",
  heroIcon: "Smartphone",
  tags: ["Android Development", "Multiplatform", "Coroutines", "Modern JVM"],
  sections: {
    setup: {
      title: "Setup and Installation",
      description: "Configure Kotlin for Nostr development",
      icon: "Package"
    },
    basicConnection: {
      title: "Basic Connection",
      description: "Connect to Shugur relay using Kotlin",
      icon: "Link"
    },
    events: {
      title: "Working with Events",
      description: "Create and handle Nostr events",
      icon: "FileText"
    },
    android: {
      title: "Android Development",
      description: "Build Android apps with Kotlin",
      icon: "Smartphone"
    },
    multiplatform: {
      title: "Multiplatform",
      description: "Share code between Android and iOS",
      icon: "Globe"
    }
  },
  nextSteps: [
    {
      title: "Cross-Platform Development",
      description: "Learn Flutter for cross-platform mobile development",
      icon: "Monitor",
      href: "/guides/flutter"
    },
    {
      title: "Native iOS Development",
      description: "Build native iOS apps with Swift",
      icon: "Smartphone",
      href: "/guides/swift"
    },
    {
      title: "Web Development",
      description: "Build web applications with JavaScript and TypeScript",
      icon: "Globe",
      href: "/guides/javascript"
    },
    {
      title: "Backend Services",
      description: "Create backend services with Python and Go",
      icon: "Server",
      href: "/guides/python"
    }
  ]
};

// Flutter Guide
export const flutterGuide: GuideContent = {
  title: "Flutter Guide",
  description: "Build cross-platform Nostr applications with Flutter and Dart",
  heroIcon: "Monitor",
  tags: ["Cross-platform", "Mobile Development", "Dart", "Single Codebase"],
  sections: {
    setup: {
      title: "Setup and Installation",
      description: "Configure Flutter for Nostr development with proper dependencies and project structure",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svelte:component this={getIcon('info')} class="h-5 w-5 text-blue-400" />
              </div>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  <strong>Why Flutter for Nostr?</strong> Flutter enables you to build beautiful, native mobile and desktop applications from a single codebase, perfect for creating Nostr clients that work everywhere.
                </p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-blue-600">1. Flutter Installation</h3>
              <p class="text-sm text-gray-600 mb-3">Install Flutter SDK and set up your development environment.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Download Flutter SDK</div>
                <div>git clone https://github.com/flutter/flutter.git</div>
                <div class="text-green-400 mt-2"># Add to PATH</div>
                <div>export PATH="$PATH:[PATH_TO_FLUTTER]/flutter/bin"</div>
                <div class="text-green-400 mt-2"># Verify installation</div>
                <div>flutter doctor</div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg border">
              <h3 class="font-semibold mb-3 text-blue-600">2. Create Nostr Project</h3>
              <p class="text-sm text-gray-600 mb-3">Set up a new Flutter project optimized for Nostr development.</p>
              <div class="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                <div class="text-green-400"># Create Flutter project</div>
                <div>flutter create nostr_client</div>
                <div>cd nostr_client</div>
                <div class="text-green-400 mt-2"># Add Nostr dependencies</div>
                <div>flutter pub add dart_nostr</div>
                <div>flutter pub add web_socket_channel</div>
                <div>flutter pub add crypto</div>
              </div>
            </div>
          </div>
        </div>
      `,
      steps: [
        {
          title: "Install Flutter SDK",
          description: "Download and set up Flutter development environment",
          code: `git clone https://github.com/flutter/flutter.git
export PATH="$PATH:[PATH_TO_FLUTTER]/flutter/bin"
flutter doctor`,
          tip: "Run 'flutter doctor' to check for any missing dependencies"
        },
        {
          title: "Create Project",
          description: "Set up a new Flutter project with Nostr dependencies",
          code: `flutter create nostr_client --org com.example.nostr
cd nostr_client
flutter pub add dart_nostr web_socket_channel crypto`,
          tip: "Use a reverse domain name for your organization identifier"
        },
        {
          title: "Configure Dependencies",
          description: "Add additional packages for state management and UI",
          code: `flutter pub add provider
flutter pub add shared_preferences
flutter pub add qr_flutter
flutter pub add qr_code_scanner`,
          tip: "Provider is recommended for state management in Flutter apps"
        }
      ]
    },
    basicConnection: {
      title: "Basic Connection",
      description: "Connect to Shugur relay using Flutter WebSocket connections and handle real-time communication",
      icon: "Link",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      codeExample: {
        language: "Dart",
        title: "Flutter Nostr Connection Manager",
        description: "A complete connection manager for Flutter applications",
        code: `import 'dart:async';
import 'dart:convert';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:flutter/foundation.dart';

class NostrConnectionManager extends ChangeNotifier {
  WebSocketChannel? _channel;
  bool _isConnected = false;
  String _relayUrl = 'wss://shu01.shugur.net';
  StreamSubscription? _subscription;
  
  bool get isConnected => _isConnected;
  String get relayUrl => _relayUrl;
  
  // Event stream for UI to listen to
  final StreamController<Map<String, dynamic>> _eventController = 
      StreamController<Map<String, dynamic>>.broadcast();
  Stream<Map<String, dynamic>> get eventStream => _eventController.stream;
  
  Future<bool> connect() async {
    try {
      _channel = WebSocketChannel.connect(Uri.parse(_relayUrl));
      
      // Listen for messages
      _subscription = _channel!.stream.listen(
        (data) {
          try {
            final message = jsonDecode(data);
            _handleMessage(message);
          } catch (e) {
            debugPrint('Error parsing message: $e');
          }
        },
        onError: (error) {
          debugPrint('WebSocket error: $error');
          _handleDisconnection();
        },
        onDone: () {
          debugPrint('WebSocket closed');
          _handleDisconnection();
        },
      );
      
      _isConnected = true;
      notifyListeners();
      return true;
    } catch (e) {
      debugPrint('Connection failed: $e');
      return false;
    }
  }
  
  void _handleMessage(dynamic message) {
    if (message is List && message.isNotEmpty) {
      final messageType = message[0];
      
      switch (messageType) {
        case 'EVENT':
          if (message.length >= 3) {
            final subscriptionId = message[1];
            final eventData = message[2];
            _eventController.add({
              'type': 'EVENT',
              'subscriptionId': subscriptionId,
              'event': eventData,
            });
          }
          break;
        case 'EOSE':
          if (message.length >= 2) {
            final subscriptionId = message[1];
            _eventController.add({
              'type': 'EOSE',
              'subscriptionId': subscriptionId,
            });
          }
          break;
        case 'OK':
          if (message.length >= 3) {
            final eventId = message[1];
            final success = message[2];
            final reason = message.length > 3 ? message[3] : '';
            _eventController.add({
              'type': 'OK',
              'eventId': eventId,
              'success': success,
              'reason': reason,
            });
          }
          break;
      }
    }
  }
  
  void _handleDisconnection() {
    _isConnected = false;
    notifyListeners();
  }
  
  Future<void> sendMessage(List<dynamic> message) async {
    if (_isConnected && _channel != null) {
      try {
        _channel!.sink.add(jsonEncode(message));
      } catch (e) {
        debugPrint('Error sending message: $e');
      }
    }
  }
  
  Future<void> subscribe(Map<String, dynamic> filter, String subscriptionId) async {
    final message = ['REQ', subscriptionId, filter];
    await sendMessage(message);
  }
  
  Future<void> publishEvent(Map<String, dynamic> event) async {
    final message = ['EVENT', event];
    await sendMessage(message);
  }
  
  void disconnect() {
    _subscription?.cancel();
    _channel?.sink.close();
    _isConnected = false;
    notifyListeners();
  }
  
  @override
  void dispose() {
    disconnect();
    _eventController.close();
    super.dispose();
  }
}`
      }
    },
    events: {
      title: "Working with Events",
      description: "Create, sign, and handle Nostr events in Flutter with proper state management",
      icon: "FileText",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      examples: [
        {
          title: "Event Model and Factory",
          description: "Dart classes for handling Nostr events in Flutter",
          language: "Dart",
          code: `import 'dart:convert';
import 'dart:math';
import 'package:crypto/crypto.dart';

class NostrEvent {
  final String id;
  final String pubkey;
  final int createdAt;
  final int kind;
  final List<List<String>> tags;
  final String content;
  final String sig;
  
  NostrEvent({
    required this.id,
    required this.pubkey,
    required this.createdAt,
    required this.kind,
    required this.tags,
    required this.content,
    required this.sig,
  });
  
  factory NostrEvent.fromJson(Map<String, dynamic> json) {
    return NostrEvent(
      id: json['id'],
      pubkey: json['pubkey'],
      createdAt: json['created_at'],
      kind: json['kind'],
      tags: List<List<String>>.from(
        json['tags'].map((tag) => List<String>.from(tag))
      ),
      content: json['content'],
      sig: json['sig'],
    );
  }
  
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'pubkey': pubkey,
      'created_at': createdAt,
      'kind': kind,
      'tags': tags,
      'content': content,
      'sig': sig,
    };
  }
}

class EventFactory {
  static Map<String, dynamic> createTextNote({
    required String content,
    required String pubkey,
    List<List<String>>? tags,
  }) {
    final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;
    
    return {
      'pubkey': pubkey,
      'created_at': now,
      'kind': 1,
      'tags': tags ?? [],
      'content': content,
    };
  }
  
  static Map<String, dynamic> createMetadata({
    required String pubkey,
    required Map<String, dynamic> metadata,
  }) {
    final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;
    
    return {
      'pubkey': pubkey,
      'created_at': now,
      'kind': 0,
      'tags': [],
      'content': jsonEncode(metadata),
    };
  }
  
  static Map<String, dynamic> createReaction({
    required String pubkey,
    required String eventId,
    String reaction = '+',
  }) {
    final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;
    
    return {
      'pubkey': pubkey,
      'created_at': now,
      'kind': 7,
      'tags': [['e', eventId]],
      'content': reaction,
    };
  }
}`
        }
      ]
    },
    ui: {
      title: "Flutter UI Integration",
      description: "Build beautiful, responsive user interfaces for Nostr applications using Flutter widgets",
      icon: "Monitor",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      examples: [
        {
          title: "Event Feed Widget",
          description: "A scrollable feed of Nostr events with real-time updates",
          language: "Dart",
          code: `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class EventFeedWidget extends StatefulWidget {
  @override
  _EventFeedWidgetState createState() => _EventFeedWidgetState();
}

class _EventFeedWidgetState extends State<EventFeedWidget> {
  final ScrollController _scrollController = ScrollController();
  List<NostrEvent> _events = [];
  
  @override
  void initState() {
    super.initState();
    _setupEventListener();
  }
  
  void _setupEventListener() {
    final connectionManager = Provider.of<NostrConnectionManager>(
      context, 
      listen: false
    );
    
    connectionManager.eventStream.listen((message) {
      if (message['type'] == 'EVENT') {
        setState(() {
          final event = NostrEvent.fromJson(message['event']);
          if (event.kind == 1) { // Only show text notes
            _events.insert(0, event);
            if (_events.length > 100) {
              _events.removeLast(); // Keep feed size manageable
            }
          }
        });
      }
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      onRefresh: _refreshFeed,
      child: ListView.builder(
        controller: _scrollController,
        itemCount: _events.length,
        itemBuilder: (context, index) {
          final event = _events[index];
          return EventCard(event: event);
        },
      ),
    );
  }
  
  Future<void> _refreshFeed() async {
    // Refresh logic here
    await Future.delayed(Duration(seconds: 1));
  }
}

class EventCard extends StatelessWidget {
  final NostrEvent event;
  
  const EventCard({Key? key, required this.event}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                CircleAvatar(
                  backgroundColor: Colors.blue,
                  child: Text(
                    event.pubkey.substring(0, 2).toUpperCase(),
                    style: TextStyle(color: Colors.white, fontSize: 12),
                  ),
                ),
                SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        event.pubkey.substring(0, 16) + '...',
                        style: Theme.of(context).textTheme.subtitle2,
                      ),
                      Text(
                        _formatTimestamp(event.createdAt),
                        style: Theme.of(context).textTheme.caption,
                      ),
                    ],
                  ),
                ),
              ],
            ),
            SizedBox(height: 12),
            Text(
              event.content,
              style: Theme.of(context).textTheme.bodyText1,
            ),
            SizedBox(height: 12),
            Row(
              children: [
                IconButton(
                  icon: Icon(Icons.favorite_border),
                  onPressed: () => _reactToEvent(context, event.id),
                ),
                IconButton(
                  icon: Icon(Icons.reply),
                  onPressed: () => _replyToEvent(context, event),
                ),
                IconButton(
                  icon: Icon(Icons.share),
                  onPressed: () => _shareEvent(context, event),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
  
  String _formatTimestamp(int timestamp) {
    final date = DateTime.fromMillisecondsSinceEpoch(timestamp * 1000);
    final now = DateTime.now();
    final diff = now.difference(date);
    
    if (diff.inDays > 0) {
      return '\${diff.inDays}d ago';
    } else if (diff.inHours > 0) {
      return '\${diff.inHours}h ago';
    } else if (diff.inMinutes > 0) {
      return '\${diff.inMinutes}m ago';
    } else {
      return 'Just now';
    }
  }
  
  void _reactToEvent(BuildContext context, String eventId) {
    // Implement reaction logic
  }
  
  void _replyToEvent(BuildContext context, NostrEvent event) {
    // Navigate to reply screen
  }
  
  void _shareEvent(BuildContext context, NostrEvent event) {
    // Implement sharing logic
  }
}`
        }
      ]
    },
    stateManagement: {
      title: "State Management",
      description: "Implement proper state management for Nostr events and user interactions using Provider pattern",
      icon: "Activity",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      codeExample: {
        language: "Dart",
        title: "Complete State Management Setup",
        description: "Provider-based state management for Nostr applications",
        code: `import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

class NostrAppState extends ChangeNotifier {
  // User state
  String? _privateKey;
  String? _publicKey;
  Map<String, dynamic>? _userProfile;
  
  // Connection state
  bool _isConnected = false;
  List<String> _connectedRelays = [];
  
  // Events state
  List<NostrEvent> _events = [];
  Map<String, NostrEvent> _eventCache = {};
  
  // UI state
  bool _isLoading = false;
  String? _error;
  
  // Getters
  String? get privateKey => _privateKey;
  String? get publicKey => _publicKey;
  Map<String, dynamic>? get userProfile => _userProfile;
  bool get isConnected => _isConnected;
  List<String> get connectedRelays => List.from(_connectedRelays);
  List<NostrEvent> get events => List.from(_events);
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get isLoggedIn => _privateKey != null;
  
  // Authentication methods
  Future<void> login(String privateKey) async {
    _setLoading(true);
    try {
      _privateKey = privateKey;
      _publicKey = _derivePublicKey(privateKey);
      
      // Save to secure storage
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('private_key', privateKey);
      
      await _loadUserProfile();
      _clearError();
      notifyListeners();
    } catch (err) {
      _setError('Login failed: \${err.toString()}');
    } finally {
      _setLoading(false);
    }
  }
  
  Future<void> logout() async {
    _privateKey = null;
    _publicKey = null;
    _userProfile = null;
    _events.clear();
    _eventCache.clear();
    
    // Clear secure storage
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('private_key');
    
    notifyListeners();
  }
  
  Future<void> autoLogin() async {
    final prefs = await SharedPreferences.getInstance();
    final savedKey = prefs.getString('private_key');
    if (savedKey != null) {
      await login(savedKey);
    }
  }
  
  // Profile methods
  Future<void> updateProfile(Map<String, dynamic> profile) async {
    if (_privateKey == null) return;
    
    _setLoading(true);
    try {
      // Create metadata event
      final event = EventFactory.createMetadata(
        pubkey: _publicKey!,
        metadata: profile,
      );
      
      // Sign and publish event
      final signedEvent = await _signEvent(event);
      await _publishEvent(signedEvent);
      
      _userProfile = profile;
      _clearError();
      notifyListeners();
    } catch (err) {
      _setError('Profile update failed: \${err.toString()}');
    } finally {
      _setLoading(false);
    }
  }
  
  // Event methods
  Future<void> publishTextNote(String content, {List<List<String>>? tags}) async {
    if (_privateKey == null) return;
    
    _setLoading(true);
    try {
      final event = EventFactory.createTextNote(
        content: content,
        pubkey: _publicKey!,
        tags: tags,
      );
      
      final signedEvent = await _signEvent(event);
      await _publishEvent(signedEvent);
      
      _clearError();
    } catch (err) {
      _setError('Publishing failed: \${err.toString()}');
    } finally {
      _setLoading(false);
    }
  }
  
  void addEvent(NostrEvent event) {
    if (!_eventCache.containsKey(event.id)) {
      _eventCache[event.id] = event;
      _events.insert(0, event);
      
      // Keep only recent events in memory
      if (_events.length > 1000) {
        final removed = _events.removeLast();
        _eventCache.remove(removed.id);
      }
      
      notifyListeners();
    }
  }
  
  void removeEvent(String eventId) {
    _eventCache.remove(eventId);
    _events.removeWhere((event) => event.id == eventId);
    notifyListeners();
  }
  
  // Connection methods
  void setConnectionStatus(bool isConnected, List<String> relays) {
    _isConnected = isConnected;
    _connectedRelays = relays;
    notifyListeners();
  }
  
  // Helper methods
  void _setLoading(bool loading) {
    _isLoading = loading;
    notifyListeners();
  }
  
  void _setError(String error) {
    _error = error;
    notifyListeners();
  }
  
  void _clearError() {
    _error = null;
    notifyListeners();
  }
  
  Future<void> _loadUserProfile() async {
    // Load user profile from relays
    // Implementation depends on your event handling
  }
  
  String _derivePublicKey(String privateKey) {
    // Implement public key derivation
    // This is a simplified version
    return 'derived_public_key';
  }
  
  Future<Map<String, dynamic>> _signEvent(Map<String, dynamic> event) async {
    // Implement event signing
    // This is a simplified version
    return {
      ...event,
      'id': 'generated_id',
      'sig': 'generated_signature',
    };
  }
  
  Future<void> _publishEvent(Map<String, dynamic> event) async {
    // Publish event through connection manager
    // Implementation depends on your connection setup
  }
}`
      }
    }
  },
  nextSteps: [
    {
      title: "Mobile Development",
      description: "Learn about native mobile development with Swift and Kotlin",
      icon: "Smartphone",
      href: "/guides/swift"
    },
    {
      title: "Web Development",
      description: "Build web applications with JavaScript and TypeScript",
      icon: "Globe",
      href: "/guides/javascript"
    },
    {
      title: "Backend Services",
      description: "Create backend services with Python and Go",
      icon: "Server",
      href: "/guides/python"
    },
    {
      title: "Performance & Safety",
      description: "Build high-performance applications with Rust",
      icon: "Zap",
      href: "/guides/rust"
    }
  ]
};

// Rust Guide
export const rustGuide: GuideContent = {
  title: "Rust Guide",
  description: "Build high-performance, memory-safe Nostr applications with Rust. Perfect for relays, high-throughput services, and system-level programming with zero-cost abstractions.",
  heroIcon: "Cpu",
  tags: ["Performance", "Memory Safety", "Systems Programming", "Zero-cost Abstractions", "Concurrency"],
  sections: {
    setup: {
      title: "Setup and Installation",
      description: "Install Rust toolchain and configure your environment for Nostr development",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-orange-600",
      steps: [
        {
          title: "Install Rust",
          description: "Install Rust using rustup for easy toolchain management",
          code: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
rustc --version`,
          tip: "Rustup automatically manages Rust versions and components"
        },
        {
          title: "Create Nostr Project",
          description: "Set up a new Rust project with Nostr dependencies",
          code: `cargo new nostr-app
cd nostr-app
cargo add nostr tokio serde serde_json`,
          tip: "Use cargo add to easily manage dependencies"
        },
        {
          title: "Configure for Async",
          description: "Set up async runtime for real-time Nostr communication",
          code: `# Add to Cargo.toml
[dependencies]
tokio = { version = "1", features = ["full"] }
nostr = "0.24"
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"`,
          tip: "Tokio provides excellent async runtime for networking"
        }
      ]
    },
    
    performance: {
      title: "High-Performance Patterns",
      description: "Leverage Rust's zero-cost abstractions for maximum performance",
      icon: "Zap",
      bgColor: "bg-gray-50",
      iconColor: "text-orange-600",
      codeExample: {
        language: "Rust",
        title: "High-Performance Event Processor",
        description: "A fast, concurrent event processing system",
        code: `use nostr::{Event, Kind};
use tokio::sync::mpsc;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Clone)]
pub struct EventProcessor {
    handlers: Arc<RwLock<HashMap<Kind, Vec<EventHandler>>>>,
    metrics: Arc<RwLock<ProcessingMetrics>>,
}

#[derive(Default)]
struct ProcessingMetrics {
    events_processed: u64,
    processing_time_ns: u64,
}

type EventHandler = Arc<dyn Fn(&Event) -> Result<(), Box<dyn std::error::Error + Send + Sync>> + Send + Sync>;

impl EventProcessor {
    pub fn new() -> Self {
        Self {
            handlers: Arc::new(RwLock::new(HashMap::new())),
            metrics: Arc::new(RwLock::new(ProcessingMetrics::default())),
        }
    }
    
    pub async fn register_handler<F>(&self, kind: Kind, handler: F)
    where
        F: Fn(&Event) -> Result<(), Box<dyn std::error::Error + Send + Sync>> + Send + Sync + 'static,
    {
        let mut handlers = self.handlers.write().await;
        handlers.entry(kind).or_insert_with(Vec::new).push(Arc::new(handler));
    }
    
    pub async fn process_event(&self, event: Event) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
        let start = std::time::Instant::now();
        
        let handlers = self.handlers.read().await;
        if let Some(event_handlers) = handlers.get(&event.kind) {
            for handler in event_handlers {
                handler(&event)?;
            }
        }
        
        // Update metrics
        let mut metrics = self.metrics.write().await;
        metrics.events_processed += 1;
        metrics.processing_time_ns += start.elapsed().as_nanos() as u64;
        
        Ok(())
    }
    
    pub async fn process_events_concurrent(&self, mut events: mpsc::Receiver<Event>) {
        while let Some(event) = events.recv().await {
            let processor = self.clone();
            tokio::spawn(async move {
                if let Err(e) = processor.process_event(event).await {
                    eprintln!("Error processing event: {}", e);
                }
            });
        }
    }
    
    pub async fn get_metrics(&self) -> (u64, f64) {
        let metrics = self.metrics.read().await;
        let avg_processing_time = if metrics.events_processed > 0 {
            metrics.processing_time_ns as f64 / metrics.events_processed as f64 / 1_000_000.0 // ms
        } else {
            0.0
        };
        (metrics.events_processed, avg_processing_time)
    }
}`
      }
    },
    
    relay: {
      title: "Building Relays",
      description: "Create high-performance Nostr relays with Rust's async capabilities",
      icon: "Server",
      bgColor: "bg-white",
      iconColor: "text-orange-600",
      examples: [
        {
          title: "Simple Relay Server",
          description: "A basic but performant Nostr relay implementation",
          language: "Rust",
          code: `use tokio::net::{TcpListener, TcpStream};
use tokio_tungstenite::{accept_async, WebSocketStream};
use futures_util::{SinkExt, StreamExt};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;
use serde_json::Value;

type Connections = Arc<RwLock<HashMap<String, WebSocketStream<TcpStream>>>>;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let listener = TcpListener::bind("127.0.0.1:8080").await?;
    let connections: Connections = Arc::new(RwLock::new(HashMap::new()));
    
    println!("Nostr relay listening on ws://127.0.0.1:8080");
    
    while let Ok((stream, addr)) = listener.accept().await {
        let connections = connections.clone();
        tokio::spawn(handle_connection(stream, addr.to_string(), connections));
    }
    
    Ok(())
}

async fn handle_connection(
    stream: TcpStream,
    addr: String,
    connections: Connections,
) -> Result<(), Box<dyn std::error::Error>> {
    let ws_stream = accept_async(stream).await?;
    let (mut ws_sender, mut ws_receiver) = ws_stream.split();
    
    // Store connection
    {
        let mut conns = connections.write().await;
        // Note: This is simplified - in practice you'd handle the split stream differently
    }
    
    while let Some(msg) = ws_receiver.next().await {
        match msg {
            Ok(msg) => {
                if msg.is_text() {
                    if let Ok(json) = serde_json::from_str::<Value>(&msg.to_string()) {
                        handle_nostr_message(json, &mut ws_sender, &connections).await?;
                    }
                }
            }
            Err(e) => {
                eprintln!("WebSocket error for {}: {}", addr, e);
                break;
            }
        }
    }
    
    // Remove connection
    {
        let mut conns = connections.write().await;
        conns.remove(&addr);
    }
    
    Ok(())
}

async fn handle_nostr_message(
    message: Value,
    ws_sender: &mut futures_util::stream::SplitSink<
        WebSocketStream<TcpStream>,
        tokio_tungstenite::tungstenite::Message,
    >,
    connections: &Connections,
) -> Result<(), Box<dyn std::error::Error>> {
    if let Some(msg_type) = message.get(0).and_then(|v| v.as_str()) {
        match msg_type {
            "EVENT" => {
                // Handle incoming event
                if let Some(event) = message.get(1) {
                    // Validate and store event
                    broadcast_event(event, connections).await?;
                }
            }
            "REQ" => {
                // Handle subscription request
                if let Some(sub_id) = message.get(1).and_then(|v| v.as_str()) {
                    // Process filters and send matching events
                    handle_subscription(sub_id, &message, ws_sender).await?;
                }
            }
            "CLOSE" => {
                // Handle close subscription
            }
            _ => {
                // Unknown message type
            }
        }
    }
    
    Ok(())
}

async fn broadcast_event(
    event: &Value,
    connections: &Connections,
) -> Result<(), Box<dyn std::error::Error>> {
    // In a real implementation, you'd broadcast to relevant subscriptions
    println!("Broadcasting event: {}", event);
    Ok(())
}

async fn handle_subscription(
    sub_id: &str,
    message: &Value,
    ws_sender: &mut futures_util::stream::SplitSink<
        WebSocketStream<TcpStream>,
        tokio_tungstenite::tungstenite::Message,
    >,
) -> Result<(), Box<dyn std::error::Error>> {
    // In a real implementation, you'd process filters and send matching events
    println!("Handling subscription: {}", sub_id);
    
    // Send EOSE
    let eose = serde_json::json!(["EOSE", sub_id]);
    ws_sender
        .send(tokio_tungstenite::tungstenite::Message::Text(eose.to_string()))
        .await?;
    
    Ok(())
}`
        }
      ]
    }
  },
  nextSteps: [
    {
      title: "Go Guide",
      description: "Build efficient backend services with Go",
      icon: "Server",
      href: "/guides/go"
    },
    {
      title: "System Architecture",
      description: "Design scalable Nostr systems",
      icon: "Layers",
      href: "/guides/architecture"
    },
    {
      title: "Performance Optimization",
      description: "Optimize Nostr applications for maximum performance",
      icon: "Zap",
      href: "/guides/performance"
    }
  ]
};

// Swift Guide
export const swiftGuide: GuideContent = {
  title: "Swift Guide",
  description: "Build native iOS and macOS Nostr applications with Swift. Create beautiful, performant mobile experiences with SwiftUI and Combine frameworks.",
  heroIcon: "Smartphone",
  tags: ["iOS Development", "macOS", "SwiftUI", "Combine", "Native Performance"],
  sections: {
    setup: {
      title: "Setup and Installation",
      description: "Set up Xcode and configure your iOS project for Nostr development",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      steps: [
        {
          title: "Install Xcode",
          description: "Download Xcode from the Mac App Store",
          code: `# Verify Xcode installation
xcodebuild -version
# Install command line tools if needed
xcode-select --install`,
          tip: "Make sure you have the latest Xcode version for best Swift features"
        },
        {
          title: "Create iOS Project",
          description: "Set up a new iOS project with SwiftUI",
          code: `# Create new iOS project in Xcode
# Choose SwiftUI for Interface
# Add Swift Package Dependencies:
# https://github.com/nostr-sdk/nostr-sdk-swift`,
          tip: "Use Swift Package Manager for easy dependency management"
        },
        {
          title: "Add Nostr Dependencies",
          description: "Add Nostr Swift packages to your project",
          code: `// In Package.swift or Xcode Package Manager
dependencies: [
    .package(url: "https://github.com/Kjuly/NostrKit", from: "1.0.0"),
    .package(url: "https://github.com/apple/swift-crypto", from: "2.0.0")
]`,
          tip: "Choose well-maintained Swift Nostr libraries for best compatibility"
        }
      ]
    },
    
    swiftui: {
      title: "SwiftUI Integration",
      description: "Build modern iOS interfaces for Nostr applications using SwiftUI",
      icon: "Monitor",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      codeExample: {
        language: "Swift",
        title: "Event Feed with SwiftUI",
        description: "A complete event feed implementation with real-time updates",
        code: `import SwiftUI
import Combine

struct EventFeedView: View {
    @StateObject private var viewModel = EventFeedViewModel()
    
    var body: some View {
        NavigationView {
            List(viewModel.events) { event in
                EventRowView(event: event)
                    .onAppear {
                        if event == viewModel.events.last {
                            viewModel.loadMoreEvents()
                        }
                    }
            }
            .refreshable {
                await viewModel.refreshEvents()
            }
            .navigationTitle("Nostr Feed")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Compose") {
                        viewModel.showCompose = true
                    }
                }
            }
            .sheet(isPresented: $viewModel.showCompose) {
                ComposeEventView()
            }
        }
        .onAppear {
            viewModel.startListening()
        }
    }
}

struct EventRowView: View {
    let event: NostrEvent
    @State private var showingProfile = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                AsyncImage(url: URL(string: event.authorProfilePicture ?? "")) { image in
                    image
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                } placeholder: {
                    Circle()
                        .fill(Color.gray.opacity(0.3))
                        .overlay(
                            Text(event.authorName?.prefix(1) ?? "?")
                                .font(.headline)
                        )
                }
                .frame(width: 40, height: 40)
                .clipShape(Circle())
                .onTapGesture {
                    showingProfile = true
                }
                
                VStack(alignment: .leading, spacing: 2) {
                    Text(event.authorName ?? "Unknown")
                        .font(.headline)
                        .lineLimit(1)
                    
                    Text(event.createdAt.timeAgoDisplay)
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                
                Spacer()
            }
            
            Text(event.content)
                .font(.body)
                .multilineTextAlignment(.leading)
            
            HStack(spacing: 20) {
                Button(action: { /* Like action */ }) {
                    HStack(spacing: 4) {
                        Image(systemName: "heart")
                        Text("\\(event.likeCount)")
                    }
                }
                
                Button(action: { /* Reply action */ }) {
                    HStack(spacing: 4) {
                        Image(systemName: "bubble.right")
                        Text("\\(event.replyCount)")
                    }
                }
                
                Button(action: { /* Share action */ }) {
                    Image(systemName: "square.and.arrow.up")
                }
                
                Spacer()
            }
            .font(.caption)
            .foregroundColor(.secondary)
        }
        .padding(.vertical, 4)
        .sheet(isPresented: $showingProfile) {
            ProfileView(publicKey: event.authorPublicKey)
        }
    }
}

@MainActor
class EventFeedViewModel: ObservableObject {
    @Published var events: [NostrEvent] = []
    @Published var showCompose = false
    @Published var isLoading = false
    
    private var nostrClient: NostrClient
    private var cancellables = Set<AnyCancellable>()
    
    init() {
        self.nostrClient = NostrClient()
    }
    
    func startListening() {
        nostrClient.eventPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] event in
                self?.addEvent(event)
            }
            .store(in: &cancellables)
        
        nostrClient.connect()
        loadEvents()
    }
    
    func refreshEvents() async {
        await loadEvents()
    }
    
    func loadEvents() async {
        isLoading = true
        defer { isLoading = false }
        
        do {
            let newEvents = try await nostrClient.fetchEvents(limit: 50)
            events = newEvents.sorted { $0.createdAt > $1.createdAt }
        } catch {
            print("Error loading events: \\(error)")
        }
    }
    
    func loadMoreEvents() {
        // Implement pagination
    }
    
    private func addEvent(_ event: NostrEvent) {
        if !events.contains(where: { $0.id == event.id }) {
            events.insert(event, at: 0)
            events.sort { $0.createdAt > $1.createdAt }
        }
    }
}`
      }
    },
    
    combine: {
      title: "Reactive Programming with Combine",
      description: "Use Combine framework for reactive Nostr event handling",
      icon: "Activity",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      examples: [
        {
          title: "Reactive Nostr Client",
          description: "A Combine-based client for reactive event streams",
          language: "Swift",
          code: `import Combine
import Foundation

class ReactiveNostrClient: ObservableObject {
    @Published var connectionStatus: ConnectionStatus = .disconnected
    @Published var events: [NostrEvent] = []
    
    private let eventSubject = PassthroughSubject<NostrEvent, Never>()
    private let errorSubject = PassthroughSubject<NostrError, Never>()
    private var cancellables = Set<AnyCancellable>()
    private var webSocketTask: URLSessionWebSocketTask?
    
    var eventPublisher: AnyPublisher<NostrEvent, Never> {
        eventSubject.eraseToAnyPublisher()
    }
    
    var errorPublisher: AnyPublisher<NostrError, Never> {
        errorSubject.eraseToAnyPublisher()
    }
    
    func connect(to relayURL: URL) {
        webSocketTask = URLSession.shared.webSocketTask(with: relayURL)
        
        webSocketTask?.resume()
        connectionStatus = .connecting
        
        startListening()
        
        // Send periodic pings to keep connection alive
        Timer.publish(every: 30, on: .main, in: .common)
            .autoconnect()
            .sink { [weak self] _ in
                self?.sendPing()
            }
            .store(in: &cancellables)
    }
    
    private func startListening() {
        guard let webSocketTask = webSocketTask else { return }
        
        webSocketTask.receive { [weak self] result in
            switch result {
            case .success(let message):
                self?.handleMessage(message)
                self?.startListening() // Continue listening
            case .failure(let error):
                self?.handleError(.websocketError(error))
            }
        }
    }
    
    private func handleMessage(_ message: URLSessionWebSocketTask.Message) {
        switch message {
        case .string(let text):
            parseNostrMessage(text)
        case .data(let data):
            if let text = String(data: data, encoding: .utf8) {
                parseNostrMessage(text)
            }
        @unknown default:
            break
        }
    }
    
    private func parseNostrMessage(_ text: String) {
        guard let data = text.data(using: .utf8),
              let json = try? JSONSerialization.jsonObject(with: data) as? [Any],
              let messageType = json.first as? String else {
            return
        }
        
        switch messageType {
        case "EVENT":
            if json.count >= 3,
               let eventData = json[2] as? [String: Any],
               let event = NostrEvent.from(json: eventData) {
                DispatchQueue.main.async {
                    self.eventSubject.send(event)
                    self.events.append(event)
                }
            }
        case "EOSE":
            // End of stored events
            break
        case "OK":
            // Event acceptance status
            break
        default:
            break
        }
    }
    
    func subscribe(with filters: [NostrFilter]) {
        let subscriptionId = UUID().uuidString
        let message = ["REQ", subscriptionId] + filters.map { $0.toJSON() }
        
        if let jsonData = try? JSONSerialization.data(withJSONObject: message),
           let jsonString = String(data: jsonData, encoding: .utf8) {
            sendMessage(.string(jsonString))
        }
    }
    
    func publishEvent(_ event: NostrEvent) -> AnyPublisher<Bool, NostrError> {
        Future { [weak self] promise in
            let message = ["EVENT", event.toJSON()]
            
            if let jsonData = try? JSONSerialization.data(withJSONObject: message),
               let jsonString = String(data: jsonData, encoding: .utf8) {
                self?.sendMessage(.string(jsonString))
                promise(.success(true))
            } else {
                promise(.failure(.invalidEvent))
            }
        }
        .eraseToAnyPublisher()
    }
    
    private func sendMessage(_ message: URLSessionWebSocketTask.Message) {
        webSocketTask?.send(message) { [weak self] error in
            if let error = error {
                self?.handleError(.websocketError(error))
            }
        }
    }
    
    private func sendPing() {
        webSocketTask?.sendPing { [weak self] error in
            if let error = error {
                self?.handleError(.websocketError(error))
            }
        }
    }
    
    private func handleError(_ error: NostrError) {
        DispatchQueue.main.async {
            self.errorSubject.send(error)
            self.connectionStatus = .disconnected
        }
    }
    
    deinit {
        webSocketTask?.cancel()
    }
}

enum ConnectionStatus {
    case disconnected
    case connecting
    case connected
    case error(String)
}

enum NostrError: Error {
    case websocketError(Error)
    case invalidEvent
    case connectionFailed
}`
        }
      ]
    }
  },
  nextSteps: [
    {
      title: "Android Development",
      description: "Build Android Nostr apps with Kotlin",
      icon: "Smartphone",
      href: "/guides/kotlin"
    },
    {
      title: "Cross-Platform",
      description: "Develop for multiple platforms with Flutter",
      icon: "Monitor",
      href: "/guides/flutter"
    },
    {
      title: "App Store Guidelines",
      description: "Best practices for publishing Nostr apps",
      icon: "CheckCircle",
      href: "/guides/app-store"
    }
  ]
};

// Architecture Guide
export const architectureGuide: GuideContent = {
  title: "System Architecture",
  description: "Design scalable, reliable Nostr systems: clients, backends, and relays working together across multiple regions and relays.",
  heroIcon: "Layers",
  tags: ["Distributed Systems", "Multi-Relay", "Scalability", "Reliability"],
  sections: {
    overview: {
      title: "Overview",
      description: "Key building blocks and responsibilities across client, API, workers, storage, and relays.",
      icon: "Info",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      content: `
        <div class="space-y-4">
          <p class="text-gray-600">A robust Nostr architecture separates concerns clearly: UI client, API gateway, background processors, observability, and storage. Relays are treated as an eventually-consistent message fabric.</p>
          <ul class="list-disc ml-6 text-gray-600">
            <li>Clients publish/subscribe via multiple relays for resilience.</li>
            <li>APIs handle auth, rate-limits, input validation, and aggregate data from relays + storage.</li>
            <li>Workers handle enrichment: indexing, moderation, recommendations, archiving.</li>
            <li>Observability collects metrics, traces, logs for performance and reliability.</li>
          </ul>
        </div>
      `
    },
    resilience: {
      title: "Resilience Patterns",
      description: "Design for failure and recovery",
      icon: "Shield",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      content: `
        <div class="space-y-3 text-gray-600">
          <ul class="list-disc ml-6 space-y-1">
            <li><strong>Retry with backoff + jitter:</strong> Avoid thundering herds; cap max retries.</li>
            <li><strong>Timeouts everywhere:</strong> Socket, publish, subscription bootstrap.</li>
            <li><strong>Circuit breakers:</strong> Short-circuit unhealthy relays/services.</li>
            <li><strong>Idempotency:</strong> De-duplicate by event id; use deterministic ids for commands.</li>
            <li><strong>Bulkheads:</strong> Isolate pools for critical vs. best-effort work.</li>
          </ul>
        </div>
      `
    },
    reference: {
      title: "Reference Architecture",
      description: "A pragmatic blueprint for most apps",
      icon: "Server",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      content: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border rounded p-4">
            <h4 class="font-semibold mb-2">Core Services</h4>
            <ul class="list-disc ml-6 text-sm text-gray-600 space-y-1">
              <li>API Gateway (REST/GraphQL) with caching</li>
              <li>Websocket fan-out for live updates</li>
              <li>Background queues for indexing and ML</li>
              <li>Object/DB storage for durable state</li>
            </ul>
          </div>
          <div class="border rounded p-4">
            <h4 class="font-semibold mb-2">Relay Strategy</h4>
            <ul class="list-disc ml-6 text-sm text-gray-600 space-y-1">
              <li>Multi-relay read with health-aware selection</li>
              <li>Primary + fallback publish</li>
              <li>Eventual consistency with de-duplication</li>
            </ul>
          </div>
        </div>

        <div class="mt-6">
          <h4 class="font-semibold mb-2">High-level Diagram</h4>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto">Client ──WS──▶ Relays (multi)
   │                   │
   │         (subscribe/publish)
   ▼                   ▼
 API Gateway ──▶ Workers/Queues ──▶ Storage (DB/Object)
      ▲                    │
      └────── Metrics/Logs/Traces ◀─ Observability</pre>
        </div>
      `
    },
    data: {
      title: "Data Modeling",
      description: "Model events, indexes, and derived views",
      icon: "Database",
      bgColor: "bg-white",
      iconColor: "text-blue-600",
      content: `
        <div class="space-y-3 text-gray-600">
          <p>Persist raw events for audit, then project into queryable shapes: timelines, user profiles, relationships.</p>
          <p>Use idempotent processors keyed by event id to safely re-run pipelines.</p>
        </div>
      `
    },
    security: {
      title: "Security & Compliance",
      description: "Protect keys, validate data, and reduce abuse",
      icon: "Lock",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      steps: [
        { title: "Key Handling", description: "Never transmit private keys; use secure storage; sign locally." },
        { title: "Validation", description: "Verify signatures, kinds, tags, and size limits on ingest." },
        { title: "Abuse Controls", description: "Rate limits, CAPTCHAs where needed, allowlists/denylists for relays." },
        { title: "Content Filters", description: "Moderation rules, NSFW flags, and reporting flows." }
      ]
    },
    deployment: {
      title: "Deployment & Operations",
      description: "Regions, CI/CD, rollouts, and backup",
      icon: "Package",
      bgColor: "bg-gray-50",
      iconColor: "text-blue-600",
      steps: [
        { title: "Multi-Region Reads", description: "Prefer nearest relays and cache layer; failover on errors." },
        { title: "Blue/Green", description: "Roll out API and workers gradually with health checks." },
        { title: "Backups", description: "Archive raw events to object storage; test restore procedures." }
      ]
    },

  },
  nextSteps: [
    { title: "Performance", description: "Optimize throughput and latency", icon: "Zap", href: "/guides/performance" },
    { title: "Testing", description: "Validate correctness and resilience", icon: "CheckCircle", href: "/guides/testing" },
    { title: "Relay Setup", description: "Run and harden your relay", icon: "Server", href: "/guides/relay-setup" }
  ]
};

// Performance Guide
export const performanceGuide: GuideContent = {
  title: "Performance Optimization",
  description: "Techniques to reduce latency and increase throughput for Nostr applications across clients, APIs, and workers.",
  heroIcon: "Zap",
  tags: ["Latency", "Throughput", "Caching", "Profiling"],
  sections: {
    connection: {
      title: "Connections & Subscriptions",
      description: "Batch requests, debounce filters, and reuse sockets",
      icon: "Link",
      bgColor: "bg-white",
      iconColor: "text-orange-600",
      content: `
        <ul class="list-disc ml-6 text-gray-600 space-y-1">
          <li>Prefer long-lived WebSocket connections.</li>
          <li>Coalesce filters and de-duplicate subscriptions.</li>
          <li>Exponential backoff and jitter for reconnects.</li>
        </ul>
      `,
      codeExample: {
        language: "JavaScript",
        title: "Debounced subscribe with backoff",
        description: "Reuse a single socket, debounce filter updates, and reconnect with backoff.",
        code: `import { relayInit } from 'nostr-tools'

const relay = relayInit('wss://shu01.shugur.net')
let reconnectAttempts = 0

async function connect() {
  try {
    await relay.connect()
    reconnectAttempts = 0
  } catch (e) {
    const delay = Math.min(30000, 1000 * 2 ** reconnectAttempts + Math.random() * 500)
    reconnectAttempts++
    setTimeout(connect, delay)
  }
}

connect()

// Debounce filter changes
let debounceTimer
function subscribeWithDebounce(filters) {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    const sub = relay.sub([filters])
    sub.on('event', (ev) => console.log('event', ev.id))
  }, 200)
}`
      }
    },
    websocket: {
      title: "WebSocket Tips",
      description: "Keep connections healthy and efficient",
      icon: "Radio",
      bgColor: "bg-white",
      iconColor: "text-orange-600",
      content: `
        <ul class="list-disc ml-6 text-gray-600 space-y-1">
          <li>Use ping/pong heartbeats; detect half-open sockets quickly.</li>
          <li>Compress payloads where supported; avoid excessive JSON nesting.</li>
          <li>Shard subscriptions by timeline vs. DMs to avoid overfetching.</li>
        </ul>
      `,
      codeExample: {
        language: "TypeScript",
        title: "Reconnect with jitter",
        description: "Simple backoff with jitter for WebSocket reconnects.",
        code: `let attempt = 0
function backoffDelay() { return Math.min(30000, 1000 * 2 ** attempt + Math.random() * 500) }

function onClose() {
  attempt++
  setTimeout(() => {
    // reconnect()
  }, backoffDelay())
}`
      }
    },
    caching: {
      title: "Caching & Indexes",
      description: "Exploit temporal locality and derived views",
      icon: "Layers",
      bgColor: "bg-gray-50",
      iconColor: "text-orange-600",
      content: `
        <p class="text-gray-600">Use in-memory caches for hot timelines, and precomputed indexes for common queries. Invalidate by event id and author.</p>
      `,
      codeExample: {
        language: "TypeScript",
        title: "Tiny LRU for events",
        description: "Cache recent events by id with simple LRU behavior.",
        code: `class LruCache<K, V> {
  private map = new Map<K, V>()
  constructor(private max: number) {}
  get(k: K) { const v = this.map.get(k); if (v) { this.map.delete(k); this.map.set(k, v) } return v }
  set(k: K, v: V) { if (this.map.has(k)) this.map.delete(k); this.map.set(k, v); if (this.map.size > this.max) this.map.delete(this.map.keys().next().value) }
}

const cache = new LruCache<string, any>(1000)
function onEvent(ev: any) { cache.set(ev.id, ev) }`
      }
    },
    server: {
      title: "Server Optimizations",
      description: "Throughput on APIs and workers",
      icon: "Server",
      bgColor: "bg-white",
      iconColor: "text-orange-600",
      content: `
        <ul class="list-disc ml-6 text-gray-600 space-y-1">
          <li>Connection pooling and reuse; avoid per-request TLS handshakes.</li>
          <li>Zero-copy parsing where possible; stream large responses.</li>
          <li>Batch writes and use idempotent upserts keyed by event id.</li>
        </ul>
      `,
      codeExample: {
        language: "TypeScript",
        title: "Batch upserts",
        description: "Group writes and upsert by event id to keep idempotency.",
        code: `async function persistBatch(db, events) {
  const chunks = []
  for (let i = 0; i < events.length; i += 100) chunks.push(events.slice(i, i + 100))
  for (const c of chunks) {
    await db.upsert('events', c, 'id') // assume composite upsert by primary key 'id'
  }
}`
      }
    },
    profiling: {
      title: "Profiling & Observability",
      description: "Find bottlenecks, not guesses",
      icon: "Activity",
      bgColor: "bg-white",
      iconColor: "text-orange-600",
      steps: [
        { title: "Metrics", description: "Track p50/p95/p99 latencies per operation." },
        { title: "Tracing", description: "Trace publish/subscribe across services." },
        { title: "Load Tests", description: "Continuously run representative scenarios." }
      ]
    },

  },
  nextSteps: [
    { title: "Architecture", description: "Design for scale from the start", icon: "Layers", href: "/guides/architecture" },
    { title: "Rust", description: "High-performance implementations", icon: "Server", href: "/guides/rust" },
    { title: "Go", description: "Efficient backends and workers", icon: "Zap", href: "/guides/go" }
  ]
};

// Testing Guide
export const testingGuide: GuideContent = {
  title: "Testing",
  description: "End-to-end strategy for unit, integration, property-based, and load testing of Nostr apps.",
  heroIcon: "CheckCircle",
  tags: ["Unit", "Integration", "E2E", "Load"],
  sections: {
    unit: {
      title: "Unit Testing",
      description: "Pure logic and serialization",
      icon: "FileText",
      bgColor: "bg-white",
      iconColor: "text-green-600",
      content: `<p class="text-gray-600">Mock cryptography and focus on event builders, filters, and reducers.</p>`,
      codeExample: {
        language: "TypeScript",
        title: "Jest unit test",
        description: "Test a text note event builder.",
        code: `import { createTextNote } from './events'
test('createTextNote builds kind 1', () => {
  const ev = createTextNote('hi', 'npub...', 'nsec...')
  expect(ev.kind).toBe(1)
  expect(typeof ev.id).toBe('string')
})`
      }
    },
    property: {
      title: "Property-Based Testing",
      description: "Generate cases instead of hand-picking",
      icon: "Activity",
      bgColor: "bg-white",
      iconColor: "text-green-600",
      content: `<p class="text-gray-600">Use tools like fast-check (JS/TS) or Hypothesis (Python) to fuzz event shapes, kinds, and edge timestamps.</p>`
    },
    integration: {
      title: "Integration Testing",
      description: "Talk to a mock or local relay",
      icon: "Monitor",
      bgColor: "bg-gray-50",
      iconColor: "text-green-600",
      content: `<p class="text-gray-600">Spin a local relay or stub server to validate subscriptions, publish, and error paths.</p>`,
      codeExample: {
        language: "Python",
        title: "pytest: subscribe flow",
        description: "Integration test with a local relay stub.",
        code: `def test_subscribe_flow(relay_stub):
    client = relay_stub.client()
    sub = client.subscribe({ 'kinds': [1], 'limit': 1 })
    event = sub.next(timeout=2)
    assert event['kind'] == 1`
      }
    },
    fixtures: {
      title: "Fixtures & Test Data",
      description: "Stable inputs for deterministic tests",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-green-600",
      content: `<p class="text-gray-600">Keep curated event corpora by kind and size; tag edge cases (max tags, invalid sigs, big content).</p>`
    },
    load: {
      title: "Load & Chaos",
      description: "Throughput, latency, and failure drills",
      icon: "Activity",
      bgColor: "bg-white",
      iconColor: "text-green-600",
      steps: [
        { title: "Scenarios", description: "Fan-out timelines, backfills, and burst publishes." },
        { title: "Limits", description: "Rate limits, queue sizes, timeouts, max payloads." },
        { title: "Chaos", description: "Random disconnects and partial relay failures." }
      ],
      codeExample: {
        language: "JavaScript",
        title: "k6 smoke test",
        description: "Minimal load test for publish endpoint (conceptual).",
        code: `import http from 'k6/http'
import { sleep } from 'k6'
export default function() {
  http.post('https://api.example/publish', JSON.stringify({ kind: 1, content: 'hi' }))
  sleep(1)
}`
      }
    },

  },
  nextSteps: [
    { title: "Performance", description: "Measure before you optimize", icon: "Zap", href: "/guides/performance" },
    { title: "Best Practices", description: "Security and operability", icon: "Shield", href: "/guides/best-practices" },
    { title: "NIPs", description: "Protocol specifications", icon: "Code", href: "/nips" }
  ]
};

// Analytics Guide
export const analyticsGuide: GuideContent = {
  title: "Analytics",
  description: "Privacy-first telemetry and product analytics for Nostr apps without compromising user sovereignty.",
  heroIcon: "Activity",
  tags: ["Telemetry", "Metrics", "Dashboards", "Privacy"],
  sections: {
    principles: {
      title: "Principles",
      description: "Collect less, aggregate more",
      icon: "Shield",
      bgColor: "bg-white",
      iconColor: "text-purple-600",
      content: `<p class="text-gray-600">Avoid PII, prefer on-device aggregation, sample where possible, and provide opt-in controls.</p>`
    },
    schema: {
      title: "Event Schema",
      description: "Consistent events for analytics",
      icon: "FileText",
      bgColor: "bg-white",
      iconColor: "text-purple-600",
      content: `<p class=\"text-gray-600\">Define a minimal event schema (name, version, ts, props) and evolve via versioning to avoid breaking dashboards.</p>`,
      codeExample: {
        language: "TypeScript",
        title: "Event schema + tracker",
        description: "Track analytics events consistently.",
        code: `type Event = { name: string, ts: number, ver: number, props?: Record<string, unknown> }
function track(ev: Event) {
  console.log(JSON.stringify(ev)) // send to collector
}
track({ name: 'app_open', ts: Date.now(), ver: 1 })`
      }
    },
    product: {
      title: "Product Analytics",
      description: "Events, funnels, and retention",
      icon: "Clipboard",
      bgColor: "bg-gray-50",
      iconColor: "text-purple-600",
      content: `<p class="text-gray-600">Model user actions as events with minimal fields; compute funnels and cohort metrics server-side.</p>`,
      codeExample: {
        language: "JavaScript",
        title: "Client tracker",
        description: "Small wrapper to send product events.",
        code: `export function track(name, props = {}) {
  navigator.sendBeacon('/collect', JSON.stringify({ name, ts: Date.now(), ver: 1, props }))
}`
      }
    },
    dashboards: {
      title: "Dashboards",
      description: "Make metrics actionable",
      icon: "Monitor",
      bgColor: "bg-white",
      iconColor: "text-purple-600",
      content: `<ul class=\"list-disc ml-6 text-gray-600 space-y-1\"><li>DAU/WAU/MAU and retention cohorts</li><li>Publish success rate per relay</li><li>Subscription lag and E2E latency</li></ul>`
    },
    observability: {
      title: "Operational Metrics",
      description: "SLIs and SLOs",
      icon: "Server",
      bgColor: "bg-white",
      iconColor: "text-purple-600",
      content: `<p class="text-gray-600">Track relay health, connection success, subscription lag, and publish acceptance rates.</p>
        <div class="mt-4">
          <h4 class="font-semibold mb-2">Data Flow</h4>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto">Client events ─▶ Collector ─▶ Queue ─▶ Aggregator ─▶ Warehouse
       │                                                             │
       └────────── Dashboards ◀─────────── Metrics/Exports ◀─────────┘</pre>
        </div>`
    },

  },
  nextSteps: [
    { title: "Architecture", description: "Where analytics fits", icon: "Layers", href: "/guides/architecture" },
    { title: "NIPs", description: "Protocol specifications", icon: "Code", href: "/nips" },
    { title: "Performance", description: "Correlate metrics to speed", icon: "Zap", href: "/guides/performance" }
  ]
};

// Machine Learning Guide
export const machineLearningGuide: GuideContent = {
  title: "Machine Learning",
  description: "ML use-cases for Nostr: ranking, moderation, embeddings, and summarization in privacy-preserving ways.",
  heroIcon: "Cpu",
  tags: ["Ranking", "Moderation", "Embeddings", "Python"],
  sections: {
    usecases: {
      title: "Use Cases",
      description: "What ML adds to Nostr apps",
      icon: "Sparkles",
      bgColor: "bg-white",
      iconColor: "text-pink-600",
      content: `<ul class="list-disc ml-6 text-gray-600 space-y-1"><li>Timeline ranking</li><li>Abuse and spam moderation</li><li>Search via embeddings</li></ul>`
    },
    curation: {
      title: "Dataset Curation",
      description: "Quality in, quality out",
      icon: "Clipboard",
      bgColor: "bg-white",
      iconColor: "text-pink-600",
      steps: [
        { title: "Sampling", description: "Avoid bias; stratify by kinds, authors, time." },
        { title: "Labeling", description: "Lightweight human-in-the-loop for moderation/quality." },
        { title: "Versioning", description: "Track dataset and feature versions for reproducibility." }
      ]
    },
    pipeline: {
      title: "Offline Pipeline",
      description: "ETL, features, training, and evaluation",
      icon: "Package",
      bgColor: "bg-gray-50",
      iconColor: "text-pink-600",
      content: `<p class="text-gray-600">Export curated events, build features, and train models offline; deploy small on-device models where possible.</p>`,
      codeExample: {
        language: "Python",
        title: "Embeddings pipeline (conceptual)",
        description: "Compute sentence embeddings for search.",
        code: `from sentence_transformers import SentenceTransformer
model = SentenceTransformer('all-MiniLM-L6-v2')
emb = model.encode(['hello nostr'])
print(len(emb[0]))`
      }
    },
    integration: {
      title: "Integration",
      description: "Real-time inference and fallbacks",
      icon: "Link",
      bgColor: "bg-white",
      iconColor: "text-pink-600",
      content: `<p class="text-gray-600">Serve models behind a feature-flag; cache results and provide predictable fallbacks for cold-start.</p>`,
      codeExample: {
        language: "TypeScript",
        title: "Feature-gated inference",
        description: "Toggle inference via flags and fallbacks.",
        code: `async function rank(timeline, flags) {
  if (!flags.mlRanking) return timeline
  try { return await fetch('/rank', { method: 'POST', body: JSON.stringify(timeline) }).then(r => r.json()) }
  catch { return timeline }
}`
      }
    },
    evaluation: {
      title: "Evaluation",
      description: "Measure model value, not just accuracy",
      icon: "Activity",
      bgColor: "bg-gray-50",
      iconColor: "text-pink-600",
      content: `<p class="text-gray-600">Define task metrics (CTR, abuse catch-rate), offline AUC/precision-recall, and run online A/B tests gated by safety checks.</p>`
    },

  },
  nextSteps: [
    { title: "Analytics", description: "Measure model impact", icon: "Activity", href: "/guides/analytics" },
    { title: "Architecture", description: "Where ML fits in systems", icon: "Layers", href: "/guides/architecture" },
    { title: "Python", description: "Implementation with Python libraries", icon: "Terminal", href: "/guides/python" }
  ]
};

// App Store Guide
export const appStoreGuide: GuideContent = {
  title: "App Store Guidelines",
  description: "Prepare Nostr mobile apps for distribution: privacy, security, UX, and store compliance.",
  heroIcon: "CheckCircle",
  tags: ["iOS", "Android", "Privacy", "Security"],
  sections: {
    privacy: {
      title: "Privacy",
      description: "Keys and data handling",
      icon: "Lock",
      bgColor: "bg-white",
      iconColor: "text-emerald-600",
      content: `<p class="text-gray-600">Store keys in secure enclaves/keystores, avoid analytics that can deanonymize users, and provide clear consent flows.</p>`
    },
    security: {
      title: "Security",
      description: "Hardening mobile clients",
      icon: "Shield",
      bgColor: "bg-gray-50",
      iconColor: "text-emerald-600",
      content: `<ul class=\"list-disc ml-6 text-gray-600 space-y-1\"><li>Jailbreak/root detection</li><li>Tamper detection and code obfuscation</li><li>Secure clipboard handling for keys</li></ul>`
    },
    ux: {
      title: "User Experience",
      description: "Sign-in, recovery, and education",
      icon: "Heart",
      bgColor: "bg-gray-50",
      iconColor: "text-emerald-600",
      content: `<p class="text-gray-600">Explain public/private keys, export flows, and relay configuration with friendly language and warnings.</p>`
    },
    compliance: {
      title: "Compliance",
      description: "Store policies and reviews",
      icon: "FileText",
      bgColor: "bg-white",
      iconColor: "text-emerald-600",
      steps: [
        { title: "Permissions", description: "Request the minimum set with justifications." },
        { title: "Content", description: "Moderation and reporting mechanisms." },
        { title: "Payments", description: "If applicable, conform to platform rules." }
      ]
    },
    release: {
      title: "Release Process",
      description: "From builds to reviews",
      icon: "Package",
      bgColor: "bg-white",
      iconColor: "text-emerald-600",
      steps: [
        { title: "Store Assets", description: "Screenshots, descriptions, privacy policy URLs." },
        { title: "Crash Reporting", description: "Integrate privacy-friendly crash and ANR reporting." },
        { title: "Phased Rollout", description: "Release to rings; monitor metrics; rollback plan." }
      ]
    },
    examples: {
      title: "Runnable Examples",
      description: "Mobile clients and store-ready setups",
      icon: "GitBranch",
      bgColor: "bg-white",
      iconColor: "text-emerald-600",
      content: `
        <ul class="list-disc ml-6 text-sm text-teal-700">
          <li><a href="https://github.com/Shugur-Network/mobile-nostr-client" target="_blank" rel="noopener" class="underline">Mobile Nostr Client</a></li>
          <li><a href="https://github.com/Shugur-Network/react-nostr-app" target="_blank" rel="noopener" class="underline">React Nostr App</a></li>
        </ul>
      `
    }
  },
  nextSteps: [
    { title: "Swift", description: "Build iOS apps", icon: "Smartphone", href: "/guides/swift" },
    { title: "Kotlin", description: "Build Android apps", icon: "Smartphone", href: "/guides/kotlin" },
    { title: "Flutter", description: "Cross-platform app", icon: "Monitor", href: "/guides/flutter" }
  ]
};

// Export all guides
export const guides = {
  'getting-started': gettingStartedGuide,
  'javascript': javascriptGuide,
  'typescript': typescriptGuide,
  'python': pythonGuide,
  'relay-connection': relayConnectionGuide,
  'concepts': conceptsGuide,
  'kotlin': kotlinGuide,
  'flutter': flutterGuide,
  'rust': rustGuide,
  'swift': swiftGuide,
  'architecture': architectureGuide,
  'performance': performanceGuide,
  'testing': testingGuide,
  'analytics': analyticsGuide,
  'machine-learning': machineLearningGuide,
  'app-store': appStoreGuide
};

export type GuideKey = keyof typeof guides;
