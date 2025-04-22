import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductSection = ({ filter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products`);
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.error("Ürün getirilemedi:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    if (filter === "all") return true;
    return item.link === `/${filter}`;
  });

  return (
    <>
      <section className="cardCarousel">
        <div className="all-shoes">
          {filteredProducts.map((item) => (
            <Link to={`/arrivals/${item.id}`} key={item.id}>
              <ProductCard data={item} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductSection;
