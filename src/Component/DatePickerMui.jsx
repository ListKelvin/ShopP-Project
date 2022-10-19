import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const DatePickerMui = ({ label, name, ...rest }) => {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        console.log(field);
        const { setFieldValue } = form;
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disableFuture
              label={label}
              openTo="year"
              views={["year", "month", "day"]}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                console.log(newValue);
                setFieldValue(name, newValue);
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
