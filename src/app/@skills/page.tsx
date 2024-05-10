import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'antd';

import Heading from '../_components/Heading';
import { langs, frontend, backend, devops } from '../../../public/skills';

import styles from './page.module.scss';

const Skills = ({ skills }: { skills: TSkill[] }) => (
  <Row gutter={[24, 24]} style={{ margin: 0 }}>
    {skills.map(({ label, icon }) => (
      <Col lg={3} sm={6} xs={12} key={`${label}-skill`}>
        <div className={`${styles.skill_card} place-middle f-col`}>
          <Image src={icon} width={48} height={48} alt={`${label} skill`} />
          <p>{label}</p>
        </div>
      </Col>
    ))}
  </Row>
);

const page = () => {
  return (
    <div id='skills' className={`place-middle ${styles.container}`}>
      <div
        className='place-middle f-col w-100'
        style={{
          maxWidth: 1034,
        }}
      >
        <Heading>Skills</Heading>
        <div className='w-100 d-flex f-col gap-24'>
          {[langs, frontend, backend, devops].map((stack, index) => (
            <Skills skills={stack} key={`stack-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
