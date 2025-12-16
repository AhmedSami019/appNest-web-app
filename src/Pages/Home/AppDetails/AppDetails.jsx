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

  console.log(appData);
  return (
    <div>
      <h2>this is app details page</h2>
    </div>
  );
};

export default AppDetails;
