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
    Designed and Built by
    <a
      href="https://twitter.com/chris_eady"
      rel="noopener noreferrer"
      target="_blank"
      class="underline text-teal-300"
    >
      @chris_eady
    </a>
  </p>
</footer>

<style>
</style>
