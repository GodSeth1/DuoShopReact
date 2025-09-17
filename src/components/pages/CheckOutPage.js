import Form from 'react-bootstrap/Form';
import { useCart } from "../../context/CartContext"
import Button from "react-bootstrap/esm/Button"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useState } from 'react';
import products from '../../data/products';
import "./sylesPages/CheckOutPage.css"
import { useAuth } from '../../context/AuthContext';

function CheckOutPage() {
    const {cart, dispatch} = useCart()

    const {addOrder} = useAuth()
    
    const totalAmount = cart.reduce((sum, p) => sum + p.price, 0)
    
    const totalAmountProduct = ((p) => p.price * p.quantity)


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

        addOrder(cart, form, totalAmount)

        dispatch({ type: "UPDATE", products: []})

    }
    
    return (
        <div className='checkOutPageCont'>
            <h2>Ordering</h2>

            <p style={{color: "green"}}>{totalAmount} Uah.</p>

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
            <Form className='formCheckOutCont' onSubmit={handleSubmit}>
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

                
                <div>
                    <Button style={{marginTop: "15px", }} variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default CheckOutPage