import {
  StyleProductShopWrapper,
  BoxShop,
  ShopInformationWrapper,
  SmallDescription,
  SmallDescriptionWrapper,
  BoxShopAction,
  StyledSmallDescriptionWrapper,
} from "../styled";
import Flexbox from "../../../Component/Flexbox";
import Button from "../../../Component/Button";
import Avatar from "@mui/material/Avatar";
import { API_URL } from "../../../config/config";
const ShopOfProduct = ({ product }) => {
  const { shop } = product;

  return (
    <StyleProductShopWrapper>
      <BoxShop>
        <Flexbox flexDirection="row" justifyContent="flex-start" gap="20">
          <Avatar
            src={`${API_URL}/file/${shop.avatar.filename}`}
            sx={{ width: 70, height: 70 }}
          />
          <BoxShopAction>
            <Flexbox
              justifyContent="center"
              alignItems="flex-start"
              flexDirection="column"
              gap="5"
            >
              <div>{shop.name}</div>
              <Flexbox justifyContent="flex-start" gap="10">
                <Button> Chat now</Button>
                <Button> View Shop</Button>
              </Flexbox>
            </Flexbox>
            <ShopInformationWrapper>
              <Flexbox flexDirection="row" justifyContent="space-between">
                <SmallDescriptionWrapper>
                  {" "}
                  Evaluation:{" "}
                  <StyledSmallDescriptionWrapper>
                    {shop.star}
                  </StyledSmallDescriptionWrapper>{" "}
                </SmallDescriptionWrapper>
                <SmallDescriptionWrapper>
                  {" "}
                  Follower:{" "}
                  <StyledSmallDescriptionWrapper>
                    {shop.followersNumber}
                  </StyledSmallDescriptionWrapper>
                </SmallDescriptionWrapper>
                <SmallDescriptionWrapper>
                  {" "}
                  Product:{" "}
                  <StyledSmallDescriptionWrapper>
                    10
                  </StyledSmallDescriptionWrapper>{" "}
                </SmallDescriptionWrapper>
              </Flexbox>
            </ShopInformationWrapper>
          </BoxShopAction>
        </Flexbox>
      </BoxShop>
    </StyleProductShopWrapper>
  );
};

export default ShopOfProduct;
