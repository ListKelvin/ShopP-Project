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
import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";
import Flexbox from "../../../Component/Flexbox";

export default function SplitButton(props) {
  const { category, categoryId, action } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    action(index);
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

  return (
    <Flexbox flexDirection="column" gap="10px">
      <InputLabelStyle htmlFor="label" required>
        Category
      </InputLabelStyle>
      <ButtonGroup variant="outlined" ref={anchorRef} aria-label="split button">
        <ButtonStyled sx={{ width: "50%" }}>
          {selectedIndex?.name ? selectedIndex?.name : "Select a category"}
        </ButtonStyled>
        <ButtonStyled
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </ButtonStyled>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
          minWidth: "30%",
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
                placement === "bottom" ? "center bottom" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {category?.data?.map((option, index) => (
                    <MenuItem
                      key={option.id}
                      //   disabled={index === 2}
                      selected={index + 1 === selectedIndex}
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
    </Flexbox>
  );
}
export const ButtonStyled = styled(Button)`
  color: #2f5e5e;
  background-color: #fff;
  border: 1px solid #eaeaea;
`;
export const InputLabelStyle = styled(InputLabel)({
  display: "flex",
  color: "#2F5E5E",
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  gap: "4px",
  fontWeight: "700",
  fontSize: "20px",
});
