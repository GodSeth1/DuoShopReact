import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/AuthPage.css"

export default function LoginPage() {
    const {login} = useAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleLoginSubmit(e) {
        e.preventDefault()
        if (username.trim()) {
            if(login(username, password)) {
                navigate("/")

            }
            else {
                alert("Incorrect username or password")
            }
        }
        else {
            alert("Please, fill all the blanks")
        }
    }

    return (
        <div className="authContainer">
            <Form className="login-container" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="main-input" type="text" placeholder="Enter login" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
    
                <Form.Group className="mb-3">
                    <Form.Control className="main-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
    
                <Button className="authBTN" style={{marginTop: "15px", }} variant="primary" type="submit">
                    Login
                </Button>
                <div className="authLinkCont">Allready have a account? <Link className="authLink" to="/register">Register</Link></div>
            </Form>
        </div>
    )
}

