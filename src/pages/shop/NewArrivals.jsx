import React, { useState } from "react";
import image from "../../assets/image/banner.avif";
import ProductSection from "../../components/ProductsSection";
import Faq from "../../components/Faq";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [filter, setFilter] = useState("all"); // 'all', 'men', or 'women'

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section>
      <div className="banner">
        <img src={image} width={"100%"} alt="Banner" />
        <div className="bannerText">
          <p>New Arrivals</p>
          <span>
            The latest styles and limited edition colors <br />
            that you can only find here (while they last,
            <br /> that is.)
          </span>
        </div>
      </div>
      <div className="topArrivals">
        <h4
          onClick={() => handleFilterChange("men")}
          style={{
            cursor: "pointer",
            color: filter === "men" ? "black" : "gray",
          }}
        >
          Men's New Arrivals
        </h4>
        <h4
          onClick={() => handleFilterChange("all")}
          style={{
            cursor: "pointer",
            color: filter === "all" ? "black" : "gray",
          }}
        >
          All Arrivals
        </h4>
        <h4
          onClick={() => handleFilterChange("women")}
          style={{
            cursor: "pointer",
            color: filter === "women" ? "black" : "gray",
          }}
        >
          Women's New Arrivals
        </h4>
      </div>
      <div className="arrivalsCenter">
        <h3>Shoes</h3>
        <span>
          Classic sneakers. Sporty running shoes. Comfy loafers. We got the
          wear-all day <br />
          (with everything) shoes you and your closet need.
        </span>
        <ProductSection filter={filter} />
        <p>Men's New Arrivals</p>
        <span className="topMen">
          Welcome to our <Link to="/men">new arrivals for men</Link>—the
          fresh-out-of-the-box, squeaky-new styles that we’re excited to share
          with our fans. Allbirds is continually adding new styles, new <br />
          colors, and new variations on our fan favorites.
        </span>
        <br />
        <span className="botMen">
          Check back often, because lots of our new arrivals are inspired by the
          natural world, like our awe-inspiring National Parks, the incredible
          outdoor activities that our customers love, or the <br />
          natural color palettes around us. We also love to partner with
          designers, influencers, athletes, and philanthropists to envision new
          ways to look sharp while caring for the planet through <br />
          sustainable materials & practices.
        </span>
      </div>
      <Faq />
    </section>
  );
};

export default NewArrivals;