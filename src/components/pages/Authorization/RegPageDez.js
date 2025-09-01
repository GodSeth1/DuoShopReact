import "./styles/RegPageDez.css"
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RegPageDez() {
    const {register} = useAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    function handleRegister(e) {
        e.preventDefault()
        if (!username || !password || !confPassword) {
            alert("Fill all the blanks or check password")
            return;
        }
        if (password != confPassword) {
            alert("Fill all the blanks or check password")
            return
        }
        if(register(username, password, confPassword)) {
            navigate("/login")
        }
        else {
            alert("User allready exist")
        }
    }

    return (
        <div onSubmit={handleRegister} className='mainDiv'>
            <div className="authContainer">
                <form className="login-container" action="">
                    <h2>Welcome</h2>

                    <input className="main-input" type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="main-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="main-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="main-input" type="password" placeholder="Repeat password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />

                    <div className="remmember-container">
                        <input type="checkbox" id="remmember" className="remmember-input" />
                            <label htmlFor="remmember" className='authLabel'>
                                <span>Remmember me</span>
                            </label>
                    </div>
 
                    <Button type="submit" className='authBTN'>Sign up</Button>

                    <p className='authP'>
                        Allready have an account?
                        <Link to="/login" className="LogInRmBTN" style={{textDecoration: "underline"}} >Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}