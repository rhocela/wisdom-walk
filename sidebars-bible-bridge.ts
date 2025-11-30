import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  bibleBridgeSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'instructions',
          label: '📖 Instructions',
        },
        {
          type: 'doc',
          id: 'bible-checklist',
          label: '✅ Bible Checklist',
        },
      ],
    },
    // Days will be added here as they are created
    // {
    //   type: 'category',
    //   label: 'Part 1: Creation and Fall',
    //   items: ['day-1', 'day-2', ...],
    // },
  ],
};

export default sidebars;
