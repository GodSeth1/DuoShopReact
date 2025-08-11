import HomePageCarousel from "../main/homepage/carousel/carousel";
import ProductItem from "../main/productItem/productItem";
import products from "../../data/products";
import "./sylesPages/HomePage.css";

function HomePage() {
  const carouselSize = 3;
  const totalProducts = products.length;

  const elements = [];
  let i = 0;

  while (i < totalProducts) {
    
    if (i + carouselSize <= totalProducts) {
      elements.push(
        <div className="product-ContainerCarousel" key={`carousel-${i}`}>
          <HomePageCarousel
            className="product-carousel"
            startIndex={i}
            count={carouselSize}
          />
        </div>
      );
      i += carouselSize;
    }

    for (let k = 0; k < 4 && i < totalProducts; k++, i++) {
      const product = products[i];

      if (product && product.id !== undefined) {
        elements.push(
          <div className="product-block" key={`item-${product.id}`}>
            <ProductItem product={product} />
          </div>
        );
      }
    }
  }

  return <div className="HomeContainer">{elements}</div>;
}

export default HomePage;