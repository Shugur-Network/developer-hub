<script>
  import { Zap, Settings } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Go Guide - Nostr Development with Shugur</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-cyan-600 to-blue-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Zap class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Go Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build scalable Nostr applications with Go
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Concurrency</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">go-nostr</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Goroutines</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Performance</span>
    </div>
  </div>
</section>

<!-- Universal Example -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">Universal Example</h2>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Install</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>go get github.com/nbd-wtf/go-nostr</code></pre>
    </div>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Create keypair</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`package main
import (
  "fmt"
  "github.com/nbd-wtf/go-nostr/nip19"
)

func main(){
  sk := nostr.GeneratePrivateKey()
  pk, _ := nostr.GetPublicKey(sk)
  fmt.Println("npub:", pk)
}`}</code></pre>
    </div>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Connect, Subscribe, Send, Receive</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`package main
import (
  "fmt"
  "time"
  "github.com/nbd-wtf/go-nostr"
)

func main(){
  relay, _ := nostr.RelayConnect(context.Background(), "wss://shu01.shugur.net")
  sub, _ := relay.Subscribe(context.Background(), nostr.Filter{Kinds: []int{1}, Limit: 1})
  go func(){ for ev := range sub.Events { fmt.Println("recv", ev.ID, ev.Content) } }()

  sk := "YOUR_HEX_PRIVATE_KEY"
  pk, _ := nostr.GetPublicKey(sk)
  ev := nostr.Event{Kind: 1, CreatedAt: time.Now(), Tags: nostr.Tags{}, Content: "Hello from Go", PubKey: pk}
  ev.Sign(sk)
  relay.Publish(context.Background(), ev)
}`}</code></pre>
    </div>
  </div>
</section>
