import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <h1>Hello World </h1>
      {/* render all the products */}
      <Button>click me</Button>
    </div>
  );
}
