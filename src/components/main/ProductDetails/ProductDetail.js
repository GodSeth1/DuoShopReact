import Carousel from 'react-bootstrap/Carousel';
import products from '../../../data/products';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"
import Button from 'react-bootstrap/esm/Button';
import { useCart } from '../../../context/CartContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsGallery from './ProductsGallery';

function ProductDetails() {

    const { id } = useParams();

    const product = products.find((prod) => prod.id === Number(id))

    const {dispatch} = useCart()

    const [number, setNumber] = useState(0);

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        setNumber(randomNum);
    }, []);
    

    return (
        <div>
            <div className='AllAboutDetails'>
                <Link className='LinkDetails'>All about</Link>
                <Link className='LinkDetails'>Features</Link>
                <Link className='LinkDetails'>Reviews</Link>
                <Link className='LinkDetails'>Video</Link>
                <Link className='LinkDetails'>Buying Together</Link>
                <div style={{display: "flex", gap: "5px"}}><Link className='LinkDetails'>This product available from other sellers</Link> <Link className='LinkDetails' style={{fontWeight: "bold"}}>{number}</Link></div>
            </div>
            <div className='container-details'>
                <Carousel className='detailsCarousel' variant='dark'>
                    {product.images.map((img) => (
                        <Carousel.Item>
                            <img className='img-c' src={img} alt="" />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className='titleProd'>
                    <div className='detailsName'>   
                        <h2>{product.name}</h2>
                    </div>
                    <div className='detailsName'>
                        <h4>{product.category}</h4>
                    </div>
                    <div className='PrcBTN'>
                        <p>In stock</p>
                        <h3 style={{color: "green"}}>{product.price}₴</h3>
                        <Button variant="success" className='BTNProd' onClick={() => dispatch({ type: "ADD", product})} >В кошик <i class="bi bi-cart-plus"></i></Button>
                    </div>
                    <div className='PrcBTN'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni eius illum exercitationem corporis, voluptas accusantium. Repellendus, quos doloribus impedit, nihil voluptatum aliquam reprehenderit voluptate delectus amet quaerat ad repellat!</p>
                    </div>
                </div>
            </div>
            <div>
                <ProductsGallery /> 
            </div>
        </div>
       
    )
}

export default ProductDetails;