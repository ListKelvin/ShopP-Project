import { ButtonPassword, TypoButtPassword } from "./styleComponents";

export default function UpdatePassButton({ ...rest }) {
  return (
    <ButtonPassword
      variant="contained"
      disableElevation
      style={{
        backgroundColor: "#55ABAB",
        width: "280px",
        height: "40px",
        borderRadius: "8px",
      }}
      {...rest}
    >
      <TypoButtPassword>Update Password</TypoButtPassword>
    </ButtonPassword>
  );
}
