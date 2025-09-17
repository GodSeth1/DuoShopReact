import ProductItem from "../productItem/productItem";
import { useState } from "react";
import products from "../../../data/products";
import "./ProductsGallery.css"
import Button from "react-bootstrap/esm/Button";

export default function ProductsGallery() {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 5; // скільки продуктів показувати одночасно
    const maxItems = 15;

    // беремо максимум 15 продуктів
    const galleryProducts = products.slice(0, maxItems);
    const visibleProducts = galleryProducts.slice(startIndex, startIndex + itemsPerPage);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + itemsPerPage, galleryProducts.length - itemsPerPage)
        );
    };

    return (
        <div className="GalleryCont">
            <Button onClick={handlePrev} disabled={startIndex === 0}>
                &#8592;
            </Button>
            <div
                className="productGalleryInner"
                
            >
                {visibleProducts.map((prod) => (
                    <ProductItem className="ProductDetailsItem" key={prod.id} product={prod} />
                ))}
            </div>
            <Button
                onClick={handleNext}
                disabled={startIndex + itemsPerPage >= galleryProducts.length}
            >
                &#8594;
            </Button>
        </div>
    );
}