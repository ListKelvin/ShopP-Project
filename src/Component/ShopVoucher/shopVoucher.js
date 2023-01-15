import { ShopWrapper, ListWrapper } from "./styled";
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
const VoucherOfShop = ({ id }) => {
  const shopVoucher = useSelector(selectShopVoucher);
  const [voucherShop, setVoucherShop] = useState({
    voucher: shopVoucher ? [...shopVoucher] : "",
    itemsToShow: 3,
    expanded: false,
  });
  const token = LocalStorageUtils.getToken();
  const showMore = () => {
    let voucherShopLength = shopVoucher.length;
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

  useEffect(() => {
    return function cleanup() {
      voucherApi.getVoucherByShopId(id, token).then((res) => {
        console.log(res);
      });
    };
  }, []);
  return (
    <ShopWrapper>
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
        {shopVoucher === undefined ? (
          <Empty />
        ) : (
          shopVoucher.slice(0, voucherShop.itemsToShow).map((el, id) => {
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

        {shopVoucher === undefined ? (
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
    </ShopWrapper>
  );
};

export default VoucherOfShop;
//  <VoucherList key={id}>
//                     <TypeVoucher>FreeShip</TypeVoucher>
//                     <VoucherItem>
//                       <img src={FreeShip} alt="FreeShip" />
//                       <Flexbox flexDirection="column" gap="4px">
//                         <InforOfVoucher>{el.title}</InforOfVoucher>
//                         <VoucherMax> Max: ${el.priceDiscount}</VoucherMax>
//                         <Exp>Exp: {FormateDateType(el.expDate)} </Exp>
//                       </Flexbox>
//                       <Button onClick={() => ApplyVoucher(el)}>Apply</Button>
//                     </VoucherItem>
//                   </VoucherList>
