import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return <>{isMobile && children}</>;
};

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  return <>{isDesktop && children}</>;
};
