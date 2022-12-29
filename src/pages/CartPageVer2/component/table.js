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
} from "../style";
import Flexbox from "../../../Component/Flexbox";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../selectors/cartSelector";
const TableCart = () => {
  const cartItems = useSelector(selectCartItems);
  //   let CheckItemInCart = cartItems.reduce(function (acc, curr) {
  //     if (!(acc.shop?.id === curr.shop?.id)) acc.push(curr);
  //     return acc;
  //   }, []);
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
  let ShopInCart = unique(cartItems);
  console.log("line 35", ShopInCart);
  return (
    <ContainerV2>
      <Flexbox flexDirection="column" gap="10px" alignItems="center">
        <HeaderCart>
          <CheckBoxWrap>
            <label class="stardust-checkbox">
              <input class="stardust-checkbox__input" type="checkbox" />
            </label>
            <div class="stardust-checkbox__box"></div>
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

            return (
              <Item key={id}>
                <ShopContainer>
                  <ShopInfo>
                    <CheckBoxWrap>
                      <label class="stardust-checkbox">
                        <input
                          class="stardust-checkbox__input"
                          type="checkbox"
                        />
                      </label>
                      <div class="stardust-checkbox__box"></div>
                    </CheckBoxWrap>
                    <div> {el.shop?.name}</div>
                  </ShopInfo>
                  <div style={{ position: "relative", paddingBottom: "1px" }}>
                    {
                      /*map function here */ itemOfShop.map((el3) => {
                        return (
                          <Wrap>
                            <Flexbox alignItems="center">
                              <CheckBoxWrap>
                                <label class="stardust-checkbox">
                                  <input
                                    class="stardust-checkbox__input"
                                    type="checkbox"
                                  />
                                </label>
                                <div class="stardust-checkbox__box"></div>
                              </CheckBoxWrap>
                              <StyleDiv>
                                <Flexbox alignItems="center" gap="10px">
                                  <a href="dfdsf">fsdfds</a>
                                  <div>fsdfds</div>
                                </Flexbox>
                              </StyleDiv>

                              <Flexbox
                                width="17.24138%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <a href="dfdsf">fsdfds</a>
                                <div>fsdfds</div>
                              </Flexbox>
                              <Flexbox
                                width="15.88022%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <div> đơn giá</div>
                              </Flexbox>
                              <Flexbox
                                width="15.4265%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <div> số lượng </div>
                              </Flexbox>
                              <Flexbox
                                width="10.43557%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <div> tổng</div>
                              </Flexbox>
                              <Flexbox
                                width="12.70417%"
                                alignItems="center"
                                flexDirection="column"
                              >
                                <div> action</div>
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
      </Flexbox>
    </ContainerV2>
  );
};

export default TableCart;
