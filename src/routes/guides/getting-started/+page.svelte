<script>
  import { Copy } from 'lucide-svelte';
  import { gettingStartedGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Getting Started - Nostr Development with Shugur</title>
  <meta name="description" content="Get started with Nostr protocol development in 5 minutes. Connect to Shugur relay and build your first decentralized application." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary to-blue-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
        <svelte:component this={getIcon(gettingStartedGuide.heroIcon)} class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">5 minute setup</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      {gettingStartedGuide.title}
    </h1>
    <p class="text-xl opacity-90 mb-8">
      {gettingStartedGuide.description}
    </p>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-2 gap-4 text-sm">
      {#each Object.entries(gettingStartedGuide.sections) as [key, section]}
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>{section.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- What is Nostr -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">{gettingStartedGuide.sections.whatIsNostr.title}</h2>
    
    <div class="prose prose-lg max-w-none">
      <p class="text-gray-600 mb-6">
        {gettingStartedGuide.sections.whatIsNostr.description}
      </p>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        {#each gettingStartedGuide.sections.whatIsNostr.features as feature}
          <div class="border rounded-lg p-6 text-center">
            <div class="flex justify-center mb-3">
              <svelte:component this={getIcon(feature.icon)} class="h-8 w-8 text-primary" />
            </div>
            <h3 class="font-semibold mb-2">{feature.title}</h3>
            <p class="text-sm text-gray-600">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-primary text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Congratulations!</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You've successfully connected to Shugur relay and published your first Nostr event. Here's what to explore next:
    </p>
    
    <div class="grid md:grid-cols-2 gap-6">
      {#each gettingStartedGuide.nextSteps as step}
        <a href={step.href} class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
          <div class="flex justify-center mb-3">
            <svelte:component this={getIcon(step.icon)} class="h-8 w-8 text-primary" />
          </div>
          <h3 class="font-semibold mb-2">{step.title}</h3>
          <p class="text-sm opacity-90">{step.description}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
