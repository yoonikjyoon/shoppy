import { useCallback } from "react";

export default function useBodyScroll() {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const openScroll = useCallback(() => {
    document.body.style.removeProperty("overflow");
  }, []);
  return { lockScroll, openScroll };
}
