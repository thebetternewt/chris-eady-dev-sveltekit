<script>
  import Button from '../layout/Button.svelte';
  import Section from '../layout/Section.svelte';
</script>

<Section>
  <div class="min-h-screen pt-12 md:pt-48">
    <h1 class="mb-4 md:mb-6">
      <span class="block text-xl mb-4 md:mb-6">Hello. My name is</span>
      <span class="font-bold text-5xl md:text-7xl text-primary">Chris Eady.</span>
    </h1>
    <h2
      class="font-bold text-4xl md:text-5xl mb-4 md:mb-6 opacity-80 leading-snug md:leading-tight"
    >
      I enjoy coding things for the web.
    </h2>
    <p class="max-w-xl mb-12">
      I am a Software Engineer who enjoys building intuitive, functional interfaces for customer
      needs and sometimes just for fun. Currently, I work on building customized interfaces for
      customer workflows and data management at <a
        href="https://www.hbmprenscia.com/about-engineering-services-and-solutions"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary hover:underline">HBK Engineering Solutions</a
      >.
    </p>
    <div class="flex gap-4 flex-wrap">
      <div>
        <Button url="#about" filled>Read More</Button>
      </div>
      <div>
        <Button url="https://github.com/thebetternewt">GitHub</Button>
      </div>
      <div>
        <Button url="https://www.linkedin.com/in/christopheready">LinkedIn</Button>
      </div>
    </div>
  </div>
</Section>
