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
import { useSelector } from "react-redux";
import Button from "../Button";
import { FormateDateType } from "../../utils/helper";
import { useState } from "react";
import voucherApi from "../../utils/productApiComponent/voucherApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { toastSuccess, toastWarning } from "../ToastNotification";
import Empty from "../Empty";
const VoucherOfShop = ({ id, show, setShow }) => {
  // const shopVoucher = useSelector(selectShopVoucher);
  const [voucherList, setVoucherList] = useState();
  const [voucherShop, setVoucherShop] = useState({
    voucher: voucherList ? [...voucherList] : "",
    itemsToShow: 3,
    expanded: false,
  });
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
  const SaveVoucher = async (id) => {
    const token = LocalStorageUtils.getToken();
    const res = await voucherApi.postApplyVoucher(id, token);
    if (res.status === 200) {
      toastSuccess(res.data.message);
    } else if (res.status === 400) {
      toastWarning(res.data.message);
    }
  };
  const ClickAway = () => {
    setShow({ isOpen: false, id: "" });
  };
  useEffect(() => {
    return function cleanup() {
      voucherApi.getVoucherByShopId(id, token).then((res) => {
        setVoucherList(res.data.data);
      });
    };
  }, []);
  return (
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
                  <Button onClick={() => SaveVoucher(el.id)}>Save</Button>
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
  );
};

export default VoucherOfShop;
