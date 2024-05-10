import { Col, Row } from 'antd';
import profilePic from '../../../public/tushar_profilePic.jpg';
import Image from 'next/image';
import styles from './page.module.scss';
import { socialHandles } from '../../../public/mediaIcons';
import emailIcon from '../../../public/mediaIcons/emailIcon.svg';
import Link from 'next/link';

const page = () => {
  return (
    <div
      id={`${styles.about} about`}
      className='place-middle w-100'
      style={{ margin: '200px 0px' }}
    >
      <div
        className='w-100 place-middle'
        style={{ maxWidth: 1028, padding: 18 }}
      >
        <Row className='justify-sb w-100'>
          <Col
            sm={6}
            xs={24}
            className='d-flex f-col'
            style={{ maxWidth: 245 }}
          >
            <div className={`place-middle ${styles.profile_pic_container}`}>
              <Image
                alt={'tushar inani'}
                width={245}
                height={411}
                src={profilePic}
              />
            </div>
            <Link
              className={`${styles.contact_btn} place-middle`}
              href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tusharinani93@gmail.com'
            >
              Contact Me
              <Image
                alt='tushar inani contact'
                src={emailIcon}
                width={25}
                height={25}
              />
            </Link>
          </Col>
          <Col id={styles.about_text} sm={18} xs={24}>
            <div className='d-flex f-col gap-12'>
              <div
                id={styles.about_header}
                className='d-flex justify-center w-100 gap-24'
              >
                <p
                  className='fw-600 ff-qs'
                  style={{ fontSize: '3rem', whiteSpace: 'nowrap' }}
                >
                  Tushar Inani
                </p>
                <div className='d-flex justify-sb' style={{ gap: 18 }}>
                  {socialHandles.map(({ icon, url, name }) => (
                    <Link
                      style={{ alignContent: 'center', paddingTop: 16 }}
                      key={`tushar ${name}`}
                      href={url}
                    >
                      <Image
                        alt={`tushar ${name}`}
                        src={icon}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <p
                className='fs-reg ff-pp'
                style={{ wordSpacing: 5, lineHeight: '22px' }}
              >
                {`Committed to convert every possibility into reality. What truly excites
              me is crafting designs with absolute precision and creating
              well-structured, seamless backends. I have a genuine knack for fusing
              different domains and technologies with my development skills. Over the
              course of 4 years, I've immersed myself in various commercial projects,
              constantly embracing new tech stacks with each opportunity. This journey
              has not only made me proficient in the MERN stack but has also
              transformed me into a quick learner, adapting effortlessly to new
              technologies and changing scenarios.`}
              </p>
            </div>
            <div
              style={{ marginTop: 16, flexWrap: 'wrap' }}
              className={`d-flex justify-sb ${styles.tags}`}
            >
              {[
                '⚡ Full Stack Developer',
                '⚡ NLP Engineer',
                '⚡ Data Scientist',
                '⚡ UI/UX Designer',
              ].map((r) => (
                <div
                  key={r}
                  className={`${styles.hero_card}  fw-500 place-middle ff-pp justify-sb`}
                  style={{
                    padding: 8,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {r}
                </div>
              ))}
            </div>
            <Row
              style={{
                marginTop: 12,
                padding: '16px 0px',
              }}
              gutter={[0, 32]}
              className={`${styles.hero_card}`}
            >
              {[
                { labelFL: 'Years', labelSL: 'Work Experience', value: '4+' },
                { labelFL: 'Startups', labelSL: 'Served', value: '12' },
                { labelFL: 'Projects', labelSL: 'Completed', value: '32' },
                {
                  labelFL: 'Countries',
                  labelSL: 'Worked Remotely',
                  value: '8',
                },
              ].map(({ labelFL, labelSL, value }) => (
                <Col
                  xs={12}
                  sm={6}
                  className='place-middle f-col ff-pp gap-8'
                  key={`${labelFL} ${labelSL}`}
                >
                  <p className='fw-800' style={{ fontSize: '1.4rem' }}>
                    {value}
                  </p>
                  <div className='place-middle f-col'>
                    <span className='fw-500'>{labelFL}</span>
                    <span className='fw-500'>{labelSL}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default page;
