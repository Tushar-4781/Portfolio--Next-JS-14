import Image from 'next/image';
import { orgs } from '../../../public/orgs';
import Heading from '../_components/Heading';

const page = () => {
  return (
    <div
      id='experience'
      className='place-middle f-col'
      style={{
        background: 'linear-gradient(to bottom, #FFF7E6, #FFEDD1)',
        padding: '18px 0px 32px 0px',
      }}
    >
      <Heading>Experience</Heading>
      <div className='w-100' style={{ maxWidth: 1512 }}>
        {orgs.map(
          (
            { name, position, logo, timestamp, description, jobType }: TOrg,
            index
          ) => (
            <div
              style={{
                padding: '22px 18px',
                borderBottom: '1px solid #D3D3D3',
              }}
              key={`name-${index}`}
            >
              <div
                className='place-middle gap-8'
                style={{ width: 'fit-content', marginBottom: 10 }}
              >
                <Image src={logo} width={100} height={100} alt={name} />
                <div className='d-flex f-col gap-8'>
                  <p className='fw-600'>{position}</p>
                  <p className='fw-500'>{`${name} · ${jobType}`}</p>
                  <p>{timestamp}</p>
                </div>
              </div>
              <ul>
                {description.map((txt) => (
                  <li key={`${name}-feedback`}>{txt}</li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default page;
