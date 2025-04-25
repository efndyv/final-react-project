import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { shoesData } from "../../fakeDb/data";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../pages/shop/CartContext";
import Swal from "sweetalert2";
import axios from "axios";

import Studio from "./Studio";
import CareGuide from "./CareGuide";
import CardCarousel from "../home/CardCarousel";
import Approach from "../home/Approach";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const { addToCart } = useCart();
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);

        setProduct(res.data);
      } catch (error) {}
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13.5, 13, 14];

  const handleAddToCart = () => {
    if (selectedSize && selectedVariant) {
      addToCart(product, selectedSize, selectedVariant);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Ürün sepete eklendi!",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        background: "#f5f5f5",
        customClass: {
          title: "swal2-title-custom",
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Eksik Bilgi",
        text: "Lütfen bir beden seçiniz",
        confirmButtonText: "Tamam",
        customClass: {
          confirmButton: "swal2-confirm-custom",
        },
      });
    }
  };

  const [selectedVariant, setSelectedVariant] = useState(
    shoesData.length > 0 ? shoesData[0].id : null
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [mainImage, setMainImage] = useState(product.img);
  const [findInStoreOpen, setFindInStoreOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current && selectedImages?.images) {
      const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
      sliderRef.current.scrollTo({
        left: index * (slideWidth + 16),
        behavior: "smooth",
      });
      setCurrentSlide(index);
      setMainImage(selectedImages.images[index]);
    }
  };

  const nextSlide = () => {
    if (
      selectedImages?.images &&
      currentSlide < selectedImages.images.length - 1
    ) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const shoe = shoesData.find((item) => item.id === selectedVariant);
    if (shoe) {
      setSelectedImages(shoe);
      setCurrentSlide(0);
    }
  }, [selectedVariant]);

  useEffect(() => {
    if (selectedImages?.images?.length > 0) {
      setMainImage(selectedImages.images[0]);
    }
  }, [selectedImages]);

  const rating = product.rating || 4;

  return (
    <>
      <div className="container">
        <div className="mobile-thumbnail-slider">
          <div className="slider-container" ref={sliderRef}>
            {selectedImages?.images.map((imgSrc, index) => (
              <div
                key={index}
                className={`slide ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <img src={imgSrc} alt={`Thumbnail ${index}`} />
              </div>
            ))}
          </div>
          <button
            className="slider-arrow prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous image"
          >
            &lt;
          </button>
          <button
            className="slider-arrow next"
            onClick={nextSlide}
            disabled={
              currentSlide === (selectedImages?.images?.length || 0) - 1
            }
            aria-label="Next image"
          >
            &gt;
          </button>
        </div>

        <main className="product-container">
          <div className="image-section">
            <div className="desktop-breadcrumbs">
              {selectedImages?.images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  width="80.5px"
                  alt={`Thumbnail ${index}`}
                  style={{
                    cursor: "pointer",
                    border: mainImage === imgSrc ? "2px solid #000" : "none",
                  }}
                  onClick={() => setMainImage(imgSrc)}
                />
              ))}
            </div>

            <div
              className="product-image"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={mainImage}
                alt={product.title}
                className="main-product-image"
              />
            </div>
          </div>

          <div className="product-details">
            <div className="linkPx">
              <Link to={"/"} className="black-link">
                {["Home", "Men's Shoes", "Active Shoes /"].join(" / ")}
              </Link>
            </div>
            <h1 style={{ fontSize: "33px" }}>{product.title}</h1>
            <p className="description">
              {product.description ||
                "Breathable Active Shoe With Plush, Supportive Cushioning For Everyday Comfort"}
            </p>

            <div className="price-section">
              <span className="price">{product.price}</span>
              <span className="shipping">FREE SHIPPING</span>
            </div>

            <div className="review">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} color="#000" size={18} />
              ))}
            </div>

            <h3>COLOR :</h3>
            <div className="color-selector">
              {shoesData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedVariant(item.id)}
                  className={`color-option ${
                    selectedVariant === item.id ? "selected" : ""
                  }`}
                  style={{ backgroundColor: item.colorImage }}
                />
              ))}
            </div>

            <div className="size-selector">
              <h3>SELECT SIZE:</h3>
              <div className="size-grid">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() =>
                      setSelectedSize(selectedSize === size ? null : size)
                    }
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="sizeChart">
              <Link to={"/"} className="sizeChart">
                See Size Chart
              </Link>
            </div>

            <div className="chartItem">
              {selectedSize ? (
                <button className="active-button" onClick={handleAddToCart}>
                  ADD TO CART - {product.price}
                </button>
              ) : (
                <button className="disabled-button" disabled>
                  SELECT A SIZE
                </button>
              )}
              <div className="shopRunner">
                <span>SHOPRUNNER</span>
                <span>FREE 2-Day Shipping.</span>
                <Link to={"/"}> Sign Up FREE | Sign In</Link>
              </div>
              <p className="shipOr">Free Shipping on orders of $75.</p>
            </div>

            <div className="findInStore">
              <p onClick={() => setFindInStoreOpen(!findInStoreOpen)}>
                Find in Store
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: findInStoreOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
              {findInStoreOpen && (
                <span>
                  <br />
                  Please select a size to see availability at a store near you.
                </span>
              )}
            </div>
          </div>
        </main>
      </div>
      <div>
        <Studio />
        <CareGuide />
        <CardCarousel />
        <Approach />
      </div>
    </>
  );
};

export default ProductPage;
