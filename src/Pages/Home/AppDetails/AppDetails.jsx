import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const allAppData = useLoaderData();

  // all state
  const [appData, setAppData] = useState({});
  const [isInstall, setIsInstall] = useState(false);

  //   to set the right app in app data
  useEffect(() => {
    async function filterNews() {
      allAppData.map((app) => {
        if (app.id == id) {
          setAppData(app);
        }
      });
    }
    filterNews();
  }, [id, allAppData]);

  const {
    thumbnail,
    name,
    developer,
    downloads,
    category,
    rating,
    description,
    features,
    publish_date,
    version,
    download_size,
    license,
    reviews,
  } = appData;

  // console.log(allAppData);
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-40">
          <img
            className="w-full rounded-2xl border-2 border-gray-200"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="space-y-3 md:py-3">
          <h2 className="md:text-2xl font-semibold">{name}</h2>
          <h4 className="text-gray-500">{category}</h4>
          <button
            onClick={() => {
              setIsInstall(!isInstall);
            }}
            className="btn btn-primary"
          >
            {isInstall === false ? "Install" : "Uninstall"}
          </button>
        </div>
      </div>
      <div className="divider"></div>
      {/* second section of app details */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-between gap-10 ">
        <div>
          <h2 className="text-lg font-medium">Downloaded</h2>
          <p className="text-gray-500 ">{downloads}</p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Ratting</h2>
          <p className="text-gray-500 flex gap-2 justice">
            {rating}
            <IoIosStar size={20} color="gold" />
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Version</h2>
          <p className="text-gray-500 flex items-center justice">{version}</p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Download Size</h2>
          <p className="text-gray-500 flex items-center justice">
            {download_size}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Publish Date</h2>
          <p className="text-gray-500 flex items-center justice">
            {publish_date}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Developer</h2>
          <p className="text-gray-500 flex items-center justice">{developer}</p>
        </div>
      </div>
      <div className="divider"></div>
      {/* third section of app details */}
      <div>
        <h2 className="text-xl font-semibold">Features</h2>
        {features?.map((feature, index) => (
          <p className="text-gray-500" key={index}>
            {feature}
          </p>
        ))}

        <h2 className="text-xl font-semibold mt-5">Description</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      {/* review section */}
      <div className="mt-5">
        <h2 className="text-xl font-semibold mb-4">Users review</h2>
        <div className="h-56 space-y-3">
          {reviews?.map((review, index) => {
            // console.log(review.user);
            return (
              <div key={index} className="border border-gray-300 p-3 rounded-2xl">
                <h3 className="text-sm font-medium">{review.user}</h3>
                <p className="text-xs flex items-center gap-2">Rating: {review.rating} <IoIosStar color="gold"/></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
