import React from "react";
import TrendingApp from "../../Components/TrendingApp/TrendingApp";
import Slider from "../../Components/Slider/Slider";
import ProductivityApp from "../../Components/ProductivityApp/ProductivityApp";

const Home = () => {
  return (
    <div className="my-10 space-y-10">
      <header>
        <Slider></Slider>
      </header>
      <main className="space-y-10">
        <TrendingApp></TrendingApp>
        <ProductivityApp></ProductivityApp>
      </main>
    </div>
  );
};

export default Home;
