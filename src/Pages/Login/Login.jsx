import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider/AuthContext";

const Login = () => {
    const {data} = use(AuthContext)
    console.log(data);
  return (
    <div className=" min-h-screen flex items-center justify-center w-6/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Login your account{" "}
        </h2>
        <div className="card-body">
          <form className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {/* {
              error && <p className="text-red-400 text-sm">{error}</p>
            } */}
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </form>
          <p className="text-center font-medium mt-5">
            Don’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
