import styled from "styled-components";
import { Form } from "formik";
import { Link } from "react-router-dom";
export const IconKey = styled.div`
  background: ${(props) => props.backGround};
  border-radius: 100px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #55abab;
`;
export const Heading = styled.h1``;
export const SubHeading = styled.h4`
  width: 70%;
  text-align: center;
  color: #bababa;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`;

export const FormStyled = styled(Form)`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const LinkBacked = styled(Link)`
  text-decoration: none;
  color: #bababa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonStyled = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: #55abab;
`;
