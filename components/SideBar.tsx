/* eslint-disable tailwindcss/no-custom-classname */
// import Link from "next/link";
// import { FaChevronDown } from "react-icons/fa";

// const SideBar = () => {
//   return (
//     <div className="sidebar hidden md:block border-r">
//       <div className="   mr-3  mt-10  pb-8 ">
//         <ul className="flex flex-col pl-10 pr-6 gap-4">
//           <li>
//             <Link
//               href="/categories/women-fashio"
//               className="flex justify-between items-center"
//             >
//               Woman&apos;s Fashion <FaChevronDown className="-rotate-90 " />
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/categories/man-fashion"
//               className="flex justify-between items-center"
//             >
//               Man&apos;s Fashion <FaChevronDown className="-rotate-90" />
//             </Link>
//           </li>
//           <li>
//             <Link href="/categories/electronics">Electronics</Link>
//           </li>
//           <li>
//             <Link href="/categories/home-appliances">Home & Lifestyle </Link>
//           </li>
//           {/* <li>
//             <Link href="/">Medicine</Link>
//           </li> */}
//           <li>
//             <Link href="/categories/sports">Sports & Outdoor</Link>
//           </li>
//           <li>
//             <Link href="/categories/toys">Baby&apos;s Toys</Link>
//           </li>
//           <li>
//             <Link href="/categories/groceires">Groceries & Pets</Link>
//           </li>
//           <li>
//             <Link href="/categories/beauty">Health & Beauty</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import {
  IoShirtOutline,
  IoWatchOutline,
  IoHomeOutline,
  IoFitnessOutline,
  IoCartOutline,
} from "react-icons/io5";

const SideBar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <div className="sidebar ml-9 hidden w-64 border-r bg-white shadow-lg md:block">
      <div className="mt-10 pb-8">
        <ul className="flex flex-col gap-4 px-6">
          {/* Women's Fashion */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("womensFashion")}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-gray-700 transition-all hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <IoShirtOutline className="text-xl text-[#DB4444]" />
                Women&apos;s Fashion
              </span>
              <FaChevronDown
                className={`text-sm transition-transform ${
                  openDropdown === "womensFashion" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <ul
              className={`overflow-hidden transition-all ${
                openDropdown === "womensFashion" ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <li className="ml-8 py-1">
                <Link
                  href="/categories/women-dresses"
                  className="text-gray-600 hover:text-[#DB4444]"
                >
                  Dresses
                </Link>
              </li>
              <li className="ml-8 py-1">
                <Link
                  href="/categories/women-shoes"
                  className="text-gray-600 hover:text-[#DB4444]"
                >
                  Shoes
                </Link>
              </li>
              <li className="ml-8 py-1">
                <Link
                  href="/categories/women-accessories"
                  className="text-gray-600 hover:text-[#DB4444]"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </li>

          {/* Men's Fashion */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("mensFashion")}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-gray-700 transition-all hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <IoWatchOutline className="text-xl text-[#DB4444]" />
                Men&apos; Fashion
              </span>
              <FaChevronDown
                className={`text-sm transition-transform ${
                  openDropdown === "mensFashion" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <ul
              className={`overflow-hidden transition-all ${
                openDropdown === "mensFashion" ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <li className="ml-8 py-1">
                <Link
                  href="/categories/men-shirts"
                  className="text-gray-600 hover:text-[#DB4444]"
                >
                  Shirts
                </Link>
              </li>
              <li className="ml-8 py-1">
                <Link
                  href="/categories/men-shoes"
                  className="text-gray-600 hover:text-[#DB4444]"
                >
                  Shoes
                </Link>
              </li>
              <li className="ml-8 py-1">
                <Link
                  href="/categories/men-watches"
                  className="text-gray-600 hover:text-[#DB4444]"
                >
                  Watches
                </Link>
              </li>
            </ul>
          </li>

          {/* Other Categories */}
          <li className="rounded-lg px-4 py-3 transition-all hover:bg-gray-100">
            <Link
              href="/categories/electronics"
              className="flex items-center gap-2"
            >
              <IoCartOutline className="text-xl text-[#DB4444]" />
              Electronics
            </Link>
          </li>
          <li className="rounded-lg px-4 py-3 transition-all hover:bg-gray-100">
            <Link
              href="/categories/home-appliances"
              className="flex items-center gap-2"
            >
              <IoHomeOutline className="text-xl text-[#DB4444]" />
              Home & Lifestyle
            </Link>
          </li>
          <li className="rounded-lg px-4 py-3 transition-all hover:bg-gray-100">
            <Link href="/categories/sports" className="flex items-center gap-2">
              <IoFitnessOutline className="text-xl text-[#DB4444]" />
              Sports & Outdoor
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
