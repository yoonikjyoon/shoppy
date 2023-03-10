import React from "react";
import styled from "styled-components";
import StyledPadding from "../atoms/StyledPadding";

export default function HomeBanner() {
  return (
    <Container>
      <BackgroundImage
        src={require("../../static/images/bgImage.JPG")}
        alt="background image in home banner"
      />
      <BackgroundContainer>
        <h2>Shop With Us</h2>
        <p>Best Products, High Quality</p>
      </BackgroundContainer>
      <StyledPadding height={20} />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  object-position: 50% 60%;
`;
const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  text-align: center;
  color: var(--color-white);
  font-family: var(--font-cutive);
`;
