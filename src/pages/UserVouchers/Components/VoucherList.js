import React from "react";
import {
  ShipContainer,
  IconContainer,
  ShipTitle,
  ShipVoucherContainer,
  VoucherContainer,
  ShipVoucherContent,
  Name,
  SalePrice,
  Exp,
  VoucherListDiv,
} from "./styleComponents";
import Button from "../../../Component/Button";
import { useEffect } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { FormateDateType } from "../../../utils/helper";
import {
  fetchShopVoucherOfUser,
  fetchDiscountVoucher,
} from "../../../slices/voucherSlice";
import {
  selectFreeShipVoucher,
  selectDiscountVoucher,
  selectShopVoucherOfUser,
} from "../../../selectors/voucherSelector";
import { useSelector, useDispatch } from "react-redux";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
const VoucherList = ({ label, titles, status, title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return function cleanup() {
      dispatch(fetchShopVoucherOfUser());
      dispatch(fetchDiscountVoucher());
    };
  }, [dispatch]);

  const discountVoucher = useSelector(selectDiscountVoucher);
  const freeShopVoucher = useSelector(selectFreeShipVoucher);
  const shopVoucherOfUser = useSelector(selectShopVoucherOfUser);
  return (
    <VoucherListDiv>
      {label === "Ship" ? (
        <ShipVoucherContainer>
          <ShipTitle>Shop Voucher</ShipTitle>
          {shopVoucherOfUser.map(
            ({
              id,
              name,
              minBillPrice,
              priceDiscount,
              maxPriceDiscount,
              mfgDate,
              expDate,
            }) => {
              return (
                <ShipContainer key={id}>
                  <VoucherContainer>
                    <IconContainer>
                      {status === "ship" ? (
                        <LocalShippingIcon
                          sx={{ color: "#55ABAB", fontSize: "4em" }}
                        />
                      ) : (
                        <StorefrontIcon
                          sx={{ color: "#55ABAB", fontSize: "4em" }}
                        />
                      )}
                    </IconContainer>
                    <ShipVoucherContent>
                      <Name>{name}</Name>
                      <SalePrice>
                        Min price: ${minBillPrice} sale: ${priceDiscount}, Max
                        sale: ${maxPriceDiscount}
                      </SalePrice>
                      <Exp>
                        Time: {FormateDateType(mfgDate)} -{" "}
                        {FormateDateType(expDate)}
                      </Exp>
                    </ShipVoucherContent>
                  </VoucherContainer>
                  <Button>Apply</Button>
                </ShipContainer>
              );
            }
          )}
        </ShipVoucherContainer>
      ) : (
        <ShipVoucherContainer>
          <ShipTitle>{titles}</ShipTitle>
          {discountVoucher.map(
            ({
              id,
              name,
              minBillPrice,
              priceDiscount,
              maxPriceDiscount,
              mfgDate,
              expDate,
            }) => {
              return (
                <ShipContainer key={id}>
                  <VoucherContainer>
                    <IconContainer>
                      {status === "ship" ? (
                        <LocalShippingIcon
                          sx={{ color: "#55ABAB", fontSize: "4em" }}
                        />
                      ) : (
                        <StorefrontIcon
                          sx={{ color: "#55ABAB", fontSize: "4em" }}
                        />
                      )}
                    </IconContainer>
                    <ShipVoucherContent>
                      <Name>{name}</Name>
                      <SalePrice>
                        Min price: ${minBillPrice} sale: {priceDiscount}%, Max
                        price: ${maxPriceDiscount}
                      </SalePrice>
                      <Exp>
                        Time: {FormateDateType(mfgDate)} -{" "}
                        {FormateDateType(expDate)}
                      </Exp>
                    </ShipVoucherContent>
                  </VoucherContainer>
                  <Button>Apply</Button>
                </ShipContainer>
              );
            }
          )}
        </ShipVoucherContainer>
      )}
    </VoucherListDiv>
  );
};

export default VoucherList;
