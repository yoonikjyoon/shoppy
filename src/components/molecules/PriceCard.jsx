import React from "react";
import styled from "styled-components";
import StyledPadding from "../atoms/StyledPadding";
import { formatNumber } from "../../utils/number";

export default function PriceCard({ text, price }) {
  return (
    <Container>
      <ContainerText>{text}</ContainerText>
      <StyledPadding height={10} />
      <PriceText>₩ {formatNumber(price)}</PriceText>
    </Container>
  );
}
const Container = styled.div`
  border-radius: 10px;
  padding: 30px;
  background-color: var(--lavender-very-light-color);
  text-align: center;
  flex-shrink: 0;
`;
const ContainerText = styled.p`
  color: var(--lavender-dark-color);
`;
const PriceText = styled.p`
  font-weight: bold;
  color: var(--logo-color);
`;
