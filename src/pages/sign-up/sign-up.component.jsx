import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SignUpForm from "./Components/SignUpForm";
import { BoxStyle } from "./sign-up.styles";
const SignUp = () => {
  return (
    <Container
      component="div"
      maxWidth={false}
      sx={{
        background: "#f2bb83",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <BoxStyle>
        <SignUpForm />
      </BoxStyle>
    </Container>
  );
};

export default SignUp;
// edit button
//
