import booklol from './org (1).svg';
import drishya from './org (2).svg';
import crio from './org (3).svg';
import leadingindia from './org (4).svg';
import ideaUsher from './org (5).svg';
import zinzenMe from './org (6).svg';
import fluento from './org (7).svg';
import promptmate from './org (8).svg';
import unknownOrg from './org (9).svg';
import intaface from './org (10).svg';
import wfwa from './org (11).svg';
import horsesMouth from './org (12).svg';

export const orgs: TOrg[] = [
  {
    name: 'Idea Usher',
    position: 'Software Developer',
    logo: ideaUsher,
    timestamp: 'Jun 2023 - Present · 1 yr',
    jobType: 'Full-time',
    description: [],
  },
  {
    name: 'ZinZen.me',
    position: 'Frontend Developer',
    jobType: 'Freelance',
    logo: zinzenMe,
    timestamp: 'May 2022 - Present · 2 yrs',
    description: [
      'Developed a Scheduling Algorithm in RUST to efficiently organize user tasks, ensuring minimal latency',
      'Implemented a Progressive Web App (PWA) along with IndexedDB integration & APIs to enable offline usability for  85% of the application',
    ],
  },
  {
    name: 'Fluento.ai',
    position: 'Research & Development Enginner',
    logo: fluento,
    jobType: 'Freelance',

    timestamp: 'Oct 2023 - Jan 2024 · 4 mos',
    description: [
      'Development of FAST API(s) to interact with different services',
      'Deployment of AI Model on google cloud to serve as an endpoint to the backend servers.',
      'Analysis of Research Papers in NLP domain Developing and refining various model structures and layers within pre-existing models',
    ],
  },
  {
    name: 'Promptmate.io',
    position: 'Application Developer',
    logo: promptmate,
    jobType: 'Freelance',
    timestamp: 'Mar 2023 - Aug 2023 · 6 mos',
    description: [
      'Integrated serverless functions in Next JS web app',
      'Developed pixel perfect UI for the core features of the application',
    ],
  },
  {
    name: 'Spacedefi',
    position: 'Web3 Frontend Developer',
    logo: unknownOrg,
    jobType: 'Freelance',
    timestamp: 'Oct 2022 - Jan 2023 · 4 mos',
    description: [
      'Integrated Li-Fi service for bridging and swapping',
      'Implemented multi-chain support including BSC, ETH and Matic',
      'Developed user-friendly interfaces using styles components in react to provide intuitive access to DeFi functionalities',
    ],
  },
  {
    name: 'Intaface',
    position: 'Backend Developer',
    logo: intaface,
    jobType: 'Freelance',
    timestamp: 'Oct 2022 - Nov 2022 · 2 mos',
    description: [
      'Built a serverless service using firebase functions for handling 3rd party triggers, progress updates and notifications',
      'Built a notification service to handle incoming 3rd party notifications and revert back to consumers according to the requirements given',
    ],
  },
  {
    name: 'WFWA',
    position: 'Assoc. Full Stack Developer',
    jobType: 'Contract',
    logo: wfwa,
    timestamp: 'Jun 2022 - Nov 2022 · 6 mos',
    description: [
      'Delivered high-quality code and built pixel-perfect designs',
      'Integrated Dyte - video calling service and internal chat system',
    ],
  },
  {
    name: "Horse's Mouth",
    position: 'Frontend Developer',
    jobType: 'Freelance',

    logo: horsesMouth,
    timestamp: 'Feb 2022 - May 2022 · 4 mos',
    description: [
      'Integrated Razorpay (Payment Gateway)',
      'Developed the interfaces for the core features of the platform',
    ],
  },
  {
    name: 'Booklol',
    position: 'Full Stack Developer',
    jobType: 'Freelance',
    logo: booklol,
    timestamp: 'Jan 2022 - Apr 2022 · 4 mos',
    description: [
      'Developed the REST APIs in Node JS',
      'Integrated Razorpay (Payment Gateway)',
      'Developed the interfaces for the core features of the platform',
    ],
  },
  {
    name: 'Drishya Ai Labs',
    position: 'Data Scientist',
    jobType: 'Internship',
    logo: drishya,
    timestamp: 'Nov 2021 - Apr 2022 · 6 mos',
    description: [
      'Built a Simulator for fleet management & data generation with the help of AI Models',
      'Implemented 6 techniques for Anomaly Detection & 3 techniques for predictive maintenance',
      'Developed and deployed the resources to setup up small fleet in Microsoft Azure Digital Twin',
      'Implemented a research paper for fault diagnosis of bearings to detect fault and predict remaining life',
    ],
  },
  {
    name: 'Crio.do',
    position: 'Frontend Developer',
    logo: crio,
    jobType: 'Apprenticeship',
    timestamp: 'Jan 2021 - Jul 2021 · 7 mos',
    description: [
      'Built REST API(s) in Node JS',
      'Built 4 full scale projects from scratch',
      'Wrote frontend integration tests using Cypress',
      'Wrote integration and unit tests using JEST & enzyme for sever',
      'Built Frontend in React JS utilizing different UI libraries like Antd, MUI',
    ],
  },
  {
    name: 'Leadingindia.ai',
    position: 'Blockchain Developer',
    jobType: 'Apprenticeship',
    logo: leadingindia,
    timestamp: 'May 2020 - Jun 2020 · 2 mos',
    description: [
      'Built the Frontend for the Decentralized application that can interact with Blockchain.',
      'Built the Smart Contract to store the details of customers for the KYC process in Blockchain',
    ],
  },
];
