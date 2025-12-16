import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";

const HomeLayout = () => {
  return (
    <div>
      <header className="space-y-6 mb-5">
        {/* navbar section */}
        <nav>
          <Navbar></Navbar>
        </nav>

        {/* slider section */}
        <Slider></Slider>
      </header>
      {/* main area */}
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
