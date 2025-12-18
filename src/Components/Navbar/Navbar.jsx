import React, { use } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo-of-appNest.jpg";
import { AuthContext } from "../../Providers/AuthProvider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  // logout handle function
  const handleLogout = () => {
    // setUser(null)
    // console.log("user logged out");
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Logout successful",
          icon: "success",
          timer: 1500,
        });
        window.location.href = "/";
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.code}`,
          timer: 1500,
        });
      });
  };

  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-20">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="flex items-center">
            <img className="w-16" src={logo} alt="" />
            <h2 className="text-xl text-primary font-bold leading-none hidden md:flex">
              App <br />
              nest
            </h2>
          </Link>
        </div>
        <div className="flex-none">
          {/* user section */}
          <div className="space-x-2">
            {/* user abater */}
            <div className="avatar avatar-online">
              {user && (
                <div className="w-10 border rounded-full">
                  <img src={user && user.photoURL} />
                </div>
              )}
            </div>
            {/* sign in of sign out button */}
            {user ? (
              <Link onClick={handleLogout} className="btn btn-primary">
                Log out
              </Link>
            ) : (
              <Link to={"/auth/login"} className="btn btn-primary">
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
