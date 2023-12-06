import React from "react";
import { BsBasket } from "react-icons/bs";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-5  rounded-full cursor-pointer ${isActive ? "bg-purple-600 text-white" : "bg-blue-500"}`}>
        <BsBasket />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
