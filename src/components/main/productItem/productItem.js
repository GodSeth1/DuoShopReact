import { Link } from "react-router-dom";
import "./productItem.css";
import Button from "react-bootstrap/esm/Button";
import { useCart } from "../../../context/CartContext";

function ProductItem({ product }) {
  const { dispatch } = useCart();

  if (!product || !product.id) {
    return <div>❌ Неправильний продукт</div>;
  }

  return (
    <div className="cardProduct">
      <Link className="cardLink" to={`/product/${product.id}`}>
        <img className="cardImg" src={product.images[0]} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price} UAH</p>
      </Link>
      <Button onClick={() => dispatch({ type: "ADD", product })}>
        <i className="bi bi-cart-plus"></i>
      </Button>
    </div>
  );
}

export default ProductItem;