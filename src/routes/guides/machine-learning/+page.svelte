<script>
  import GuideHero from '$lib/components/GuideHero.svelte';
  import GuideTableOfContents from '$lib/components/GuideTableOfContents.svelte';
  import GuideNextSteps from '$lib/components/GuideNextSteps.svelte';
  import { machineLearningGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  import Mermaid from '$lib/components/Mermaid.svelte';
  const sections = Object.entries(machineLearningGuide.sections).map(([key, section]) => ({ key, title: section.title, icon: section.icon }));
</script>

<svelte:head>
  <title>Machine Learning Guide - Nostr Development with Shugur</title>
  <meta name="description" content="ML for Nostr apps: ranking, moderation, embeddings, and integration patterns." />
</svelte:head>

<GuideHero
  title={machineLearningGuide.title}
  description={machineLearningGuide.description}
  heroIcon={machineLearningGuide.heroIcon}
  tags={machineLearningGuide.tags}
  gradientFrom="from-pink-600"
  gradientTo="to-rose-700"
/>

<GuideTableOfContents {sections} />

<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4 space-y-16">
    {#each Object.entries(machineLearningGuide.sections) as [key, section]}
      <div id={key} class="scroll-mt-24">
        <div class="flex items-center gap-3 mb-4">
          <svelte:component this={getIcon(section.icon)} class="h-7 w-7 text-pink-600" />
          <h2 class="text-2xl font-display">{section.title}</h2>
        </div>
        {#if section.description}
          <p class="text-gray-600 mb-6">{section.description}</p>
        {/if}
        {#if section.content}
          {@html section.content}
        {/if}
        {#if key === 'pipeline'}
          <div class="mt-6">
            <Mermaid chart={`flowchart LR\n  Raw[Raw Events] --> ETL[ETL/Curation]\n  ETL --> FE[Features]\n  FE --> Train[Train]\n  Train --> Eval[Offline Eval]\n  Eval -->|approved| Deploy[Deploy Model]\n  Deploy --> Infer[Real-time Inference]\n  Infer --> Cache`} />
            <div class="text-xs text-gray-600 mt-3">
              <div><strong>Legend:</strong> Raw events are curated to features, trained and evaluated offline; approved models are deployed to serve real-time inference with caching.</div>
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
  description="Build ML pipelines in Python and measure impact with analytics."
  nextSteps={machineLearningGuide.nextSteps}
/>


