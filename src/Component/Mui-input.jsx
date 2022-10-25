import { TextField } from "@mui/material";
import { Field } from "formik";

const MuiInput = ({ label, name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        // console.log(field);
        return (
          <>
            <TextField
              label={label}
              id={name}
              sx={{
                width: {
                  xs: "220px",
                  sm: "255px",
                  md: "320px",
                },
                // "320px",
                // height: "40px",
                marginBottom: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                },
              }}
              {...rest}
              {...field}
              error={meta.touched && form.errors[name] ? true : false}
              helperText={meta.touched && form.errors[name]}
              variant="outlined"
            />
          </>
        );
      }}
    </Field>
  );
};

export default MuiInput;
