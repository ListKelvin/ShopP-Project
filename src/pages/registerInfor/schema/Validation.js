import * as Yup from "yup";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const ValidationSchema = Yup.object({
  name: Yup.string().required("Name is Required!"),
  gender: Yup.string().required("Gender is Required!"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  placeOfDelivery: Yup.string().required("Place of delivery is Required!"),
  phonenumber: Yup.string()
    .required("phonenumber cannot be empty")
    .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, "Your phone does not right"),
  confirm: Yup.boolean().oneOf(
    [true],
    " Please accept the challenges of F-Code"
  ),
  avatar: Yup.mixed()
    .nullable()
    .test(
      "FILE_SIZE",
      "Upload file is too big.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Upload file has unsuported",
      (value) => !value || SUPPORTED_FORMATS.includes(value?.type)
    ),
});
