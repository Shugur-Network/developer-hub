<script>
  import { Cpu, Settings } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Rust Guide - Nostr Development with Shugur</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <Cpu class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          Rust Guide
        </h1>
        <p class="text-xl opacity-90 mt-2">
          Build high-performance Nostr applications with Rust
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Zero-Cost Abstractions</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">nostr-sdk</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Tokio</span>
      <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Memory Safety</span>
    </div>
  </div>
</section>

<!-- Universal Example -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl font-display mb-6">Universal Example</h2>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Install</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>cargo add nostr-sdk tokio --features full</code></pre>
    </div>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Create keypair</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`use nostr_sdk::prelude::*;

fn main() {
    let keys = Keys::generate();
    println!("npub: {}", keys.public_key().to_bech32().unwrap());
}`}</code></pre>
    </div>
    <div class="border rounded-xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Connect, Subscribe, Send, Receive</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`use nostr_sdk::prelude::*;
use tokio;

#[tokio::main]
async fn main() -> Result<()> {
    let keys = Keys::generate();
    let client = Client::new(&keys);
    client.add_relay("wss://shu01.shugur.net", None).await?;
    client.connect().await;

    let filter = Filter::new().kind(Kind::TextNote).limit(1);
    let mut notifications = client.subscribe(vec![filter]).await.unwrap();
    tokio::spawn(async move {
        while let Ok(notification) = notifications.recv().await {
            if let RelayPoolNotification::Event(_url, ev) = notification { println!("recv {}", ev.id); }
        }
    });

    let event_id = client.publish_text_note("Hello from Rust", &[]).await?;
    println!("published {}", event_id);
    Ok(())
}`}</code></pre>
    </div>
  </div>
</section>
