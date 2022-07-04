<script lang="ts">
  export let url = '';
  export let filled = false;
  export let size: 'sm' | 'lg' = 'lg';

  const relativeUrl = url.startsWith('#');

  let classes = 'block border-2 border-primary rounded transition-all';

  if (size === 'sm') {
    classes += ' px-6 py-2';
  } else {
    classes += ' px-6 py-3';
  }

  const outlinedClasses = ' text-primary hover:bg-primary hover:text-white';
  const filledClasses = ' bg-primary text-white hover:bg-white hover:text-primary';
</script>

{#if url}
  <a
    href={url}
    rel="noopener noreferrer"
    target={relativeUrl ? '_self' : '_blank'}
    class={classes + (filled ? filledClasses : outlinedClasses)}
  >
    <slot />
  </a>
{:else}
  <button class={classes + (filled ? filledClasses : outlinedClasses)} on:click>
    <slot />
  </button>
{/if}
