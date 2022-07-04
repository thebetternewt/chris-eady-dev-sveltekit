<script>
  import Navbar from '../components/layout/Navbar.svelte';
  import '../app.css';
</script>

<Navbar />
<main class="px-4 md:px-4">
  <slot />
</main>
<footer class="py-8 text-center text-sm">
  <p style="font-family: var(--font-mono);">
    Built by
    <a
      href="https://twitter.com/chris_eady"
      rel="noopener noreferrer"
      target="_blank"
      class="text-primary"
    >
      @chris_eady
    </a>
    with
    <a
      href="https://kit.svelte.dev/"
      rel="noopener noreferrer"
      target="_blank"
      class="underline underline-offset-2">SvelteKit</a
    >
  </p>
</footer>

<style>
</style>
