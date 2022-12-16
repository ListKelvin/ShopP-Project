import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { formatDate } from "../utils/helper";
const DatePickerMui = ({ label, name, ...rest }) => {
  const [value, setValue] = React.useState();
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const { setFieldValue } = form;
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disableFuture
              label={label}
              openTo="day"
              views={["day", "month", "year"]}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                if (newValue !== value) {
                  setFieldValue(name, formatDate(newValue.$d));
                }
              }}
              renderInput={(params) => (
                <TextField
                  id={name}
                  {...rest}
                  {...field}
                  error={meta.touched && form.errors[name] ? true : false}
                  helperText={meta.touched && form.errors[name]}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        );
      }}
    </Field>
  );
};

export default DatePickerMui;
