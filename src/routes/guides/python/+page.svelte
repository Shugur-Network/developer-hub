<script>
  import { Code, Download, ExternalLink, Copy, Terminal, BookOpen, Package, Link, FileText, Sparkles, Rocket, Cpu } from 'lucide-svelte';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Python Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Build Nostr applications with Python. Create bots, data analysis tools, and backend services using python-nostr and asyncio." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Code class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Python Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build Nostr applications with Python and asyncio
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">python-nostr</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">asyncio</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Bots</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Data Analysis</span>
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
      <a href="#subscriptions" class="hover:text-primary flex items-center gap-2">
        <Terminal class="h-4 w-4" />
        Subscriptions and Filters
      </a>
      <a href="#bots" class="hover:text-primary flex items-center gap-2">
        <Code class="h-4 w-4" />
        Building Bots
      </a>
      <a href="#examples" class="hover:text-primary flex items-center gap-2">
        <BookOpen class="h-4 w-4" />
        Complete Examples
      </a>
    </div>
  </div>
</section>

<!-- Setup -->
<section id="setup" class="py-16 bg-white">
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
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Python 3.8+ with asyncio support
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Basic Python and async/await knowledge
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Understanding of WebSockets (helpful)
          </li>
        </ul>

        <h3 class="font-semibold text-lg mb-4">Package Installation</h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs text-gray-400">Terminal</span>
            <button 
              on:click={() => copyToClipboard('pip install python-nostr websockets secp256k1')}
              class="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm"><code>pip install python-nostr websockets secp256k1</code></pre>
        </div>

        <p class="text-sm text-gray-600">
          <code class="bg-gray-100 px-2 py-1 rounded">python-nostr</code> is a comprehensive Python library for Nostr development.
        </p>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Alternative Libraries</h3>
        <div class="space-y-4">
          <div class="border p-4 rounded-lg">
            <h4 class="font-medium mb-2">python-nostr</h4>
            <p class="text-sm text-gray-600 mb-2">Full-featured library with relay client and cryptographic functions</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">pip install python-nostr</code>
          </div>
          
          <div class="border p-4 rounded-lg">
            <h4 class="font-medium mb-2">nostr-python</h4>
            <p class="text-sm text-gray-600 mb-2">Alternative implementation with different API design</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">pip install nostr-python</code>
          </div>
          
          <div class="border p-4 rounded-lg">
            <h4 class="font-medium mb-2">websockets</h4>
            <p class="text-sm text-gray-600 mb-2">For raw WebSocket connections to relays</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">pip install websockets</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Basic Connection -->
<section id="basic-connection" class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Link class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Basic Connection</h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 class="font-semibold text-lg mb-4">Sync Implementation</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">sync_client.py</span>
            <button 
              on:click={() => copyToClipboard(`from nostr.relay import Relay
from nostr.filter import Filter
from nostr.event import Event

# Connect to Shugur relay
relay = Relay("wss://shu01.shugur.net")

try:
    # Test connection
    relay.connect()
    print("✅ Connected to Shugur relay!")
    
    # Query recent events
    filters = Filter(kinds=[1], limit=10)
    events = relay.query_sync(filters)
    
    print(f"📝 Found {len(events)} events")
    for event in events:
        print(f"Event: {event.content[:50]}...")
        
except Exception as e:
    print(f"❌ Connection failed: {e}")
finally:
    relay.close()`)}
              class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm overflow-x-auto"><code>{`from nostr.relay import Relay
from nostr.filter import Filter
from nostr.event import Event

# Connect to Shugur relay
relay = Relay("wss://shu01.shugur.net")

try:
    # Test connection
    relay.connect()
    print("✅ Connected to Shugur relay!")
    
    # Query recent events
    filters = Filter(kinds=[1], limit=10)
    events = relay.query_sync(filters)
    
    print(f"📝 Found {len(events)} events")
    for event in events:
        print(f"Event: {event.content[:50]}...")
        
except Exception as e:
    print(f"❌ Connection failed: {e}")
