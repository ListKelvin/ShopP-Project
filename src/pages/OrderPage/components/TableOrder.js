import { useEffect, useState } from "react";
import {
  ContainerV2,
  HeaderCart,
  Item,
  ShopContainer,
  ShopInfo,
  Wrap,
  StyleDiv,
  ItemPrice,
  ItemAmount,
  ItemTotal,
  LinkImg,
  LinkName,
  Classification,
  CartFooterContainer,
  ToolFooter,
  WrapBtn,
  GridAlign,
  GridAlignColumn,
  GridAlignRow,
  GridAlignColumn2,
  GridAlignColumn3,
  GridAlignRow3,
  WrapStyled,
  GridAlignRow4,
  GridAlignColumn4,
} from "../styled";
import {
  toastSuccess,
  toastWarning,
} from "../../../Component/ToastNotification";
import { formatPrice } from "../../../utils/helper";
import Flexbox from "../../../Component/Flexbox";
import { useNavigate } from "react-router-dom";
import PaymentLit from "./PaymentList";
import { selectApplyVoucher } from "../../../selectors/voucherSelector";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector, useDispatch } from "react-redux";
import { CalculatePriceOfOrder } from "../../../slices/orderReducer";
import { API_URL } from "../../../config/config";
import Button from "../../../Component/Button";
import orderApi from "../../../utils/productApiComponent/orderApi";
// import CartFooter from "./CartFooter";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import { selectOrderItems } from "../../../selectors/orderSelector";
import transportApi from "../../../utils/productApiComponent/transportFee";
export const TotalItemOfShop = (itemOfShop) => {
  let { total } = itemOfShop.reduce(
    (cartTotal, cartItem) => {
      const { amount, cartQuantity } = cartItem;
      const itemTotal = amount * cartQuantity;

      cartTotal.total += itemTotal;

      return cartTotal;
    },
    {
      total: 0,
    }
  );
  return (total = parseFloat(total.toFixed(3)));
};
const TableOrder = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector(selectOrderItems);
  const applyVoucher = useSelector(selectApplyVoucher);
  const [selectedPayment, setSelectedPayment] = useState();

  //function
  function unique(array) {
    return array.reduce(function (results, currentItem) {
      //using array find
      return results.find(function (result) {
        return currentItem.shopId === result.shopId;
      })
        ? results
        : [...results, currentItem];
    }, []);
  }

  const totalOrder = () => {
    let freeShipVoucherIds = applyVoucher[0]?.priceDiscount;
    let subtotal = CalculatePriceOfOrder(
      TotalItemOfShop(orderItems),
      applyVoucher[1]?.priceDiscount
    );

    return formatPrice(subtotal + 1000);
  };
  let ShopInOrder = unique(orderItems);

  const GenerateOrders = () => {
    let ShopInOrder2 = unique(orderItems);
    let NewArray = orderItems.map((orderItem) => {
      let formateData = {
        productId: orderItem.id,
        quantity: orderItem.cartQuantity,
        additionalInfo: orderItem?.additionalInfo?.toString(),
      };
      return formateData;
    });

    const Orders = ShopInOrder2.map((el, id) => {
      let itemOfShopOrder = NewArray.filter((el2) => {
        return el2.productId === el.id;
      });

      const formatOrder = {
        estimateDeliveryTime: "12/12/2022-15/12/2022",
        transportFee: 10000,
        shoppingUnitId: 1,
        shopVoucherId: "",
        shopId: el.shopId,
        orderProducts: NewArray,
      };

      return { ...formatOrder };
    });
    return Orders;
  };

  const PostOrder = async () => {
    let order = GenerateOrders();
    console.log(selectedPayment);
    if (selectedPayment === undefined) {
      toastWarning(" you haven't choose a payment");
      return;
    } else {
      const formatData = {
        address: "Thu Duc, Ho Chi Minh City",
        paymentId: selectedPayment?.id,
        appVoucherId: applyVoucher[1]?.id
          ? applyVoucher[1]?.id?.toString()
          : "",
        freeShipVoucherId: applyVoucher[0]?.id ? applyVoucher[0]?.id : "",
        orders: order,
      };
      console.log(formatData);
      const results = await orderApi.createOrder(formatData);
      console.log(results);
      if (results?.status === 200) {
        toastSuccess(results.data.message);
      }
    }
  };
  // const getTransportFee = async () => {
  //   const res = await transportApi.getTransportFee();
  // };
  // useEffect(() => {}, []);

  return (
    <ContainerV2>
      <Flexbox flexDirection="column" gap="10px" alignItems="flex-end">
        {/* Header Section  */}

        <HeaderCart>
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
        </HeaderCart>
        {
          /* map function shop here */
          ShopInOrder.map((el, id) => {
            let itemOfShop = orderItems.filter(
              (el2) => el2.shopId === el.shopId
            );

            return (
              <Item key={id}>
                <ShopContainer>
                  <ShopInfo>
                    <div> {el.shopName}</div>
                  </ShopInfo>
                  <div style={{ position: "relative", paddingBottom: "1px" }}>
                    {/* Item Section  */}
                    {
                      /*map function here */ itemOfShop.map((item, id) => {
                        const { productImage } = item;
                        return (
                          <Wrap key={id}>
                            <Flexbox alignItems="center">
                              <StyleDiv>
                                <Flexbox alignItems="center" gap="10px">
                                  <LinkImg>
                                    <img
                                      src={`${API_URL}/file/${productImage.localFile.filename}`}
                                      alt={item.name}
                                    />
                                  </LinkImg>
                                  <LinkName>{item.name}</LinkName>
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
                                <div> {item.cartQuantity}</div>
                              </Flexbox>
                              <Flexbox
                                width="10.43557%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <div> ${item.amount * item.cartQuantity}</div>
                              </Flexbox>
                            </Flexbox>
                          </Wrap>
                        );
                      })
                    }
                  </div>
                </ShopContainer>
                <WrapStyled>
                  <Flexbox
                    alignItems="center"
                    justifyContent="flex-end"
                    gap="10px"
                  >
                    <div> total of {itemOfShop.length} products:</div>
                    <div>${TotalItemOfShop(itemOfShop)}</div>
                  </Flexbox>
                </WrapStyled>
              </Item>
            );
          })
        }

        {/* Order Footer  */}
        <CartFooterContainer>
          <GridAlign> Total product:</GridAlign>
          <GridAlignColumn>
            {" "}
            {formatPrice(TotalItemOfShop(orderItems))}
          </GridAlignColumn>
          <GridAlignRow> Shipping fee:</GridAlignRow>
          <GridAlignColumn2>{formatPrice(1000)}</GridAlignColumn2>

          {applyVoucher[1]?.priceDiscount && (
            <>
              <GridAlignRow3> Total voucher discount:</GridAlignRow3>
              <GridAlignColumn4>
                - $
                {CalculatePriceOfOrder(
                  TotalItemOfShop(orderItems),
                  applyVoucher[1]?.priceDiscount
                )}
              </GridAlignColumn4>
            </>
          )}
          <GridAlignRow4>Total: </GridAlignRow4>
          <GridAlignColumn3> {totalOrder()}</GridAlignColumn3>
          <ToolFooter alignItems="center" flexDirection="row">
            <PaymentLit
              selected={selectedPayment}
              action={setSelectedPayment}
            />
            <WrapBtn>
              <Button onClick={() => PostOrder()}>Place Order</Button>
            </WrapBtn>
          </ToolFooter>
        </CartFooterContainer>
      </Flexbox>
    </ContainerV2>
  );
};

export default TableOrder;
// <VoucherBtn>
// Payment
// <ArrowDropDownIcon />
// </VoucherBtn>
