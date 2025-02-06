import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  title: string;
  subtitle: string;
}
const ProductTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full py-6 sm:px-10 ">
      {/* Title Section */}
      <div className="title flex gap-3 items-center font-semibold text-[16px] text-[#DB4444]">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <p>{title}</p>
      </div>

      {/* Flash Sale Section */}
      <div className="flash-sales flex flex-wrap justify-between items-center mt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {subtitle}
        </h1>

        {/* Arrow Navigation */}
        {/* <div className="flex gap-2">
          <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#F5F5F5] flex justify-center items-center hover:bg-gray-300 transition">
            <FaArrowLeft />
          </button>
          <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#F5F5F5] flex justify-center items-center hover:bg-gray-300 transition">
            <FaArrowRight />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductTitle;
