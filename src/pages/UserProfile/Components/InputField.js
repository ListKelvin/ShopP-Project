import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ConvertStringToDate } from "../../../utils/helper";
import { formatDate } from "../../../utils/helper";
import {
  InputTwoFiledStyle,
  InputFieldStyle,
  InputFieldStylePlace,
  InputFieldStyleSex,
  TextRight,
} from "./styleComponents";
const options = [
  {
    value: "MALE",
    label: "MALE",
  },
  {
    value: "FEMALE",
    label: "FEMALE",
  },
];
export default function InputField({ customer, shopName, action }) {
  console.log(customer);
  const handleChangeCustomer = (props) => (e) => {
    action({ ...customer, [props]: e.target.value });
  };

  const CHARACTER_LIMIT = 200;
  console.log(ConvertStringToDate(customer.dob));

  return (
    <Box
      style={{ textAlign: "center" }}
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: { xl: "420px", md: "360px", sm: "265px", xs: "300px" },
          height: "70px",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <InputFieldStyle>
        <TextField
          defaultValue={customer.name}
          onChange={handleChangeCustomer("name")}
          required
          sx={{ width: "100%" }}
          label="Username"
          placeholder="User1234"
        />
      </InputFieldStyle>
      <InputFieldStyle>
        <TextField
          required
          defaultValue={customer.email}
          onChange={handleChangeCustomer("email")}
          sx={{ width: "100%" }}
          label="Email"
          placeholder="abc@gmail.com"
        />
      </InputFieldStyle>

      <InputTwoFiledStyle>
        <InputFieldStylePlace>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disableFuture
              label="Date of birth"
              openTo="day"
              views={["day", "month", "year"]}
              value={ConvertStringToDate(customer.dob)}
              onChange={(newValue) => {
                action({ ...customer, dob: newValue });
              }}
              renderInput={(params) => {
                return (
                  <TextField
                    required
                    sx={{ width: "100%" }}
                    placeholder="MM/DD/YY"
                    {...params}
                  />
                );
              }}
            />
          </LocalizationProvider>
        </InputFieldStylePlace>
        <InputFieldStyleSex>
          <TextField
            id="outlined-select-currency"
            select
            required
            sx={{ width: "100%" }}
            label="Sex"
            value={customer.gender}
            onChange={handleChangeCustomer("gender")}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </InputFieldStyleSex>
      </InputTwoFiledStyle>
      <InputFieldStyle>
        <TextField
          required
          defaultValue={customer.phone}
          onChange={handleChangeCustomer("phone")}
          sx={{ width: "100%" }}
          label="Phone number"
          placeholder="0987654321"
        />
      </InputFieldStyle>
      <InputFieldStyle>
        <TextField
          required
          defaultValue={customer.placeOfDelivery}
          onChange={handleChangeCustomer("placeOfDelivery")}
          sx={{ width: "100%" }}
          label="Place of delivery"
          placeholder="House number, Stress, District, City/Province"
        />
      </InputFieldStyle>

      <InputFieldStyle>
        <TextField
          required
          disabled={shopName === null ? true : false}
          defaultValue={shopName}
          sx={{ width: "100%" }}
          label="Shop's Name"
          placeholder="Long Deep Trai"
        />
      </InputFieldStyle>

      <InputFieldStyle className="App">
        <TextField
          id="outlined-multiline-static"
          label="Bio"
          inputProps={{
            maxlength: CHARACTER_LIMIT,
          }}
          value={customer.bio}
          sx={{ width: "100%", marginTop: "0px" }}
          multiline
          rows={2}
          placeholder="Description"
          helperText=<TextRight>{`${customer.bio.length}/${CHARACTER_LIMIT}`}</TextRight>
          onChange={handleChangeCustomer("bio")}
          margin="normal"
          variant="outlined"
        />
      </InputFieldStyle>
    </Box>
  );
}
