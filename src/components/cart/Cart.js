import { useCart } from "../../context/CartContext"
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import "./cart.css"
import products from "../../data/products";

export default function CartModal(props) {

    const {cart, dispatch} = useCart()

    const totalAmount = cart.reduce((sum, p) => sum + p.price, 0)
    
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
                <div className="product-cart">
                    <img src={p.images[0]} alt="" />
                    <div>
                        <p>{p.name}</p>
                        <p>{p.price}</p>
                    </div>
                    <div className="cart-quantity"> 
                      <Button>-</Button>
                      {p.quantity}
                      <Button onClick={() => dispatch({ type: "INCREASE", product: p})}></Button>
                    </div>
                    <Button style={{marginLeft: "auto", backgroundColor: "red", height: "40px"}} onClick={() => dispatch({ type: "REMOVE", id: p.id})}>Remove</Button>
                </div>
            ))}
        </p>
      </Modal.Body>
      <Modal.Footer style={{display: "flex", justifyContent: "space-between"}}>
        <h3>Total amount: {totalAmount}</h3>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}