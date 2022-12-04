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

export const SmallDescription = styled.span`
  font-weight: 400;
  color: #464646;
`;

export const ContainerAdditional = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShopVoucherContainer = styled.div`
  margin-top: -4px;
  margin-bottom: 25px;
  margin-left: -4px;
  padding: 4px;
  color: #222;
  display: flex;
  align-items: flex-start;
  & .title {
    color: #757575;
    width: 110px;
    text-transform: capitalize;
    flex-shrink: 0;
    margin-right: 5px;
  }

  & .content {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    & .wrapper {
      display: flex;
      flex-direction: row;
      margin-left: 20px;
      margin-bottom: 10px;
      & > :nth-child(2) {
        margin-left: 10px;
      }
      & .description {
        & > span {
          margin-left: 20px;
        }
      }
      & .smallDescription {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        color: rgba(70, 70, 70, 0.84);
        & > span {
          margin-left: 20px;
        }
      }
    }
  }
`;
