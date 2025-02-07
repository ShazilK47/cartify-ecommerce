import AddToBasketButton from "@/components/AddToBasketButton";
import ProductTitle from "@/components/ProductTitle";
import ProductView from "@/components/ProductView";
import { imageUrl } from "@/lib/ImageUrl";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { getRelatedProducts } from "@/sanity/lib/products/getRelatedProducts";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 60;

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const relatedProducts = await getRelatedProducts(
    slug,
    product?.categories?.map((cat) => cat._ref) || []
  );

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> Rendered the product page cache for ${slug}`
  );

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2   gap-8 px-4">
        <div
          className={`relative md:max-h-[26rem] aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain  transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="text-xl font-semibold mb-4">
              $ {product.price?.toFixed(2)}
            </div>
            <div className="prose max-w-none mb-6">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>
          </div>

          <div className="mt-6 relative group">
            <AddToBasketButton product={product} disabled={isOutOfStock} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-12 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-black text-white text-xs px-3 py-1 rounded-md">
              Add to Cart
            </span>
          </div>
        </div>
      </div>

      {/*Related Products */}
      <ProductTitle title={`Related Items`} subtitle={`Related Products`} />

      {relatedProducts.length > 0 ? (
        <ProductView products={relatedProducts} />
      ) : (
        <p className="text-gray-500 pl-14">No related products found.</p>
      )}
    </div>
  );
};

export default ProductPage;
