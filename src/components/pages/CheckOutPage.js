import Form from 'react-bootstrap/Form';
import { useCart } from "../../context/CartContext"
import Button from "react-bootstrap/esm/Button"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useState } from 'react';
import products from '../../data/products';

function CheckOutPage() {
    const {cart, dispatch} = useCart()
    
    const totalAmount = cart.reduce((sum, p) => sum + p.price, 0)
    
    const [form, setForm] = useState({
        name: "",
        surName: "",
        email: "",
        phone: "",
        address: "",
        payment: "card"
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)

        if(!form.name || !form.surName || !form.email || !form.phone || !form.address || !form.payment ) {
            alert("Please, fill all the blanks")
            return
        }

        dispatch({ type: "UPDATE", products: []})
    }
    
    return (
        <div>
            <h2>Ordering</h2>

            <p>{totalAmount}</p>

            {cart.map(p => (
                <div className="product-cart">
                    <img src={p.images[0]} alt="" />
                    <div>
                        <p>{p.name}</p>
                        <p>{p.price}</p>
                    </div>
                    <div className="cart-quantity"> 
                      <Button onClick={() => dispatch({ type: "DECREASE", product: p})}>-</Button>
                      {p.quantity}
                      <Button onClick={() => dispatch({ type: "INCREASE", product: p})}>+</Button>
                    </div>
                    <Button style={{marginLeft: "auto", backgroundColor: "red", height: "40px"}} onClick={() => dispatch({ type: "REMOVE", id: p.id})}>Remove</Button>
                </div>
            ))}

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, "name": e.target.value})} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Surname" value={form.surName} onChange={(e) => setForm({...form, "surName": e.target.value})} />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, "email": e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, "phone": e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" value={form.address} onChange={(e) => setForm({...form, "address": e.target.value})} />
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Payment</Form.Label>
                    <Form.Select defaultValue="Card" value={form.payment} onChange={(e) => setForm({...form, "payment": e.target.value})}>
                        <option value="card">Card</option>
                        <option value="cash">Cash</option>        
                    </Form.Select>
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CheckOutPage