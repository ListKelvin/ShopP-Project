import styled, { css } from "styled-components";
import { TextField } from "@mui/material";
export const DivStyle = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 1rem;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
`;
export const ImageUpload = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  flex-direction: column;
  width: 160px;
  height: 160px;
  border: 2px dashed #d9d9d9;
  cursor: pointer;
  margin-left: 10px;
  p {
    font-weight: 400;
    font-size: 16px;
    // line-height: 100%;

    text-align: center;
  }
  &:hover .add-btn {
    border: 2px dashed #45ce7c;
  }
  :hover {
    border: 2px dashed #45ce7c;
  }
`;
export const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px dashed #d9d9d9;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const AddClassification = styled.button`
  display: ${(props) => (props.show ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: fit-content;
  background-color: #fff;
  height: 40px;
  border: 2px dashed #2f5e5e;
  border-radius: 5px;
  cursor: pointer;
  .add-btn {
    color: #2f5e5e;
  }
  :hover {
    border: 2px dashed #45ce7c;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    // line-height: 100%;
    color: #2f5e5e;
    text-align: center;
  }
`;
export const TextFieldStyled = styled(TextField)`
  border: none;
  border-left: none;
  border-right: none;
  border-radius: 0px;
  text-align: center;
  width: 50%;
`;
export const ImgStyled = styled.img`
  width: 160px;
  height: 160px;
  border: 2px dashed #d9d9d9;
  cursor: pointer;
  margin-left: 10px;
  object-fit: cover;
`;

export const VariantsContainer = styled.div`
  max-width: 300px;
  background: rgba(182, 227, 227, 0.3);
  border-radius: 10px;
  padding: 20px;
  height: 120px;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;

  gap: 10px;
`;
