import React from "react";
import styled from "styled-components";
import StyledPadding from "./StyledPadding";

export default function ImageUploadForm({ file, handleChange }) {
  return (
    <Container>
      <InnerContainer>
        {file ? (
          <InputImage src={URL.createObjectURL(file)} alt="local file" />
        ) : (
          <p>Please select a main image</p>
        )}
        <StyledPadding height={15} />
        {/* label tag */}
        <InputButton htmlFor="file">
          choose a file
          <input
            type="file"
            id="file"
            accept="image/*"
            name="file"
            required
            onChange={handleChange}
          />
        </InputButton>
      </InnerContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  border: 1px solid var(--color-lavender);
  border-radius: 5px;
  width: 100%;
  min-height: 150px;
  padding: 10px;
  text-align: center;
  color: var(--color-gray-dark);
`;
const InnerContainer = styled.div`
  margin: auto;
`;
const InputImage = styled.img`
  width: 200px;
`;
const InputButton = styled.label`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--color-gray-light);
  color: var(--color-white);
  &:hover {
    filter: brightness(1.1);
  }
`;
