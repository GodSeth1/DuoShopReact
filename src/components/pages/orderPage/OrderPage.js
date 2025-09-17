import { useAuth } from '../../../context/AuthContext';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Button from "react-bootstrap/esm/Button";
import "./OrderPage.css"

function OrderPage() {

    const {user} = useAuth()

    const [openOrders, setOpenOrders] = useState({});

    const totalAmountProduct = ((p) => p.price * p.quantity)


    const toggleOrder = (orderId) => {
        setOpenOrders((prev) => ({
            ...prev,
            [orderId]: !prev[orderId], // змінюємо тільки для конкретного замовлення
        }));
    };

    return (
        <div>
            <h2>Order Page</h2>

            {user.orders.length === 0 ? "No orders yet" : 
                <div>
                    <div className='orderHeader'>
                        <div>Date</div>
                        <div>Address</div>
                        <div>Total Amount</div>
                        <div></div>
                    </div>
                    <hr className='orderHR' />
                    <div className='orderPageList'>
                        {user.orders.map((o) => (
                            <div>
                                <div className="order-container">
                                    <div className='orderID'>№ {o.id}</div>
                                    <hr />
                                    <div className="order-info">
                                        <div>{o.date}</div>
                                        <div>{o.address}</div>
                                        <div>{o.totalAmount}</div>
                                        <Button
                                            onClick={() => toggleOrder(o.id)}
                                            variant='outline-light'
                                            className='orderBTN'
                                            aria-expanded={!!openOrders[o.id]}
                                        >
                                            Details <i class="bi bi-chevron-up"></i>
                                        </Button>
                                    </div>
                                <Collapse in={!!openOrders[o.id]}>
                                    <div>
                                        <hr />
                                        <div className='orderProductsHeader'>
                                            <div>Date</div>
                                            <div>Title</div>
                                            <div>Quantity</div>
                                            <div>Amount</div>
                                            <div>Total Amount</div>
                                        </div>
                                        {o.orderProducts.map((p) => (
                                            <div className='orderProducts'>
                                                <img src={p.images[0]} alt="" />
                                                <div>{p.name}</div>
                                                <div>{p.quantity}</div>
                                                <div>{p.price}</div>
                                                <div>Всього: {totalAmountProduct(p)} грн</div>
                                            </div>
                                        ))}
                                    </div>
                                </Collapse>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
                }

            
        </div>
    )
}

export default OrderPage;