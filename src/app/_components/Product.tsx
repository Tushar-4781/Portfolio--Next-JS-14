import { Col } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({
  product,
  bgexception,
}: {
  product: TProduct;
  bgexception?: boolean;
}) => {
  const { name, description, link, image, status, width, height } = product;
  return (
    <Col xxl={6} xl={8} lg={8} md={12}>
      <div
        className='place-middle f-col h-100'
        style={{
          width: 300,
          background: '#FFE8A3',
          borderRadius: 20,
          boxShadow: '2px 2px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div
          className='place-middle f-col w-100'
          style={{
            background: bgexception ? '#5336CE' : '#FFF2C7',
            borderRadius: '20px 20px 0 0',
            height: 200,
          }}
        >
          <Image
            alt={name}
            src={image}
            style={{
              borderRadius: '20px 20px 0 0',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div
          className='place-middle f-col'
          style={{
            padding: 18,
            gap: 8,
          }}
        >
          <div className='fw-600'>{name}</div>
          <p>{description}</p>
        </div>
        <Link
          href={link}
          className='fw-500'
          style={{
            background: colorMap[status],
            border: '1px solid #E6E6E6',
            padding: 10,
            borderRadius: 4,
            color: '#FFF',
            marginTop: 'auto',
            width: 'fit-content',
            marginBottom: 18,
          }}
        >
          {status}
        </Link>
      </div>
    </Col>
  );
};

const colorMap: { [status: string]: string } = {
  'Go to website': '#00AC7C',
  'Sold OFF': 'rgb(192,0,0,0.81)',
  Closed: '#C8670E',
};

export default Product;
