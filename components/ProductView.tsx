import { Product, Category } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import CategorySelectorComponent from "./ui/category-selector";

interface ProductViewProps {
  products: Product[];
  categories?: Category[];
}

const ProductView = ({ products, categories }: ProductViewProps) => {
  return (
    <div className="flex flex-col">
      {/* categories */}
      {categories && (
        <div className="w-full  sm:w-[200px]  md:hidden">
          <CategorySelectorComponent categories={categories} />
        </div>
      )}

      {/* products */}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
