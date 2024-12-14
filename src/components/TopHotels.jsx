import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";
import URL from "../urlConfig";

function TopHotels() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);

  async function getTopRestaurants() {
    const apiData = await fetch(URL.API_URL+"top-restaurant-chains");
    const jsonData = await apiData.json();
    setData(jsonData);
  }
  
  function slideLeft() {
    if (number === 0) {
      return;
    }
    setNumber((number) => number - 3);
  }

  function slideRight() {
    if (number === 12) {
      return;
    }
    setNumber((number) => number + 3);
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
        <div className="flex ">
          <div onClick={() => slideLeft()} className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#02060c26] mx-2 cursor-pointer">
            <FaArrowLeft />
          </div>
          <div onClick={() => slideRight()} className=" flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#02060c26] mx-2 cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-8 overflow-hidden mt-10">
            {
                data.map((item, index)=>{
                    return(
                        <Card {...item} key={index} width="w-full  md:w-[270px]" number={number}/>
                    )
                })
            }
      </div>
      <hr className="mt-10 border-[1px]" />
    </div>
  );
}

export default TopHotels;
