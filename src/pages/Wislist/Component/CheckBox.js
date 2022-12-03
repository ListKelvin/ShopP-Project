import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Checkboxes() {
  return (
    <div>
      <Checkbox {...label}
        sx={{
            color: "white",
            '&.Mui-checked': {
                color: "white",
            }
        }}
      />
    </div>
  );
}

export function Checkbox2() {
    return (
      <div>
        <Checkbox {...label}
          sx ={{
              color: "gray",
              '&.Mui-checked': {
                  color: "gray",
              }
          }}
        />
      </div>
    );
  }

  export function CheckboxDis() {
    return(
      <div>
        <Checkbox {...label} disabled
          sx ={{
              color: "gray",
              '&.Mui-checked': {
                  color: "gray",
              },
          }}
        />
      </div>
    )
  }