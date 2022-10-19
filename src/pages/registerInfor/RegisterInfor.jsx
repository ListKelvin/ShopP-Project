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
import { Container } from "@mui/system";
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
    // <Container maxWidth={false} sx={{ background: "#F2BB83", height: "100vh" }}>
    <Box
      sx={{
        widh: "100vw",
        // height: "100%",
        minHeight: "100vh",
        padding: "74px 30px",
        background: "#F2BB83",
        display: "flex",
        alginItems: "center",
        justifyContent: "center",
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
                  marginBottom: "20px",
                }}
              >
                Register Information
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Grid
                    container
                    component="main"
                    sx={{
                      width: { lg: "500px", sm: "340px", xs: "215px" },
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
                          width: {
                            lg: "475px",
                            md: "335px",
                            xs: "200px",
                            sm: "335px",
                          },
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                        control="MuiInput"
                        label="name"
                        name="name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <FormikControl
                        control="date"
                        sx={{
                          width: { lg: "320px", xs: "200px", sm: "210px" },

                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                        label="dateOfBirth"
                        name="dateOfBirth"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormikControl
                        type="text"
                        sx={{
                          width: { lg: "135px", sm: "97px", xs: "200px" },
                          marginLeft: { sm: "10px" },
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
                          width: { lg: "475px", xs: "200px", sm: "335px" },

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
                          width: { lg: "475px", xs: "200px", sm: "335px" },
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
                    marginBottom: { xs: "20px", md: "0px" },
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
    // </Container>
  );
  // <OutlinedButton variant="outlined" type="button">
  //   // Continue without Sign in //{" "}
  // </OutlinedButton>
};

export default RegisterInfor;
