<script lang="ts">
  export let sectionNo: number | null = null;
  export let title = '';

  let padded = sectionNo?.toString().padStart(2, '0') ?? '';

  if (padded) {
    padded += '.';
  }
</script>

<section
  class="flex flex-col justify-center items-start min-h-screen py-24 w-full my-0 mx-auto"
  style="max-width: var(--content-width);"
>
  {#if title}
    <h2 class="numbered-heading font-bold text-2xl flex items-center w-100 mb-4">
      <span class="mr-2 text-teal-200 text-xl">{padded}</span>{title}
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
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: white;
  }

  .numbered-heading span {
    font-family: var(--font-mono);
  }
</style>
