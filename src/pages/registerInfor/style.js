import styled from "styled-components";
import { up, down, between, only, createTheme } from "styled-breakpoints";
import { FormContainer } from "../sign-in/sign-in.styles";
import { BaseButton } from "../../Component/Button.styles";
export const RegisterInfoContainer = styled(FormContainer)`
  width: 886px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 30px 20px;

  ${down("lg")} {
    padding: 10px 20px;
    width: 600px;
  }
  ${down("sm")} {
    width: 300px;
  }
`;
export const RegisButton = styled(BaseButton)`
  width: 144px;
  max-width: 200px;
  height: 36px;
  border-radius: 20px;
`;
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 
  width: 100%;
`;
