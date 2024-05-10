import { Row } from 'antd';

import Product from '../_components/Product';
import { products } from '../../../public/products';
import Heading from '../_components/Heading';
import styles from './page.module.scss';

const page = () => {
  return (
    <div
      id='products'
      className='place-middle f-col'
      style={{
        background: 'linear-gradient(to bottom, #FFF2C7, #FFE8A3)',
        padding: '18px 0px 32px 0px',
      }}
    >
      <Heading style={{ padding: '22px 0px' }}>
        <span>PRODUCTS</span>&nbsp;&nbsp;&nbsp;
        <span
          style={{ fontSize: '1.5rem', textDecoration: 'line-through red' }}
        >
          PROJECTS
        </span>
      </Heading>
      <Row
        id={styles.feedback_container}
        gutter={[24, 48]}
        style={{ margin: 0, maxWidth: 1512 }}
      >
        {products.slice(0, 4).map((product, index) => (
          <Product
            product={product}
            key={product.name}
            bgexception={index === 2}
          />
        ))}
        {products.slice(4, 8).map((product, index) => (
          <Product product={product} key={product.name} />
        ))}
      </Row>
    </div>
  );
};

export default page;
