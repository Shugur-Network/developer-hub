<script>
  import GuideHero from '$lib/components/GuideHero.svelte';
  import GuideTableOfContents from '$lib/components/GuideTableOfContents.svelte';
  import GuideNextSteps from '$lib/components/GuideNextSteps.svelte';
  import { testingGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  const sections = Object.entries(testingGuide.sections).map(([key, section]) => ({ key, title: section.title, icon: section.icon }));
</script>

<svelte:head>
  <title>Testing Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Testing strategies for Nostr apps: unit, integration, E2E, load, and chaos testing." />
</svelte:head>

<GuideHero
  title={testingGuide.title}
  description={testingGuide.description}
  heroIcon={testingGuide.heroIcon}
  tags={testingGuide.tags}
  gradientFrom="from-emerald-600"
  gradientTo="to-green-700"
/>

<GuideTableOfContents {sections} />

<section class="py-16 bg-white">
  <div class="mx-auto max-w-6xl px-4 space-y-16">
    {#each Object.entries(testingGuide.sections) as [key, section]}
      <div id={key} class="scroll-mt-24">
        <div class="flex items-center gap-3 mb-4">
          <svelte:component this={getIcon(section.icon)} class="h-7 w-7 text-emerald-600" />
          <h2 class="text-2xl font-display">{section.title}</h2>
        </div>
        {#if section.description}
          <p class="text-gray-600 mb-6">{section.description}</p>
        {/if}
        {#if section.content}
          {@html section.content}
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
  description="Now optimize performance or review best practices."
  nextSteps={testingGuide.nextSteps}
/>


