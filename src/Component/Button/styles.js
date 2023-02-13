import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 100px;
  width: auto;
  height: 32px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #55abab;
  border-radius: 8px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12),
      0px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const LightButton = styled(BaseButton)`
  background: #b6e3e3;
  color: #000000;
`;
export const WhiteButton = styled(BaseButton)`
  background: #ffffff;
  border-radius: 5px;
  color: #000000;
`;

export const StyleResetButton = styled(BaseButton)`
  width: 100%;
  border-radius: 6px;
  font-size: 16px;
  padding: 26px 0;
`;
export const StyleButton = styled(BaseButton)`
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  background: ${(props) => (props.disable ? "#fff" : "#55abab")};
  color: ${(props) => (props.disable ? "#ccc" : "#ffffff")};
  border: 1px solid ${(props) => (props.disable ? "#ccc" : "none")};
  box-shadow: ${(props) =>
    props.disable ? "none" : `0px 4px 4px rgba(0, 0, 0, 0.25);`};
  &:hover {
    box-shadow: ${(props) =>
      props.disable
        ? "none"
        : `0px 2px 2px rgba(0, 0, 0, 0.14) 0px 3px 1px rgba(0, 0, 0, 0.12)
  0px 1px 5px rgba(0, 0, 0, 0.2)`};
  }
`;
