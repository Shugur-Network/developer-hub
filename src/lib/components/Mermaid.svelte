<script>
  import { onMount } from 'svelte';
  export let chart = '';
  let el;
  let initialized = false;
  
  onMount(async () => {
    if (!('mermaid' in window)) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/mermaid@10/dist/mermaid.min.js';
      script.onload = () => {
        // @ts-ignore
        window.mermaid.initialize({ startOnLoad: false, theme: 'default' });
        initialized = true;
        // @ts-ignore
        window.mermaid.run({ nodes: [el] });
      };
      document.head.appendChild(script);
    } else {
      initialized = true;
      // @ts-ignore
      window.mermaid.run({ nodes: [el] });
    }
  });
</script>

<div bind:this={el} class="mermaid">
  {chart}
  {#if !initialized}
    <pre class="text-xs text-gray-500">Loading mermaid...</pre>
  {/if}
  
</div>


