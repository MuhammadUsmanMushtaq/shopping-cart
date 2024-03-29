import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar className='mb-4' bg='light' variant='light' sticky='top'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{ position: 'relative' }}
          variant='outline-primary'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            className='bi bi-cart-fill'
            viewBox='0 0 16 16'
          >
            <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
          </svg>
          <div
            className='rounded-circle bg-danger '
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              transform: 'translate(25%, 25%)',
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}
