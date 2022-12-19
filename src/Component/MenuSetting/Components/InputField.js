import * as React from "react";
import * as Yup from "yup";
import { toastSuccess, toastError } from "../../ToastNotification";
import Box from "@mui/material/Box";
import authApi from "../../../utils/productApiComponent/authApi";
import UpdatePassButton from "./UpdatePassButton";
import { CancelButton } from "./CancelButt";
import { Formik, Form } from "formik";
import FormikControl from "../../FormikControl";
export default function FormPropsTextFields() {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .required("Required")
      .min(8, "Your password is too short.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Old password must One Uppercase, One Lowercase, One Number and one special case Character."
      ),
    newPassword: Yup.string()
      .required("Required")
      .min(8, "Your password is too short.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must One Uppercase, One Lowercase, One Number and one special case Character."
      ),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), ""], "New passwords must match")
      .required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    authApi.postChangePassword(values).then((res) => {
      if (res.response.status === 400) {
        resetForm();
        toastError(res.response.data.message);
      } else {
        toastSuccess(res.data.message);
      }
    });
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
          <Box
            component={Form}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "2rem",
              "& > :not(style)": {
                m: 1,
                width: { xl: "1000px", md: "800px", sm: "500px", xs: "280px" },
                height: { xl: "40px", xs: "60px" },
              },
            }}
          >
            <FormikControl
              control="MuiInput"
              type="password"
              label="Old password"
              name="oldPassword"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />
            <FormikControl
              control="MuiInput"
              type="password"
              label="New password"
              name="newPassword"
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
              name="confirmNewPassword"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <UpdatePassButton
                // sx={{
                //   width: { xs: "220px", sm: "255px", md: "320px" },
                // }}
                // variant="contained"
                type="submit"
                disabled={!formik.isValid}
              />
              <CancelButton />
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
}
// <Box
// onSubmit={handleSubmit}
// style={{
//   textAlign: "center",
// }}
// component="form"
// sx={{
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "column",

//   "& > :not(style)": {
//     m: 1,
//     width: { xl: "1000px", md: "800px", sm: "500px", xs: "280px" },
//     height: { xl: "40px", xs: "60px" },
//   },
// }}

// noValidate
// autoComplete="off"
// >
// <FormControl
//   sx={{ m: 1, width: "25ch", height: { xl: "56px", sm: "30px" } }}
//   variant="outlined"
//   required
//   style={{ marginTop: "40px" }}
// >
//   <InputLabel htmlFor="outlined-adornment-current-password">
//     Current Password
//   </InputLabel>
//   <OutlinedInput
//     id="outlined-adornment-current-password"
//     type={values.showPassword ? "text" : "password"}
//     value={values.oldPassword}
//     onChange={handleChange("oldPassword")}
//     startAdornment={
//       <InputAdornment position="start">
//         <LockIcon />
//       </InputAdornment>
//     }
//     endAdornment={
//       <InputAdornment position="end">
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={handleClickShowPassword}
//           onMouseDown={handleMouseDownPassword}
//           edge="end"
//         >
//           {values.showPassword ? <VisibilityOff /> : <Visibility />}
//         </IconButton>
//       </InputAdornment>
//     }
//     label="Current Password"
//   />
// </FormControl>
// <FormControl
//   sx={{ m: 1, width: "25ch", height: { xl: "56px", sm: "30px" } }}
//   variant="outlined"
//   required
//   style={{ marginTop: "40px" }}
// >
//   <InputLabel htmlFor="outlined-adornment-new-password">
//     New Password
//   </InputLabel>
//   <OutlinedInput
//     id="outlined-adornment-new-password"
//     type={values.showPassword ? "text" : "password"}
//     value={values.newPassword}
//     onChange={handleChange("newPassword")}
//     startAdornment={
//       <InputAdornment position="start">
//         <LockIcon />
//       </InputAdornment>
//     }
//     endAdornment={
//       <InputAdornment position="end">
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={handleClickShowPassword}
//           onMouseDown={handleMouseDownPassword}
//           edge="end"
//         >
//           {values.showPassword ? <VisibilityOff /> : <Visibility />}
//         </IconButton>
//       </InputAdornment>
//     }
//     label="New Password"
//   />
// </FormControl>
// <FormControl
//   sx={{ m: 1, width: "25ch", height: { xl: "56px", sm: "30px" } }}
//   variant="outlined"
//   required
//   style={{ marginTop: "40px" }}
// >
//   <InputLabel htmlFor="outlined-adornment-password">
//     Confirm Password
//   </InputLabel>
//   <OutlinedInput
//     id="outlined-adornment-password"
//     type={values.showPassword ? "text" : "password"}
//     value={values.confirmPassword}
//     onChange={handleChange("confirmPassword")}
//     startAdornment={
//       <InputAdornment position="start">
//         <LockIcon />
//       </InputAdornment>
//     }
//     endAdornment={
//       <InputAdornment position="end">
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={handleClickShowPassword}
//           onMouseDown={handleMouseDownPassword}
//           edge="end"
//         >
//           {values.showPassword ? <VisibilityOff /> : <Visibility />}
//         </IconButton>
//       </InputAdornment>
//     }
//     label="Confirm Password"
//   />
// </FormControl>
// <UpdatePassButton type="submit" />
// <CancelButton />
// </Box>
