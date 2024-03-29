import { Field } from "formik";

// import TextError from './TextError';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";

const CheckBox = ({ name, label, ...rest }) => {
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <>
              <FormControlLabel
                control={<Checkbox color="success" {...field} {...rest} />}
                label={label}
                {...rest}
              />
              <FormHelperText
                error={meta.touched && form.errors[name] ? true : false}
              >
                {meta.touched && form.errors[name]}
              </FormHelperText>
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default CheckBox;
