import styled from "styled-components";
import {
  Title,
  TitleAfter,
  TitleDiv,
} from "../UserVouchers/Components/styleComponents";

export const TitlePurchaseDiv = styled(TitleDiv)``;
export const TitlePurchase = styled(Title)``;
export const TitlePurchaseAfter = styled(TitleAfter)`
  width: calc(7.5em * 8);
`;

export const OrderContainer = styled.div`
  width: 100%;
`;
export const TexOverflow = styled.div`
  display: inline-block;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
