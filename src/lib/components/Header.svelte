<script>
  import { Menu, X } from 'lucide-svelte';
  
  let mobileMenuOpen = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="bg-dark border-b border-gray-800 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
    <!-- Desktop Header -->
    <div class="flex items-center justify-between">
      <!-- Logo Section -->
      <div class="flex items-center min-w-0">
        <a href="/" class="hover:opacity-80 transition-opacity flex-shrink-0" on:click={closeMobileMenu}>
          <img src="/shugur-logo-full-light.svg" alt="Shugur Developer Hub" class="h-7 sm:h-8" />
        </a>
        <div class="ml-3 sm:ml-4 border-l border-gray-600 pl-3 sm:pl-4 hidden sm:block">
          <div class="text-sm text-gray-400">Developer Hub</div>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex gap-6 text-sm text-gray-300">
        <a href="/guides" class="hover:text-primary transition-colors">Quick Start</a>
        <a href="/guides/time-capsules" class="hover:text-primary flex items-center gap-1 transition-colors">
          <span class="hidden xl:inline">Time Capsules</span>
          <span class="xl:hidden">Capsules</span>
          <span class="px-1.5 py-0.5 bg-purple-600 text-white text-xs rounded-full">NEW</span>
        </a>
        <a href="/nips" class="hover:text-primary transition-colors">NIPs</a>
        <a href="https://shugur.net" class="hover:text-primary transition-colors">Network</a>
        <a href="https://github.com/Shugur-Network" class="hover:text-primary transition-colors">GitHub</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        on:click={toggleMobileMenu}
        class="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        {#if mobileMenuOpen}
          <X class="h-5 w-5" />
        {:else}
          <Menu class="h-5 w-5" />
        {/if}
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="lg:hidden mt-4 pb-4 border-t border-gray-700">
        <nav class="flex flex-col space-y-3 pt-4">
          <a 
            href="/guides" 
            class="block px-3 py-2 text-gray-300 hover:text-primary hover:bg-gray-700 rounded-md transition-colors"
            on:click={closeMobileMenu}
          >
            Quick Start
          </a>
          <a 
            href="/guides/time-capsules" 
            class="block px-3 py-2 text-gray-300 hover:text-primary hover:bg-gray-700 rounded-md transition-colors"
            on:click={closeMobileMenu}
          >
            <div class="flex items-center justify-between">
              <span>Time Capsules</span>
              <span class="px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full">NEW</span>
            </div>
          </a>
          <a 
            href="/nips" 
            class="block px-3 py-2 text-gray-300 hover:text-primary hover:bg-gray-700 rounded-md transition-colors"
            on:click={closeMobileMenu}
          >
            NIPs
          </a>
          <a 
            href="https://shugur.net" 
            class="block px-3 py-2 text-gray-300 hover:text-primary hover:bg-gray-700 rounded-md transition-colors"
            on:click={closeMobileMenu}
          >
            Network
          </a>
          <a 
            href="https://github.com/Shugur-Network" 
            class="block px-3 py-2 text-gray-300 hover:text-primary hover:bg-gray-700 rounded-md transition-colors"
            on:click={closeMobileMenu}
          >
            GitHub
          </a>
        </nav>
      </div>
    {/if}
  </div>
</header>
