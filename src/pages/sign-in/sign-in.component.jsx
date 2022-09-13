import { Formik } from "formik";
import FormikControl from "../../Component/FormikControl";
import { FormContainer } from "./sign-in.styles";
import { BaseButton, OutlinedButton } from "../../Component/Button.styles";
import { Container } from "@mui/system";
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
    // email: Yup.string()
    //   .email("Invalid email format")
    //   .required("Required")
    //   .matches(
    //     /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
    //     "Your email must match the following formats"
    //   ),
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

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Container maxWidth="lg">
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
                control="radio"
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
            </FormContainer>
          );
        }}
      </Formik>
    </Container>
  );
};

export default SignInComponent;
