import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules"; // 1. Added Navigation
import { Link, useLoaderData } from "react-router";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const EducationApp = () => {
  const appsData = useLoaderData();
  const educationApp = appsData.filter((app) => app.category === "Education");

  return (
    <div className="w-full space-y-5 relative">
      {" "}
      {/* Added relative for button positioning */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">All Education Apps</h2>

        {/* 3. One-sided Navigation Buttons (Top Right) */}
        <div className="flex gap-2">
          <button className="education-prev btn btn-circle btn-xs lg:btn-sm btn-outline">
            ❮
          </button>
          <button className="education-next btn btn-circle btn-xs lg:btn-sm btn-outline">
            ❯
          </button>
        </div>
      </div>
      <Swiper
        modules={[FreeMode, Navigation]} // 4. Included Navigation module
        spaceBetween={16}
        freeMode
        className="py-4"
        navigation={{
          // 5. Linked to custom classes
          nextEl: ".education-next",
          prevEl: ".education-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 15 },
          1024: { slidesPerView: 7, spaceBetween: 20 },
        }}
      >
        {educationApp.map((app) => (
          <SwiperSlide key={app.id}>
            <Link
              to={`category/${app.id}`}
              className="card rounded-xl overflow-hidden"
            >
              <figure className="relative h-25 w-25 md:h-35 md:w-35 lg:h-45 lg:w-55 border-2 rounded-2xl border-gray-300">
                <img
                  src={app.thumbnail}
                  alt={app.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <h3 className="text-sm lg:text-lg font-medium mt-2 px-2 truncate">
                {app.name}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EducationApp;
