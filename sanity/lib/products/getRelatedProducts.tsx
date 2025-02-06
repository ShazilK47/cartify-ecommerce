import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getRelatedProducts = async (
  slug: string,
  categoryIds: string[]
) => {
  if (!categoryIds || categoryIds.length === 0) return [];

  const RELATED_PRODUCTS_QUERY = defineQuery(`
    *[_type == "product" && references($categoryIds) && slug.current != $slug] 
    | order(name asc) [0...4] 
  `);

  try {
    const relatedProducts = await sanityFetch({
      query: RELATED_PRODUCTS_QUERY,
      params: {
        categoryIds,
        slug,
      },
    });

    return relatedProducts.data || [];
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
};
