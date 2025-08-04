
import products from "../../../data/products"
import ProductItem from "../productItem/productItem";
import "./productList.css"
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';


function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const PRODUCTS_ON_PAGE = 8;

function ProductList({ search, filters }) {

    const navigate = useNavigate()
    const query = useQuery();
    const categoryFromQuery = query.get("category")?.toLowerCase() || null;
    const searchSecond = query.get("search")?.toLocaleLowerCase() || ""

    const [sortVariant, setSortVariant] = useState("Default") 
  
    useEffect(() => {
        const params = new URLSearchParams()

        if(sortVariant !== "Default") params.set("sort", sortVariant)
        if(search) params.set("search", search)
        if(categoryFromQuery) params.set("category", categoryFromQuery)

        navigate({
            search: params.toString()
        })
    }, [sortVariant])

    const filteredProducts = products.filter(prod =>
        prod.price <= filters.maxPrice &&
        prod.name.toLowerCase().includes(search.toLowerCase()) &&
        prod.name.toLowerCase().includes(searchSecond) &&
       (categoryFromQuery ? prod.category?.toLowerCase() === categoryFromQuery : true)
    )
    

    const sortedProducts = filteredProducts.sort((a, b) => {
        switch (sortVariant) {
            case "The cheapest":
                return a.price - b.price 
            case "The most expansive":
                return b.price - a.price
            case "A-Z":
                return a.name.localeCompare(b.name)
            case "Z-A":
                return b.name.localeCompare(a.name)
                
        
            default:
                break;
        }
    })

     const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_ON_PAGE)

    const lastIndex = currentPage * PRODUCTS_ON_PAGE
    const firtsIndex = lastIndex - PRODUCTS_ON_PAGE
    const currentProducts = sortedProducts.slice(firtsIndex, lastIndex)

    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number===currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>
        );
    }

    // filteredProducts.sort((a, b) => a.name.localeCompare(b.name) )
    // filteredProducts.sort((a, b) => b.price - a.price  )  //////////// Сортування

    return (

        <div>
         
            <Container>
                <div className="sort-container">
                    <Dropdown>
                        <Dropdown.Toggle className="sort-menu" variant="secondary" id="dropdown-basic">
                            {sortVariant}
                        </Dropdown.Toggle>
    
                        <Dropdown.Menu>
                            
                            <Dropdown.Item onClick={() => setSortVariant("The cheapest")} >The cheapest</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortVariant("The most expansive")} >The most expansive</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortVariant("A-Z")} >A-Z</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortVariant("Z-A")} >Z-A</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Row className="g-0 inner-border-grid">
                    {currentProducts.map((product) => (
                        <Col key={product.id} xxl={3} xl={4} md={6}>
                            <ProductItem product={product} />   
                        </Col>
                    ))} 
                </Row>
            </Container>

            <div className="pagination-menu">
                <Pagination>
                    <Pagination.First className="mx-2" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}/>    
                    <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}/>

                    {items}

                    <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}/>
                    <Pagination.Last className="mx-2" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}/>
                </Pagination>
            </div>

        </div>
    )
}

export default ProductList;