import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-6/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Register your account{" "}
        </h2>
        <div className="card-body">
          <form className="fieldset">
            {/* email */}
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="your name"
              required
            />

            {/* email */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="photo url"
              required
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
          </form>
          <p className="text-center font-medium mt-5">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
