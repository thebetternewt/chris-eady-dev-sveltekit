<script>
  export let classes = '';
</script>

<li class={`before:text-primary text-sm py-1 ${classes}`}><slot /></li>

<style>
  li:before {
    display: inline-block;
    content: '> ';
    margin-right: 5px;
  }
</style>
