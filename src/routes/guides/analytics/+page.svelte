<script>
  import GuideHero from '$lib/components/GuideHero.svelte';
  import GuideTableOfContents from '$lib/components/GuideTableOfContents.svelte';
  import GuideNextSteps from '$lib/components/GuideNextSteps.svelte';
  import Mermaid from '$lib/components/Mermaid.svelte';
  import { analyticsGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  const sections = Object.entries(analyticsGuide.sections).map(([key, section]) => ({ key, title: section.title, icon: section.icon }));
</script>

<svelte:head>
  <title>Analytics Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Privacy-first analytics for Nostr apps. Product analytics, telemetry, and operational metrics." />
</svelte:head>

<GuideHero
  title={analyticsGuide.title}
  description={analyticsGuide.description}
  heroIcon={analyticsGuide.heroIcon}
  tags={analyticsGuide.tags}
  gradientFrom="from-purple-600"
  gradientTo="to-fuchsia-700"
/>

<GuideTableOfContents {sections} />

<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4 space-y-16">
    {#each Object.entries(analyticsGuide.sections) as [key, section]}
      <div id={key} class="scroll-mt-24">
        <div class="flex items-center gap-3 mb-4">
          <svelte:component this={getIcon(section.icon)} class="h-7 w-7 text-purple-600" />
          <h2 class="text-2xl font-display">{section.title}</h2>
        </div>
        {#if section.description}
          <p class="text-gray-600 mb-6">{section.description}</p>
        {/if}
        {#if section.content}
          {@html section.content}
        {/if}
        {#if key === 'observability'}
          <div class="mt-6">
            <Mermaid chart={`flowchart LR
    Client --> Collector
    Collector --> Queue
    Queue --> Aggregator
    Aggregator --> Warehouse
    Warehouse --> Dashboards
    Aggregator --> Exports
    Dashboards --> Users`} />
            <div class="text-xs text-gray-600 mt-3">
              <div><strong>Legend:</strong> Client events go to a Collector, buffered in a Queue, aggregated and stored in a Warehouse. Dashboards and Exports use the curated data.</div>
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
  description="Explore architecture, performance, and example dashboards."
  nextSteps={analyticsGuide.nextSteps}
/>


