<script>
  import { onMount } from 'svelte';
  export let chart = '';
  let el;
  let initialized = false;
  let rendered = false;
  
  onMount(async () => {
    try {
      if (!window.mermaid) {
        const mermaidModule = await import('https://unpkg.com/mermaid@10/dist/mermaid.esm.min.mjs');
        window.mermaid = mermaidModule.default;
        
        window.mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          fontFamily: 'Inter, ui-sans-serif, system-ui'
        });
      }
      
      initialized = true;
      
      if (chart && el && !rendered) {
        const id = 'mermaid-' + Math.random().toString(36).substr(2, 9);
        const { svg } = await window.mermaid.render(id, chart);
        el.innerHTML = svg;
        rendered = true;
      }
    } catch (error) {
      console.error('Mermaid rendering failed:', error);
      if (el) {
        el.innerHTML = '<div class="text-red-500 text-sm p-4 border border-red-200 rounded">Chart rendering failed</div>';
      }
    }
  });
</script>

<div bind:this={el} class="mermaid-container">
  {#if !initialized}
    <div class="text-gray-500 text-sm p-4">Loading chart...</div>
  {/if}
</div>


