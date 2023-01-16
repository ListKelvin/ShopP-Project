import { useState } from "react";
import Wrapper from "../../Component/Wrapper";
import { DivStyle } from "./styled";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import SplitButton from "./SelectSplitButton/MuiComponent";
import Flexbox from "../../Component/Flexbox";
const CHARACTER_LIMIT = 1000;
const AddProductPage = () => {
  const [state, setState] = useState(0);
  return (
    <Wrapper widthNew="1100">
      <DivStyle>
        <Flexbox flexDirection="column">
          <InputLabelStyle htmlFor="label" required>
            Name
          </InputLabelStyle>
          <TextField
            id="label"
            fullWidth
            required
            inputProps={{
              classes: {
                root: classes.textField,
              },
            }}
            placeholder="Please enter product name"
            //   error
            //   onChange={(e) => {
            //     setEmail(e.target.value);
            //   }}
          />
        </Flexbox>

        <Flexbox style={{ marginTop: "10px" }}>
          <SplitButton />
        </Flexbox>
        <Flexbox flexDirection="column" style={{ marginTop: "10px" }}>
          <InputLabelStyle htmlFor="description" required>
            Description
          </InputLabelStyle>
          <TextField
            id="description"
            fullWidth
            required
            inputProps={{
              maxlength: CHARACTER_LIMIT,
              classes: {
                root: classes.textField,
              },
            }}
            multiline
            minRows={5}
            placeholder="Please enter a detailed description of the product"
            helperText=<span>{`${state}/${CHARACTER_LIMIT}`}</span>
            //   error
            //   onChange={(e) => {
            //     setEmail(e.target.value);
            //   }}
          />
        </Flexbox>
      </DivStyle>
    </Wrapper>
  );
};

export default AddProductPage;
export const InputLabelStyle = styled(InputLabel)({
  display: "flex",
  color: "#2F5E5E",
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  gap: "4px",
  fontWeight: "700",
  fontSize: "20px",
});
export const classes = styled((theme) => ({
  textField: {
    "&:focus": {
      borderColor: "red",
    },
  },
}));
