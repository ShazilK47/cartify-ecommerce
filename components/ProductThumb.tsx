// import { imageUrl } from "@/lib/ImageUrl";
// import { Product } from "@/sanity.types";
// import Image from "next/image";
// import Link from "next/link";

// const ProductThumb = ({ product }: { product: Product }) => {
//   const isOutOfStock = product.stock != null && product.stock <= 0;

//   return (
//     <Link
//       href={`/product/${product.slug?.current}`}
//       className={`group flex flex-col bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
//     >
//       <div className="relative aspect-square w-full h-full overflow-hidden">
//         {product.image && (
//           <Image
//             className="object-contain transition-transform duration-300 group-hover:scale-185"
//             src={imageUrl(product.image).url()}
//             alt={product.name || "Product image"}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//         )}

//         {isOutOfStock && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <span className="text-white font-bold text-lg">Out of Stock</span>
//           </div>
//         )}
//       </div>

//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800 truncate">
//           {product.name}
//         </h2>

//         <p className="mt-2 text-sm text-gray-600 line-clamp-2">
//           {product.description
//             ?.map((block) =>
//               block._type === "block"
//                 ? block.children?.map((child) => child.text).join("")
//                 : ""
//             )
//             .join(" ") || "No description available"}
//         </p>
//         <p className="mt-2 text-lg font-bold text-gray-900">
//           ${product.price?.toFixed(2)}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export default ProductThumb;

import { imageUrl } from "@/lib/ImageUrl";
import { Product } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

const ProductThumb = ({ product }: { product: Product }) => {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
        isOutOfStock ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.02]"
      } max-w-sm w-full`}
    >
      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {product.image && (
          <Image
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            src={imageUrl(product.image).url()}
            alt={product.name || "Product image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <span className="text-white font-medium tracking-wide text-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-lg font-medium text-gray-900 truncate">
          {product.name}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {product.description
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ") || "No description available"}
        </p>

        <p className="mt-2 text-xl font-semibold text-[#DB4444]">
          ${product.price?.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductThumb;
