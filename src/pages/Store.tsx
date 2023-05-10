import storeItems from '../data/items.json';
import { Row, Col } from 'react-bootstrap';
import { StoreItems } from '../components/StoreItems';
export function Store() {
  return (
    <>
      {/* <h2>Store</h2> */}
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            {' '}
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
