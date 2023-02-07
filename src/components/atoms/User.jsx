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
    </>
  );
}

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
