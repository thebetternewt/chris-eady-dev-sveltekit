<script lang="ts">
  import Section from '../layout/Section.svelte';
  import UlListItem from '../layout/UlListItem.svelte';

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
      Image Placeholder
    </div>
    <p class="mb-4">
      Hello! My name is Chris, and I enjoy building useful tools for clients, customers, and for
      fun! I am a self-taught developer (but aren’t we all at some point?). I took an IT support job
      in 2013 and began teaching myself how to code when I saw some co-workers doing the same things
      every day in Excel spreadsheets. I wanted to make their jobs easier and more error free.
      During this time, I also began learning web development with Ruby and Ruby-on-Rails and TDD
      for a side project.
    </p>
    <p class="mb-4">
      Eventually I hit a limit and wanted to build more interactive interfaces, so I learned React
      and LOVED the JavaScript/TypeScript environment. Fast-forward a few years, and I took my first
      web developer position with our university’s library system in 2018. And after finishing my
      Master’s degree, I was able to take a true Software Engineer position with HBK Engineering
      Solutions.
    </p>
    <p class="mb-4">
      Though my work sometimes leads me to code up things in Python or Kotlin, my first love is
      JavaScript. I enjoy building elegant, interactive interfaces with React that fulfill the needs
      of others. Lately, I have also been exploring Svelte and SvelteKit. I’ll admit, it is enticing
      me away from React for some projects as it is so simple to use, and I can focus on HTML and
      CSS first.
    </p>
    <p class="mb-4">Here are a few technologies I've been working with recently:</p>
    <ul class="h-32 max-w-sm flex flex-col flex-wrap pl-4">
      {#each tech as item}
        <UlListItem>{item}</UlListItem>
      {/each}
    </ul>
    <!-- <div class="text-center w-full">
      <div class="image bg-gray-500 my-0 mx-auto">Image Placeholder</div>
    </div> -->
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

  li {
    background-color: red;
  }
</style>
