import { Formik } from "formik";
import FormikControl from "../../Component/FormikControl";
import { FormContainer } from "./sign-in.styles";
import { BaseButton, OutlinedButton } from "../../Component/Button.styles";
import { Box } from "@mui/system";
import { post } from "../../utils/ApiCaller";

import CssBaseline from "@mui/material/CssBaseline";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import * as Yup from "yup";
const SignInComponent = () => {
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
    data2.emailOrPhone = values.email;
    data2.password = values.password;
    console.log(data2);

    const response = post("/auth/login", data2, {}, {})
      .then((data) => console.log(data))
      .catch((err) => console.error(err.response.data));

    console.log("Form data", values);
  };
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
                      label="Email"
                      name="email"
                    />
                    <FormikControl
                      // control="input"
                      control="MuiInput"
                      type="password"
                      label="Password"
                      name="password"
                    />
                    <FormikControl
                      control="select"
                      label="Sign In With "
                      name="phoneOrEmail"
                      options={options}
                    />

                    <BaseButton
                      variant="contained"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Submit
                    </BaseButton>
                    <OutlinedButton variant="outlined" type="button">
                      Continue without Sign in
                    </OutlinedButton>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
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
