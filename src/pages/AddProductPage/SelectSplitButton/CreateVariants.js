import Flexbox from "../../../Component/Flexbox";
import { InputLabelStyle } from "..";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import { AddClassification, VariantsContainer } from "../styled";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import { InputLabel } from "@mui/material";
const CreateVariants = () => {
  const [variants, setVariants] = useState();
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("");
  function handleKeyChange(event) {
    setKey(event.target.value);
  }

  return (
    <Flexbox gap="20px" style={{ marginTop: "1rem" }} alignItems="center">
      <InputLabelStyle htmlFor="classify" required>
        Classify
      </InputLabelStyle>
      <AddClassification show={show} onClick={() => setShow(!show)}>
        <AddIcon lassName="add-btn" />
        <p>Add classification group</p>
      </AddClassification>
      <VariantsContainer show={show}>
        <Flexbox flexDirection="column" gap="10px">
          <KeyInput
            variant="outlined"
            fullWidth
            placeholder="Enter your text here"
            size="small"
            value={key}
            onChange={handleKeyChange}
          />
          <Flexbox gap="20px" alignItems="center">
            <ValueInput size="small" value={key} onChange={handleKeyChange} />
            <ValueInput size="small" value={key} onChange={handleKeyChange} />
            <ValueInput size="small" value={key} onChange={handleKeyChange} />
          </Flexbox>
        </Flexbox>
        <IconButton color="error" onClick={() => setShow(!show)}>
          <DeleteIcon />
        </IconButton>
      </VariantsContainer>
    </Flexbox>
  );
};

export default CreateVariants;
export const KeyInput = styled(TextField)({
  "&	.MuiOutlinedInput-root": {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    color: "#2F5E5E",
    cursor: "text",
    zIndex: 100,
    // padding: "0px 20px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2F5E5E",
  },
  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1E3C3C",
    },
  },
});
export const ValueInput = styled(TextField)({
  "	.MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    color: "#2F5E5E",
    maxWidth: "70px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2F5E5E",
  },
  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1E3C3C",
    },
  },
});
