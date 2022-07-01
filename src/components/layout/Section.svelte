<script lang="ts">
  export let id: string | undefined = undefined;
  export let sectionNo: number | undefined = undefined;
  export let title = '';

  let padded = sectionNo?.toString().padStart(2, '0') ?? '';

  if (padded) {
    padded += '.';
  }
</script>

<section
  {id}
  class="flex flex-col justify-center items-start min-h-screen py-24 w-full my-0 mx-auto"
  style="max-width: var(--content-width);"
>
  {#if title}
    <h2
      class="numbered-heading font-bold text-xl flex items-center w-full mb-6 whitespace-nowrap after:w-full md:after:w-80"
    >
      <span class="mr-2 text-teal-200 text-lg">{padded}</span>{title}
    </h2>
  {/if}
  <slot />
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
