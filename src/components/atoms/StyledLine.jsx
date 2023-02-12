import React from "react";
import styled from "styled-components";

export default function StyledLine({ margin, backgroudnColor }) {
  return <LineContainer margin={margin} backgroudnColor={backgroudnColor} />;
}
const LineContainer = styled.div`
  height: 0.5px;
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : "#909090"};
  margin: ${(props) => (props.margin ? `0px ${props.margin}px` : "0px")};
`;
