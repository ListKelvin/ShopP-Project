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
export const ProductTag = styled.th`
    text-align: left;
    width: 50%;
`;
export const PriceTag = styled.th`
    width: 10%;
`;
export const AmountTag = styled.th`
    width: 10%;
`;
export const TotalTag = styled.th`
    width: 10%;
`;
export const ActionTag = styled.th`
    width: 10%;
`;

export const Image = styled.th`
    width: 10%;
`;
export const ProductName = styled.th`
    width: 30%;
    word-break: keep-all;
`;

export const Select = styled.th`
    width: 5%;
`;
export const Delete = styled.th`
    color: red;
    width: 5%;
`;

export const spaceBreak = styled.tr`
    height: 5px;
    color: white;
`;

export const ProductStyle = styled.tr`
    background-color: #B6E3E3;
`;

export const FooterStyle = styled.tr`
    background-color: #B6E3E3;
    border-bottom: 3px solid #55ABAB;
`;