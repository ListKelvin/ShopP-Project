import styled, { keyframes } from "styled-components";

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
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* justify-content: space-between; */
`;
