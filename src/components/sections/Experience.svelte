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
        'Established code formatting and linting standards for company projects using JavaScript and Typescript with Prettier, ESLint, Husky, and lint-staged.',
      ],
    },
    {
      label: 'MSU Library',
      position: 'Web Developer',
      location: 'MSU, Mitchell Memorial Library',
      range: 'July 2018 - September 2019',
      details: [
        'Developed a time clock application for our department to manage student worker shifts and generate timesheets at the end of each pay period (approximately 100-150 users including students and supervisors).',
        'build more stuff',
        'Developed and deployed a proxy application for granting statewide K-12 school districts, community colleges, and public libraries easy access to EBSCOhost and other research databases.',
        'Built in-house reporting tools with client-side frameworks, e.g. ReactJS, that interfaced with third party REST APIs.',
        'Assisted in the improvement of website & web application accessibility  according to WCAG standards.',
      ],
    },
    {
      label: 'MSU Foundation',
      position: 'Coordinator',
      location: 'MSU Foundation',
      range: 'September 2012 - July 2018',
      details: [
        'Programmed and implemented scripts using Git, Bash, Excel VBA, SQL, Python, and Ruby languages for merging and processing CSV and text file types to prepare data for uploading to Banner.',
        'Administered equipment and worked with vendors necessary to bring the Division of Development and Alumni under full PCI compliance in regards to credit card processing.',
      ],
    },
  ];

  let workIndex = 0;

  $: currentWork = work[workIndex];
</script>

<Section id="experience" title="Experience">
  <div class="w-full flex flex-col md:flex-row mb-4" style="min-height: 340px;">
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
        {currentWork.position} <span class="text-primary text-sm">@ {currentWork.location}</span>
      </h3>
      <p class="text-white/80" style="font-family: var(--font-mono);">{currentWork.range}</p>
      <div>
        <ul class="px-4">
          {#each currentWork.details as detail (detail)}
            <UlListItem>{detail}</UlListItem>
          {/each}
          <UlListItem
            ><a
              href="/resume-july-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline">more...</a
            ></UlListItem
          >
        </ul>
      </div>
    </div>
  </div>
</Section>
