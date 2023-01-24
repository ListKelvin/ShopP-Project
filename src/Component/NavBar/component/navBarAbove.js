import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Toolbar from "../component/ToolBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { selectIsCartOpen } from "../../../selectors/cartSelector";
import SearchBar from "./Search.Component";
import StorefrontIcon from "@mui/icons-material/Storefront";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CartIcon from "./CartIcon";
import ProductSearch from "./ProductSearch";
import { ProductSearchResult } from "./Styled.components";
import productApi from "../../../utils/productApiComponent/productApi";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterValues } from "../../../slices/filterReducer";
import { selectFilters } from "../../../selectors/filterSelector";
import { useNavigate } from "react-router-dom";
import { ShopButton, RightToolbar } from "../style";
import CartDropdown from "../../CartDropDown/CartDropDown";
import { ClickAwayListener } from "@mui/material";
const NavBarAbove = () => {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState("empty");
  const filter = useSelector(selectFilters);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };
  const debouncedValue = useDebounce(filter.text, 50);

  const fetchProductByName = async (debouncedValue) => {
    if (debouncedValue !== "") {
      const result = await productApi.getProductByName(debouncedValue);
      console.log(result);

      if (result.data.data.length === 0 || result.data.data === null) {
        setSearchProduct("empty");
      } else {
        setSearchProduct(result.data.data);
      }
    }
  };
  const handleClickAway = () => {
    // const name = "text";
    setShow(false);
    // const value = "";
    // dispatch(updateFilterValues({ name, value }));
  };
  useEffect(() => {
    fetchProductByName(debouncedValue);
  }, [debouncedValue]);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mr: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "black",
              marginRight: 2,
              marginLeft: 4,
            }}
          ></Box>
          ShopP
        </Typography>
        <SearchBar action={setShow} />

        <ProductSearchResult search={show}>
          {searchProduct === "empty" || searchProduct === null
            ? "empty"
            : searchProduct.map((el, id) => (
                <ProductSearch key={id} cartItem={el} />
              ))}
        </ProductSearchResult>
        <RightToolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              padding: "10px",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: "white", marginRight: "5px" }}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
            <Divider
              textAlign="left"
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "white",
                borderWidth: "1px",
                height: "25px",
                alignSelf: "center",
              }}
            />
            <CartIcon />
            {isCartOpen && <CartDropdown />}
          </Box>
          <ShopButton
            variant="contained"
            endIcon={<StorefrontIcon sx={{ color: "" }} />}
            onClick={() => {
              navigate("/shop");
            }}
          >
            Shop Channel
          </ShopButton>
        </RightToolbar>
      </Toolbar>
    </ClickAwayListener>
  );
};

export default NavBarAbove;
