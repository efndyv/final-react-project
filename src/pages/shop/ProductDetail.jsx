// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { productsData, shoesData } from "../../fakeDb/data";
// import { FaStar } from "react-icons/fa";
// import { useCart } from "../../pages/shop/CartContext";
// import Swal from "sweetalert2";

// import image66 from "../../assets/image/cobalt.avif";
// import image77 from "../../assets/image/single.avif";
// import Studio from "./Studio";
// import CareGuide from "./CareGuide";
// import CardCarousel from "../home/CardCarousel";
// import Approach from "../home/Approach";

// const detailText = [
//   { id: 150, link: "/arrivals", title: "Men's Tree Dasher 2", img: image66 },
//   { id: 151, link: "/arrivals", title: "Men's Runner Go", img: image77 },
// ];

// const ProductPage = () => {
//   const { addToCart } = useCart();
//   const { id } = useParams();
//   const product = productsData.find((item) => String(item.id) === id);
//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   // Available sizes
//   const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13.5, 13, 14];

//   const handleAddToCart = () => {
//     if (selectedSize && selectedVariant) {
//       addToCart(product, selectedSize, selectedVariant);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Ürün sepete eklendi!",
//         showConfirmButton: false,
//         timer: 1500,
//         toast: true,
//         background: "#f5f5f5",
//         customClass: {
//           title: "swal2-title-custom",
//         },
//       });
//     } else {
//       // Eksik bilgi uyarısı
//       Swal.fire({
//         icon: "error",
//         title: "Eksik Bilgi",
//         text: "Lütfen bir beden seçiniz",
//         confirmButtonText: "Tamam",
//         customClass: {
//           confirmButton: "swal2-confirm-custom",
//         },
//       });
//     }
//   };

//   // Separate state for the selected color variant and shoe size.
//   const [selectedVariant, setSelectedVariant] = useState(
//     shoesData.length > 0 ? shoesData[0].id : null
//   );
//   const [selectedSize, setSelectedSize] = useState(null);

//   // State for the variant images and the main displayed image.
//   const [selectedImages, setSelectedImages] = useState(null);
//   const [mainImage, setMainImage] = useState(product.img);

//   // State for "Find in Store" toggle
//   const [findInStoreOpen, setFindInStoreOpen] = useState(false);

//   // When selectedVariant changes, update the selectedImages from shoesData.
//   useEffect(() => {
//     const shoe = shoesData.find((item) => item.id === selectedVariant);
//     if (shoe) {
//       setSelectedImages(shoe);
//     }
//   }, [selectedVariant]);

//   // When the selectedImages update, update the mainImage to the first image of the variant.
//   useEffect(() => {
//     if (
//       selectedImages &&
//       selectedImages.images &&
//       selectedImages.images.length > 0
//     ) {
//       setMainImage(selectedImages.images[0]);
//     }
//   }, [selectedImages]);

//   // Use product.rating if available, default to 4.
//   const rating = product.rating || 4;

//   return (
//     <>
//       <div className="container">
//         {/* Thumbnails Section */}
//         <div className="breadcrumbs">
//           {selectedImages?.images.map((imgSrc, index) => (
//             <img
//               key={index}
//               src={imgSrc}
//               width="80.5px"
//               alt={`Thumbnail ${index}`}
//               style={{
//                 cursor: "pointer",
//                 border: mainImage === imgSrc ? "2px solid #000" : "none",
//               }}
//               onClick={() => setMainImage(imgSrc)}
//             />
//           ))}
//         </div>

//         {/* Product Section */}
//         <main className="product-container">
//           {/* Main Product Image with Lupa Icon */}
//           <div
//             className="product-image"
//             style={{
//               background: "#f5f5f5",
//               maxHeight: "720px",
//               width: "700px",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <img
//               src={mainImage}
//               alt={product.title}
//               width="720px"
//               height="auto"
//             />
//           </div>

