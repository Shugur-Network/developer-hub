<script>
  import { getIcon } from '$lib/utils/icons';
  import { flutterGuide } from '$lib/content/guides';
  import GuideHero from '$lib/components/GuideHero.svelte';
  import GuideTableOfContents from '$lib/components/GuideTableOfContents.svelte';
  import GuideFeatures from '$lib/components/GuideFeatures.svelte';
  import GuideNextSteps from '$lib/components/GuideNextSteps.svelte';
</script>

<svelte:head>
  <title>Flutter Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Build cross-platform Nostr applications with Flutter and Dart. Learn to create mobile apps for iOS and Android with a single codebase." />
</svelte:head>

<GuideHero 
  title={flutterGuide.title}
  description={flutterGuide.description}
  heroIcon={flutterGuide.heroIcon}
  tags={flutterGuide.tags}
/>

<GuideTableOfContents sections={flutterGuide.sections} />

{#each Object.entries(flutterGuide.sections) as [key, section]}
  <section class="py-16 {section.bgColor}">
    <div class="mx-auto max-w-4xl px-4">
      <div class="flex items-center gap-3 mb-6">
        <svelte:component this={getIcon(section.icon)} class="h-8 w-8 {section.iconColor}" />
        <h2 class="text-2xl font-display">{section.title}</h2>
      </div>
      
      <p class="text-gray-600 mb-6">
        {section.description}
      </p>
      
      {#if section.codeExample}
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">{section.codeExample.language}</span>
            <button 
              on:click={() => copyToClipboard(section.codeExample.code)}
              class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
            >
              <svelte:component this={getIcon('copy')} class="h-3 w-3" />
              Copy
            </button>
          </div>
          <pre class="text-sm overflow-x-auto"><code>{section.codeExample.code}</code></pre>
        </div>
      {/if}
      
      {#if section.content}
        <div class="prose prose-lg max-w-none">
          {@html section.content}
        </div>
      {/if}
    </div>
  </section>
{/each}

<!-- Universal Example -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">Universal Example</h2>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Install</span>
        <button on:click={() => copyToClipboard(`flutter pub add web_socket_channel`)} class="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          <svelte:component this={getIcon('copy')} class="h-3 w-3" />
          Copy
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>flutter pub add web_socket_channel</code></pre>
    </div>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Create keypair</span>
        <button on:click={() => copyToClipboard(`final sk = generatePrivateKey();\nfinal pk = getPublicKey(sk);\nprint('npub: \$pk');`)} class="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          <svelte:component this={getIcon('copy')} class="h-3 w-3" />
          Copy
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`final sk = generatePrivateKey();
final pk = getPublicKey(sk);
print('npub: $pk');`}</code></pre>
    </div>
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Connect, Subscribe, Send, Receive</span>
        <button on:click={() => copyToClipboard(`final channel = WebSocketChannel.connect(Uri.parse('wss://shu01.shugur.net'));\nchannel.stream.listen((message) => print('recv: \$message'));\n// publish by sending Nostr EVENT JSON via channel.sink.add(jsonEncode(...));`)} class="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          <svelte:component this={getIcon('copy')} class="h-3 w-3" />
          Copy
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`final channel = WebSocketChannel.connect(Uri.parse('wss://shu01.shugur.net'));
channel.stream.listen((message) => print('recv: $message'));
// publish by sending Nostr EVENT JSON via channel.sink.add(jsonEncode(...));`}</code></pre>
    </div>
  </div>
</section>
<GuideNextSteps steps={flutterGuide.nextSteps} />
