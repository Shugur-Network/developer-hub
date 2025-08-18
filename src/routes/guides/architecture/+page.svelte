<script>
  import GuideHero from '$lib/components/GuideHero.svelte';
  import GuideTableOfContents from '$lib/components/GuideTableOfContents.svelte';
  import GuideNextSteps from '$lib/components/GuideNextSteps.svelte';
  import Mermaid from '$lib/components/Mermaid.svelte';
  import { architectureGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  import { Copy } from 'lucide-svelte';
  
  let copied = false;
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
  
  const sections = Object.entries(architectureGuide.sections).map(([key, section]) => ({ key, title: section.title, icon: section.icon }));
</script>

<svelte:head>
  <title>Architecture Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Design scalable Nostr systems. Reference architecture, data modeling, deployment, and operations." />
</svelte:head>

<GuideHero
  title={architectureGuide.title}
  description={architectureGuide.description}
  heroIcon={architectureGuide.heroIcon}
  tags={architectureGuide.tags}
  gradientFrom="from-blue-600"
  gradientTo="to-indigo-700"
/>

<GuideTableOfContents
  {sections} />

<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4 space-y-16">
    {#each Object.entries(architectureGuide.sections) as [key, section]}
      <div id={key} class="scroll-mt-24">
        <div class="flex items-center gap-3 mb-4">
          <svelte:component this={getIcon(section.icon)} class="h-7 w-7 text-blue-600" />
          <h2 class="text-2xl font-display">{section.title}</h2>
        </div>
        {#if section.description}
          <p class="text-gray-600 mb-6">{section.description}</p>
        {/if}
        {#if section.content}
          {@html section.content}
        {/if}
        {#if key === 'reference'}
          <div class="mt-6">
            <Mermaid chart={`flowchart TD
    Client[Client Apps] -->|WS| Relays[Relays]
    Client -->|HTTPS| APIGateway[API Gateway]
    APIGateway --> Workers[Workers Queues]
    Workers --> Storage[Database Storage]
    APIGateway --> Observability[Metrics Logs Traces]
    Workers --> Observability
    Relays --> Observability`} />
            <div class="text-xs text-gray-600 mt-3">
              <div><strong>Legend:</strong> Client Apps connect to multiple Relays (WS) and APIs (HTTPS). API gateways enqueue work for Workers, which persist to Storage. All components emit telemetry to Observability.</div>
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
  title="Where to go next"
  description="Continue with performance, testing, or relay setup."
  nextSteps={architectureGuide.nextSteps}
/>


