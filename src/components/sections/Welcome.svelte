<script>
  import Button from '../layout/Button.svelte';
  import Section from '../layout/Section.svelte';
</script>

<Section>
  <h1 class="mb-4 md:mb-6 text-teal-300" style="font-family: var(--font-mono);">Hello. I am...</h1>
  <h2 class="font-bold text-5xl md:text-7xl mb-4 md:mb-6">Chris Eady.</h2>
  <h3 class="font-bold text-4xl md:text-5xl mb-4 md:mb-6 opacity-70 leading-snug md:leading-tight">
    I build full-stack things for the web.
  </h3>
  <p class="max-w-xl mb-12">
    I am a software engineer who enjoys building intuitive, functional interfaces for customer
    needs. Currently, I'm work on building customized interfaces for customer workflows at HBK.
  </p>
  <div>
    <Button url="https://github.com/thebetternewt">GitHub</Button>
  </div>
</Section>
