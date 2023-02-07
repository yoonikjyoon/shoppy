import React from "react";
import styled from "styled-components";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <>
      <UserImage
        src={photoURL}
        alt={displayName}
        referrerPolicy="no-referrer"
      />
      {/* <UserName>{displayName}</UserName> */}
    </>
  );
}

const Container = styled.div`
  /* width: 32px;
  height: 32px; */
  /* display: flex; */
`;
const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const UserName = styled.p`
  font-size: var(--font-micro);
`;
