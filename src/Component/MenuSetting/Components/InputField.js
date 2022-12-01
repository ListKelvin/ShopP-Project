import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields() {
    return (
      <Box
      style = {{textAlign: 'center'}}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '500px', height: "45px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required label="Current Password" placeholder="Value"   />
        <TextField required style = {{marginTop: "40px"}} label="New Password" placeholder="Value"  />
        <TextField required style = {{marginTop: "40px"}} label="Confirm Password" placeholder="Value"   />
      </Box>
  );
}