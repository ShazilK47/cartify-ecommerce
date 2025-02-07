import FeaturesSection from "@/components/FeaturesSection";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <nav className="text-gray-500 text-sm mb-4">
            <span className="text-gray-700">Home</span> /{" "}
            <span className="font-semibold">About</span>
          </nav>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Founded in <span className="font-semibold">2025</span>,
            <span className="text-red-500 font-semibold">Cartify</span> is a
            next-generation e-commerce platform designed to redefine online
            shopping. With a focus on{" "}
            <span className="font-semibold">
              speed, convenience, and a seamless user experience{" "}
            </span>
            , Cartify is built to serve modern consumers who demand efficiency
            and quality in every purchase.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Starting with a{" "}
            <span className="font-semibold">handpicked selection</span> of
            top-quality products, Cartify is rapidly expanding to offer a wide
            range of{" "}
            <span className="font-semibold">
              electronics, fashion, home essentials, and lifestyle goods
            </span>
            . Our commitment to{" "}
            <span className="text-red-500 font-semibold">
              customer satisfaction
            </span>
            ,
            <span className="text-red-500 font-semibold">
              secure transactions
            </span>
            , and{" "}
            <span className="text-red-500 font-semibold">fast deliveries</span>{" "}
            sets us apart, making online shopping not just easy—but truly
            enjoyable.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/shopping.jpg"
            width={500}
            height={500}
            alt="women shopping"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>
      <FeaturesSection />
    </>
  );
}
