import { ButtonLog, TypoButton, LogIcon } from './styleComponents';

export default function LogOutButton() {
    return (
      <ButtonLog variant="contained" disableElevation 
      style = {{
        backgroundColor: "#F64A4A",
        height: "30px",
        borderRadius: "8px",
      }}
      >
      <LogIcon sx = {{width: "20px", height: "20px"}}></LogIcon>
        <TypoButton>Log Out</TypoButton>
      </ButtonLog>
    );
};
