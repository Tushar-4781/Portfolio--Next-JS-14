/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

import arman from '../../../public/recommendations/people (1).png';
import raunak from '../../../public/recommendations/people (2).png';
import urvish from '../../../public/recommendations/people (3).png';
import ahmad from '../../../public/recommendations/people (4).png';
import tijl from '../../../public/recommendations/people (5).png';

import michael from '../../../public/recommendations/people (7).png';
import heath from '../../../public/recommendations/people (8).png';
import ido from '../../../public/recommendations/people (9).png';
import pulkit from '../../../public/recommendations/image 11.svg';

import { links } from '../../../public/constants';
import styles from './page.module.scss';
import { ReactNode } from 'react';
import Heading from '../_components/Heading';

const page = () => {
  return (
    <div
      id='recommendations'
      className={`place-middle f-col ${styles.container}`}
    >
      <Heading>Recommendations</Heading>
      <div className='w-100' style={{ maxWidth: 1512 }}>
        <Row
          gutter={[{ xl: 48, md: 0 }, 28]}
          style={{
            padding: '22px 18px',
          }}
        >
          {recommendations.map(
            ({ name, profilePic, role, org, feedback }, index) => (
              <Col md={24} xl={12} key={`name-${index}`}>
                <Row
                  className={`h-100 place-middle ${styles.feedback_card}`}
                  gutter={[0, 0]}
                >
                  <Col
                    xxl={4}
                    lg={5}
                    md={4}
                    sm={6}
                    xs={24}
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <Image
                      src={profilePic}
                      width={100}
                      height={140}
                      alt={name}
                    />
                  </Col>
                  <Col xxl={20} lg={19} md={20} sm={18} xs={24}>
                    <div className='d-flex f-col' style={{ gap: 4 }}>
                      <p className='fw-600'>{name}</p>
                      <p className='fw-500'>
                        <span>{`${role} ${org ? `, ` : ''}`}</span>
                        {org}
                      </p>
                    </div>
                    <div
                      className={`h-100 fw-400 ${styles.feedback}`}
                      style={{ marginTop: 8 }}
                    >
                      {feedback}
                    </div>
                  </Col>
                </Row>
              </Col>
            )
          )}
        </Row>
      </div>
    </div>
  );
};

type TFeedback = {
  profilePic: any;
  name: string;
  role: string;
  org: string | ReactNode;
  feedback: ReactNode;
};

