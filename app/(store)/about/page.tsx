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
          <p className="text-gray-600 leading-relaxed mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Exclusive has more than 1 million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to fashion and technology.
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
