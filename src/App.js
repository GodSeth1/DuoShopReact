import './App.css';
import HeaderBar from './components/header/header';
// import { Button, Flex } from 'antd';
import HomePage from './components/pages/HomePage';
import ProductList from './components/main/productList/productList';
// import { DatePicker } from 'antd';
import ProductsPage from './components/pages/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/main/ProductDetails/ProductDetail';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import Cart from './components/cart/Cart';
import FavModal from './components/favorite/favorite';

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
        <HeaderBar search={search} setSearch={setSearch} />
        {/* <Button type="primary">Primary Button</Button>
        <DatePicker /> */}
        {/* <ProductList /> */}

       <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage search={search} />} />
            <Route path='/products/:categoryname' element={<ProductsPage search={search} />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favourite' element={<FavModal />} />
          </Routes>
       </Container>
    </div>
  );
}

export default App;
