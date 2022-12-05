import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields() {
    return (
      <Box
      style = {{textAlign: 'center'}}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: {xl: '500px',
          md: "500px",
          sm: "500px",
          xs: "280px"}, height: {xl: "45px", xs: "30px"},
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required label="Current Password" placeholder="Value" />
        <TextField required sx = {{height: {xl: "56px", sm: "30px"},}} style = {{marginTop: "40px"}} label="New Password" placeholder="Value"  />
        <TextField required style = {{marginTop: "40px"}} label="Confirm Password" placeholder="Value"   />
      </Box>
  );
}