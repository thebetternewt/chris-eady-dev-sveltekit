<script>
  import Section from '../layout/Section.svelte';
</script>

<Section id="about" sectionNo={1} title="About Me">
  <div class="flex flex-col md:flex-row gap-12">
    <div>
      <div>
        <p>
          Hello! My name is Chris, and I enjoy building useful tools for clients and customers. I
          began exploring web development back in 2012 with HTML, CSS, an Ruby on Rails.
        </p>
        <p>
          Since then, I've grown to love frontend web developent, made the shift to a professional
          web developer, and eventually to a full-stack Software Engineer
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Svelte</li>
          <li>NodeJS</li>
          <li>Kotlin</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
    <div class="text-center w-full">
      <div class="image bg-gray-500 my-0 mx-auto">Image Placeholder</div>
    </div>
  </div>
</Section>

<style>
  :root {
    --image-width: 300px;
  }

  p {
    margin-bottom: 0.5rem;
  }

  .image {
    width: var(--image-width);
    height: var(--image-width);
  }
</style>
