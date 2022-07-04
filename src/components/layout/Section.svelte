<script lang="ts">
  export let id: string | undefined = undefined;
  export let sectionNo: number | undefined = undefined;
  export let title = '';

  let padded = sectionNo?.toString().padStart(2, '0') ?? '';

  if (padded) {
    padded += '.';
  }
</script>

<section {id} class="flex flex-col justify-center items-start my-24 w-full mx-auto">
  <div class="container">
    {#if title}
      <h2
        class="numbered-heading font-bold text-xl flex items-center w-full mb-6 whitespace-nowrap after:w-full md:after:w-80"
      >
        <span class="mr-2 text-primary text-lg">{padded}</span>{title}
      </h2>
    {/if}
    <slot />
  </div>
</section>

<style lang="postcss">
  .numbered-heading::after {
    content: '';
    display: block;
    position: relative;
    top: -5 px;
    /* width: 300px; */
    height: 1px;
    margin-left: 20px;
    background-color: white;
  }

  .numbered-heading span {
    font-family: var(--font-mono);
  }
</style>
