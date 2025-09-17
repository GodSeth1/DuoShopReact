import ProductList from "../main/productList/productList";
import "./sylesPages/ProductsPage.css"
import FilterBar from "../main/filter/filterBar";
import { useState } from "react";
import products from "../../data/products";
import { useLocation } from "react-router-dom";

function ProductsPage({ search }) {

    const query = new URLSearchParams(useLocation().search)

    const maxPriceProduct = Math.max(...products.map(p => p.price))
    
    const queryMaxPrice = Number(query.get("maxprice")) || maxPriceProduct
    

    const [filters, setFilters] = useState({
        maxPrice: queryMaxPrice,
        category: "",
        developer: ""
    })

    return (
        <div className="products-container">
            <FilterBar filters={filters} setFilters={setFilters} maxPriceProduct={maxPriceProduct} />
            <ProductList search={search} filters={filters} maxPriceProduct={maxPriceProduct} /> 
        </div>
    )
}

export default ProductsPage;