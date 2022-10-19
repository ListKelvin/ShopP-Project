import Input from "./Input";
import MuiInput from "./Mui-input";
import SelectItem from "./Select";
import CheckBox from "./CheckBox";
import RadioButtons from "./RadioButtons";
import DatePickerMui from "./DatePickerMui";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    // case 'textarea':
    //   return <Textarea {...rest} />
    case "select":
      return <SelectItem {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePickerMui {...rest} />;
    case "MuiInput":
      return <MuiInput {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
