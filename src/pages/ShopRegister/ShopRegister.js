import * as React from 'react';
import { ButtonArea, Frame, ImgInput, InfInput, InputArea, Layout, TextBox, Title, Upload, ButtonStyled, Verify } from "./styles";
import FormControlLabel from '@mui/material/FormControlLabel';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const ShopRegister = () => {
  return (
    <>
      <Title>Shop Register</Title>
      <div style={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "OpenSans",
      }}>
        <Layout>
          <Frame>
            <InputArea>
              <InfInput>
                <TextBox label="Name"/>
                <TextBox label="Description" />
                <TextBox label="Email" />
                <TextBox label="Phone" />
                <TextBox label="Place of Recept" />
              </InfInput>
              <ImgInput>
                <Upload src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
                <Button variant="contained" component="label" startIcon={<AddIcon />} style={{background: "white", color: "grey"}}>
                  Upload Image
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </ImgInput>
            </InputArea>
            <Verify>
              <FormControlLabel control={<Checkbox style={{color: "#55abab"}}/>} label="I confirm those informations which is true" />
            </Verify>
            <ButtonArea>
              <ButtonStyled variant="contained" component="label" style={{background: "white", color: "grey"}}>Cancel</ButtonStyled>
              <ButtonStyled variant="contained" component="label" style={{background: "#55abab"}}>Register</ButtonStyled>
            </ButtonArea>
          </Frame>
        </Layout>
      </div>
    </>
  );
};

export default ShopRegister;
