import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { InputTwoFiledStyle, InputFieldStyle,InputFieldStylePlace, InputFieldStyleSex,TextRight } from './styleComponents';
const currencies = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
  ];
export default function InputField() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const CHARACTER_LIMIT = 200;
    const [values, setValues] = React.useState({
        name: ""
    });

  const handleChange2 = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
    return (
      <Box
      style = {{textAlign: 'center'}}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: {xl: '420px',
          md: "360px",
          sm: "265px",
          xs: "300px"}, height: "70px"
          },
        }}
        noValidate
        autoComplete="off"
      >
        <InputFieldStyle><TextField required sx = {{ width: "100%"}} label="Username" placeholder="User1234" /></InputFieldStyle>
        <InputFieldStyle><TextField required sx = {{ width: "100%"}} label="Name" placeholder="Nguyễn Văn A"  /></InputFieldStyle>
        <InputTwoFiledStyle>
            <InputFieldStylePlace>
                <TextField required sx = {{width: "100%"}}  label="Date of birth" placeholder="MM/DD/YY"   />
            </InputFieldStylePlace>
            <InputFieldStyleSex>
                <TextField
                id="outlined-select-currency"
                select
                required
                sx = {{width: "100%"}}  
                label="Sex"
                value={currency} 
                onChange={handleChange}
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </InputFieldStyleSex>
        </InputTwoFiledStyle>
        <InputFieldStyle><TextField required sx = {{width: "100%"}} label="Phone number" placeholder="0987654321"   /></InputFieldStyle>
        <InputFieldStyle><TextField required sx = {{width: "100%"}} label="Place of delivery" placeholder="House number, Stress, District, City/Province"   /></InputFieldStyle>
        <InputFieldStyle><TextField required sx = {{width: "100%"}} label="Email" placeholder="abc@gmail.com"   /></InputFieldStyle>
        <InputFieldStyle><TextField required sx = {{width: "100%"}} label="Shop's Name" placeholder="Long Deep Trai"   /></InputFieldStyle>
        <InputFieldStyle className="App">
            <TextField
                id="outlined-multiline-static"
                label="Bio"
                inputProps={{
                maxlength: CHARACTER_LIMIT
                }}
                value={values.name}
                sx = {{width: "100%", marginTop: "0px"}}  
                multiline
                rows={2}
                placeholder= "Description" 
                helperText=<TextRight>{`${values.name.length}/${CHARACTER_LIMIT}`}</TextRight>
                onChange={handleChange2("name")}
                margin="normal"
                variant="outlined"
            />
        </InputFieldStyle>
      </Box>
  );
}