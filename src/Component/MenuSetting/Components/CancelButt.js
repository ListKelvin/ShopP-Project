import { ButtonPassword, TypoButtCancel,} from './styleComponents';

export function CancelButton() {
    return (
        <ButtonPassword variant="contained" disableElevation 
        style = {{
          backgroundColor: "white",
          width: "280px",
          height: "22px",
          borderRadius: "8px",
        }}
        >
          <TypoButtCancel>Cancel</TypoButtCancel>
        </ButtonPassword>
      );
}