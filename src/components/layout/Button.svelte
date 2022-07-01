<script>
  export let url = '';

  const classes = 'w-16 border-2 px-6 py-4 rounded hover:bg-slate-400/40 transition-all';
</script>

{#if url}
  <a href={url} rel="noopener noreferrer" target="_blank" class={classes}>
    <slot />
  </a>
{:else}
  <button class={classes} on:click>
    <slot />
  </button>
{/if}
