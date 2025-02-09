/* eslint-disable tailwindcss/no-custom-classname */
interface Props {
  title: string;
  subtitle: string;
}
const ProductTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full py-6 sm:px-10 ">
      {/* Title Section */}
      <div className="title flex items-center gap-3 text-[16px] font-semibold text-[#DB4444]">
        <div className="h-10 w-5 rounded-sm bg-[#DB4444]"></div>
        <p>{title}</p>
      </div>

      {/* Flash Sale Section */}
      <div className="flash-sales mt-5 flex flex-wrap items-center justify-between">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
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
