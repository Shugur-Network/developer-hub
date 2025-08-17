<script lang="ts">
  import { getIcon } from '$lib/utils/icons';
  
  export let title: string;
  export let description: string;
  export let heroIcon: string;
  export let tags: string[];
  export let gradientFrom: string = "from-primary";
  export let gradientTo: string = "to-blue-600";
</script>

<section class="bg-gradient-to-br {gradientFrom} {gradientTo} text-white py-16">
  <div class="mx-auto max-w-6xl px-4">
    <div class="flex items-center gap-4 mb-6">
      <div class="p-3 bg-white/20 rounded-full">
        <svelte:component this={getIcon(heroIcon)} class="h-8 w-8 text-white" />
      </div>
      <div>
        <h1 class="text-4xl md:text-5xl font-display tracking-tight">
          {title}
        </h1>
        <p class="text-xl opacity-90 mt-2">
          {description}
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-8">
      {#each tags as tag}
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{tag}</span>
      {/each}
    </div>
  </div>
</section>
