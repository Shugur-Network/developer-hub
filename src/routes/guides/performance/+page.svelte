<script>
  import GuideHero from '$lib/components/GuideHero.svelte';
  import GuideTableOfContents from '$lib/components/GuideTableOfContents.svelte';
  import GuideNextSteps from '$lib/components/GuideNextSteps.svelte';
  import { performanceGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  import Mermaid from '$lib/components/Mermaid.svelte';
  const sections = Object.entries(performanceGuide.sections).map(([key, section]) => ({ key, title: section.title, icon: section.icon }));
</script>

<svelte:head>
  <title>Performance Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Optimize Nostr apps for latency and throughput. Connections, caching, profiling, and observability." />
</svelte:head>

<GuideHero
  title={performanceGuide.title}
  description={performanceGuide.description}
  heroIcon={performanceGuide.heroIcon}
  tags={performanceGuide.tags}
  gradientFrom="from-orange-600"
  gradientTo="to-red-600"
/>

<GuideTableOfContents sections={sections} />

<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4 space-y-16">
    {#each Object.entries(performanceGuide.sections) as [key, section]}
      <div id={key} class="scroll-mt-24">
        <div class="flex items-center gap-3 mb-4">
          <svelte:component this={getIcon(section.icon)} class="h-7 w-7 text-orange-600" />
          <h2 class="text-2xl font-display">{section.title}</h2>
        </div>
        {#if section.description}
          <p class="text-gray-600 mb-6">{section.description}</p>
        {/if}
        {#if section.content}
          {@html section.content}
        {/if}
        {#if key === 'connection'}
          <div class="mt-6">
            <h3 class="font-semibold mb-3">Relay Subscription Fan-out</h3>
            <Mermaid chart={`flowchart LR\n  Client --> R1[(Relay A)]\n  Client --> R2[(Relay B)]\n  Client --> R3[(Relay C)]\n  R1 --> SubA[Events]\n  R2 --> SubB[Events]\n  R3 --> SubC[Events]\n  SubA --> M[Multiplexer]\n  SubB --> M\n  SubC --> M\n  M --> App[App Timeline]`} />
            <div class="text-xs text-gray-600 mt-3">
              <div><strong>Legend:</strong> Client opens subscriptions to multiple relays and merges them in a Multiplexer before rendering the App timeline.</div>
            </div>
          </div>
        {/if}
        {#if section.steps}
          <div class="grid md:grid-cols-3 gap-4">
            {#each section.steps as step}
              <div class="border rounded p-4 bg-gray-50">
                <h3 class="font-semibold mb-1">{step.title}</h3>
                <p class="text-sm text-gray-600">{step.description}</p>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<GuideNextSteps
  title="Next steps"
  description="Follow up with architecture design or low-level languages for high performance."
  nextSteps={performanceGuide.nextSteps}
/>


