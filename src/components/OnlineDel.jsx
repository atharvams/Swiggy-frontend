import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";
import URL from "../urlConfig";

function OnlineDel() {
  const [data, setData] = useState([]);

  async function getTopRestaurants() {
    const apiData = await fetch(import.meta.env.API_URL+"/top-restaurant-chains");
    const jsonData = await apiData.json();
    setData(jsonData);
  }

  useEffect(() => {
    getTopRestaurants();
  }, []);

  return (
    <div className="px-2 md:max-w-[1200px] h-full mx-auto mb-10">
      <div className="flex justify-between my-5 items-center mt-10">
        <div className="text-2xl font-bold">
          Top restaurant chains in Nanded
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 mb-10">
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default OnlineDel;
