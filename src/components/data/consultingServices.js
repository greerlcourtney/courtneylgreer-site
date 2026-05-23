const HOURLY_RATE = 150;

const services = [
  {
    id: 'discovery',
    name: 'Discovery',
    hours: 5,
    description: 'AI readiness assessment, tool recommendations, and an implementation roadmap.',
    details:
      'We evaluate your current tools, workflows, and team capabilities to identify high-impact AI opportunities. You receive a prioritized recommendations report and a clear path forward.',
  },
  {
    id: 'setup',
    name: 'Setup',
    hours: 15,
    description: 'Tool implementation, software configuration, and one hands-on training session.',
    details:
      'We implement and configure AI tools tailored to your business. Includes one hands-on training session so your team can start using them immediately.',
  },
  {
    id: 'full-integration',
    name: 'Full Integration',
    hours: 40,
    description: 'End-to-end AI implementation, team training (3 sessions), and 30-day support.',
    details:
      'Complete AI integration across your business workflows, comprehensive team training, and 30 days of post-launch support to ensure adoption.',
  },
];

export { HOURLY_RATE };
export default services;
