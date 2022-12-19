import React, { useEffect, useRef, useState } from "react";
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
import Modal from "../../Component/Modal/Modal";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/userSelector";
import customerApi from "../../utils/productApiComponent/customerApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { useNavigate } from "react-router-dom";
const initialValues = {
  name: "",
  dateOfBirth: "",
  gender: "",
  phonenumber: "",
  placeOfDelivery: "",
  confirm: false,
  avatar: null,
  Bio: "",
};
const options = [
  {
    value: "MALE",
    key: "MALE",
  },
  {
    value: "FEMALE",
    key: "FEMALE",
  },
];

const RegisterInfor = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const postCustomer = async (customer) => {
    await customerApi.createCustomer(customer).then((res) => {
      if (res.status === 201) {
        navigate("/home");
      }
    });
  };
  const onSubmit = (values) => {
    const formatData = {
      name: values.name,
      dob: values.dateOfBirth,
      gender: values.gender,
      placeOfDelivery: values.placeOfDelivery,
      avatar: values.file,
      bio: values.Bio,
    };
    postCustomer(formatData);
  };
  const fetchUser = async () => {
    const user = await LocalStorageUtils.getUser().then((res) => {
      if (res.data?.customer === null) {
        console.log("run");
        setShow(true);
      } else {
        setShow(false);
      }
      console.log(res.data);
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
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
      <Modal show={show} action={setShow} />

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {(form) => {
          const { setFieldValue, isValid, values } = form;

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
                        options={options}
                        control="select"
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
                        label="PlaceOfDelivery"
                        name="placeOfDelivery"
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
                        label="Bio"
                        name="Bio"
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
                    name="avatar"
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
                disabled={!isValid}
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
