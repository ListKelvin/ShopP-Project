import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Carousel } from "react-responsive-carousel";

export const CarouselStyled = styled(Carousel)`
  padding: 20px;
  & .carousel {
    text-align: center;
  }
`;

export const ProductName = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #55abab;
`;

export const ProductEvaluated = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
