import styled from "styled-components";

import { FormContainer } from "../sign-in/sign-in.styles";
import { BaseButton } from "../../Component/Button.styles";
export const RegisterInfoContainer = styled(FormContainer)`
  width: 886px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
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
  margin-bottom: 20px;
  width: 100%;
`;
