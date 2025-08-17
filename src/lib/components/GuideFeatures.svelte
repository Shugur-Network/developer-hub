<script lang="ts">
  import { getIcon } from '$lib/utils/icons';
  
  export let title: string;
  export let description: string;
  export let icon: string;
  export let features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  export let columns: number = 3;
</script>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(icon)} class="h-6 w-6 text-primary" />
      <h2 class="text-2xl font-display">{title}</h2>
    </div>
    
    <p class="text-gray-600 mb-8">
      {description}
    </p>
    
    <div class="grid md:grid-cols-{columns} gap-8">
      {#each features as feature}
        <div class="text-center">
          <div class="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svelte:component this={getIcon(feature.icon)} class="h-8 w-8 text-primary" />
          </div>
          <h3 class="font-semibold text-lg mb-2">{feature.title}</h3>
          <p class="text-gray-600">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
