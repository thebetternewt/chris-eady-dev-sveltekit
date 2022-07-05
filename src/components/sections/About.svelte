<script lang="ts">
  import Section from '../layout/Section.svelte';
  import UlListItem from '../layout/UlListItem.svelte';
  import avatar from '$lib/assets/avatar.jpg';

  const tech: string[] = [
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Svelte',
    'NodeJS',
    'Kotlin w/Spring',
    'Python',
  ];
</script>

<Section id="about" title="About Me">
  <div class="flex flex-col md:block">
    <div class="image bg-gray-500 order-2 md:float-right mt-8 mx-auto md:m-6">
      <img src={avatar} alt="Chris and Cathy Eady" class="rounded-md" />
    </div>
    <p class="mb-4">
      Hello! My name is Chris, and I enjoy building useful tools for clients, customers, and for
      fun! I am a self-taught developer — but aren’t we all at some point? 😉 I started with Ruby on
      Rails back in 2013, then entered the NodeJS ecosystem where I enjoy building elegant and
      intuitive interfaces with React. I occasionally build things with Python or Kotlin, but
      JavaScript and TypeScript are my first loves for coding. Lately, I have also been exploring
      Svelte and SvelteKit. I’ll admit, it is enticing me away from React for some projects as it is
      so simple to use, and I can focus on HTML and CSS first.
    </p>
    <p class="mb-4">
      I am married to my wife, Cathy, and am a father of 2 — Zeb and Apphia. I currently work at HBK
      Engineering Solutions, where I help build tools and interfaces for customers to manage
      maintenance data and processing workflows.
    </p>
    <p class="mb-4">Here are a few technologies I've been working with recently:</p>
    <ul class="h-32 max-w-sm flex flex-col flex-wrap pl-4">
      {#each tech as item}
        <UlListItem>{item}</UlListItem>
      {/each}
    </ul>
  </div>
</Section>

<style>
  :root {
    --image-width: 300px;
  }

  .image {
    width: var(--image-width);
    height: var(--image-width);
  }
</style>
