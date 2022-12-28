import { useLocation } from "react-router-dom";
import Wrapper from "../../Component/Wrapper";
import Flexbox from "../../Component/Flexbox";
import KeyIcon from "@mui/icons-material/Key";
import { Heading, SubHeading, IconKey, LinkBacked } from "./styles";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import FormResetPassword from "./components/FormResetPassword";
const ResetPassword = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Wrapper>
      <Flexbox
        style={{ marginTop: "50px" }}
        justifyContent="space-around"
        flexDirection="column"
        alignItems="center"
        gap="30px"
      >
        <Flexbox
          justifyContent="space-around"
          flexDirection="column"
          alignItems="center"
          gap="10px"
        >
          <IconKey backGround="rgba(85, 171, 171, 0.4)" width="80" height="80">
            <IconKey
              backGround="rgba(85, 171, 171, 0.3)"
              width="50"
              height="50"
            >
              <KeyIcon
                style={{ transform: "rotate(-45deg)", fontSize: "30px" }}
              />
            </IconKey>
          </IconKey>
          <Heading> Set new password</Heading>
          <SubHeading>
            Your new password must be different to previously used passwords.
          </SubHeading>
        </Flexbox>
        <Flexbox
          justifyContent="space-around"
          flexDirection="column"
          alignItems="center"
        >
          <FormResetPassword location={location} />
        </Flexbox>
        <LinkBacked>
          <KeyboardBackspaceRoundedIcon style={{ marginRight: "10px" }} />
          Back to log in
        </LinkBacked>
      </Flexbox>
    </Wrapper>
  );
};

export default ResetPassword;
