import React from "react";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import { AiFillGithub } from "react-icons/ai";
import StyledPadding from "../atoms/StyledPadding";

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <LeftWrap>
          <a href="https://github.com/yoonikjyoon">
            <AiFillGithub fill="#b9b9e9" />
          </a>
          <StyledPadding width={5} />
          <span> About Us</span>
        </LeftWrap>
        <RightWrap>
          <Logo size={20} fontSize="font-base" />
        </RightWrap>
      </Container>
    </FooterWrap>
  );
}
const FooterWrap = styled.footer`
  width: 100vw;
  padding: 30px 0px;
  margin-top: 3rem;
  border-top: 1px solid var(--color-lavender-very-light);
`;
const Container = styled.div`
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-lavender-light);
`;
const RightWrap = styled.div``;
