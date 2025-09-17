import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import products from '../../../data/products';

export default function FilterBar({filters, setFilters, maxPriceProduct}) {

    

    return (
        <div>
            <Form.Range 
                max={maxPriceProduct}
                min='0'
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}
            />

            

            <h3>{filters.maxPrice}</h3>
        </div>
    )
}