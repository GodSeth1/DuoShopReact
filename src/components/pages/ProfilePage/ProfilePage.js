import "./ProfilePage.css"
import { useAuth } from "../../../context/AuthContext"
import Button from "react-bootstrap/esm/Button"

export default function ProfilePage() {

    const name = useAuth()
    
    const {logout, user} = useAuth()

    console.log(user.orders)

    let orderList = []


    if(user.orders.length > 0) {
        if(user.orders.length === 1) {
            orderList = user.orders
        }
        else {
            for (let index = 0; index < 2; index++) {
                orderList.push(user.orders[index])
        }}
    }

    console.log(orderList)

    return (

        <div className="profileMain">
            <div className="client-info">
                <div className="profile-photo">
                    <img src="https://www.elitesingles.com.au/wp-content/uploads/sites/77/2020/06/profileprotectionsnap-350x264.jpg" alt="" />
                </div>
            
                <div className="container-date">
                    <h3>{user.username}</h3>
                    <p className="registration-date">Aug. 2024</p>
                </div>

                <form action="">
                    <div className="save-container"><Button className="Save BTNsv">Save</Button></div>
                    <div className="save-container"><Button onClick={logout} className="Save BTNsv">Log out</Button></div>
                </form>
            </div>
            <div className="second-container">
                <div className="orders">

                    <div className="orders-main">
                        <h3>My last purchases</h3>
                        <select className="Selection" name="" id="">
                            <option className="option" value="">New purchases</option>
                            <option className="option" value="">Last purchases</option>
                        </select>
                    </div>

                    <div className="for-orders" onClick={{}}>
                        {orderList.map((o) => (
                            <div className="orders-container">
                                <div className="orders-content">
                                    <img src={o.orderProducts[0].images[0]} alt="" />
                                    <div className="about">
                                        <p>{(o.orderProducts[0].name)}</p>
                                        <p className="price">{(o.orderProducts[0].price)}₴</p>
                                    </div>
                                </div>
                            </div>
                            

                        ))}
                    
                    </div>

            </div>

            <div className="feedbacks">
                <h3>Feedbacks</h3>
                
                <div className="feedbacks-container">

                    <div className="feedback">
                        <div className="feedbacks-main">
                            <img src="imgs/4213460-account-avatar-head-person-profile-user_115386.png" alt="" />
                            <h4>Someone</h4>
                        </div>
                        <p>I liked this product and it came very quickly unlike others I bought from other sellers.</p>
                        <div className="ratting">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/013/743/912/small/five-stars-rating-icon-png.png" alt="" />
                            <p>10/10</p>
                        </div>
                    </div>
                   
                    <div className="feedback">
                        <div className="feedbacks-main">
                            <img src="imgs/4213460-account-avatar-head-person-profile-user_115386.png" alt="" />
                            <h4>Someone</h4>
                        </div>
                        <p>Thanks, I received this product in 2 days!</p>
                        <div className="ratting">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/013/743/912/small/five-stars-rating-icon-png.png" alt="" />
                            <p>10/10</p>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
    )
}