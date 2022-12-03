import { ButtonPassword, TypoButtPassword} from './styleComponents';

export default function UpdatePassButton() {
    return (
      <ButtonPassword variant="contained" disableElevation 
      style = {{
        backgroundColor: "#55ABAB",
        width: "280px",
        height: "40px",
        borderRadius: "8px",
        marginTop: "30px",
        marginBottom: "10px",
      }}
      >
        <TypoButtPassword>Update Password</TypoButtPassword>
      </ButtonPassword>
    );
};
