import styled from "styled-components";
import { up, down, createTheme } from "styled-breakpoints";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const Title = styled.h1`
  color: #2f5e5e;
`;

export const Layout = styled.div`
    display: flex;
    align-items: center;
    justify- content: center;

    margin-top: 50px;

    ${up("lg")} {
        width: none;
    }

    ${down("md")} {
        width: 100%;
    }

    ${down("sm")} {
        width: 100%;
    }

`;

export const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #b6e3e3;
  border-radius: 20px;
  padding: 40px;

  ${down("md")} {
    width: 100%;
  }

  ${down("sm")} {
    width: 100%;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  ${down("sm")} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const InfInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ImgInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  width: 250px;
  height: 250px;
  background: #55abab;
  border-radius: 20px;
`;

export const Upload = styled.img`
  width: 100%;
  clip-path: circle(30%);
`;

export const TextBox = styled(TextField)`
  width: 484px;
  height: 54px;
  border-radius: 5px;
  background: white;

  ${down("md")} {
    width: 425px;
  }

  ${down("sm")} {
    width: 350px;
  }
`;

export const ButtonStyled = styled(Button)`
  margin-top: 25px;
  background-color: #55abab;
  font-color: #333333;
`;

export const Verify = styled.div``;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
`;
