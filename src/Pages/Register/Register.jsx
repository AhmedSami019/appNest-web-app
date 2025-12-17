import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider/AuthContext";
import Swal from "sweetalert2";

const Register = () => {

    const {createNewUser, setUser, updateUser} = use(AuthContext)
      const navigate = useNavigate()

    // function to handle new user creation
    const handleCreateNewUser = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photo, email, password);

        createNewUser(email, password)
        .then(result => {
            const newUser = result.user
            console.log(newUser);
            updateUser({displayName: name, photoURL: photo})
            .then(()=>{
                setUser({...newUser, displayName: name, photoURL: photo })
                Swal.fire({
                    title: `user created successfully`,
                    icon: "success",
                    timer: 1500
                })
                navigate("/")
            }).catch(error =>{
                Swal.fire({
                    title: `in ${error.code} have problem`,
                    icon: "error",
                    timer: 1500
                })
            })
        }).catch(error=>{
            Swal.fire({
                    title: `in ${error.code} have problem`,
                    icon: "error",
                    timer: 1500
                })
        })
    }

  return (
    <div className="flex justify-center items-center min-h-screen md:w-6/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          Register your account{" "}
        </h2>
        <div className="card-body">
          <form onSubmit={handleCreateNewUser} className="fieldset">
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
