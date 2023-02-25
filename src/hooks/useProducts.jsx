import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts as fetchProducts, addNewProduct } from "../api/firebase";

export default function useProducts(category) {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(
    ["products", category || ""],
    () => fetchProducts(category),
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
