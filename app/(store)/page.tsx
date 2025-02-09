/* eslint-disable tailwindcss/no-custom-classname */
import Category from "@/components/Category";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ProductTitle from "@/components/ProductTitle";
import ProductView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //     `>>> Rendered the home page cache with ${products.length} products and ${categories.length} categories`
  // );

  return (
    <div>
      <HeroSection />
      {/* <BlackFridayBanner /> */}
      {/* render all the products */}
      <div
        className="justify-top flex min-h-screen flex-col items-center bg-white p-4"
        id="products"
      >
        <ProductTitle title="Our Products" subtitle="Explore Our Products" />
        <ProductView products={products} categories={categories} />
      </div>

      <Category />
      <FeaturedProducts />

      <FeaturesSection />
    </div>
  );
}
