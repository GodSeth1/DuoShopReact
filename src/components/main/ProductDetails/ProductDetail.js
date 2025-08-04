import Carousel from 'react-bootstrap/Carousel';
import products from '../../../data/products';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"
import Button from 'react-bootstrap/esm/Button';
import { useCart } from '../../../context/CartContext';

function ProductDetails() {

    const { id } = useParams();

    const product = products.find((prod) => prod.id === Number(id))

    const {dispatch} = useCart()

    return (
        <div className='container-details'>
            <Carousel variant='dark'>
                {product.images.map((img) => (
                    <Carousel.Item>
                        <img className='img-c' src={img} alt="" />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='titleProd'>
                <div>   
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
                <div>
                    <Button className='BTNProd' onClick={() => dispatch({ type: "ADD", product})} >В кошик <i class="bi bi-cart-plus"></i></Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;