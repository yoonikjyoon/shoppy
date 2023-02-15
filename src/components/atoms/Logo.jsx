import React from "react";
import styled from "styled-components";

const LogoSize = 40;
export default function Logo({ size = LogoSize, showName = true }) {
  return (
    <LogoWrap width={size} height={size}>
      <img src={require("../../static/images/logo_white.png")} alt="shoppy" />
      {showName && <span>Shoppy</span>}
    </LogoWrap>
  );
}
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-family: var(--font-cutive);
  font-size: var(--font-x-large);
  font-weight: bold;
  color: var(--color-lavender-light);
  & > img {
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    filter: invert(0%) sepia(46%) saturate(2000%) hue-rotate(188deg)
      brightness(111%) contrast(82%);
  }
`;
