import React from "react";
import ProductCard from "./ProductCard";
import { productsData } from "../fakeDb/data.js";
import { Link } from "react-router-dom";

const ProductSection = ({ filter }) => {
  const filteredProducts = productsData.filter((item) => {
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