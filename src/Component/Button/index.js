import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LightButton,
  WhiteButton,
  StyleResetButton,
  StyleButton,
} from "./styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
  light: "light",
  white: "white",
  reset: "reset",
  stylebase: "stylebase",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.light]: LightButton,
    [BUTTON_TYPE_CLASSES.white]: WhiteButton,
    [BUTTON_TYPE_CLASSES.reset]: StyleResetButton,
    [BUTTON_TYPE_CLASSES.stylebase]: StyleButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
