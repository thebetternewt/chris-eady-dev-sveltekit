<script lang="ts">
  import Section from '../layout/Section.svelte';

  type WorkItem = {
    label: string;
    position: string;
    location: string;
    range: string;
    details: string[];
  };

  const work: WorkItem[] = [
    {
      label: 'HBK Eng. Solutions',
      position: 'Software Engineer III',
      location: 'HBK Engineering Solutions',
      range: 'September 2019 - Present',
      details: ['built stuff', 'build more stuff'],
    },
    {
      label: 'MSU Library',
      position: 'Web Developer',
      location: 'MSU, Mitchell Memorial Library',
      range: 'July 2018 - September 2019',
      details: ['built stuff', 'build more stuff'],
    },
    {
      label: 'MSU Foundation',
      position: 'Coordinator',
      location: 'MSU Foundation',
      range: 'September 2012 - July 2018',
      details: ['built stuff', 'build more stuff'],
    },
  ];

  let workIndex = 0;

  $: currentWork = work[workIndex];
</script>

<Section id="experience" sectionNo={2} title="Where I've worked">
  <div class="w-full flex" style="min-height: 340px;">
    <div role="tablist" class="w-max">
      {#each work as item, index (item.label)}
        <button
          type="button"
          class="flex w-full p-4 text-sm h-18 whitespace-nowrap items-center border border-gray-400"
          on:click={() => (workIndex = index)}>{item.label}</button
        >
      {/each}
    </div>
    <div role="tabpanel" class="w-full border border-blue-500 p-4">
      <h3 class="mb-2">
        {currentWork.position} <span class="text-teal-300">@ {currentWork.location}</span>
      </h3>
      <p class="mb-2 text-white/80" style="font-family: var(--font-mono);">{currentWork.range}</p>
      <div>
        <ul class="px-4">
          {#each currentWork.details as detail}
            <li class="before:text-teal-300 text-sm py-1">{detail}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</Section>

<style>
  li:before {
    display: inline-block;
    content: '> ';
    margin-right: 5px;
  }
</style>
