import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const allAppData = useLoaderData();

  // all state
  const [appData, setAppData] = useState({});

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

  const {thumbnail, name, developer, downloads, category, rating, description, features, publish_date, version, download_size, license } = appData

//   console.log(appData);
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-40">
            <img className="w-full rounded-2xl border-2 border-gray-200" src={thumbnail} alt="" />
        </div>
        <div className="space-y-3 py-3">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h4 className="text-gray-500">{category}</h4>
            <button className="btn btn-primary">Install</button>
        </div>
      </div>
<div className="divider"></div>
      {/* second section of app details */}
      <div className="flex flex-col md:flex-row justify-between gap-10 ">
        <div>
            <h2 className="text-lg font-medium">Downloaded</h2>
            <p className="text-gray-500 ">{downloads}</p>
        </div>
        <div>
            <h2 className="text-lg font-medium">Ratting</h2>
            <p className="text-gray-500 flex gap-2 justice">{rating}<IoIosStar size={20} color="gold"/></p>
        </div>
        <div>
            <h2 className="text-lg font-medium">Version</h2>
            <p className="text-gray-500 flex items-center justice">{version}</p>
        </div>
        <div>
            <h2 className="text-lg font-medium">Download Size</h2>
            <p className="text-gray-500 flex items-center justice">{download_size}</p>
        </div>
        <div>
            <h2 className="text-lg font-medium">Publish Date</h2>
            <p className="text-gray-500 flex items-center justice">{publish_date}</p>
        </div>
        <div>
            <h2 className="text-lg font-medium">Developer</h2>
            <p className="text-gray-500 flex items-center justice">{developer}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
