import { useState, useRef } from "react";
import {
  ButtonArea,
  Frame,
  ImgInput,
  InfInput,
  InputArea,
  Layout,
  Title,
  ButtonStyled,
} from "./styles";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Flexbox from "../../Component/Flexbox";
import { ValidationForShopRegister } from "../registerInfor/schema/Validation";
import AddIcon from "@mui/icons-material/Add";
import { Formik, Form } from "formik";
import shopApi from "../../utils/productApiComponent/shopApi";
import FormikControl from "../../Component/FormikControl";
import { Button } from "@mui/material";
import PreviewImage from "../registerInfor/components/PreviewImage";
import AVaUnknow from "../../assets/Avaunknow/istockphoto-1223671392-612x612.jpg";
import { toastError } from "../../Component/ToastNotification";
import { useNavigate, useLocation } from "react-router-dom";
const ShopRegister = () => {
  const token = LocalStorageUtils.getToken();
  const [state, setState] = useState({
    name: "",
    description: "",
    email: "",
  });

  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    phonenumber: "",
    placeOfReceipt: "",
    confirm: false,
    file: null,
  };
  const registerShoop = async (formatData, resetForm) => {
    const result = await shopApi.postNewShop(formatData, token);
    if (result.status === 400 || result.status === 401) {
      resetForm();
      toastError(result.data.message);
    } else {
      navigate("shop_dash_board");
    }
  };
  const fileRef = useRef(null);
  const onSubmit = (values, { resetForm }) => {
    const formatData = {
      name: values.name,
      email: values.email,
      phone: values.phonenumber,
      placeOfReceipt: values.placeOfReceipt,
      avatar: values.file,
    };
    if (token) {
      registerShoop(formatData, resetForm);
    }
  };
  const handleChangeCustomer = (props) => (e) => {
    setState({ ...state, [props]: e.target.value });
  };
  return (
    <>
      <Title>Shop Register</Title>
      <Flexbox alignItems="center" justifyContent="center">
        <div
          style={{
            width: "50rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Open Sans",
          }}
        >
          <Layout>
            <Frame>
              <InputArea>
                <InfInput>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={ValidationForShopRegister}
                    onSubmit={onSubmit}
                  >
                    {(form) => {
                      const { setFieldValue, isValid, values } = form;

                      return (
                        <Form>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              flexDirection: {
                                xs: "column-reverse",
                                sm: "row",
                              },
                              gap: "25px",
                              justifyContent: "center",
                              alignItems: "flex-start",
                            }}
                          >
                            <Grid
                              container
                              component="main"
                              sx={{
                                maxWidth: "500px",
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "100px",
                                },
                              }}
                              spacing={2}
                            >
                              <Grid item xs={12}>
                                <FormikControl
                                  type="text"
                                  sx={{
                                    " .MuiTextField-root": {
                                      background: "beige",
                                    },
                                  }}
                                  fullWidth
                                  control="MuiInput"
                                  label="Name"
                                  name="name"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormikControl
                                  control="MuiInput"
                                  type="text"
                                  label="Email"
                                  name="email"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormikControl
                                  control="MuiInput"
                                  label="Phone Number"
                                  name="phonenumber"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormikControl
                                  control="MuiInput"
                                  type="text"
                                  label="Place Of Receipt"
                                  name="placeOfReceipt"
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

                            <ImgInput>
                              {values.file ? (
                                <PreviewImage file={values.file} />
                              ) : (
                                <img
                                  src={AVaUnknow}
                                  alt=""
                                  width="150px"
                                  height="150px"
                                  style={{
                                    clipPath: "circle(40%)",
                                  }}
                                />
                              )}

                              <Button
                                variant="contained"
                                component="label"
                                startIcon={<AddIcon />}
                                style={{ background: "white", color: "grey" }}
                              >
                                Upload Image
                                <input
                                  hidden
                                  name="avatar"
                                  ref={fileRef}
                                  type="file"
                                  onChange={(e) => {
                                    setFieldValue("file", e.target.files[0]);
                                  }}
                                  onClick={() => {
                                    fileRef.current.click();
                                  }}
                                />
                              </Button>
                            </ImgInput>
                          </Box>
                          <ButtonArea>
                            <ButtonStyled
                              variant="contained"
                              component="label"
                              style={{ background: "white", color: "grey" }}
                            >
                              Cancel
                            </ButtonStyled>
                            <ButtonStyled
                              type="submit"
                              disabled={!isValid}
                              variant="contained"
                              style={{ background: "#55abab" }}
                            >
                              Register
                            </ButtonStyled>
                          </ButtonArea>
                        </Form>
                      );
                    }}
                  </Formik>
                </InfInput>
              </InputArea>
            </Frame>
          </Layout>
        </div>
      </Flexbox>
    </>
  );
};

export default ShopRegister;
// <RegisButton
// variant="contained"
// type="submit"
// disabled={!isValid}
// >
// Submit

// <Verify>
// <FormControlLabel
//   control={<Checkbox style={{ color: "#55abab" }} />}
//   label="I confirm those informations which is true"
// />
// </Verify>
// </RegisButton>