finally:
    relay.close()`}</code></pre>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Async Implementation</h3>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">async_client.py</span>
            <button 
              on:click={() => copyToClipboard(`import asyncio
from nostr.relay import Relay
from nostr.filter import Filter

async def connect_to_relay():
    relay = Relay("wss://shu01.shugur.net")
    
    try:
        await relay.connect_async()
        print("✅ Connected to Shugur relay!")
        
        # Subscribe to real-time events
        filters = Filter(kinds=[1], limit=5)
        
        async for event in relay.query_async(filters):
            print(f"📝 New event: {event.content}")
            
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        await relay.close_async()

# Run the async function
asyncio.run(connect_to_relay())`)}
              class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm overflow-x-auto"><code>{`import asyncio
from nostr.relay import Relay
from nostr.filter import Filter

async def connect_to_relay():
    relay = Relay("wss://shu01.shugur.net")
    
    try:
        await relay.connect_async()
        print("✅ Connected to Shugur relay!")
        
        # Subscribe to real-time events
        filters = Filter(kinds=[1], limit=5)
        
        async for event in relay.query_async(filters):
            print(f"📝 New event: {event.content}")
            
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        await relay.close_async()

# Run the async function
asyncio.run(connect_to_relay())`}</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Working with Events -->
<section id="events" class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <FileText class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Working with Events</h2>
    </div>
    
    <h3 class="font-semibold text-lg mb-4">Creating and Signing Events</h3>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">events.py</span>
        <button 
          on:click={() => copyToClipboard(`from nostr.key import PrivateKey
from nostr.event import Event
import time

# Generate keys (do this once and store securely)
private_key = PrivateKey()
public_key = private_key.public_key

print(f"🔑 Private key: {private_key.hex()}")
print(f"🔓 Public key: {public_key.hex()}")

def create_text_note(content: str) -> Event:
    """Create a signed text note event"""
    event = Event(
        kind=1,                          # Kind 1 = text note
        content=content,                 # The message content
        created_at=int(time.time()),     # Current timestamp
        tags=[],                         # Empty tags for now
        public_key=public_key.hex()      # Your public key
    )
    
    # Sign the event
    private_key.sign_event(event)
    
    return event

# Example usage
event = create_text_note("Hello Nostr from Python! 🐍")
print(f"📝 Created event: {event.id}")
print(f"✍️ Signature: {event.signature}")

# Verify the event is valid
if event.verify():
    print("✅ Event signature is valid!")
else:
    print("❌ Invalid event signature!")`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`from nostr.key import PrivateKey
from nostr.event import Event
import time

# Generate keys (do this once and store securely)
private_key = PrivateKey()
public_key = private_key.public_key

print(f"🔑 Private key: {private_key.hex()}")
print(f"🔓 Public key: {public_key.hex()}")

def create_text_note(content: str) -> Event:
    """Create a signed text note event"""
    event = Event(
        kind=1,                          # Kind 1 = text note
        content=content,                 # The message content
        created_at=int(time.time()),     # Current timestamp
        tags=[],                         # Empty tags for now
        public_key=public_key.hex()      # Your public key
    )
    
    # Sign the event
    private_key.sign_event(event)
    
    return event

# Example usage
event = create_text_note("Hello Nostr from Python! 🐍")
print(f"📝 Created event: {event.id}")
print(f"✍️ Signature: {event.signature}")

# Verify the event is valid
if event.verify():
    print("✅ Event signature is valid!")
else:
    print("❌ Invalid event signature!")`}</code></pre>
    </div>
  </div>
</section>

<!-- Bot Building -->
<section id="bots" class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">🤖 Building Bots</h2>
    
    <p class="text-gray-600 mb-6">Python is excellent for building Nostr bots. Here's a complete example of a bot that responds to mentions:</p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">nostr_bot.py</span>
        <button 
          on:click={() => copyToClipboard(`import asyncio
import time
from nostr.relay import Relay
from nostr.filter import Filter
from nostr.event import Event
from nostr.key import PrivateKey

