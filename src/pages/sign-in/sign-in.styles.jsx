import styled from "styled-components";
import { Form } from "formik";
export const FormContainer = styled(Form)`
  display: flex;
  /* width: 544px; */
  /* height: 389px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  h2 {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 37px;
    text-align: center;
    color: #f6a746;
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
