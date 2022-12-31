import { useEffect, useState } from "react";
import {
  ContainerV2,
  HeaderCart,
  Item,
  ShopContainer,
  ShopInfo,
  CheckBoxWrap,
  Wrap,
  StyleDiv,
  ItemPrice,
  ItemAmount,
  ItemTotal,
  ItemAction,
  LinkImg,
  LinkName,
  Classification,
  CartFooterContainer,
  ToolFooter,
  SelectAllProduct,
  DeleteProduct,
  VoucherBtn,
  Text,
  WrapBtn,
} from "../style";
import { IncreaseAndDecrease } from "../../productDetail/styled";
import Flexbox from "../../../Component/Flexbox";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotals,
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
} from "../../../slices/cartReducer";
import { selectCartTotalBySelected } from "../../../selectors/cartSelector";
import { selectCartItems } from "../../../selectors/cartSelector";
import { API_URL } from "../../../config/config";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "../../../Component/Button";
import { getTotalsBySelection } from "../../../slices/cartReducer";
import CartFooter from "./CartFooter";
import { width } from "@mui/system";
const TableCart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalBySelected);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(cartItems);
  console.log("line 54: ", checked);
  //function
  function unique(array) {
    return array.reduce(function (results, currentItem) {
      //using array find
      return results.find(function (result) {
        return currentItem.shop.id === result.shop.id;
      })
        ? results
        : [...results, currentItem];
    }, []);
  }

  const not = (a, b) => {
    return a.filter((value) => {
      return b.indexOf(value) === -1;
    });
  };

  const intersection = (a, b) => {
    return a.filter((value) => {
      return b.indexOf(value) !== -1;
    });
  };
  const union = (a, b) => {
    return [...a, ...not(b, a)];
  };

  // checkbox group handle
  const handleToggle = (value) => () => {
    console.log(value);
    const currentIndex = checked.indexOf(value);
    console.log("line 85:", currentIndex);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const numberOfChecked = (items) => intersection(checked, items).length;
  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };
  // const handleCheckedLeft = () => {
  //   setLeft(left.concat(rightChecked));
  //   setRight(not(right, rightChecked));
  //   setChecked(not(checked, rightChecked));
  // };
  //handle cart render
  const handleAddToCart = (product) => {
    const currentIndex = checked.indexOf(product);
    console.log("line 85:", currentIndex);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(product);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    const currentIndex = checked.indexOf(product);
    console.log("line 85:", currentIndex);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(product);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    console.log("run");
    dispatch(removeFromCart(product));
    handleToggle(product);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  let ShopInCart = unique(cartItems);
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  useEffect(() => {
    dispatch(getTotalsBySelection(checked));
  }, [dispatch, checked]);
  return (
    <ContainerV2>
      <Flexbox flexDirection="column" gap="10px" alignItems="center">
        {/* Header Section  */}

        <HeaderCart>
          <CheckBoxWrap>
            <Checkbox
              onClick={handleToggleAll(cartItems)}
              checked={
                numberOfChecked(cartItems) === cartItems.length &&
                cartItems.length !== 0
              }
              indeterminate={
                numberOfChecked(cartItems) !== cartItems.length &&
                numberOfChecked(cartItems) !== 0
              }
              disabled={cartItems.length === 0}
              inputProps={{
                "aria-label": "all items selected",
              }}
            />
          </CheckBoxWrap>
          <div
            style={{
              color: "rgba(0,0,0,.8)",
              width: "46.27949%",
              textAlign: "center",
            }}
          >
            Products
          </div>
          <ItemPrice>Price</ItemPrice>
          <ItemAmount>Amount</ItemAmount>
          <ItemTotal>Total</ItemTotal>
          <ItemAction>Action</ItemAction>
        </HeaderCart>
        {
          /* map function shop here */
          ShopInCart.map((el, id) => {
            let itemOfShop = cartItems.filter(
              (el2) => el2.shop?.id === el.shop?.id
            );
            // const labelId = `transfer-list-all-item-${el}-label`;

            return (
              <Item key={id}>
                <ShopContainer>
                  <ShopInfo>
                    <CheckBoxWrap>
                      <Checkbox
                        onClick={handleToggleAll(itemOfShop)}
                        checked={
                          numberOfChecked(itemOfShop) === itemOfShop.length &&
                          itemOfShop.length !== 0
                        }
                        indeterminate={
                          numberOfChecked(itemOfShop) !== itemOfShop.length &&
                          numberOfChecked(itemOfShop) !== 0
                        }
                        disabled={itemOfShop.length === 0}
                        inputProps={{
                          "aria-label": "all items selected",
                        }}
                      />
                    </CheckBoxWrap>
                    <div> {el.shop?.name}</div>
                  </ShopInfo>
                  <div style={{ position: "relative", paddingBottom: "1px" }}>
                    {/* Item Section  */}

                    {
                      /*map function here */ itemOfShop.map((item, id) => {
                        const { productImage } = item;
                        return (
                          <Wrap key={id}>
                            <Flexbox alignItems="center">
                              <CheckBoxWrap>
                                <Checkbox
                                  onClick={handleToggle(item)}
                                  checked={checked.indexOf(item) !== -1}
                                  tabIndex={-1}
                                  disableRipple
                                  // inputProps={{
                                  //   "aria-labelledby": labelId,
                                  // }}
                                />
                              </CheckBoxWrap>
                              <StyleDiv>
                                <Flexbox alignItems="center" gap="10px">
                                  <LinkImg to={`/productpage/${item.id}`}>
                                    <img
                                      src={`${API_URL}/file/${productImage[0].localFile.filename}`}
                                      alt={item.name}
                                    />
                                  </LinkImg>
                                  <LinkName to={`/productpage/${item.id}`}>
                                    {item.name}
                                  </LinkName>
                                </Flexbox>
                              </StyleDiv>

                              <Flexbox
                                width="17.24138%"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="column"
                              >
                                <Classification>
                                  Classification <ArrowDropDownIcon />
                                </Classification>
                                <Classification>
                                  test additional info
                                </Classification>
                              </Flexbox>
                              <Flexbox
                                width="15.88022%"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="row"
                              >
                                <div> ${item.amount}</div>
                              </Flexbox>
                              <Flexbox
                                width="15.4265%"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="row"
                                gap="20px"
                              >
                                <IncreaseAndDecrease
                                  onClick={() => {
                                    handleDecreaseCart(item);
                                  }}
                                >
                                  <RemoveOutlinedIcon />
                                </IncreaseAndDecrease>
                                <div> {item.cartQuantity}</div>
                                <IncreaseAndDecrease
                                  onClick={() => handleAddToCart(item)}
                                >
                                  <AddOutlinedIcon />
                                </IncreaseAndDecrease>
                              </Flexbox>
                              <Flexbox
                                width="10.43557%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <div> ${item.amount * item.cartQuantity}</div>
                              </Flexbox>
                              <Flexbox
                                width="12.70417%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <IconButton
                                  onClick={() => handleRemoveFromCart(item)}
                                >
                                  <DeleteIcon style={{ color: "#FF5C5C" }} />
                                </IconButton>
                              </Flexbox>
                            </Flexbox>
                          </Wrap>
                        );
                      })
                    }
                  </div>
                </ShopContainer>
              </Item>
            );
          })
        }

        {/* Cart Footer  */}
        <CartFooterContainer>
          <ToolFooter alignItems="center" flexDirection="row" gap="10px">
            <CheckBoxWrap>
              <Checkbox
                onClick={handleToggleAll(cartItems)}
                checked={
                  numberOfChecked(cartItems) === cartItems.length &&
                  cartItems.length !== 0
                }
                indeterminate={
                  numberOfChecked(cartItems) !== cartItems.length &&
                  numberOfChecked(cartItems) !== 0
                }
                disabled={cartItems.length === 0}
                inputProps={{
                  "aria-label": "all items selected",
                }}
              />
            </CheckBoxWrap>
            <SelectAllProduct type="button" className="select_all_btn">
              Select all (
              {`${numberOfChecked(cartItems)}/${cartItems.length} selected`} )
            </SelectAllProduct>
            <DeleteProduct
              type="button"
              className="delete_btn"
              onClick={() => handleClearCart()}
            >
              Delete
            </DeleteProduct>
            <VoucherBtn>
              Voucher <ArrowDropDownIcon />
            </VoucherBtn>
            <Button>
              <FavoriteBorderIcon
                style={{ marginLeft: "0.5rem", textAlign: "center" }}
              />
              <Text> Add to wishlist</Text>
            </Button>
          </ToolFooter>

          <Flexbox justifyContent="space-around" alignItems="center">
            <div> Total ({`${numberOfChecked(cartItems)}`} product):</div>
            <div> ${totalItems}</div>
          </Flexbox>
          <WrapBtn>
            <Button>Buy Now</Button>
          </WrapBtn>
        </CartFooterContainer>
      </Flexbox>
    </ContainerV2>
  );
};

export default TableCart;
