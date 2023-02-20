import { useState, useRef } from "react";
import { ImageUpload, AddButton, ImgStyled } from "../styled";
import Flexbox from "../../../Component/Flexbox";
import AddIcon from "@mui/icons-material/Add";
import { FormHelperText } from "@mui/material";
import { InputLabelStyle } from "..";
const UploadImg = (props) => {
  const { files, setFiles, preview, setPreview } = props;

  const fileRef = useRef(null);
  const reader = new FileReader();

  function handleChange(e) {
    const selectedFiles = Array.from(e.target.files);

    if (files.length + 1 > 5) {
      alert("You can only select  5 files");
    } else {
      setFiles([...files, ...selectedFiles]);
      reader.onload = function (e) {
        setPreview([...preview, e.target.result]);
      };
      selectedFiles.forEach((file) => reader.readAsDataURL(file));
    }
  }
  console.log(files);
  return (
    <Flexbox flexDirection="column" style={{ marginTop: "10px" }} gap="10px">
      <InputLabelStyle htmlFor="addImg" required>
        Add Image
      </InputLabelStyle>
      <FormHelperText id="addImg">
        Please upload images under 10MB or Video under 1 minute and under 30MB
        MP4/JPG/PNG/JPEG
      </FormHelperText>
      <Flexbox
        flexDirection="row-reverse"
        style={{ marginTop: "10px" }}
        justifyContent="flex-end"
        gap="10px"
      >
        <ImageUpload type="button" onClick={() => fileRef.current.click()}>
          <AddButton className="add-btn">
            <AddIcon />
          </AddButton>
          <input
            ref={fileRef}
            hidden
            type="file"
            multiple
            onChange={handleChange}
          ></input>
          <p> Add Image/Video (1/5)</p>
        </ImageUpload>

        {preview.map((img, i) => (
          <ImgStyled key={i} src={img} alt={i} />
        ))}
      </Flexbox>
    </Flexbox>
  );
};

export default UploadImg;
