import React from "react";
import Hero from "./Hero";
import TriPanel from "./TriPanel";
import Module from "./Module";
import FilteredSlider from "./FilteredSlider";
import NewBountiful from "./NewBountiful";
import DualPanel from "./DualPanel";
import CardCarousel from "./CardCarousel";
import FirstDibs from "./FirstDibs";
import Approach from "./Approach";

const Home = () => {
  return (
    <div>
      <Hero />
      <TriPanel />
      <Module />
      <FilteredSlider />
      <NewBountiful />
      <DualPanel />
      <CardCarousel />
      <FirstDibs />
      <div style={{ width: "90%", margin: "auto" }}>
        <Approach />
      </div>
    </div>
  );
};

export default Home;
