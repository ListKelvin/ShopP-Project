import React, { useRef } from "react";
import { Formik } from "formik";
import FormikControl from "../../Component/FormikControl";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import AVaUnknow from "../../assets/Avaunknow/istockphoto-1223671392-612x612.jpg";
import PreviewImage from "./components/PreviewImage";
import { RegisterInfoContainer, RegisButton } from "./style";
import { Typography } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ValidationSchema } from "./schema/Validation";
import { Button } from "@mui/material";

const initialValues = {
  name: "",
  dateOfBirth: "",
  gender: "",
  phonenumber: "",
  placeOfDelivery: "",
  confirm: false,
  file: null,
};
const RegisterInfor = () => {
  const fileRef = useRef(null);
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Box
      sx={{
        widh: "100vw",
        height: "100vh",
        background: "#F2BB83",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, isValid, values }) => {
          console.log(values);
          return (
            <RegisterInfoContainer>
              <Typography
                sx={{
                  fontFamily: "League Spartan",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "48px",
                  lineHeight: "44px",
                  color: "#BA4E3A",
                }}
              >
                Register Information
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Grid
                    container
                    component="main"
                    sx={{
                      width: "500px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "50px",
                      },
                    }}
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <FormikControl
                        type="text"
                        sx={{
                          width: "475px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                        control="MuiInput"
                        label="name"
                        name="name"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <FormikControl
                        control="date"
                        sx={{
                          width: "320px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                        label="dateOfBirth"
                        name="dateOfBirth"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormikControl
                        type="text"
                        sx={{
                          width: "140px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                        control="MuiInput"
                        label="gender"
                        name="gender"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormikControl
                        control="MuiInput"
                        sx={{
                          width: "475px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                        label="Phone Number"
                        name="phonenumber"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormikControl
                        control="MuiInput"
                        sx={{
                          width: "475px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                        type="text"
                        label="placeOfDelivery"
                        name="placeOfDelivery"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormikControl
                        control="checkbox"
                        name="confirm"
                        label="I accept the ....."
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    padding: "0px 30px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {values.file ? (
                    <PreviewImage file={values.file} />
                  ) : (
                    <img src={AVaUnknow} alt="" width="150px" height="150px" />
                  )}
                  <input
                    hidden
                    ref={fileRef}
                    type="file"
                    onChange={(e) => {
                      setFieldValue("file", e.target.files[0]);
                    }}
                  />

                  <Button
                    onClick={() => {
                      fileRef.current.click();
                    }}
                    variant="outlined"
                    startIcon={<AddAPhotoIcon />}
                  >
                    Add a Photo
                  </Button>
                </Box>
              </Box>
              <RegisButton
                variant="contained"
                type="submit"
                // disabled={!formik.isValid}
              >
                Submit
              </RegisButton>
            </RegisterInfoContainer>
          );
        }}
      </Formik>
    </Box>
  );
  // <OutlinedButton variant="outlined" type="button">
  //   // Continue without Sign in //{" "}
  // </OutlinedButton>
};

export default RegisterInfor;
