import React from "react";
import styled from "styled-components";

export default function StyledPadding({ width, height }) {
  return <PaddingContainer width={width} height={height} />;
}
const PaddingContainer = styled.div`
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => props.height && `${props.height}px`};
`;
