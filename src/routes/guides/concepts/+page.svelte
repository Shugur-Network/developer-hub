<script>
  import { Copy, CheckCircle, XCircle } from 'lucide-svelte';
  import { conceptsGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Core Concepts - Nostr Development with Shugur</title>
  <meta name="description" content="Master the fundamental building blocks of the Nostr protocol to build robust decentralized applications." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <svelte:component this={getIcon(conceptsGuide.heroIcon)} class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">Protocol Fundamentals</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      {conceptsGuide.title}
    </h1>
    <p class="text-xl opacity-90 mb-8">
      {conceptsGuide.description}
    </p>
    
    <div class="flex flex-wrap gap-3">
      {#each conceptsGuide.tags as tag}
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{tag}</span>
      {/each}
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      {#each Object.entries(conceptsGuide.sections) as [key, section]}
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
          <span>{section.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- What is Nostr -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-2xl font-display mb-6">{conceptsGuide.sections.whatIsNostr.title}</h2>
    
    <div class="prose prose-lg max-w-none">
      <p class="text-gray-600 mb-6">
        {conceptsGuide.sections.whatIsNostr.description}
      </p>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        {#each conceptsGuide.sections.whatIsNostr.features as feature}
          <div class="border rounded-lg p-6 text-center">
            <div class="flex justify-center mb-3">
              <svelte:component this={getIcon(feature.icon)} class="h-8 w-8 text-purple-600" />
            </div>
            <h3 class="font-semibold mb-2">{feature.title}</h3>
            <p class="text-sm text-gray-600">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Keys Section -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(conceptsGuide.sections.keys.icon)} class="h-8 w-8 text-purple-600" />
      <h2 class="text-2xl font-display">{conceptsGuide.sections.keys.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {conceptsGuide.sections.keys.description}
    </p>
    
    <div class="grid md:grid-cols-2 gap-6">
      {#each conceptsGuide.sections.keys.features as feature}
        <div class="bg-white p-6 rounded-lg border">
          <div class="flex items-center gap-3 mb-3">
            <svelte:component this={getIcon(feature.icon)} class="h-6 w-6 text-purple-600" />
            <h3 class="font-semibold text-lg">{feature.title}</h3>
          </div>
          <p class="text-gray-600">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-purple-600 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready to Start Building?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Now that you understand the core concepts, it's time to start building your first Nostr application.
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      {#each conceptsGuide.nextSteps as step}
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
