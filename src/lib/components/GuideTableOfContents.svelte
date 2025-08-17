<script lang="ts">
  import { getIcon } from '$lib/utils/icons';
  
  export let sections: Array<{
    key: string;
    title: string;
    icon: string;
  }>;
</script>

<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="text-lg font-semibold mb-4">In this guide:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      {#each sections as section}
        <a href="#{section.key}" class="hover:text-primary flex items-center gap-2">
          <svelte:component this={getIcon(section.icon)} class="h-4 w-4" />
          {section.title}
        </a>
      {/each}
    </div>
  </div>
</section>
