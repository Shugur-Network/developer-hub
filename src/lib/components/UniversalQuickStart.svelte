<script>
  import { Copy } from 'lucide-svelte';
  
  export let language;
  export let examples;
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<div class="space-y-10">
  <div class="text-center mb-8">
    <h3 class="text-xl font-semibold mb-2">{language} Quick Start</h3>
    <p class="text-gray-600">5 steps to handle Nostr events using native tools</p>
  </div>

  {#each examples as example, i}
    <div class="flex items-start gap-6">
      <div class="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
        {i + 1}
      </div>
      <div class="flex-grow">
        <h3 class="text-xl font-semibold mb-2">{example.title}</h3>
        <p class="text-gray-600 mb-4">{example.description}</p>
        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">{example.language}</span>
            <button 
              on:click={() => copyToClipboard(example.code)}
              class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
            >
              <Copy class="h-3 w-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre class="text-sm overflow-x-auto"><code>{example.code}</code></pre>
        </div>
      </div>
    </div>
  {/each}
</div>
