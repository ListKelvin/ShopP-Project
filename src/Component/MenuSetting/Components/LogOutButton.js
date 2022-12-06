import { ButtonLog, TypoButton, LogIcon, ButtHover } from './styleComponents';

export default function LogOutButton() {
    return (
      <ButtonLog variant="contained" disableElevation 
      style = {{
        backgroundColor: "#F64A4A",
      }}
      sx = {ButtHover}
      >
      <LogIcon sx = {{width: "20px", height: "20px"}}></LogIcon>
        <TypoButton>Log Out</TypoButton>
      </ButtonLog>
    );
};
