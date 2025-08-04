import ProductList from "../main/productList/productList";
import "./sylesPages/ProductsPage.css"
import FilterBar from "../main/filter/filterBar";
import { useState } from "react";
import products from "../../data/products";

function ProductsPage({ search }) {

    const maxPriceProduct = Math.max(...products.map(p => p.price))
    
    const [filters, setFilters] = useState({
        maxPrice: maxPriceProduct,
        category: "",
        developer: ""
    })

    return (
        <div className="products-container">
            <FilterBar filters={filters} setFilters={setFilters} maxPriceProduct={maxPriceProduct} />
            <ProductList search={search} filters={filters} /> 
        </div>
    )
}

export default ProductsPage;