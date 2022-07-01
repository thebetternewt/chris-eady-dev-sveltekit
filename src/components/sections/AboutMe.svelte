<script>
  import Section from '../layout/Section.svelte';
</script>

<Section sectionNo={1} title="About Me">
  <div class="flex gap-4">
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
    <div>
      <div class="image bg-gray-500">Image Placeholder</div>
    </div>
  </div>
</Section>

<style>
  p {
    margin-bottom: 0.5rem;
  }

  .image {
    width: 150px;
    height: 150px;
  }
</style>