//           <div className="product-details">
//             <div className="linkPx">
//               <Link to={"/"} className="black-link">
//                 {["Home", "Men's Shoes", "Active Shoes /"].join(" / ")}
//               </Link>
//             </div>
//             <h1 style={{ fontSize: "33px" }}>{product.title}</h1>
//             <p className="description">
//               {product.description ||
//                 "Breathable Active Shoe With Plush, Supportive Cushioning For Everyday Comfort"}
//             </p>
//             {/* Price and Shipping */}
//             <div className="price-section">
//               <span className="price">{product.price}</span>
//               <span className="shipping">FREE SHIPPING</span>
//             </div>
//             {/* Star Review Section */}
//             <div className="review">
//               {Array.from({ length: 5 }, (_, index) => (
//                 <FaStar key={index} color="#000" size={18} />
//               ))}
//             </div>
//             <h3>COLOR :</h3>
//             {/* Color Selector */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 marginTop: "10px",
//               }}
//             >
//               {shoesData.map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() => setSelectedVariant(item.id)}
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                     backgroundColor: item.colorImage,
//                     cursor: "pointer",
//                     border:
//                       selectedVariant === item.id
//                         ? "2px solid black"
//                         : "1px solid gray",
//                   }}
//                 ></div>
//               ))}
//             </div>
//             {/* Size Selector */}
//             <div className="size-selector">
//               <h3>SELECT SIZE:</h3>
//               <div className="size-grid">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     className={`size-btn ${
//                       selectedSize === size ? "selected" : ""
//                     }`}
//                     onClick={() =>
//                       setSelectedSize(selectedSize === size ? null : size)
//                     }
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="sizeChart">
//               <Link to={"/"} className="sizeChart">
//                 See Size Chart
//               </Link>
//             </div>

//             <div className="chartItem">
//               {selectedSize ? (
//                 <button className="active-button" onClick={handleAddToCart}>
//                   ADD TO CART - {product.price}
//                 </button>
//               ) : (
//                 <button className="disabled-button" disabled>
//                   SELECT A SIZE
//                 </button>
//               )}
//               <div className="shopRunner">
//                 <span>SHOPRUNNER</span>
//                 <span>FREE 2-Day Shipping.</span>
//                 <Link to={"/"}> Sign Up FREE | Sign In</Link>
//               </div>
//               <p className="shipOr">Free Shipping on orders of $75.</p>
//             </div>

//             <div
//               className="findInStore"
//               style={{
//                 borderTop: "1px solid gray",
//                 borderBottom: "1px solid gray",
//                 padding: "20px 0",
//                 marginTop: "23px",
//               }}
//             >
//               <p
//                 style={{
//                   cursor: "pointer",
//                   fontWeight: "bold",
//                   textTransform: "uppercase",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//                 onClick={() => setFindInStoreOpen(!findInStoreOpen)}
//               >
//                 Find in Store
//                 <svg
//                   width="12"
//                   height="8"
//                   viewBox="0 0 14 8"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   style={{
//                     marginLeft: "10px",
//                     transition: "transform 0.3s ease",
//                     transform: findInStoreOpen
//                       ? "rotate(180deg)"
//                       : "rotate(0deg)",
//                   }}
//                 >
//                   <path
//                     d="M1 1L6 6L11 1"
//                     stroke="black"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </p>
//               {findInStoreOpen && (
//                 <span style={{ fontSize: "16px", fontWeight: "400" }}>
//                   <br />
//                   Please select a size to see availability at a store near you.
//                 </span>
//               )}
//             </div>
//             {/* <div className="pText">

//               <p>Also Consider</p>
//               <div className="detailText">
//                 {detailText.map((item) => (
//                   <Link to={item.link} key={item.id}>
//                     <img src={item.img} alt={item.title} width="280px" />
//                     <p>{item.title}</p>
//                   </Link>
//                 ))}
//               </div>
//             </div> */}
//           </div>
//         </main>
//       </div>
//       <div>
//         <Studio />
//         <CareGuide />
//         <CardCarousel />
//         <Approach />
//       </div>
//     </>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { productsData, shoesData } from "../../fakeDb/data";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../pages/shop/CartContext";
import Swal from "sweetalert2";

import image66 from "../../assets/image/cobalt.avif";
import image77 from "../../assets/image/single.avif";
import Studio from "./Studio";
import CareGuide from "./CareGuide";
import CardCarousel from "../home/CardCarousel";
import Approach from "../home/Approach";

const detailText = [
  { id: 150, link: "/arrivals", title: "Men's Tree Dasher 2", img: image66 },
  { id: 151, link: "/arrivals", title: "Men's Runner Go", img: image77 },
];

const ProductPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = productsData.find((item) => String(item.id) === id);
  if (!product) {
    return <div>Product not found.</div>;
  }

  // Available sizes
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
        {/* Mobile Thumbnail Slider */}
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

        {/* Product Section */}
        <main className="product-container">
          <div className="image-section">
            {/* Desktop Breadcrumbs */}
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
