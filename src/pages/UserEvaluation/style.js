import styled from "styled-components";
import { up, down, between, only, createTheme } from "styled-breakpoints";
import { Button } from "@mui/material";

export const EvaluationDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const EvaluationsContainer = styled.div`
    width: 90%;
    background: white;
    border-radius: 8px;
    padding: 1em;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const EvaluationTitle = styled.div`
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #2F5E5E;
    text-transform: uppercase;
`;

export const ProductEvaluation = styled.div`
    background: rgba(182, 227, 227, 0.5);
    border-radius: 4px;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    justify-content: space-between;
`;

export const Feedback = styled.div`
    font-family: 'Open sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    width: 98%;
`;

export const ProductImageContainer = styled.div`
    display: flex;
    height: 5rem;
    margin-top: 0.3rem;
`;

export const ProductImage = styled.div`
    width: 5rem;
    object-fit: cover;
`;

export const EvaluationContent = styled.div`
width: 70%;

`;

export const EvaluationButton = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`;

export const ButtonStyle = styled(Button)`
    font-family: "Open sans", sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
`;
export const TopContainer = styled.div`
    display: flex;
`;
export const BottomContainer = styled.div`
    margin-top: 0.5rem;
    margin-left: 2.5rem;
`;
export const AvatarBox = styled.div`
`;
export const NameRatingBox = styled.div`
    margin-left: 0.5rem;
`;
export const UserName = styled.div``;

export const TimeClassiContainer = styled.div`

`;
export const LikeDiv = styled.div`
    display: flex;
    margin-top: .4rem;
`;
export const Like = styled.div`
    display: none;
    cursor: pointer;
`;
export const Unlike = styled.div`
    /* display: none; */
    cursor: pointer;
`;

export const Able = styled.div`
    display: none;
`;
export const Unable = styled.div`
    /* display: block; */
`;
export const WrapperAble = styled.div`

    display: ${(props)=>{
        return props.show ? "block": "none" 
    }};
`

export const WarningContainer = styled.div`
    font-family: "OpenSans", sans-serif;
    font-size: .75rem;
    line-height: .85rem;
    color: #EB5757;
    margin-top: 1rem;
    display: flex;
`;

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;