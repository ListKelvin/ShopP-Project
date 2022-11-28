import styled from "styled-components";
import { up, dowm } from "styled-breakpoints";
export const Background = styled.h1`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const Background2 = styled(Background)`
  background: grey;
`;
