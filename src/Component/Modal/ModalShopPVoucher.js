import { useState } from "react";
import {
  LayerPopup,
  PopupContainer,
  CloseButton,
  TypoH1,
  PopupVoucherDiv,
  ModalFooter,
  SearchWrapper,
  ModalContent,
  VoucherId,
  SearchVoucher,
  VoucherList,
  TypeVoucher,
  VoucherItem,
  InforOfVoucher,
  VoucherMax,
  Exp,
  CheckBoxWrap,
} from "./styleComponents";
import Checkbox from "@mui/material/Checkbox";
import { FormateDateType } from "../../utils/helper";
import Button from "../Button";
import FreeShip from "../../assets/Voucher/FreeShip.png";
import { useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import Flexbox from "../Flexbox";
import {
  selectDiscountVoucher,
  selectFreeShipVoucher,
  selectDiscountStatus,
  selectFreeShipStatus,
  selectVoucherFreeShip,
  selectVoucherDiscount,
} from "../../selectors/voucherSelector";
import { toastError, toastSuccess } from "../ToastNotification";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../utils/status";
import Empty from "../Empty";
import Error from "../Error";
import {
  setApplyVoucher,
  setVoucherDiscount,
  setVoucherFreeShip,
} from "../../slices/voucherSlice";
const ModalShopPVoucher = ({ show, action, checkedList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const discountVoucher = useSelector(selectDiscountVoucher);
  const freeShopVoucher = useSelector(selectFreeShipVoucher);
  const discountStatus = useSelector(selectDiscountStatus);
  const freeShipStatus = useSelector(selectFreeShipStatus);
  const voucherDiscount = useSelector(selectVoucherDiscount);
  const voucherFreeShip = useSelector(selectVoucherFreeShip);

  // const [checked, setChecked] = useState([]);

  const [errorMsg, setErrorMsg] = useState({
    voucherId: false,
  });
  const ApplyVoucher = (voucherFreeShip, voucherDiscount) => {
    let formatData = [voucherFreeShip, voucherDiscount];
    dispatch(setApplyVoucher(formatData));
    action(false);
  };

  // const handleToggle = (value) => () => {
  //   // const formatVoucher = {
  //   //   id: value.id,
  //   //   priceDiscount: value.priceDiscount,
  //   //   title: value.title,
  //   //   type: value.type,
  //   // };
  //   const currentIndex = checked.indexOf(value);
  //   console.log("line 85:", currentIndex);

  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };
  // console.log(checked);
  return (
    <PopupContainer show={show}>
      <LayerPopup />
      <PopupVoucherDiv>
        <Flexbox justifyContent="space-between" alignItems="center">
          <TypoH1>Choose ShopP Voucher</TypoH1>
          <CloseButton onClick={() => action(false)}>
            <CloseIcon
              sx={{
                fontSize: { xs: "22px", sm: "30px" },
              }}
            />
          </CloseButton>
        </Flexbox>
        <ModalContent>
          <Flexbox flexDirection="column">
            <SearchWrapper alignItems="center" gap="10px">
              <VoucherId> Voucher Id</VoucherId>
              <div style={{ flex: "1" }}>
                <SearchVoucher placeholder="Search Voucher here..." />
              </div>
              <Button buttonType={"stylebase"} disable={errorMsg.voucherId}>
                Find
              </Button>
            </SearchWrapper>
          </Flexbox>
          <Flexbox flexDirection="column" style={{ overflowY: "scroll" }}>
            {discountStatus === STATUS.ERROR ? (
              <Error />
            ) : typeof discountVoucher === typeof "" ? (
              <Empty message={freeShopVoucher} />
            ) : (
              discountVoucher.map((el, id) => {
                return (
                  <VoucherList key={id}>
                    <TypeVoucher>Discount</TypeVoucher>
                    <VoucherItem>
                      <img src={FreeShip} alt="FreeShip" />
                      <Flexbox flexDirection="column" gap="4px">
                        <InforOfVoucher>{el.title}</InforOfVoucher>
                        <VoucherMax> Max: {el.priceDiscount}%</VoucherMax>
                        <Exp>Exp: {FormateDateType(el.expDate)} </Exp>
                      </Flexbox>
                      <CheckBoxWrap>
                        <Checkbox
                          onClick={() => {
                            dispatch(setVoucherDiscount(el));
                          }}
                          checked={voucherDiscount?.id === el.id}
                          tabIndex={-1}
                        />
                      </CheckBoxWrap>
                    </VoucherItem>
                  </VoucherList>
                );
              })
            )}
            {freeShipStatus === STATUS.ERROR ? (
              <Error />
            ) : typeof freeShopVoucher === typeof "" ? (
              <Empty message={freeShopVoucher} />
            ) : (
              freeShopVoucher.map((el, id) => {
                return (
                  <VoucherList key={id}>
                    <TypeVoucher>FreeShip</TypeVoucher>
                    <VoucherItem>
                      <img src={FreeShip} alt="FreeShip" />
                      <Flexbox flexDirection="column" gap="4px">
                        <InforOfVoucher>{el.title}</InforOfVoucher>
                        <VoucherMax> Max: ${el.priceDiscount}</VoucherMax>
                        <Exp>Exp: {FormateDateType(el.expDate)} </Exp>
                      </Flexbox>
                      <CheckBoxWrap>
                        <Checkbox
                          onClick={() => {
                            dispatch(setVoucherFreeShip(el));
                          }}
                          checked={voucherFreeShip?.id === el.id}
                          tabIndex={-1}
                        />
                      </CheckBoxWrap>
                    </VoucherItem>
                  </VoucherList>
                );
              })
            )}
          </Flexbox>
        </ModalContent>
        <ModalFooter>
          <Button onClick={() => action(false)}> Return</Button>
          <Button
            onClick={() => {
              ApplyVoucher(voucherFreeShip, voucherDiscount);
            }}
          >
            OK
          </Button>
        </ModalFooter>
      </PopupVoucherDiv>
    </PopupContainer>
  );
};

export default ModalShopPVoucher;
// <Button onClick={() => ApplyVoucher(el)}>Apply</Button>
//
