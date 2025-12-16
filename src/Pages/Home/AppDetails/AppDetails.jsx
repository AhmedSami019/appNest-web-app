import React, { useEffect, useState } from "react";
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

  const {thumbnail, name, developer, downloads, category, rating, description, features, } = appData

//   console.log(appData);
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-40">
            <img className="w-full rounded-2xl border-2 border-gray-200" src={thumbnail} alt="" />
        </div>
        <div className="space-y-3 py-2">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h4 className="text-gray-500">{category}</h4>
            <button className="btn btn-primary">Install</button>
        </div>
      </div>
      <div>
        <div>
            <h2>Downloaded</h2>
            <p>{downloads}</p>
        </div>
        <div>
            <h2>Ratting</h2>
            <p>{rating}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AppDetails;
