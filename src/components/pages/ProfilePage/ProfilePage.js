import Button from "react-bootstrap/esm/Button"
import "./ProfilePage.css"
import { useAuth } from "../../../context/AuthContext"

export default function ProfilePage() {
    
    const {logout} = useAuth()
    
    return (
        <div className="profileMain">
            <div className="client-info">
                <div className="profile-photo">
                    <img src="https://www.elitesingles.com.au/wp-content/uploads/sites/77/2020/06/profileprotectionsnap-350x264.jpg" alt="" />
                </div>
            
                <div className="container-date">
                    <h3>My profile</h3>
                    <p className="registration-date">Aug. 2024</p>
                </div>

                <form action="">
                    <div className="save-container"><button className="Save">Save</button></div>
                    <div className="save-container"><button onClick={logout} className="Save">Log out</button></div>
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

                    <div className="for-orders">
                        <div className="orders-container">
                            <div className="orders-content">
                                <img src="https://content.rozetka.com.ua/goods/images/big/500980181.jpg" alt="" />
                                <div className="about">
                                    <p>Ноутбук HP Victus Gaming 16-s1002ua (B23BYEA) Mica Silver</p>
                                    <p className="price">46 999₴</p>
                                </div>
                            </div>
                    </div>
    
                    <div className="orders-container">
                        <div className="orders-content">
                            <img src="https://img.ktc.ua/img/base/1_295/4/586394.webp" alt="" />
                            <div className="about">
                                <p>Игровая приставка Sony PlayStation 5 Pro</p>
                                <p className="price">42 999₴</p>
                            </div>
                        </div>
                    </div>
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