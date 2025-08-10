<script>
  import { GitBranch, Home } from 'lucide-svelte';
</script>

<header class="bg-dark text-white sticky top-0 z-20">
  <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <GitBranch class="h-6 w-6 text-primary" />
      <h1 class="font-display text-xl">Shugur Developer Hub</h1>
    </div>
    <nav class="flex items-center gap-6 text-sm">
      <a href="https://shugur.com" class="flex items-center gap-2 hover:text-primary">
        <Home class="h-4 w-4" />
        Company Site
      </a>
      <a href="https://status.shugur.net" class="hover:text-primary">Global Status</a>
      <a href="https://github.com/Shugur-Network" class="hover:text-primary">GitHub</a>
    </nav>
  </div>
</header>
