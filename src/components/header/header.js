import logo from "../../logo/IMG_20250527_174328_473 (1) (1).png"
import "./header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProductSearch from "../main/search/search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import products from "../../data/products";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartModal from "../cart/Cart";
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from "../../context/AuthContext";

function HeaderBar({ search, setSearch}) {

  const [query, setQuery] = useState("")
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const uniqueCategories = [...new Set(products.map(p => p.category))];
  
  const [modalShow, setModalShow] = useState(false);

  const isLog = window.location.pathname === '/login'
  const isReg = window.location.pathname === '/register'

  const displayCss = isReg || isLog ? 'none' : ''

  const {isAuth, logout} = useAuth()

  function handleOnSearch(e) {
    if (e.key === "Enter" ) {
      navigate(`/products?search=${encodeURIComponent(query)}`)
    }
    
  }
  
  function handleOnProfile() {
    navigate("/login")
  }

  function clickToSearch() {
    navigate(`/products?search=${encodeURIComponent(query)}`)
  }

  function handleOnProfile() {
    navigate('/profile')
  }

  return (
  <Navbar expand="lg" className="bg-dark px-3 headerMain" variant="dark" style={{display: displayCss}}>
    <Container>
      <Navbar.Brand href="/">
          <img className="img-logo" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className="LinkDec" to={"/"} href="/">Home</Link>
          <Link className="LinkDec" to={"/products"} href="/products">Products</Link>
          <Nav.Link onClick={handleShow}>Filter</Nav.Link>

          <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Choose the product</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to="/products" onClick={handleClose}>Усі товари</Link> <br />
            
            {uniqueCategories.map(category => (
              <div key={category}>
                <Link
                  to={`/products?category=${encodeURIComponent(category)}`}
                  onClick={handleClose}
                >
                  {category}
                </Link>
                <br />
              </div>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
        </Nav>
        
        {/* <ProductSearch
          search={search}
          setSearch={setSearch}
        /> */}
        <Form className="form-search">
          <Form.Control
            type="search"
            placeholder="Search"
            className="search-Input"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleOnSearch}
            
          />
          <Button variant="outline-success"
            value={query}
            onClick={clickToSearch}
            ><i className="bi bi-search">
          </i></Button>
        </Form> 
        
      </Navbar.Collapse>

      { isAuth ? ( 
      <Dropdown>
          <Dropdown.Toggle className="mx-3" variant="outline-light" id="dropdown-basic">
            <i class="bi bi-person"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleOnProfile}>Profile</Dropdown.Item>
            <Dropdown.Item>Order history</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>) :
        <Button variant="outline-light"><i class="bi bi-person" onClick={handleOnProfile}></i></Button>
      }
      
      <Button variant="outline-light" style={{marginLeft: "10px"}} onClick={() => setModalShow(true)} ><i class="bi bi-cart"></i></Button>

      <CartModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  </Navbar>
  )
}

export default HeaderBar