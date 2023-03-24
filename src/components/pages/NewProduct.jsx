import React, { useState } from "react";
import styled from "styled-components";
import { uploadImage } from "../../api/uploader";
import AnimatedInputForm from "../atoms/AnimatedInputForm";
import Button from "../atoms/Button";
import ImageUploadForm from "../atoms/ImageUploadForm";
import useProducts from "../../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState(); // image는 url만 넘어가므로 따로 설정
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("The product has been sucessfully added!");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <Container>
      <StyledTitle>ADD NEW PRODUCT</StyledTitle>
      {success && <p>✅{success}</p>}
      <StyledForm onSubmit={handleSubmit}>
        <ImageUploadForm file={file} handleChange={handleChange} />
        <AnimatedInputForm
          type="text"
          name="title"
          text="Name"
          value={product.title || ""}
          handleChange={handleChange}
        />
        <AnimatedInputForm
          type="number"
          name="price"
          text="Price"
          value={product.price || ""}
          handleChange={handleChange}
        />
        <AnimatedInputForm
          type="text"
          name="category"
          text="Category"
          value={product.category || ""}
          handleChange={handleChange}
        />
        <AnimatedInputForm
          type="text"
          name="description"
          text="Description"
          value={product.description || ""}
          handleChange={handleChange}
        />
        <AnimatedInputForm
          type="text"
          name="options"
          text="Options - seperated by comma(,)"
          value={product.options || ""}
          handleChange={handleChange}
        />
        <Button
          text={isUploading ? "Uploading..." : "ADD"}
          type="submit"
          disabled={isUploading}
        />
      </StyledForm>
    </Container>
  );
}
const Container = styled.div`
  padding: 30px;
  width: 100%;
  margin-top: 3.5rem;
`;
const StyledTitle = styled.h3`
  text-align: center;
  color: var(--color-lavender-dark);
`;
const StyledForm = styled.form`
  display: grid;
  grid-gap: 13px;
  margin-top: 15px;
`;
