import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import { useState } from "react";
import { TextFieldStyled } from "../styled";
import Flexbox from "../../../Component/Flexbox";
import { InputLabelStyle } from "..";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
export function IncreaseDecreaseInput(props) {
  const { name, action, value } = props;

  const [helperText, setHelperText] = useState("");
  function handleIncrease() {
    action(parseInt(value) + 1);
  }

  function handleDecrease() {
    action(value - 1);
  }
  function handleChange(event) {
    const inputValue = event.target.value;
    if (!/^\d+$/.test(inputValue) || inputValue <= 0) {
      setHelperText("Please enter a number.");
    } else {
      action(inputValue);
      setHelperText("");
    }
  }

  return (
    <Flexbox flexDirection="column" gap="9px">
      <div>
        <InputLabelStyle htmlFor="label" required>
          {name}
        </InputLabelStyle>
      </div>
      <div>
        <ButtonGroup variant="outlined" size="small">
          <ButtonStyled onClick={handleDecrease} size="small">
            <RemoveIcon />
          </ButtonStyled>
          <TextFieldStyled
            size="small"
            helperText={helperText}
            error={helperText !== ""}
            sx={{
              height: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0px",
              },
            }}
            value={value}
            onChange={handleChange}
          />
          <ButtonStyled onClick={handleIncrease} size="small">
            <AddIcon />
          </ButtonStyled>
        </ButtonGroup>
      </div>
    </Flexbox>
  );
}
export const ButtonStyled = styled(Button)`
  color: #666666;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  // font-size: 16px;

  &:hover {
    color: #2f5e5e;
    border: 1px solid #2f5e5e;
  }
`;
