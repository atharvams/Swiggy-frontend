import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import URL from "../urlConfig";

function Category() {
  const [categories, setCategories] = useState([]);
  const [number, setNumber] = useState(0);

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

  async function fetchCategory() {
    const data = await fetch(URL.API_URL+"categories");
    const jsonData = await data.json();
    setCategories(jsonData);
  }

  useEffect(() => {
    const data = fetchCategory();
  }, []);

  return (
    <div className="px-2`` md:max-w-[1200px] h-full mx-auto">
      <div className="flex justify-between my-5 items-center mt-10">
        <div className="text-2xl font-bold">What's on your mind?</div>
        <div className="flex ">
          <div
            onClick={() => slideLeft()}
            className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#02060c26] mx-2 cursor-pointer"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={() => slideRight()}
            className=" flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#02060c26] mx-2 cursor-pointer"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden mt-10 z-[-99]">
        {categories.map((item, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${number * 100}%)`,
              }}
              className="w-[150px] shrink-0 duration-500"
            >
              <img
                src={URL.API_URL+"images/" + item.image}
                alt={item.path}
              />
            </div>
          );
        })}
      </div>
      <hr className="mt-10 border-[1px]" />
    </div>
  );
}

export default Category;
