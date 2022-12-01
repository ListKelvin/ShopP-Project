import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import FormikControl from "../../Component/FormikControl";
import { FormContainer } from "./sign-in.styles";
import { BaseButton, OutlinedButton } from "../../Component/Button.styles";
import { Box } from "@mui/system";
import { LinkStyle } from "../sign-up/Components/SignUpForm.styles";
import CssBaseline from "@mui/material/CssBaseline";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate, Navigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import * as Yup from "yup";

const SignInComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  console.log(message);
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    phoneOrEmail: "isEmail",
    email: "",
    password: "",
  };

  const options = [
    { key: "Email", value: "isEmail" },
    { key: "Telephone", value: "isTelephone" },
  ];
  const validationSchema = Yup.object({
    phoneOrEmail: Yup.string().required("Required"),
    email: Yup.string().when("phoneOrEmail", {
      is: "isEmail",
      then: Yup.string()
        .required("email cannot be empty")
        .matches(
          /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Your email must match the following formats"
        ),
      otherwise: Yup.string()
        .required("phonenumber cannot be empty")
        .matches(
          /^(01|03|05|07|08|09)+([0-9]{8})\b/,
          "Your phone does not right"
        ),
    }),
    password: Yup.string()
      .required("Required")
      .min(8, "Your password is too short.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must One Uppercase, One Lowercase, One Number and one special case Character."
      ),
  });
  const theme = createTheme();
  const onSubmit = (values) => {
    let data2 = {};
    data2.password = values.password;
    data2.emailOrPhone = values.email;

    setLoading(true);

    dispatch(login(data2))
      .unwrap()
      .then(() => {
        navigate("/home");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });

    console.log("Form data", values);
  };
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              px: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <FormContainer>
                    <h2>Login Account</h2>
                    <FormikControl
                      // control="input"
                      control="MuiInput"
                      placeholder="example@gmail.com"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      label="Email"
                      name="email"
                    />
                    <FormikControl
                      // control="input"
                      control="MuiInput"
                      type="password"
                      placeholder="asdQE123!@#"
                      // <FormikControl
                      //   control="select"
                      //   label="Sign In With "
                      //   name="phoneOrEmail"
                      //   options={options}
                      // />
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                      }}
                      label="Password"
                      name="password"
                    />
                    <Grid container sx={{ justifyContent: "space-between" }}>
                      <Grid item>
                        <FormikControl
                          control="checkbox"
                          label="Remember me"
                          labelPlacement="start"
                          sx={{
                            fontFamily: "Open Sans",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "16px",
                            marginLeft: "0px",
                            lineHeight: "21px",
                          }}
                        />
                      </Grid>
                      <Grid item sx={{ display: "flex", alignItems: "center" }}>
                        <Link href="#">Forgot password?</Link>
                      </Grid>
                    </Grid>
                    <BaseButton
                      variant="contained"
                      type="submit"
                      disabled={!formik.isValid}
                      sx={{
                        width: {
                          xs: "220px",
                          sm: "255px",
                          md: "320px",
                        },
                      }}
                    >
                      Submit
                    </BaseButton>
                    <LinkStyle to="/home">
                      <OutlinedButton
                        variant="outlined"
                        type="button"
                        sx={{
                          width: {
                            xs: "220px",
                            sm: "255px",
                            md: "320px",
                          },
                        }}
                      >
                        Continue without Sign in
                      </OutlinedButton>
                    </LinkStyle>
                    <Grid
                      container
                      sx={{ justifyContent: "center", marginTop: "10px" }}
                    >
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    {message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {message}
                        </div>
                      </div>
                    )}
                  </FormContainer>
                );
              }}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInComponent;
