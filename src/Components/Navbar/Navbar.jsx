import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo-of-appNest.jpg"

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm ">

    <div className="navbar w-11/12 mx-auto">
      <div className="flex-1">
        <Link to={"/"} className="flex items-center">
            <img className="w-16" src={logo} alt="" />
            <h2 className="text-xl font-bold leading-none">App <br />nest</h2>
        </Link>
      </div>
      <div className="flex-none">
        {/* user section */}
        <div className="space-x-2">
            {/* user abater */}
          <div className="avatar avatar-online">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
            </div>
          </div>
          {/* sign in of sign out button */}
          <button className="btn btn-primary">Log in</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
