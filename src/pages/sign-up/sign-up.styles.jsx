import { styled } from "@mui/material";
import { BaseButton, OutlinedButton } from "../../Component/Button.styles";
import Box from "@mui/material/Box";
import { FormContainer } from "../sign-in/sign-in.styles";

export const RegisterButton = styled(BaseButton)`
  width: 255px;
  height: 45px;
`;

export const OutlinedRegister = styled(OutlinedButton)`
  width: 255px;

  height: 45px;
`;
export const FormSignUpContainer = styled(FormContainer)`
  height: 560px;
  padding-bottom: 10px;
`;
export const BoxStyle = styled(Box)`
  width: 380px;
  height: 615px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
