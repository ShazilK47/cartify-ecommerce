import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar hidden md:block border-r">
      <div className="   mr-3  mt-10  pb-8 ">
        <ul className="flex flex-col pl-10 pr-6 gap-4">
          <li>
            <Link
              href="/categories/women-fashio"
              className="flex justify-between items-center"
            >
              Woman&apos;s Fashion <FaChevronDown className="-rotate-90 " />
            </Link>
          </li>
          <li>
            <Link
              href="/categories/man-fashion"
              className="flex justify-between items-center"
            >
              Man&apos;s Fashion <FaChevronDown className="-rotate-90" />
            </Link>
          </li>
          <li>
            <Link href="/categories/electronics">Electronics</Link>
          </li>
          <li>
            <Link href="/categories/home-appliances">Home & Lifestyle </Link>
          </li>
          {/* <li>
            <Link href="/">Medicine</Link>
          </li> */}
          <li>
            <Link href="/categories/sports">Sports & Outdoor</Link>
          </li>
          <li>
            <Link href="/categories/toys">Baby&apos;s Toys</Link>
          </li>
          <li>
            <Link href="/categories/groceires">Groceries & Pets</Link>
          </li>
          <li>
            <Link href="/categories/beauty">Health & Beauty</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
