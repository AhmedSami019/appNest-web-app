import React, { useState } from "react";

const AddReview = () => {
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(true);
    // console.log(submit);
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You want to send this massage!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#ff4f00",
    //   cancelButtonColor: "#6f6e72",
    //   confirmButtonText: "Send",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Submitted!",
    //       text: "Your massage has been deleted.",
    //       icon: "success",
    //       timer: 1500,
    //     });
    //   }
    // });
  };

  return (
    <div className="flex justify-center mt-5 ">
      <div className="bg-[#dddddd] w-full rounded-2xl p-10">
        <h2 className="text-xl font-semibold mb-5">Add review</h2>
        <form
          onSubmit={handleSubmit}
          action=""
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* this is first name section */}
          <div className="w-full col-span-2 md:col-span-1">
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                className="w-full"
                type="text"
                required
                placeholder="first name"
              />
            </label>
          </div>

          {/* this is last name */}
          <div className="w-full col-span-2 md:col-span-1">
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                className="w-full"
                type="text"
                required
                placeholder="last name"
              />
            </label>
          </div>

          {/* this is email section */}
          <div className="w-full col-span-2 md:col-span-1">
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                className="w-full"
                type="email"
                placeholder="mail@site.com"
                required
              />
            </label>
          </div>

          {/* this is phone section */}
          <div className="w-full col-span-2 md:col-span-1">
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <input
                type="tel"
                className="tabular-nums w-full"
                placeholder="phone"
                required
              />
            </label>
          </div>

          {/* this is text area */}
          <textarea
            className="textarea w-full col-span-2 resize-none h-40"
            placeholder="What you want to know..."
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className={`btn btn-primary text-white col-span-2`}
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
