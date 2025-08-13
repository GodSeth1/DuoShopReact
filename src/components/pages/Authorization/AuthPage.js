import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const {login} = useAuth();
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    function handleLoginSubmit(e) {
        e.preventDefault()
        if (username.trim()) {
            login(username)
            navigate("/")
        }
        else {
            alert("Please, fill all the blanks")
        }
    }

    return (
        <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control type="text" placeholder="Enter login" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button style={{marginTop: "15px", }} variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

