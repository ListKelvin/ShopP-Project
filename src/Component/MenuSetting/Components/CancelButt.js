import { ButtonPassword, TypoButtCancel } from "./styleComponents";

export function CancelButton({ ...rest }) {
  return (
    <ButtonPassword
      variant="contained"
      disableElevation
      style={{
        backgroundColor: "white",
        width: "280px",
        height: "22px",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
      {...rest}
    >
      <TypoButtCancel>Cancel</TypoButtCancel>
    </ButtonPassword>
  );
}
