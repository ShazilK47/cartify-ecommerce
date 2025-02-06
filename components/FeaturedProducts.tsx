import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/images/ps5.png",
  },
  {
    id: 2,
    title: "Women's Collections",
    description: "Featured women collections that give you another vibe.",
    image: "/images/women.png",
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers.",
    image: "/images/speakers.png",
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: "/images/perfume.png",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10">
      <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className={`relative p-4 flex justify-center items-centers rounded-lg overflow-hidden group bg-black ${
              product.id === 1
                ? "md:row-span-2 pt-52"
                : product.id === 2
                  ? "md:column-span-2"
                  : ""
            }`}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="max-w-full max-h-full sm:h-72 object-contains transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm">{product.description}</p>
              <button className="mt-2 text-sm font-medium underline">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
