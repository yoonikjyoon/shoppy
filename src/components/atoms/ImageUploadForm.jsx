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
          <p>대표 사진을 업로드 해주세요</p>
        )}
        <StyledPadding height={15} />
        {/* label tag */}
        <InputButton htmlFor="file">
          파일 선택
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
  border: 1px solid var(--lavender-color);
  border-radius: 5px;
  width: 100%;
  min-height: 150px;
  padding: 10px;
  text-align: center;
  color: var(--grey-dark-color);
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
  background-color: var(--grey-light-color);
  color: var(--white-color);
  &:hover {
    filter: brightness(1.1);
  }
`;
