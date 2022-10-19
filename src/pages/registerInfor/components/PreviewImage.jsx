import React, { useState } from "react";
import { PreviewContainer } from "../style";
const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <PreviewContainer>
      {preview ? (
        <img
          src={preview}
          alt="preview"
          width="150px"
          height="150px"
          style={{ borderRadius: "100px" }}
        />
      ) : (
        "Loading..."
      )}
    </PreviewContainer>
  );
};

export default PreviewImage;
