<script lang="ts">
  import codeImg from '$lib/assets/code.png';
  import AnimatedHamburger from './AnimatedHamburger.svelte';
  import Button from './Button.svelte';

  type NavLinkProps = {
    href: string;
    label: string;
  };
  const links: NavLinkProps[] = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  let menuOpen = false;
  let prevY: number;
  let currentY: number;
  let clientHeight: number;
  let innerWidth: number;

  const deriveDirection = (y: number) => {
    const direction = !prevY || prevY < y ? 'down' : 'up';
    prevY = y;

    return direction;
  };

  $: scrollDirection = deriveDirection(currentY);
  $: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;
  $: {
    if (innerWidth >= 768) {
      menuOpen = false;
    }
  }
</script>

<svelte:window bind:scrollY={currentY} bind:innerWidth />

<header
  class="fixed top-0 flex items-center bg-white/90 md:bg-white/80 shadow-md h-[var(--navbar-height)] w-full z-10 backdrop-blur-sm transition-transform ease-in overflow-hidden"
  class:motion-safe:-translate-y-full={offscreen}
  class:h-screen={menuOpen}
  class:flex-col={menuOpen}
  bind:clientHeight
>
  <div class="container flex items-center px-2 py-2 md:px-0">
    <a href="/#"
      ><div class="logo border-4 border-black/70 rounded-md flex items-center justify-center">
        <img src={codeImg} alt="code" />
      </div></a
    >
    <nav class="ml-auto hidden md:block">
      <ul class="flex gap-6">
        {#each links as link}
          <li>
            <a href={link.href} class="text-sm">
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="ml-auto md:ml-4"><Button url="/resume-july-2022.pdf" size="sm">Resume</Button></div>
    <div class="flex items-center md:hidden ml-4">
      <AnimatedHamburger
        open={menuOpen}
        onOpen={() => (menuOpen = true)}
        onClose={() => (menuOpen = false)}
        width={50}
      />
    </div>
    {#if menuOpen}
      <nav
        class="md:hidden absolute top-[50px] left-0 w-full h-full flex items-center justify-center"
      >
        <ul class="flex flex-col transform translate-y-[-50px]">
          {#each links as link}
            <li
              on:click={() => (menuOpen = false)}
              class="py-6 hover:text-primary hover:underline underline-offset-2 cursor-pointer"
            >
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</header>

<style lang="postcss">
  .logo {
    width: 50px;
    height: 50px;
  }
</style>
