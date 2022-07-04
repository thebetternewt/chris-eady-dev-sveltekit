<script lang="ts">
  import Button from '../layout/Button.svelte';
  import Section from '../layout/Section.svelte';
  import UlListItem from '../layout/UlListItem.svelte';

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
      details: [
        'Worked with a team of engineers to design, build, and deploy full-stack enterprise-level applications for commercial and government customers.',
        'Spearheaded the frontend development of a new maintenance management framework by building React-based extensions  for bulk-editing data in a legacy program.',
        'Implemented general and customer-specific workflows with permission-based authentication for bulk data management with React using Kendo UI components and Redux.',
      ],
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

<Section id="experience" title="Experience">
  <div class="w-full flex flex-col md:flex-row" style="height: 340px;">
    <div
      role="tablist"
      class="md:w-max flex flex-shrink-0 md:flex-col overflow-x-auto border-gray-400"
    >
      {#each work as item, index (item.label)}
        <button
          type="button"
          class="flex p-4 text-sm h-18 whitespace-nowrap items-center text-center md:text-left border-b-2 md:border-b-0 md:border-l-2"
          class:text-primary={workIndex === index}
          class:border-primary={workIndex === index}
          on:click={() => (workIndex = index)}><span class="block">{item.label}</span></button
        >
      {/each}
    </div>
    <div role="tabpanel" class="flex-grow p-4 mb-8 transition">
      <h3>
        {currentWork.position} <span class="text-primary text-sm">at {currentWork.location}</span>
      </h3>
      <p class="text-white/80" style="font-family: var(--font-mono);">{currentWork.range}</p>
      <div>
        <ul class="px-4">
          {#each currentWork.details as detail (detail)}
            <UlListItem>{detail}</UlListItem>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <div class="flex justify-end">
    <div>
      <Button url="/resume-july-2022.pdf" filled size="sm">Resume</Button>
    </div>
  </div>
</Section>
