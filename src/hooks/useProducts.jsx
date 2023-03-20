import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllProducts as fetchAllProducts,
  getCategoryProducts as fetchCategoryProducts,
  addNewProduct,
} from "../api/firebase";

export default function useProducts(lastKey, category) {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(
    ["allProducts", lastKey],
    () => fetchAllProducts(lastKey),
    {
      staleTime: 1000 * 60,
    }
  );
  // const productCategoryQuery = useQuery(
  //   ["categoryProducts", category],
  //   () => fetchCategoryProducts(category),
  //   {
  //     staleTime: 1000 * 60,
  //   }
  // );

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );
  return { productsQuery, addProduct };
}
