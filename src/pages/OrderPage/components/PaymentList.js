import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { IconButton } from "@mui/material";
import paymentApi from "../../../utils/productApiComponent/paymentApi";
import { Box } from "@mui/material";
import { useEffect } from "react";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
];

export default function PaymentLit({ selected, action }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [payments, setPayments] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const token = LocalStorageUtils.getToken();
  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, option) => {
    action(option);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await paymentApi.getAllPayMent(token);

      setPayments(data);
    };
    fetchData();
  }, [token]);

  return (
    <>
      <Box ref={anchorRef}>
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#2F5E5E",
          }}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleToggle}
        >
          {selected ? selected?.name : "Payment"}
        </Button>
      </Box>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {payments?.data?.map((option, index) => (
                    <MenuItem
                      key={option.id}
                      selected={option?.id === selected?.id}
                      onClick={(event) => handleMenuItemClick(event, option)}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
