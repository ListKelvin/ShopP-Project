import styled from "styled-components";
import { up, down, between, only, createTheme } from 'styled-breakpoints';
import Button from '@mui/material/Button';

const theme = createTheme({
    xs: '500px',
    sm: '680px',
    md: '795px',
    lg: '900',
    xl: '980',
  });
  
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
    ${down('md')} {
        font-size: 14px;
    }
    ${down('sm')} {
        font-size: 12px;
    }
`;
export const CheckBoxStyle = styled.th`
    width: 5%;
    ${down('sm')} {
        width: 4%;
    }
`;
export const ProductWidth = styled.th`
    text-align: left;
    ${down('md')} {
        width: 71%;
        font-size: 14px;
    }
    ${down('sm')} {
        font-size: 12px;
    }
`;
export const OtherWidth = styled.th`
    width: 12%;
    ${down('md')} {
        min-width: 76px;
        font-size: 14px;
    }
    ${down('sm')} {
        min-width: 60px;
        font-size: 12px;
    }
`;

export const Image = styled.th`
    width: 10%;
    height: 110px;
    ${down('sm')} {
        height: 70px;
        display: flex;
        align-items: center;
    }
`;
export const ProductName = styled.th`
    font-weight: 400;
    ${down('lg')} {
        font-size: 14px;
        line-height: 20px;
    }
    
    ${down('sm')} {
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        margin-bottom: 7px;
    }
    
    
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
    ${down('lg')} {
        font-size: 14px;
    }
    ${down('sm')} {
        font-size: 12px;
    }

`;

export const FooterStyle = styled.tr`
    background-color: #B6E3E3;
    border-bottom: 3px solid #55ABAB;
`;

export const Typo = styled.div`
    font-weight: 400;
    ${down('lg')} {
        font-size: 14px;
    }
    ${down('sm')} {
        font-size: 10px;
    }
`;

export const Disable = styled.tr`
  background-color: #dddddd;
  cursor: not-allowed;
`;



export const WishlistButton =styled(Button) `
    ${up('xl')} {
        margin-left: 100px;
    }
`;

export const TypoButton = styled.div`
    text-transform: none;
    margin-left: 5px;
    
    ${down('sm')} {
        font-size: 11px;
    }
    
`;

export const TypoSoldOut = styled.div`
    color: red;
    font-size: 14px;
    ${down('lg')} {
        font-size: 12px;
    }
    
    ${down('sm')} {
        font-size: 10px;
    }
`;

export const ImageItem = styled.img`
    width: 136px;
    height: 70px;
    vertical-align: middle;
    border-radius: 3px;
    ${down('md')} {
        width: 100px;
        height: 50px;
    }
    
    ${up('sm')} {
        margin-right: 7px;
    }
    
    ${down('sm')} {
        align-items: center;
        justify-content: center;
        margin: 0;
    }
`;

export const ResponProduct = styled.th`
    text-align: left;
    ${down('md')} {
        font-size: 14px;
    }
    ${down('sm')} {
        font-size: 11px;
        display: flex;
        flex-direction: column;
    }
`;