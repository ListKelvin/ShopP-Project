import * as Yup from "yup";
import FormikControl from "../../../Component/FormikControl";
import { Formik } from "formik";
import Wrapper from "../../../Component/Wrapper";
import Flexbox from "../../../Component/Flexbox";
import { FormStyled, ButtonStyled } from "../styles";
import Button from "../../../Component/Button";
const FormResetPassword = ({ location }) => {
  const { state } = location;
  console.log(state.email);
  const initialValues = {
    email: `${state.email}`,
    otp: "",
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

    otp: Yup.string()
      .required("Please enter your OTP")
      .max(6, "Your OTP is too long."),
  });
  const onSubmit = (values, { resetForm }) => {
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
          <FormStyled>
            <FormikControl
              control="MuiInput"
              type="text"
              label="Email"
              name="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />
            <FormikControl
              control="MuiInput"
              type="text"
              label="OTP"
              name="otp"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />
            <FormikControl
              control="MuiInput"
              type="password"
              label="Password"
              name="password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />

            <FormikControl
              control="MuiInput"
              type="password"
              label="Confirm password"
              name="confirmPassword"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />

            <Button buttonType={"reset"}> Reset password</Button>
          </FormStyled>
        );
      }}
    </Formik>
  );
};

export default FormResetPassword;
