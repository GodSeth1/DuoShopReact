import "./footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <div className="FooterCont">
            <div className="footer-img">
                <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" className="logo-img" />
                <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="" className="logo-img" />
                <img src="https://cdn-icons-png.flaticon.com/512/3938/3938039.png" alt="" className="logo-img" />        
            </div>
            <div className="footer-menu">
                <Link className="menu-item">Home</Link>
                <Link className="menu-item">News</Link>
                <Link className="menu-item">About</Link>
                <Link className="menu-item">Contact us</Link>
                <Link className="menu-item">Our team</Link>
            </div>
            <div className="second-bar">
                <p>© 2025 Duo Shop</p>
            </div>
        </div>
    )
}