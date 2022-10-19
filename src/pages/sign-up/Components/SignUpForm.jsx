import { Formik } from "formik";
import * as Yup from "yup";
import { post } from "../../../utils/ApiCaller";
import { LinkStyle } from "./SignUpForm.styles";
import { post } from "../../../utils/ApiCaller";
import FormikControl from "../../../Component/FormikControl";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import {
  RegisterButton,
  OutlinedRegister,
  FormSignUpContainer,
} from "../sign-up.styles";
// import Box from "@mui/material/Box";

const SignUpForm = () => {
  const initialValues = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email cannot be empty")
      .matches(
        /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Your email must match the following formats"
      ),
    password: Yup.string()
      .required("Required")
      .min(8, "Your password is too short.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must One Uppercase, One Lowercase, One Number and one special case Character."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),

    phone: Yup.string()
      .required("phonenumber cannot be empty")
      .matches(
        /^(01|03|05|07|08|09)+([0-9]{8})\b/,
        "Your phone does not right"
      ),
  });

  const onSubmit = (values) => {
    const responsess = post("/account/sign-up", values, {}, {})
      .then((data) => alert(data.data.message))
      .catch((err) => alert(err.response.data.message));
    const test = LocalStorageUtils.getUser();
    console.log("token:", test);
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <FormSignUpContainer>
            <h2>Register</h2>
            <FormikControl
              control="MuiInput"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="MuiInput"
              type="text"
              label="Phone number"
              name="phone"
            />

            <FormikControl
              control="MuiInput"
              type="password"
              label="Password"
              name="password"
            />

            <FormikControl
              control="MuiInput"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />

            <RegisterButton
              sx={{
                width: { xs: "220px", sm: "255px", md: "320px" },
              }}
              variant="contained"
              type="submit"
              disabled={!formik.isValid}
            >
              Register
            </RegisterButton>
            <LinkStyle to="/home">
              <OutlinedRegister
                sx={{
                  width: { xs: "220px", sm: "255px", md: "320px" },
                  fontSize: { xs: "0.775rem", sm: "0.875rem" },
                }}
                variant="outlined"
                type="button"
              >
                Continue without Sign in
              </OutlinedRegister>
            </LinkStyle>
          </FormSignUpContainer>

          // <Grid container justifyContent="center">
          //   <Grid item>
          //     <Link href="#" variant="body2">
          //       Already have an account? Sign in
          //     </Link>
          //   <Grid/>
          // <Grid/>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
