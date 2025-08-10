<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Shugur Developer Hub</title>
  <meta name="description" content="Developer resources and infrastructure for open, resilient tech." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
