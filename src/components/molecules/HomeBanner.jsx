import React from "react";
import styled from "styled-components";
import StyledPadding from "../atoms/StyledPadding";

export default function HomeBanner() {
  return (
    <Container>
      <BackgroundImage
        src={require("../../assets/bgImage.JPG")}
        alt="background image in home banner"
      />
      {/* <BackgroundContainer /> */}
      <StyledPadding height={20} />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 60%;
`;
// const BackgroundContainer = styled.div`
//   width: 100%;
//   height: 400px;
//   background-image: url("../../assets/bgImage.JPG");
//   background-position: center;
//   background-size: cover;
// `;