const recommendations: TFeedback[] = [
  {
    profilePic: ido,
    name: 'Ido Cohen',
    role: 'Co-Founder',
    org: <Link href={links.fluento}>Fluneto</Link>,
    feedback: (
      <>
        <p>
          I love working with Tushar. He has been an{' '}
          <strong>
            invaluable collaborator in our machine learning initiatives.
          </strong>
          His contributions extend far beyond merely building and training
          models; he brings a depth of insights and expertise that have laid a
          solid foundation for our future development.
        </p>
        <p>
          Tushar's dedication is exemplary; he consistently works long and
          challenging hours to deliver exceptional results. What truly sets
          Tushar apart is his <strong>communication skills.</strong> He excels
          in <strong>providing clear, face-to-face updates</strong> that not
          only elucidate complex issues but also foster constructive discussions
          about forward strategies. His ability to engage in meaningful dialogue
          ensures that our team is aligned and informed, enabling us to make
          well-considered decisions
        </p>
      </>
    ),
  },
  {
    profilePic: heath,
    name: 'Heath Sanchez',
    role: 'Founder',
    org: <Link href={links.intaface}>Intaface</Link>,
    feedback: (
      <p>
        <strong>Anything server-side, this guy has got you covered.</strong>{' '}
        Tushar was responsive, competent, friendly, funny and smart. He worked
        on problems until they were solved and takes pride in his work. Highly
        recommended!!!
      </p>
    ),
  },
  {
    profilePic: tijl,
    name: 'Tijl Leenders',
    role: 'Founder',
    org: <Link href={links.zinzen}>ZinZen.me</Link>,
    feedback: (
      <p>
        Tushar’s attitude within the ZinZen® team is{' '}
        <strong>co-founder worthy!</strong> He is an excellent communicator. He
        is{' '}
        <strong>
          knowledgeable about which modes of communication to use when – which
          is critical in remote work.
        </strong>{' '}
        He understands the group dynamics in a discussion and is mindful of
        other people’s positions and feelings whilst still putting his points
        across in a deliberate and structured way, finding common ground.
      </p>
    ),
  },
  {
    profilePic: ahmad,
    name: 'Ahmad Alsharef',
    role: 'Software Engineer',
    org: '',
    feedback: (
      <p>
        I and Tushar worked and coordinated together within a team. He is an
        excellent Team player, diverse in skills, and has the ability to get the
        work done within the time. Tushar is an exceptional developer who can{' '}
        <strong>
          tackle any front-end problem and work on a project of any size. We
          were always impressed by his work.
        </strong>{' '}
        He is qualified, smart, and can be an excellent help for any company
        that hires him, including international and high-tech companies.
      </p>
    ),
  },
  {
    profilePic: arman,
    name: 'Arman Mohammad',
    role: 'Product Manager',
    org: '',
    feedback: (
      <p>
        If I had a gun to my head and was asked to pick someone to get FrontEnd
        tasks done, I will bet on Tushar.{' '}
        <strong>
          From effective communication for pixel perfect development to
          contributing towards application architecture, he can do it all.
        </strong>{' '}
        Working with him took me back to my hackathon days, wherein one moment
        we are having serious technical conversations and the next we are
        cultivating an inside joke, he can balance both. For anyone wanting to
        work with him, he speaks his mind, so have the courage to listen and
        understand the value he brings to the table.
      </p>
    ),
  },
  {
    profilePic: raunak,
    name: 'Raunak Ash Gulati',
    role: 'Co-Founder',
    org: <Link href={links.hm}>Horses’s Mouth</Link>,
    feedback: (
      <p>
        Tushar is a <strong>highly proficient developer</strong> who has the{' '}
        <strong> exceptional ability of getting the job done</strong> even when
        unexpected challenges and demands are given to him. He has the{' '}
        <strong>
          ability to understand the overall situation of the development phase
        </strong>{' '}
        quickly and is always eager and quick to make meaningful contributions.
        His incessant work ethic and attention to detail while producing high
        quality code is unparalleled, and his{' '}
        <strong>'Everything is possible' attitude makes him an asset</strong> to
        have on an organisation's development team, be it a startup or a
        corporate.
      </p>
    ),
  },
  {
    profilePic: pulkit,
    name: 'Pulkit Vyas',
    role: 'CTO',
    org: <Link href={links.hm}>Horses’s Mouth</Link>,
    feedback: (
      <p>
        I have had the pleasure of working with Tushar on multiple projects, and
        I have consistently been impressed by his exceptional work ethic,
        innovative thinking, and unwavering dedication.Tushar possesses{' '}
        <strong>
          a unique ability to bring velocity and ingenuity to projects
        </strong>{' '}
        that few people can match. He has an innate talent for identifying
        creative solutions and implementing them efficiently. No matter the
        complexity of the task at hand, Tushar{' '}
        <strong>
          consistently delivers outstanding results, surpassing expectations and
          driving projects to success.
        </strong>
      </p>
    ),
  },
  {
    profilePic: urvish,
    name: 'Urvish Sabhaya',
    role: 'Software Developer',
    org: '',
    feedback: (
      <p>
        Tushar is a Strong, knowledgeable, and responsible full-stack developer.
        Tushar is dedicated, self-motivated, methodical, and very capable.
        Whenever I had a problem,{' '}
        <strong>
          there had never been a time he left me without a solution.
        </strong>{' '}
        The success achieved in his job required extensive knowledge and
        dedication. He most definitely shines in a hectic environment.
        Definitely worth recommending.
      </p>
    ),
  },
  {
    profilePic: michael,
    name: 'Michael Weber',
    role: 'Founder',
    org: <Link href={links.pi}>Promptmate.io</Link>,
    feedback: (
      <p>
        Tushar hade made a great you of building our react / AI related App.{' '}
        <strong>
          Great Skills, thinks out of the box and good communication.
        </strong>{' '}
        Thanks, looking for working with him again
      </p>
    ),
  },
];
export default page;
