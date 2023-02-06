import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({ path, children }) {
  return <Link to={path}>{children}</Link>;
}
