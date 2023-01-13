import Modal from "./Modal_ver_2";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { TINH_DATA } from "../../utils/ADDRESS_DATA/TINH_DATA";
import { HUYEN_DATA } from "../../utils/ADDRESS_DATA/HUYEN_DATA";
import { XA_PHUONG_DATA } from "../../utils/ADDRESS_DATA/XA_PHUONG";
import TextField from "@mui/material/TextField";
import Button from "../Button";
import Flexbox from "../Flexbox";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const ModalAddress = (props) => {
  const { show, onClose, onSubmit, customer, action } = props;
  const theme = useTheme();
  const [province, setProvince] = React.useState("");
  const [city, setCity] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const [newAddress, setNewAddress] = React.useState([
    ...customer?.placeOfDelivery,
  ]);

  const handleProvinceChange = (event) => {
    const { value } = event.target;

    setProvince(value);
  };
  const handleCityChange = (event) => {
    const { value } = event.target;

    setCity(value);
  };
  const handleDistrictChange = (event) => {
    const { value } = event.target;
    setDistrict(value);
  };
  const handleDetailsChange = (event) => {
    const { value } = event.target;

    setDetail(value);
  };
  let CityAddress = HUYEN_DATA.filter(
    (el) => el.parent_code === province.toLowerCase()
  );
  let districtAddress = XA_PHUONG_DATA.filter((el) => el.parent_code === city);

  const handleChangeCustomer = (props) => (e) => {
    action({ ...customer, [props]: e.target.value });
  };

  const GenerateAddress = () => {
    let provinceName = TINH_DATA.find((el) => el.code === province);
    let cityName = HUYEN_DATA.find((el) => el.code === city);
    let districtName = XA_PHUONG_DATA.find((el) => el.code === district);
    const formatAddress = {
      default: false,
      address:
        detail +
        ", " +
        provinceName?.name +
        ", " +
        cityName?.name +
        ", " +
        districtName?.name,
    };
    setNewAddress([...newAddress, { ...formatAddress }]);
  };

  return (
    <Modal show={show} title="Add new address" onClose={onClose}>
      <Flexbox justifyContent="space-between">
        <FormControl fullWidth sx={{ m: 1, mt: 3 }} size="small">
          <TextField
            label="Name"
            required
            id="outlined-size-small"
            onChange={handleChangeCustomer("name")}
            size="small"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, mt: 3 }} size="small">
          <TextField
            label="Phone"
            id="outlined-size-small"
            onChange={handleChangeCustomer("phone")}
            defaultValue=""
            size="small"
          />
        </FormControl>
      </Flexbox>
      <Flexbox justifyContent="space-between">
        <FormControl sx={{ m: 1, width: 200, mt: 3 }} size="small">
          <InputLabel id="label">Province</InputLabel>
          <Select
            labelId="label"
            id="label"
            // displayEmpty
            value={province}
            onChange={handleProvinceChange}
            input={<OutlinedInput label="Province" />}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {TINH_DATA.map((name) => {
              return (
                <MenuItem
                  key={name.name}
                  value={name.code}
                  style={getStyles(name.name, province, theme)}
                >
                  {name.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, width: 200, mt: 3 }}
          disabled={province.length === 0}
          size="small"
        >
          <InputLabel id="label">City</InputLabel>
          <Select
            labelId="label"
            id="label"
            // displayEmpty
            value={city}
            onChange={handleCityChange}
            input={<OutlinedInput label="City" />}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {CityAddress.map((name) => {
              return (
                <MenuItem
                  key={name.name}
                  value={name.code}
                  style={getStyles(name.name, province, theme)}
                >
                  {name.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, width: 200, mt: 3 }}
          disabled={city.length === 0 || province.length === 0}
          size="small"
        >
          <InputLabel id="label">District</InputLabel>
          <Select
            labelId="label"
            id="label"
            // displayEmpty
            value={district}
            onChange={handleDistrictChange}
            input={<OutlinedInput label="District" />}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {districtAddress.map((name) => {
              return (
                <MenuItem
                  key={name.name}
                  value={name.code}
                  style={getStyles(name.name, province, theme)}
                >
                  {name.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Flexbox>
      <Flexbox justifyContent="space-between">
        <FormControl fullWidth sx={{ m: 1, mt: 3 }} size="small">
          <TextField
            label="Detail Address"
            id="outlined-size-small"
            onChange={handleDetailsChange}
            size="small"
          />
        </FormControl>
      </Flexbox>
      <Flexbox justifyContent="flex-end" style={{ marginTop: "10px" }}>
        <Button
          onClick={() => {
            GenerateAddress();
            onSubmit(newAddress);
          }}
        >
          {" "}
          OK
        </Button>
      </Flexbox>
    </Modal>
  );
};

export default ModalAddress;
