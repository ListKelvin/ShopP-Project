import Flexbox from "../../../Component/Flexbox";
import Divider from "../../../Component/Divider";
import {
  BodyContainer,
  ImgDiv,
  NameDiv,
  PriceDiv,
  TotalDiv,
} from "./styleComponents";
import Img from "../../../assets/Product/image 161.png";
import { CardMedia } from "@mui/material";
import { TexOverflow } from "../style";
import { FormateDateType } from "../../../utils/helper";
import Button from "../../../Component/Button";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { formatPrice } from "../../../utils/helper";
import OrderDialog from "./OrderDialog";
const TableOrderCustomer = ({ data, open, setOpen }) => {
  function unique(array) {
    return array?.reduce(function (results, currentItem) {
      //using array find
      return results.find(function (result) {
        return currentItem.shop?.id === result.shop?.id;
      })
        ? results
        : [...results, currentItem];
    }, []);
  }
  function GenerateDiscount(
    shopVoucher,
    appVoucher,
    freeShipVoucher,
    totalBill
  ) {
    let discount;
    if (appVoucher > 100) {
      discount = appVoucher;
    } else if (appVoucher < 100 && appVoucher > 0) {
      discount = (totalBill * (100 - appVoucher)) / 100;
    } else {
      discount = 0;
    }

    return discount + shopVoucher + freeShipVoucher;
  }
  let uniShop = unique(data);

  return (
    <Flexbox flexDirection="column" gap="10px">
      {uniShop?.length !== 0
        ? uniShop?.map((el, id) => {
            let orderOfShop = data.filter((el2) => el2.shop.id === el.shop.id);
            return (
              <div key={id}>
                <div> Order of {el.shop.name}</div>
                <Divider />
                {orderOfShop?.map((order, id) => {
                  console.log(order);
                  return (
                    <BodyContainer key={id}>
                      <ReceiptLongIcon sx={{ fontSize: 40, m: 2 }} />
                      <NameDiv>
                        <Flexbox flexDirection="row" alignItems="center">
                          Order ID: <TexOverflow>{order.id}</TexOverflow> x
                          createdAt: {FormateDateType(order.createdAt)}
                        </Flexbox>
                        <div>{order.estimateDeliveryTime}</div>
                      </NameDiv>
                      <PriceDiv>
                        -{" "}
                        {formatPrice(
                          GenerateDiscount(
                            order.shopVoucher,
                            order.appVoucher,
                            order.freeShipVoucher,
                            order.totalBill
                          )
                        )}
                      </PriceDiv>
                      <TotalDiv>
                        <div style={{ color: "#2F5E5E" }}>
                          {formatPrice(order.totalBill + order.transportFee)}
                        </div>
                        <OrderDialog order={order} />
                      </TotalDiv>
                    </BodyContainer>
                  );
                })}
              </div>
            );
          })
        : "no-results"}
    </Flexbox>
  );
};

export default TableOrderCustomer;
