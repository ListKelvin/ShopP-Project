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
import { FormateDateType } from "../../../utils/helper";
import Button from "../../../Component/Button";
const TableOrderCustomer = ({ data }) => {
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
  let uniShop = unique(data);
  console.log("line 26:", uniShop);
  return (
    <Flexbox flexDirection="column" gap="10px">
      {uniShop?.length !== 0
        ? uniShop?.map((el, id) => {
            let orderOfShop = data.filter((el2) => el2.shop.id === el.shop.id);
            return (
              <div key={id}>
                <div> {el.shop.name}</div>
                <Divider />
                {orderOfShop?.map((order, id) => {
                  return (
                    <BodyContainer key={id}>
                      <ImgDiv>
                        <CardMedia
                          sx={{ borderRadius: "10px", width: "6em" }}
                          component="img"
                          image={Img}
                          alt="green iguana"
                        />
                      </ImgDiv>
                      <NameDiv>
                        <div>
                          {order.id} x createdAt:{" "}
                          {FormateDateType(order.createdAt)}
                        </div>
                        <div>{order.estimateDeliveryTime}</div>
                      </NameDiv>
                      <PriceDiv> Discount price </PriceDiv>
                      <TotalDiv>
                        <div style={{ color: "#2F5E5E" }}>
                          $ {order.totalBill}
                        </div>
                        <Button>View Order</Button>
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
