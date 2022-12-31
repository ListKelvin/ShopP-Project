import styled from "styled-components";
import Flexbox from "../../../Component/Flexbox";

export const PurchaseContainer = styled(Flexbox)`
    flex-direction: column;
    padding: 0 0;
`;

export const HeaderContainer = styled(Flexbox)`
    border-top: 1px solid rgba(186, 78, 58, 0.5);
    border-bottom: 1px solid rgba(186, 78, 58, 0.5);
    padding: 0.25em 0;
    margin-top: 0.5em;
    align-items: center;
`;

export const TitleContainer = styled(Flexbox)`
    align-items: center;
`;
export const StatusContainer=styled(TitleContainer)`
    padding-right: 2em;
    justify-content: right;
`;     
export const NameDiv = styled(Flexbox)`
    justify-content: center;
    flex-direction:column;
    height: 5em;
    width: 60%;
`;

export const PriceDiv = styled(Flexbox)`
    align-items: center;
    height: 5em;
    width: 15%;
`;
export const TotalDiv = styled(Flexbox)`
    flex-direction: column;
    align-items: center;
    width: 15%;
    justify-content: center;
`;

export const ImgDiv = styled(Flexbox)`
    width: 10%;
    align-items: center;
`;

export const BodyContainer = styled(Flexbox)`
    align-items: center;
    height: 6em;
    padding-top: 0.5em;
`;