class NostrBot:
    def __init__(self, relay_url: str, private_key_hex: str = None):
        self.relay = Relay(relay_url)
        
        if private_key_hex:
            self.private_key = PrivateKey(bytes.fromhex(private_key_hex))
        else:
            self.private_key = PrivateKey()
            
        self.public_key = self.private_key.public_key
        print(f"🤖 Bot public key: {self.public_key.hex()}")
    
    async def start(self):
        """Start the bot and listen for mentions"""
        await self.relay.connect_async()
        print(f"✅ Connected to relay: {self.relay.url}")
        
        # Subscribe to mentions of this bot
        filters = Filter(
            kinds=[1],                      # Text notes
            p=[self.public_key.hex()],      # Mentions of our pubkey
            since=int(time.time())          # Only new events
        )
        
        print("👂 Listening for mentions...")
        
        async for event in self.relay.query_async(filters):
            await self.handle_mention(event)
    
    async def handle_mention(self, event: Event):
        """Handle when someone mentions the bot"""
        print(f"📨 Mentioned by {event.public_key[:8]}...")
        print(f"💬 Content: {event.content}")
        
        # Simple command processing
        content = event.content.lower()
        
        if "hello" in content:
            response = "Hello! 👋 I'm a Nostr bot built with Python!"
        elif "time" in content:
            response = f"Current time: {time.ctime()}"
        elif "help" in content:
            response = "Available commands: hello, time, help"
        else:
            response = "I'm a simple bot. Try: hello, time, or help"
        
        # Create reply event
        reply_event = Event(
            kind=1,
            content=response,
            created_at=int(time.time()),
            tags=[
                ["e", event.id],              # Reply to this event
                ["p", event.public_key]       # Mention the original author
            ],
            public_key=self.public_key.hex()
        )
        
        # Sign and publish
        self.private_key.sign_event(reply_event)
        
        try:
            await self.relay.publish_async(reply_event)
            print(f"✅ Replied with: {response}")
        except Exception as e:
            print(f"❌ Failed to reply: {e}")

# Usage example
async def main():
    bot = NostrBot("wss://shu01.shugur.net")
    await bot.start()

if __name__ == "__main__":
    asyncio.run(main())`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import asyncio
import time
from nostr.relay import Relay
from nostr.filter import Filter
from nostr.event import Event
from nostr.key import PrivateKey

class NostrBot:
    def __init__(self, relay_url: str, private_key_hex: str = None):
        self.relay = Relay(relay_url)
        
        if private_key_hex:
            self.private_key = PrivateKey(bytes.fromhex(private_key_hex))
        else:
            self.private_key = PrivateKey()
            
        self.public_key = self.private_key.public_key
        print(f"🤖 Bot public key: {self.public_key.hex()}")
    
    async def start(self):
        """Start the bot and listen for mentions"""
        await self.relay.connect_async()
        print(f"✅ Connected to relay: {self.relay.url}")
        
        # Subscribe to mentions of this bot
        filters = Filter(
            kinds=[1],                      # Text notes
            p=[self.public_key.hex()],      # Mentions of our pubkey
            since=int(time.time())          # Only new events
        )
        
        print("👂 Listening for mentions...")
        
        async for event in self.relay.query_async(filters):
            await self.handle_mention(event)
    
    async def handle_mention(self, event: Event):
        """Handle when someone mentions the bot"""
        print(f"📨 Mentioned by {event.public_key[:8]}...")
        print(f"💬 Content: {event.content}")
        
        # Simple command processing
        content = event.content.lower()
        
        if "hello" in content:
            response = "Hello! 👋 I'm a Nostr bot built with Python!"
        elif "time" in content:
            response = f"Current time: {time.ctime()}"
        elif "help" in content:
            response = "Available commands: hello, time, help"
        else:
            response = "I'm a simple bot. Try: hello, time, or help"
        
        # Create reply event
        reply_event = Event(
            kind=1,
            content=response,
            created_at=int(time.time()),
            tags=[
                ["e", event.id],              # Reply to this event
                ["p", event.public_key]       # Mention the original author
            ],
            public_key=self.public_key.hex()
        )
        
        # Sign and publish
        self.private_key.sign_event(reply_event)
        
        try:
            await self.relay.publish_async(reply_event)
            print(f"✅ Replied with: {response}")
        except Exception as e:
            print(f"❌ Failed to reply: {e}")

# Usage example
async def main():
    bot = NostrBot("wss://shu01.shugur.net")
    await bot.start()

if __name__ == "__main__":
    asyncio.run(main())`}</code></pre>
    </div>
  </div>
