import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Search = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products`);

        setProducts(res.data);
      } catch (error) {
        console.error("Ürün getirilemedi:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    if (input === "") {
      setFilteredProducts([]);
      return;
    }

    const normalizedInput = input.toLowerCase().trim();

    const escapeRegex = (string) => {
      return string.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&");
    };

    const results = products.filter((product) => {
      const escapedInput = escapeRegex(normalizedInput);
      const regex = new RegExp(escapedInput, "i");
      return regex.test(product.title);
    });
    setFilteredProducts(results);
  };

  return (
    <div>
      <div className="search-container">
        <h2>{t("searchResults")}</h2>
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="search-results">
        {searchTerm && filteredProducts.length === 0 ? (
          <p>{t("noProductsFound")}</p>
        ) : (
          filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="search-item"
            >
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <img src={product.img} alt={product.title} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
