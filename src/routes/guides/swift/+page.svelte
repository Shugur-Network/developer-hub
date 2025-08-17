<script>
  import { Smartphone, Settings } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Swift Guide - Nostr Development with Shugur</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Smartphone class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Swift Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build native iOS and macOS Nostr apps with Swift
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">iOS Native</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">NostrSDK</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">SwiftUI</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">macOS</span>
    </div>
  </div>
</section>

<!-- Universal Example -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">Universal Example</h2>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Install</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`// Xcode → Package Dependencies
.package(url: "https://github.com/Kjuly/NostrKit", from: "1.0.0")`}</code></pre>
    </div>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Create keypair</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`import NostrKit
let sk = NostrKeypair.generatePrivateKey()
let pk = NostrKeypair.publicKey(from: sk)
print("npub: \(pk)")`}</code></pre>
    </div>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Connect, Subscribe, Send, Receive</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`import NostrKit
let relay = NostrRelay(url: URL(string: "wss://shu01.shugur.net")!)
relay.connect()

relay.subscribe(filters: [NostrFilter(kinds: [1], limit: 1)]) { event in
  print("recv", event.id)
}

let ev = NostrEvent.textNote(content: "Hello from Swift", pubkey: pk)
try? relay.publish(ev)
print("published")`}</code></pre>
    </div>
  </div>
</section>
