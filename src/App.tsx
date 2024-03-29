import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
