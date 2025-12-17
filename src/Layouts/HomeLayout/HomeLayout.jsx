import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header className="space-y-6 mb-5">
        {/* navbar section */}
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      {/* main area */}
      <main className="w-11/12 mx-auto mt-30">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
