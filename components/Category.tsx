import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaClock,
} from "react-icons/fa";
import ProductTitle from "./ProductTitle";
import Link from "next/link";

const categories = [
  { name: "Phones", icon: <FaMobileAlt /> },
  { name: "Computers", icon: <FaLaptop /> },
  { name: "SmartWatch", icon: <FaClock /> },
  { name: "Camera", icon: <FaCamera /> },
  { name: "HeadPhones", icon: <FaHeadphones /> },
  { name: "Gaming", icon: <FaGamepad /> },
];

const Category = () => {
  return (
    <>
      <div className="ml-4">
        <ProductTitle title="Categories" subtitle="Browse By Category" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#DB4444] hover:bg-[#DB4444] cursor-pointer hover:text-white"
          >
            <Link href={`/categories/${category.name}`}>
              <div className="text-3xl">{category.icon}</div>{" "}
            </Link>

            <p className="mt-2 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
