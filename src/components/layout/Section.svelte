<script lang="ts">
  export let id: string | undefined = undefined;
  export let title = '';
</script>

<section {id} class="flex flex-col justify-center items-start w-full mx-auto py-24">
  <div class="container">
    {#if title}
      <h2
        class="font-bold text-2xl flex items-center w-full mb-6 whitespace-nowrap after:w-full md:after:w-80"
      >
        {title}
      </h2>
    {/if}
    <slot />
  </div>
</section>

<style>
  h2 {
    font-family: var(--font-sans-serif);
  }
</style>
