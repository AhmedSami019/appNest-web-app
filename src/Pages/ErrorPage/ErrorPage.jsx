import React from "react";
import notFoundImg from "../../assets/tranding-app-image/not-found-404.svg";

const ErrorPage = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-20 space-y-10">
      <h2 className="text-2xl md:text-4xl text-center font-semibold">
        Page not found
      </h2>
      <img className="mx-auto my-auto" src={notFoundImg} alt="" />
      <div className="flex flex-col items-center mt-10 text-center space-y-3">
        <h2 className="text-2xl font-medium">there is no route like this</h2>
        <p className="text-gray-500">you want to go in home route?</p>
        <button className="btn btn-primary mx-auto">Go home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
