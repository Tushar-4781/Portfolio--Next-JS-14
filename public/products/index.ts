import promptmate from './image 11.svg';
import intaface from './image 11-1.svg';
import zinzen from './image 11-2.svg';
import spacedex from './image 11-3.svg';
import wfwa from './image 11-4.svg';
import fluento from './image 12.svg';
import booklol from './image 12-1.svg';
import hm from './image 13.svg';
import { links } from '../constants';

export const products: TProduct[] = [
  {
    name: "Horse's Mouth",
    description:
      'Horse’s Mouth is an experience sharing platform, where international university applicants and their parents can book 1-on-1 calls with students and alumni of the university from their target universities, in a hassle free and swift way.',
    link: '',
    image: hm,
    status: 'Go to website',
    width: '100%',
    height: 200,
  },
  {
    name: 'Promptmate.io',
    description:
      'Promptmate.io is an innovative platform designed to harness the potential of AI for building powerful applications. By integrating leading AI systems,  it offers users the ability to create customized apps that can streamline and enhance various workflows.',
    link: links.pi,
    image: promptmate,
    status: 'Go to website',
    width: '100%',
    height: 200,
  },
  {
    name: 'Fluento',
    description:
      'Fluento is an AI powered, social language learning platform where you can practice real-life, personalised scenarios, and get methodology-based, AI powered feedback in real time and after every session. Get confident, one practice at a time.',
    link: links.fluento,
    image: fluento,
    status: 'Go to website',
    width: 100,
    height: 200,
  },
  {
    name: 'Intaface',
    description:
      'Intaface is the Async Video Messenger for Friends. Send them a video, see them react to it. Authentic connection with the ones that mean the most.',
    link: links.intaface,
    image: intaface,
    status: 'Go to website',
    width: '100%',
    height: 200,
  },
  {
    name: 'ZinZen',
    description:
      'ZinZen® is a stress-free life planning platform designed to help you live in the present moment with peace of mind. It ensures that your life aligns with your priorities and goals, helps you create realistic planning calendars, and prevents you from forgetting anything important.',
    width: 180,
    height: 144,
    link: links.zinzen,
    image: zinzen,
    status: 'Go to website',
  },
  {
    name: 'SpaceDEX',
    description:
      'SpaceDEX was a start up defi protocol that aimed to create a cryptocurrency decentralized exchange. In preparation to raise capital from potential investors, we were tasked to provide a complete website and afterwards an alpha version of a UI/UX design solution',
    link: '',
    image: spacedex,
    status: 'Sold OFF',
    width: '100%',
    height: 200,
  },
  {
    name: 'BOOKLOL',
    description:
      'Your doorstep bookstore! Rent or buy the best books at minimal prices, anytime, anywhere. Perfect for book enthusiasts who love to read but find book prices too expensive to buy. Unfortunately, due to limited delivery personnel or logistics constraints, this startup went down. ',
    link: '',
    image: booklol,
    status: 'Closed',
    width: 200,
    height: 150,
  },
  {
    name: 'Medzgo ( by WFWA )',
    description:
      'Medzgo aims at making the nationwide healthcare facilitation simple, readily accessible, efficient and hassle-free to revamp the medical infrastructure of India, by vesting the authority and convenience of healing-up into the hands of the people themselves, completely at their own pace.',
    link: '',
    image: wfwa,
    width: 180,
    height: 144,
    status: 'Closed',
  },
];
