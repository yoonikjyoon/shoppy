import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllProducts as fetchAllProducts,
  getCategoryProducts as fetchCategoryProducts,
  addNewProduct,
} from "../api/firebase";

export default function useProducts(category, lastKey = null) {
  const queryClient = useQueryClient();

  const fetchProducts = (category, lastKey) => {
    if (category) {
      return fetchCategoryProducts(category, lastKey);
    } else {
      return fetchAllProducts(lastKey);
    }
  };

  const productsQuery = useQuery(
    ["products", category, lastKey],
    () => fetchProducts(category, lastKey),
    {
      staleTime: 1000 * 60,
    }
  );

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );
  return { productsQuery, addProduct };
}