</section>

<!-- Complete Examples -->
<section id="examples" class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <BookOpen class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Complete Examples</h2>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">Data Analysis Tool</h3>
        <p class="text-gray-600 mb-4">Analyze Nostr network activity and generate insights</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/nostr-analytics-python" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="/guides/python/analytics-tutorial" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <BookOpen class="h-4 w-4" />
            Tutorial
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: Event statistics, user activity, network topology
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">RSS to Nostr Bridge</h3>
        <p class="text-gray-600 mb-4">Automatically post RSS feed updates to Nostr</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/rss-nostr-python" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="https://demo.shugur.com/rss-bridge" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <Terminal class="h-4 w-4" />
            Live Example
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: RSS parsing, scheduled posts, content filtering
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">Backup Tool</h3>
        <p class="text-gray-600 mb-4">Backup and restore your Nostr events to local storage</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/nostr-backup-python" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="/guides/python/backup-tutorial" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <BookOpen class="h-4 w-4" />
            Tutorial
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: Event export, JSON format, incremental backups
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg border">
        <h3 class="font-semibold text-lg mb-4">Multi-Relay Publisher</h3>
        <p class="text-gray-600 mb-4">Publish events to multiple relays with failover</p>
        <div class="flex gap-3 mb-4">
          <a href="https://github.com/Shugur-Network/multi-relay-python" class="flex items-center gap-2 text-sm text-primary hover:underline">
            <ExternalLink class="h-4 w-4" />
            GitHub Repository
          </a>
          <a href="/guides/python/multi-relay-tutorial" class="flex items-center gap-2 text-sm text-green-600 hover:underline">
            <BookOpen class="h-4 w-4" />
            Tutorial
          </a>
        </div>
        <div class="text-sm text-gray-500">
          Features: Load balancing, retry logic, relay health monitoring
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Best Practices -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <Sparkles class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">Python-Specific Best Practices</h2>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <Rocket class="h-5 w-5 text-primary" />
          <h3 class="font-semibold text-lg">Performance</h3>
        </div>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Use asyncio for concurrent relay connections</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Implement connection pooling for multiple relays</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Use libraries like `aiohttp` for HTTP requests</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
            <span>Cache frequently accessed data with `redis` or `memcached`</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">🔧 Development</h3>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Use type hints for better code documentation</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Store private keys in environment variables</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Use `pydantic` for data validation</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Implement proper logging with `structlog`</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready for More?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You now have the foundation to build powerful Nostr applications with Python. Explore these next steps:
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <a href="/guides/rust" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="p-2 bg-orange-500/10 rounded-full mb-3">
          <Cpu class="h-6 w-6 text-orange-500" />
        </div>
        <h3 class="font-semibold mb-2">Rust Guide</h3>
        <p class="text-sm opacity-90">Build high-performance Nostr applications</p>
      </a>
      
      <a href="/examples" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="p-2 bg-green-500/10 rounded-full mb-3">
          <Code class="h-6 w-6 text-green-500" />
        </div>
        <h3 class="font-semibold mb-2">More Examples</h3>
        <p class="text-sm opacity-90">Explore complete project examples</p>
      </a>
      
      <a href="/guides/best-practices" class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
        <div class="p-2 bg-purple-500/10 rounded-full mb-3">
          <Sparkles class="h-6 w-6 text-purple-500" />
        </div>
        <h3 class="font-semibold mb-2">Best Practices</h3>
        <p class="text-sm opacity-90">Security and performance guidelines</p>
      </a>
    </div>
  </div>
</section>
