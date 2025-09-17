import { Link } from "react-router-dom";
import "./productItem.css";
import Button from "react-bootstrap/esm/Button";
import { useCart } from "../../../context/CartContext";
import { useFav } from "../../../context/FavContext";

function ProductItem({ product }) {
  const { dispatch } = useCart()

  if (!product || !product.id) {
    return <div>❌ Неправильний продукт</div>;
  }

  return (
    <div className="cardProduct">
      <Link className="cardLink" to={`/product/${product.id}`}>
        <img className="cardImg" src={product.images[0]} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <div className="cardInfo">
          <p>{product.price} UAH</p>
        <Button className="cardBTN" onClick={() => dispatch({ type: "ADD", product })}>
          <i className="bi bi-cart-plus"></i>
        </Button>
      </div>  
    </div>
  );
}

export default ProductItem;