<script>
  import { Copy, CheckCircle, XCircle } from 'lucide-svelte';
  import { pythonGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Python Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Build Nostr applications with Python for bots, analytics, and backend services. Learn to use nostr-tools with Python and asyncio." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <svelte:component this={getIcon(pythonGuide.heroIcon)} class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">Python & Async</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      {pythonGuide.title}
    </h1>
    <p class="text-xl opacity-90 mb-8">
      {pythonGuide.description}
    </p>
    
    <div class="flex flex-wrap gap-3">
      {#each pythonGuide.tags as tag}
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{tag}</span>
      {/each}
    </div>
  </div>
</section>

<!-- Universal Example -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">Universal Example</h2>

    <!-- 1. Install requirements -->
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Install</span>
        <button on:click={() => copyToClipboard(`pip install nostr-tools websockets`)} class="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>pip install nostr-tools websockets</code></pre>
    </div>

    <!-- 2. Create keypair -->
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Create keypair</span>
        <button on:click={() => copyToClipboard(`from nostr.keys import generate_private_key, get_public_key\n\nsk = generate_private_key()\npk = get_public_key(sk)\nprint('npub:', pk)`)} class="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`from nostr.keys import generate_private_key, get_public_key

sk = generate_private_key()
pk = get_public_key(sk)
print('npub:', pk)`}</code></pre>
    </div>

    <!-- 3-5. Connect, subscribe, send, receive -->
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Connect, Subscribe, Send, Receive</span>
        <button on:click={() => copyToClipboard(`import asyncio, time\nfrom nostr.relay import Relay\nfrom nostr.event import Event\nfrom nostr.keys import get_public_key, sign_event\n\nasync def main():\n    relay = Relay('wss://shu01.shugur.net')\n    await relay.connect()\n\n    # Subscribe\n    sub = relay.sub([{ 'kinds': [1], 'limit': 1 }])\n    async for ev in sub:\n        print('recv', ev.id, ev.content)\n        break\n\n    # Publish\n    sk = 'YOUR_HEX_PRIVATE_KEY'\n    pk = get_public_key(sk)\n    ev = { 'kind': 1, 'created_at': int(time.time()), 'tags': [], 'content': 'Hello from Python', 'pubkey': pk }\n    ev['id'] = Event.hash(ev)\n    ev['sig'] = sign_event(ev, sk)\n    pub = relay.publish(ev)\n    await pub.wait()\n    print('published')\n\nasyncio.run(main())`)} class="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import asyncio, time
from nostr.relay import Relay
from nostr.event import Event
from nostr.keys import get_public_key, sign_event

async def main():
    relay = Relay('wss://shu01.shugur.net')
    await relay.connect()

    # Subscribe
    sub = relay.sub([{ 'kinds': [1], 'limit': 1 }])
    async for ev in sub:
        print('recv', ev.id, ev.content)
        break

    # Publish
    sk = 'YOUR_HEX_PRIVATE_KEY'
    pk = get_public_key(sk)
    ev = { 'kind': 1, 'created_at': int(time.time()), 'tags': [], 'content': 'Hello from Python', 'pubkey': pk }
    ev['id'] = Event.hash(ev)
    ev['sig'] = sign_event(ev, sk)
    pub = relay.publish(ev)
    await pub.wait()
    print('published')

asyncio.run(main())`}</code></pre>
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      {#each Object.entries(pythonGuide.sections) as [key, section]}
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
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
      <svelte:component this={getIcon(pythonGuide.sections.setup.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{pythonGuide.sections.setup.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {pythonGuide.sections.setup.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Terminal</span>
        <button 
          on:click={() => copyToClipboard(`pip install nostr-tools
pip install websockets
pip install asyncio`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>pip install nostr-tools
pip install websockets
pip install asyncio</code></pre>
    </div>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">requirements.txt</span>
        <button 
          on:click={() => copyToClipboard(`nostr-tools>=0.20.0
websockets>=11.0
asyncio>=3.4.3
aiohttp>=3.8.0`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>nostr-tools>=0.20.0
websockets>=11.0
asyncio>=3.4.3
aiohttp>=3.8.0</code></pre>
    </div>
  </div>
</section>

<!-- Basic Connection -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(pythonGuide.sections.basicConnection.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{pythonGuide.sections.basicConnection.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {pythonGuide.sections.basicConnection.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Python</span>
        <button 
          on:click={() => copyToClipboard(`import asyncio
import websockets
from nostr.tools import relay_init

async def connect_to_relay():
    relay = relay_init('wss://shu01.shugur.net')
    
    try:
        await relay.connect()
        print('Connected to Shugur relay!')
        return relay
    except Exception as e:
        print(f'Failed to connect: {e}')
        return None

# Run the connection
if __name__ == '__main__':
    relay = asyncio.run(connect_to_relay())`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import asyncio
import websockets
from nostr.tools import relay_init

async def connect_to_relay():
    relay = relay_init('wss://shu01.shugur.net')
    
    try:
        await relay.connect()
        print('Connected to Shugur relay!')
        return relay
    except Exception as e:
        print(f'Failed to connect: {e}')
        return None

# Run the connection
if __name__ == '__main__':
    relay = asyncio.run(connect_to_relay())`}</code></pre>
    </div>
  </div>
</section>

<!-- Working with Events -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(pythonGuide.sections.events.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{pythonGuide.sections.events.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {pythonGuide.sections.events.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Python</span>
        <button 
          on:click={() => copyToClipboard(`from nostr.tools import get_event_hash, sign_event
import time

def create_text_note(content, pubkey, private_key):
    event = {
        'kind': 1,
        'created_at': int(time.time()),
        'tags': [],
        'content': content,
        'pubkey': pubkey
    }
    
    # Add the event hash
    event['id'] = get_event_hash(event)
    
    # Sign the event
    event['sig'] = sign_event(event, private_key)
    
    return event

# Example usage
note = create_text_note(
    'Hello Nostr from Python!',
    'your_public_key_here',
    'your_private_key_here'
)
print(f'Created event: {note["id"]}')`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`from nostr.tools import get_event_hash, sign_event
import time

def create_text_note(content, pubkey, private_key):
    event = {
        'kind': 1,
        'created_at': int(time.time()),
        'tags': [],
        'content': content,
        'pubkey': pubkey
    }
    
    # Add the event hash
    event['id'] = get_event_hash(event)
    
    # Sign the event
    event['sig'] = sign_event(event, private_key)
    
    return event

# Example usage
note = create_text_note(
    'Hello Nostr from Python!',
    'your_public_key_here',
    'your_private_key_here'
)
print(f'Created event: {note["id"]}')`}</code></pre>
    </div>
  </div>
</section>

<!-- Async Implementation -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(pythonGuide.sections.async.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{pythonGuide.sections.async.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {pythonGuide.sections.async.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Python</span>
        <button 
          on:click={() => copyToClipboard(`import asyncio
from nostr.tools import relay_init

async def subscribe_to_events(relay):
    # Subscribe to text notes
    sub = relay.sub([{'kinds': [1], 'limit': 10}])
    
    async for event in sub:
        print(f'New event: {event["content"]}')
        await asyncio.sleep(0.1)  # Prevent blocking

async def publish_event(relay, event):
    try:
        pub = relay.publish(event)
        await pub.wait()
        print('Event published successfully!')
    except Exception as e:
        print(f'Failed to publish: {e}')

async def main():
    relay = relay_init('wss://shu01.shugur.net')
    await relay.connect()
    
    # Run both operations concurrently
    await asyncio.gather(
        subscribe_to_events(relay),
        publish_event(relay, note)
    )

if __name__ == '__main__':
    asyncio.run(main())`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import asyncio
from nostr.tools import relay_init

async def subscribe_to_events(relay):
    # Subscribe to text notes
    sub = relay.sub([{'kinds': [1], 'limit': 10}])
    
    async for event in sub:
        print(f'New event: {event["content"]}')
        await asyncio.sleep(0.1)  # Prevent blocking

async def publish_event(relay, event):
    try:
        pub = relay.publish(event)
        await pub.wait()
        print('Event published successfully!')
    except Exception as e:
        print(f'Failed to publish: {e}')

async def main():
    relay = relay_init('wss://shu01.shugur.net')
    await relay.connect()
    
    # Run both operations concurrently
    await asyncio.gather(
        subscribe_to_events(relay),
        publish_event(relay, note)
    )

if __name__ == '__main__':
    asyncio.run(main())`}</code></pre>
    </div>
  </div>
</section>

<!-- Building Bots -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(pythonGuide.sections.bots.icon)} class="h-8 w-8 text-green-600" />
      <h2 class="text-2xl font-display">{pythonGuide.sections.bots.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {pythonGuide.sections.bots.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Python</span>
        <button 
          on:click={() => copyToClipboard(`import asyncio
from nostr.tools import relay_init, get_event_hash, sign_event
import time

class NostrBot:
    def __init__(self, private_key, public_key):
        self.private_key = private_key
        self.public_key = public_key
        self.relay = None
    
    async def connect(self, relay_url):
        self.relay = relay_init(relay_url)
        await self.relay.connect()
        print('Bot connected to relay')
    
    async def listen_for_mentions(self):
        # Subscribe to mentions of our bot
        sub = self.relay.sub([{
            'kinds': [1],
            '#p': [self.public_key]
        }])
        
        async for event in sub:
            await self.handle_mention(event)
    
    async def handle_mention(self, event):
        content = event['content']
        author = event['pubkey']
        
        # Simple bot logic
        if 'hello' in content.lower():
            response = f'Hello! Thanks for mentioning me, {author[:8]}...'
        elif 'help' in content.lower():
            response = 'I can respond to: hello, help, time'
        elif 'time' in content.lower():
            response = f'Current time: {time.strftime("%H:%M:%S")}'
        else:
            response = 'I heard you mention me!'
        
        # Create and publish response
        response_event = self.create_text_note(response)
        await self.publish_event(response_event)
    
    def create_text_note(self, content):
        event = {
            'kind': 1,
            'created_at': int(time.time()),
            'tags': [],
            'content': content,
            'pubkey': self.public_key
        }
        
        event['id'] = get_event_hash(event)
        event['sig'] = sign_event(event, self.private_key)
        return event
    
    async def publish_event(self, event):
        try:
            pub = self.relay.publish(event)
            await pub.wait()
            print('Bot response published')
        except Exception as e:
            print(f'Failed to publish: {e}')

# Run the bot
async def main():
    bot = NostrBot('your_private_key', 'your_public_key')
    await bot.connect('wss://shu01.shugur.net')
    await bot.listen_for_mentions()

if __name__ == '__main__':
    asyncio.run(main())`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import asyncio
from nostr.tools import relay_init, get_event_hash, sign_event
import time

class NostrBot:
    def __init__(self, private_key, public_key):
        self.private_key = private_key
        self.public_key = public_key
        self.relay = None
    
    async def connect(self, relay_url):
        self.relay = relay_init(relay_url)
        await self.relay.connect()
        print('Bot connected to relay')
    
    async def listen_for_mentions(self):
        # Subscribe to mentions of our bot
        sub = self.relay.sub([{
            'kinds': [1],
            '#p': [self.public_key]
        }])
        
        async for event in sub:
            await self.handle_mention(event)
    
    async def handle_mention(self, event):
        content = event['content']
        author = event['pubkey']
        
        # Simple bot logic
        if 'hello' in content.lower():
            response = f'Hello! Thanks for mentioning me, {author[:8]}...'
        elif 'help' in content.lower():
            response = 'I can respond to: hello, help, time'
        elif 'time' in content.lower():
            response = f'Current time: {time.strftime("%H:%M:%S")}'
        else:
            response = 'I heard you mention me!'
        
        # Create and publish response
        response_event = self.create_text_note(response)
        await self.publish_event(response_event)
    
    def create_text_note(self, content):
        event = {
            'kind': 1,
            'created_at': int(time.time()),
            'tags': [],
            'content': content,
            'pubkey': self.public_key
        }
        
        event['id'] = get_event_hash(event)
        event['sig'] = sign_event(event, self.private_key)
        return event
    
    async def publish_event(self, event):
        try:
            pub = self.relay.publish(event)
            await pub.wait()
            print('Bot response published')
        except Exception as e:
            print(f'Failed to publish: {e}')

# Run the bot
async def main():
    bot = NostrBot('your_private_key', 'your_public_key')
    await bot.connect('wss://shu01.shugur.net')
    await bot.listen_for_mentions()

if __name__ == '__main__':
    asyncio.run(main())`}</code></pre>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-green-600 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready for More?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You've mastered Python with Nostr. Here's what to explore next:
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      {#each pythonGuide.nextSteps as step}
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
