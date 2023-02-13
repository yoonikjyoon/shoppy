import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  // cart 전체가아니라 사용자인 uid별로 캐싱이 되도록 설정,
  // 하지만 비로그인상태이면 query가 실행되지않도록 enabled 설정
  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation(
    //firebase에서 제공한는 함수
    (product) => addOrUpdateToCart(uid, product),
    {
      // 추가되거나 수정되면 invalidateQueries 실행 -> carts && uid인 것만 !! (로그인한 사용자만!)
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );
  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    // firebase 함수
    // 삭제되면 invalidateQueries 실행 -> carts && uid인 것만!! (로그인한 사용자만!)
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
