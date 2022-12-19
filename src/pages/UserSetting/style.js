import styled from "styled-components";
import { up, down, between, only, createTheme } from "styled-breakpoints";
export const Container = styled.div`
  display: flex;
  padding: 2rem 5rem;
  justify-content: space-around;
  ${down("sm")} {
    display: flex;
    justify-content: center;
  }
`;
export const ContainerAdditional = styled.div`
  width: 100%;
`;
