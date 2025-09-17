import Carousel from 'react-bootstrap/Carousel';
import products from "../../../../data/products";
import ProductItem from "../../productItem/productItem";
import Col from "react-bootstrap/esm/Col";
import "./carousel.css";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useCart } from '../../../../context/CartContext';

function HomePageCarousel({ startIndex, count }) {
  const selectedProducts = products.slice(startIndex, startIndex + count);

  const { dispatch } = useCart();

  return (
    <Carousel variant='dark' indicators={false} controls={true} className="carousel">
      {selectedProducts.map(product => (
        <Carousel.Item key={product.id} className="cardCarousel">
          <div className='carouselSlide' style={{ width: '100%', height: '100%' }}>
          
            <div className="cardProductCarousel">
              <Link className="cardLink" to={`/product/${product.id}`}>
                <img className="cardImg" src={product.images[0]} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
                <div className="cardInfoCarousel">
                  <p>{product.price} UAH</p>
                <Button className="cardBTN" onClick={() => dispatch({ type: "ADD", product })}>
                  <i className="bi bi-cart-plus"></i>
                </Button>
                </div>
            </div>

          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomePageCarousel;