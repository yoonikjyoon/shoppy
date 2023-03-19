import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getProducts as fetchProducts, addNewProduct } from "../api/firebase";

export default function useProducts(category, lastKey) {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(
    ["products", category || "", lastKey],
    () => fetchProducts(category, lastKey),
    {
      staleTime: 1000 * 60,
    }
  );
  // const productsQuery = useInfiniteQuery(
  //   ["products", category || ""],
  //   () => fetchProducts(category, lastKey),
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
