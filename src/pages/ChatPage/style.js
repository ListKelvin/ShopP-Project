import styled from "styled-components";
export const ChatBoxWrapper = styled.div`
  background-color: white;
  width: ${(props) => (props.show ? "300px" : "0px")};
  height: ${(props) => (props.show ? "400px" : "0px")};
  position: fixed;
  bottom: 20px;
  right: 20px;
  //   display: ${(props) => (props.show ? "block" : "none")};
  border-radius: 5px;
  box-shadow: 0 0 10px lightgray;
  transform: translateX(0);
  transform-origin: bottom right;
  transition: width 0.25s cubic-bezier(0.4, 0.8, 0.74, 1);
`;
