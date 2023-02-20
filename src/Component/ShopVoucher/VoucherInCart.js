import { ShopWrapper, ListWrapper, ShopWrapperStyled } from "./styled";
import {
  SearchContainer,
  TitleContainer,
  IconStyle,
  SearchKeyWord,
  SearchBox,
  SearchTitle,
  StyledSearchContainer,
  SearchBoxStyle,
} from "../../pages/UserVouchers/Components/styleComponents";
import {
  VoucherList,
  TypeVoucher,
  VoucherItem,
  InforOfVoucher,
  VoucherMax,
  Exp,
} from "../Modal/styleComponents";
import { ClickAwayListener } from "@mui/material";
import { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import FreeShip from "../../assets/Voucher/FreeShip.png";
import SearchIcon from "@mui/icons-material/Search";
import { selectShopVoucher } from "../../selectors/voucherSelector";
import Flexbox from "../Flexbox";
import { useSelector, useDispatch } from "react-redux";
import { setVoucherOfShop } from "../../slices/voucherSlice";
import Button from "../Button";
import { FormateDateType } from "../../utils/helper";
import { useState } from "react";

import voucherApi from "../../utils/productApiComponent/voucherApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { toastSuccess, toastWarning } from "../ToastNotification";
import Empty from "../Empty";
const VoucherInCart = ({ id, show, setShow, selected, setSelected }) => {
  const dispatch = useDispatch();

  // const shopVoucher = useSelector(selectShopVoucher);
  const [voucherList, setVoucherList] = useState();
  const [loading, setLoading] = useState(false);

  const [voucherShop, setVoucherShop] = useState({
    voucher: voucherList ? [...voucherList] : "",
    itemsToShow: 3,
    expanded: false,
  });
  console.log(selected);
  const token = LocalStorageUtils.getToken();
  const showMore = () => {
    let voucherShopLength = voucherList.length;
    if (voucherShop.expanded) {
      setVoucherShop({
        ...voucherShop,
        itemsToShow: 3,
        expanded: false,
      });
    } else {
      setVoucherShop({
        ...voucherShop,
        itemsToShow: voucherShopLength,
        expanded: true,
      });
    }
  };

  const handleSelectVoucher = (voucher) => {
    let newSelectedVouchers = [...selected];
    let tmpArr = [];
    // let selectedVouchers = newSelectedVouchers.findIndex();
    let checkedShopId = newSelectedVouchers.findIndex((el) => el.shopId === id);

    if (checkedShopId !== -1) {
      tmpArr = newSelectedVouchers.map((el) => {
        if (el.shopId === id) {
          return { ...el, coupon: voucher };
        }

        return el;
      });
    } else {
      tmpArr = [...newSelectedVouchers, { shopId: id, coupon: voucher }];
      // selected;
    }
    setSelected(tmpArr);
  };

  const ClickAway = () => {
    setShow({ isOpen: false, id: "" });
  };
  useEffect(() => {
    if (show) {
      setLoading(true);
      voucherApi.getVoucherByShopId(id, token).then((res) => {
        console.log("line 79: ", res.data);
        setVoucherList(res.data.data);
      });
    }
    return function cleanup() {
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, token]);
  return (
    show && (
      <ClickAwayListener mouseEvent={"onMouseUp"} onClickAway={ClickAway}>
        <ShopWrapperStyled show={show}>
          <StyledSearchContainer>
            <TitleContainer>
              <IconStyle>
                <LocalAtmIcon />
              </IconStyle>
              <SearchTitle>Enter Voucher</SearchTitle>
            </TitleContainer>
            <SearchBoxStyle>
              <SearchIcon />
              <SearchKeyWord
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                type="search"
                placeholder="Search..."
              ></SearchKeyWord>
            </SearchBoxStyle>
          </StyledSearchContainer>
          <VoucherList>
            {voucherList === undefined ? (
              <Empty />
            ) : (
              voucherList.slice(0, voucherShop.itemsToShow).map((el, id) => {
                return (
                  <VoucherItem key={id}>
                    <img src={FreeShip} alt="FreeShip" />
                    <Flexbox flexDirection="column" gap="4px">
                      <InforOfVoucher>{el.title}</InforOfVoucher>
                      <VoucherMax> Max: ${el.priceDiscount}</VoucherMax>
                      <Exp>Exp: {FormateDateType(el.expDate)} </Exp>
                    </Flexbox>
                    <Button onClick={() => handleSelectVoucher(el)}>Use</Button>
                  </VoucherItem>
                );
              })
            )}

            {voucherList === undefined ? (
              ""
            ) : (
              <Flexbox
                alignItems="center"
                flexDirection="column"
                height="100px"
                justifyContent="center"
              >
                <Button onClick={() => showMore()}>
                  {voucherShop.expanded ? "See Less" : "See More"}
                </Button>
              </Flexbox>
            )}
          </VoucherList>
        </ShopWrapperStyled>
      </ClickAwayListener>
    )
  );
};

export default VoucherInCart;
