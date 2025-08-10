<script>
  import { ExternalLink, BookOpen, Activity, Zap } from 'lucide-svelte';
  
  export let title;
  export let description;
  export let status;
  export let statusColor = 'green';
  export let links = [];
  export let features = [];
  
  function getIcon(iconName) {
    switch(iconName) {
      case 'external': return ExternalLink;
      case 'book': return BookOpen;
      case 'activity': return Activity;
      case 'zap': return Zap;
      default: return ExternalLink;
    }
  }
</script>

<div class="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
  <div class="flex items-start justify-between mb-4">
    <h3 class="text-xl font-semibold">{title}</h3>
    <span class="px-2 py-1 text-xs rounded-full bg-{statusColor}-100 text-{statusColor}-800">
      {status}
    </span>
  </div>
  
  <p class="text-gray-600 mb-4">{description}</p>
  
  {#if features.length > 0}
    <div class="mb-6">
      <h4 class="font-medium mb-2 text-sm text-gray-700">Key Features</h4>
      <ul class="space-y-1">
        {#each features as feature}
          <li class="text-sm text-gray-600 flex items-start gap-2">
            <span class="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            {feature}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  
  <div class="flex flex-wrap gap-2">
    {#each links as link}
      <a 
        href={link.href} 
        class="inline-flex items-center gap-2 px-3 py-2 text-sm border rounded-lg hover:border-primary hover:text-primary transition-colors"
        target={link.href.startsWith('http') ? '_blank' : '_self'}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
      >
        <svelte:component this={getIcon(link.icon)} class="h-3 w-3" />
        {link.label}
      </a>
    {/each}
  </div>
</div>
