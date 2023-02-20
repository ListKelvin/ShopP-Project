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
  InValidVoucher,
} from "./styleComponents";
import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";
import { FormateDateType } from "../../utils/helper";
import Button from "../Button";
import FreeShip from "../../assets/Voucher/FreeShip.png";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/helper";
import CloseIcon from "@mui/icons-material/Close";
import Flexbox from "../Flexbox";
import {
  selectVoucherFreeShip,
  selectVoucherDiscount,
  selectShopPVoucher,
  selectShopPVoucherStatus,
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

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import { selectCartTotalBySelected } from "../../selectors/cartSelector";
const ModalShopPVoucher = ({ show, action, checkedList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItems = useSelector(selectCartTotalBySelected);

  const voucherDiscount = useSelector(selectVoucherDiscount);
  const voucherFreeShip = useSelector(selectVoucherFreeShip);
  const shopPVoucher = useSelector(selectShopPVoucher);
  const shopPVoucherStatus = useSelector(selectShopPVoucherStatus);
  // const [checked, setChecked] = useState([]);
  const [itemToShow, setItemToShow] = useState({
    itemsToShow_1: 3,
    itemsToShow_2: 3,
    expanded_1: false,
    expanded_2: false,
  });

  const [errorMsg, setErrorMsg] = useState({
    voucherId: false,
  });
  const ApplyVoucher = (voucherFreeShip, voucherDiscount) => {
    let formatData = [voucherFreeShip, voucherDiscount];
    dispatch(setApplyVoucher(formatData));
    action(false);
  };
  let FreeShips = shopPVoucher?.filter((el) => el.type === "FREESHIP");
  let Discounts = shopPVoucher?.filter((el) => el.type === "PERCENT");
  const showMore = (voucher) => {
    let voucherFreeShipsLength = FreeShips?.length;
    let voucherDiscountsLength = Discounts?.length;

    if (voucher === "FREESHIP") {
      if (itemToShow.expanded) {
        setItemToShow({
          ...itemToShow,
          itemsToShow_1: 3,
          expanded_1: false,
        });
      } else {
        setItemToShow({
          ...itemToShow,
          itemsToShow_1: voucherFreeShipsLength,
          expanded_1: true,
        });
      }
    } else {
      if (itemToShow.expanded) {
        setItemToShow({
          ...itemToShow,
          itemsToShow_2: 3,
          expanded_2: false,
        });
      } else {
        setItemToShow({
          ...itemToShow,
          itemsToShow_2: voucherDiscountsLength,
          expanded_2: true,
        });
      }
    }
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
          <Flexbox flexDirection="column">
            {shopPVoucherStatus === STATUS.ERROR ? (
              <Error />
            ) : typeof shopPVoucher === typeof "" ? (
              <Empty message={shopPVoucher} />
            ) : (
              <List
                sx={{
                  width: "100%",

                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: 300,
                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                {Discounts.length !== 0
                  ? ["Discount"].map((sectionId) => (
                      <li key={`section-${sectionId}`}>
                        <ul>
                          <ListSubheader>{`${sectionId}`}</ListSubheader>
                          {Discounts?.slice(0, itemToShow.itemsToShow_2).map(
                            (el, id) => (
                              <>
                                <StyledListItem key={`item-${sectionId}-${id}`}>
                                  <ListItemButton
                                    onClick={() => {
                                      dispatch(setVoucherDiscount(el));
                                    }}
                                    disabled={
                                      totalItems === 0 ||
                                      (totalItems !== 0 &&
                                        totalItems <= el.minBillPrice)
                                    }
                                  >
                                    <VoucherItem>
                                      <img src={FreeShip} alt="FreeShip" />
                                      <Flexbox flexDirection="column" gap="4px">
                                        <InforOfVoucher>
                                          {el.title}
                                        </InforOfVoucher>
                                        <VoucherMax>
                                          Max: {el.priceDiscount}%
                                        </VoucherMax>
                                        <Exp>
                                          Minimum bill:{" "}
                                          {" " + formatPrice(el.minBillPrice)}
                                        </Exp>
                                        <Exp>
                                          Maximum discount:
                                          {" " +
                                            formatPrice(el.maxPriceDiscount)}
                                        </Exp>
                                        <Exp>
                                          Exp: {FormateDateType(el.expDate)}{" "}
                                        </Exp>
                                      </Flexbox>
                                      <CheckBoxWrap>
                                        <Checkbox
                                          checked={
                                            voucherDiscount?.id === el.id
                                          }
                                          tabIndex={-1}
                                        />
                                      </CheckBoxWrap>
                                    </VoucherItem>
                                    {totalItems === 0 && (
                                      <InValidVoucher>
                                        Please choose a item to use this
                                        voucher!
                                      </InValidVoucher>
                                    )}
                                    {totalItems !== 0 &&
                                      totalItems <= el.minBillPrice && (
                                        <InValidVoucher>
                                          Some products don't meet the
                                          requirements to use the voucher.
                                        </InValidVoucher>
                                      )}
                                  </ListItemButton>
                                </StyledListItem>
                              </>
                            )
                          )}
                        </ul>
                        <Divider />
                        {shopPVoucher === undefined ? (
                          ""
                        ) : (
                          <Flexbox
                            alignItems="center"
                            flexDirection="column"
                            height="100px"
                            justifyContent="center"
                          >
                            <Button onClick={() => showMore("")}>
                              {itemToShow.expanded_2 ? "See Less" : "See More"}
                            </Button>
                          </Flexbox>
                        )}
                      </li>
                    ))
                  : ""}

                {FreeShips.length !== 0
                  ? ["FreeShip"].map((sectionId) => (
                      <li key={`section-${sectionId}`}>
                        <ul>
                          <ListSubheader>{`${sectionId}`}</ListSubheader>
                          {FreeShips?.slice(0, itemToShow.itemsToShow_1).map(
                            (el, id) => (
                              <StyledListItem key={`item-${sectionId}-${id}`}>
                                <ListItemButton
                                  onClick={() => {
                                    dispatch(setVoucherFreeShip(el));
                                  }}
                                  disabled={
                                    totalItems === 0 ||
                                    (totalItems !== 0 &&
                                      totalItems <= el.minBillPrice)
                                  }
                                  flexDirection="column"
                                >
                                  <VoucherItem>
                                    <img src={FreeShip} alt="FreeShip" />
                                    <Flexbox flexDirection="column" gap="4px">
                                      <InforOfVoucher>
                                        {el.title}
                                      </InforOfVoucher>
                                      <VoucherMax>
                                        Max: ${el.priceDiscount}
                                      </VoucherMax>
                                      <Exp>
                                        Minimum bill:{" "}
                                        {" " + formatPrice(el.minBillPrice)}
                                      </Exp>
                                      <Exp>
                                        Maximum discount:
                                        {" " + formatPrice(el.maxPriceDiscount)}
                                      </Exp>
                                      <Exp>
                                        Exp: {FormateDateType(el.expDate)}{" "}
                                      </Exp>
                                    </Flexbox>
                                    <CheckBoxWrap>
                                      <Checkbox
                                        checked={voucherFreeShip?.id === el.id}
                                        tabIndex={-1}
                                      />
                                    </CheckBoxWrap>
                                  </VoucherItem>
                                  {totalItems === 0 && (
                                    <InValidVoucher>
                                      Please choose a item to use this voucher!
                                    </InValidVoucher>
                                  )}
                                  {totalItems !== 0 &&
                                    totalItems <= el.minBillPrice && (
                                      <InValidVoucher>
                                        Some products don't meet the
                                        requirements to use the voucher.
                                      </InValidVoucher>
                                    )}
                                </ListItemButton>
                              </StyledListItem>
                            )
                          )}
                        </ul>
                        <Divider />
                        {shopPVoucher === undefined ? (
                          ""
                        ) : (
                          <Flexbox
                            alignItems="center"
                            flexDirection="column"
                            height="100px"
                            justifyContent="center"
                          >
                            <Button onClick={() => showMore("FREESHIP")}>
                              {itemToShow.expanded_1 ? "See Less" : "See More"}
                            </Button>
                          </Flexbox>
                        )}
                      </li>
                    ))
                  : ""}
              </List>
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
export const StyledListItem = styled(ListItem)({
  "& 	.MuiListItemButton-root": {
    flexDirection: "column",
  },
});
