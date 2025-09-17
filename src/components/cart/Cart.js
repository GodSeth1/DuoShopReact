import { useCart } from "../../context/CartContext"
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import "./cart.css"
import products from "../../data/products";
import { useNavigate } from 'react-router-dom';

export default function CartModal(props) {

  const navigate = useNavigate()

  const {cart, dispatch} = useCart()

  const totalAmount = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)
  
  const totalAmountProduct = ((p) => p.price * p.quantity)

  function handleClick() {
      navigate("/checkout")
      props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Products: {cart.length}</h4>
        <p>
          {cart.map(p => (
            <div className="product-cart" key={p.id}>
              <img src={p.images[0]} alt={p.name} />
              <div className="product-info">
                <p>{p.name}</p>
                <p>{p.price} грн</p>
              </div>
              <div><p>Всього: {totalAmountProduct(p)} грн</p></div>
              <div className="cart-quantity"> 
                <Button onClick={() => dispatch({ type: "DECREASE", product: p})}>-</Button>
                {p.quantity}
                <Button variant="primary" onClick={() => dispatch({ type: "INCREASE", product: p})}>+</Button>
              </div>
              <Button 
                className="remove-btn"
                onClick={() => dispatch({ type: "REMOVE", id: p.id})}
              >
                Remove
              </Button>
            </div>
          ))}
        </p>
      </Modal.Body>
      <Modal.Footer style={{display: "flex", justifyContent: "space-between"}}>
        <h3>Total amount: {totalAmount}</h3>
        <Button variant="success" onClick={handleClick}>
            Confirm order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}