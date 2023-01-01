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
  VoucherBtn,
  Text,
  WrapBtn,
  GridAlign,
  GridAlignColumn,
  GridAlignRow,
  GridAlignColumn2,
  GridAlignColumn3,
  GridAlignRow3,
  WrapStyled,
} from "../styled";
import { toastSuccess } from "../../../Component/ToastNotification";
import Flexbox from "../../../Component/Flexbox";
import { useNavigate } from "react-router-dom";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useSelector, useDispatch } from "react-redux";

import { API_URL } from "../../../config/config";
import Button from "../../../Component/Button";
import orderApi from "../../../utils/productApiComponent/orderApi";
// import CartFooter from "./CartFooter";
import LocalStorageUtils from "../../../utils/LocalStorageUtils";
import { selectOrderItems } from "../../../selectors/orderSelector";
const TableOrder = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector(selectOrderItems);
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
  const TotalItemOfShop = (itemOfShop) => {
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

  let ShopInOrder = unique(orderItems);
  const GenerateOrders = () => {
    let ShopInOrder2 = unique(orderItems);
    let NewArray = orderItems.map((orderItem) => {
      let formateData = {
        productId: orderItem.id,
        price: orderItem.amount,
        quantity: orderItem.cartQuantity,
        additionalInfo: "no sugar",
      };
      return formateData;
    });

    const Orders = ShopInOrder2.map((el, id) => {
      let itemOfShopOrder = NewArray.filter((el2) => {
        return el2.productId === el.id;
      });
      console.log(itemOfShopOrder);
      const formatOrder = {
        estimateDeliveryTime: "12/12/2022-15/12/2022",
        transportFee: 10000,
        shoppingUnitId: 1,
        voucherIds: ["70adc07c-74aa-4aa0-a5a6-0677002811dd"],
        shopId: el.shop.id,
        orderProducts: itemOfShopOrder,
      };

      return { ...formatOrder };
    });
    return Orders;
  };
  const PostOrder = async () => {
    let order = GenerateOrders();
    const formatData = {
      address: "Thu Duc, Ho Chi Minh City",
      paymentId: 1,
      orders: order,
    };
    console.log(order);
    const results = await orderApi.createOrder(formatData);
    console.log(results);
    if (results.status === 200) {
      toastSuccess(results.data.message);
    }
  };

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
              (el2) => el2.shop?.id === el.shop?.id
            );

            return (
              <Item key={id}>
                <ShopContainer>
                  <ShopInfo>
                    <div> {el.shop?.name}</div>
                  </ShopInfo>
                  <div style={{ position: "relative", paddingBottom: "1px" }}>
                    {/* Item Section  */}
                    {
                      /*map function here */ itemOfShop.map((item, id) => {
                        const { productImage } = item;
                        console.log(TotalItemOfShop(itemOfShop));
                        // const CheckItemSelection = checked.some((checkItem) =>
                        //   checkItem.id === item.id ? true : false
                        // );

                        return (
                          <Wrap key={id}>
                            <Flexbox alignItems="center">
                              <StyleDiv>
                                <Flexbox alignItems="center" gap="10px">
                                  <LinkImg>
                                    <img
                                      src={`${API_URL}/file/${productImage[0].localFile.filename}`}
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
          <GridAlignColumn> ${TotalItemOfShop(orderItems)}</GridAlignColumn>
          <GridAlignRow> Shipping fee:</GridAlignRow>
          <GridAlignColumn2>$3280000</GridAlignColumn2>
          <GridAlignRow3> Total:</GridAlignRow3>
          <GridAlignColumn3> ${TotalItemOfShop(orderItems)}</GridAlignColumn3>
          <ToolFooter alignItems="center" flexDirection="row">
            <VoucherBtn>
              Payment
              <ArrowDropDownIcon />
            </VoucherBtn>
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
