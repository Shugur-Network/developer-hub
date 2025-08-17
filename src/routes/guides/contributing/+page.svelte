<script>
  import { GitBranch, BookOpen } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Contributing - Shugur Developer Hub</title>
  <meta name="description" content="Contribution guide for adding or improving guides, examples, and code." />
</svelte:head>

<section class="bg-gradient-to-br from-primary to-blue-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <div class="flex justify-center mb-6">
      <div class="p-4 bg-white/20 rounded-full">
        <GitBranch class="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-4">Contributing</h1>
    <p class="text-xl opacity-90">Help improve the Shugur Developer Hub guides and examples.</p>
  </div>
  </section>

<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4 space-y-10">
    <div>
      <h2 class="text-2xl font-display mb-3">Ways to Contribute</h2>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Add or improve a guide section (architecture, performance, testing, analytics, ML, app store).</li>
        <li>Share runnable examples and link to public repos.</li>
        <li>Report issues or propose edits via pull requests.</li>
      </ul>
    </div>
    
    <div class="border rounded-xl p-6">
      <div class="flex items-center gap-3 mb-2">
        <BookOpen class="h-6 w-6 text-primary" />
        <h3 class="font-semibold">Guidelines</h3>
      </div>
      <ul class="list-disc ml-6 text-gray-700 text-sm space-y-1">
        <li>Be concise but practical; prefer runnable snippets.</li>
        <li>Keep internal links relative (e.g., /guides/architecture).</li>
        <li>Avoid PII and non-working external URLs.</li>
      </ul>
    </div>
    
    <div>
      <h2 class="text-2xl font-display mb-3">Start Here</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <a href="/guides/architecture" class="p-4 border rounded-lg hover:border-primary">Architecture</a>
        <a href="/guides/performance" class="p-4 border rounded-lg hover:border-primary">Performance</a>
        <a href="/guides/testing" class="p-4 border rounded-lg hover:border-primary">Testing</a>
        <a href="/guides/analytics" class="p-4 border rounded-lg hover:border-primary">Analytics</a>
        <a href="/guides/machine-learning" class="p-4 border rounded-lg hover:border-primary">Machine Learning</a>
        <a href="/guides/app-store" class="p-4 border rounded-lg hover:border-primary">App Store</a>
      </div>
    </div>
  </div>
</section>


