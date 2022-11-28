import styled from "styled-components";
export const TableStyle = styled.table `
    border-collapse: collapse;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    font-style: normal;
`;
export const BodyStyle = styled.tbody`
        font-weight: lighter;
        line-height: 27px;
    `;
export const Header = styled.tr`
    background-color: #55ABAB;
    color: white;
    text-align: "center";
    width: 100px;
    height: 60px;
`;
export const ShopStyle = styled.tr`
    border-top: 0.5px solid #55ABAB;
    border-bottom: 1px solid #55ABAB;
    background-color: #B6E3E3;
`;
export const CheckBoxStyle = styled.th`
    width: 5%;
`;
export const ProductWidth = styled.th`
    text-align: left;
    width: 50%;
`;
export const PriceWidth = styled.th`
    width: 15%;
`;
export const LikeWidth = styled.th`
    width: 15%;
`;
export const ActionWidth = styled.th`
    width: 15%;
`;

export const Image = styled.th`
    width: 20%;
    height: 90px;
`;
export const ProductName = styled.th`
    width: 30%;
    word-break: keep-all;
    font-weight: 400;
`;

export const Select = styled.th`
    width: 5%;
`;
export const Delete = styled.th`
    color: red;
    width: 5%;
`;

export const spaceBreak = styled.tr`
    width: 100%;
    height: 20px;
    color: ccc;
`;

export const ProductStyle = styled.tr`
    background-color: #B6E3E3;
`;

export const FooterStyle = styled.tr`
    background-color: #B6E3E3;
    border-bottom: 3px solid #55ABAB;
`;

export const Typo = styled.span`
    font-weight: 400;
`;


export const Disable = styled.tr`
  background-color: #dddddd;
  cursor: not-allowed;
`;