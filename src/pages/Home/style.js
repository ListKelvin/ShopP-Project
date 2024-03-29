import styled, { keyframes } from "styled-components";
import { LinkStyle } from "../sign-up/Components/SignUpForm.styles";
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  background-color: blueviolet;
  text-align: center;
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  margin-top: 120px;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Link = styled.a`
  color: #61dafb;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;
export const AlignCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ProductLink = styled(LinkStyle)`
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12),
      0px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;
