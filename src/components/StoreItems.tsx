import { Card, Button } from 'react-bootstrap';
import { formateCurrency } from '../utilities/FormateCurrency';

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItems({ name, price, imgUrl }: StoreItemsProps) {
  let quantity = 1;
  return (
    <>
      <Card>
        <Card.Img variant='top' src={imgUrl} />
        <Card.Body>
          <Card.Title className='d-flex flex-column'>
            <span className='fs-2 mb-2'>{name}</span>
            <span className='text-muted'> {formateCurrency(price)}</span>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <div className='mt-auto'>
            {quantity === 0 ? (
              <Button className='w-100'>+ Add To Cart</Button>
            ) : (
              <div>
                <div className='d-flex gap-2'>
                  <Button variant='outline-primary' size='sm'>
                    -
                  </Button>
                  <span>{quantity} in cart</span>
                  <Button variant='outline-primary' size='sm'>
                    +
                  </Button>
                </div>
                <Button className='mt-2' size='sm' variant='danger'>
                  remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
