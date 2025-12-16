import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { Link, useLoaderData } from "react-router";

import 'swiper/css';
import 'swiper/css/free-mode';

const TrendingApp = () => {

    const appsData = useLoaderData()

    const trendingApp = appsData.filter(app => app.is_trending === true)


  return (
    <div className="w-full space-y-5">
        <h2 className="text-3xl font-bold">All Trending Apps </h2>
      <Swiper
      modules={[FreeMode]}
      spaceBetween={16} // base spacing
      freeMode
      className="py-4"
      breakpoints={{
        320: { slidesPerView: 3, spaceBetween: 10 },   // small devices
        768: { slidesPerView: 5, spaceBetween: 15 },   // medium devices
        1024: { slidesPerView: 7, spaceBetween: 20 },  // large devices
      }}
    >
      {trendingApp.map((app) => (
        <SwiperSlide key={app.id}>
          <Link to={`category/${app.id}`} className="card rounded-xl overflow-hidden">
            {/* Image */}
            <figure className="relative h-35 lg:h-50 border-2 rounded-2xl border-gray-300">
              <img
                src={app.thumbnail}
                alt={app.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <h3 className="text-sm lg:text-lg font-medium mt-2 px-2">{app.name}</h3>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>

  );
};

export default TrendingApp;
