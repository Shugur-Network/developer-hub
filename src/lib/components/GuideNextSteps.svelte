<script lang="ts">
  import { getIcon } from '$lib/utils/icons';
  
  export let title: string;
  export let description: string;
  export let nextSteps: Array<{
    title: string;
    description: string;
    icon: string;
    href: string;
  }>;
</script>

<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-6xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">{title}</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      {description}
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      {#each nextSteps as step}
        <a href={step.href} class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
          <div class="flex justify-center mb-3">
            <svelte:component this={getIcon(step.icon)} class="h-8 w-8 text-white" />
          </div>
          <h3 class="font-semibold mb-2">{step.title}</h3>
          <p class="text-sm opacity-90">{step.description}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
