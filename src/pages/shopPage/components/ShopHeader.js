import { useState } from "react";
import {
  ShopInfo,
  ShopName,
  ShopWrapper,
  BackgroundShop,
  ShopDetailWrapper,
  WrapperShopStyle,
} from "../style";
import Flexbox from "../../../Component/Flexbox";
import { Avatar } from "@mui/material";
import BackGroundShop from "../../../assets/BackGroundShop.jpg";
import Button from "../../../Component/Button";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import { API_URL } from "../../../config/config";
const ShopHeader = ({ shop }) => {
  let tmpShop;
  if (shop) {
    tmpShop = shop;
  } else {
    tmpShop = {
      id: "unknown",
      name: "unknown",
      email: "unknown@gmail.com",
      phone: "0987654321",
      placeOfReceipt: {},
      star: 0,
      followersNumber: 0,
      avatar: {
        id: 99,
        filename: "image-1667040838083.png",
        path: "public\\uploads\\image-1667040838083.png",
        mimetype: "image/png",
      },
    };
  }
  return (
    <Flexbox
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      gap="100px"
    >
      <ShopInfo>
        <BackgroundShop url={BackGroundShop} />
        <ShopWrapper>
          <Avatar
            alt="Ava Use"
            src={`${API_URL}/file/${tmpShop.avatar.filename}`}
            sx={{
              width: "80px",
              height: "80px",
            }}
          />
          <Flexbox gap="10px" flexDirection="column">
            <Flexbox>
              <ShopName>{tmpShop.name}</ShopName>
            </Flexbox>
            <Flexbox gap="10px">
              <Button buttonType={"white"}>
                <MessageIcon />
                Chat
              </Button>
              <Button buttonType={"white"}>
                <AddIcon />
                Follow
              </Button>
            </Flexbox>
          </Flexbox>
        </ShopWrapper>
      </ShopInfo>
      <WrapperShopStyle>
        <Flexbox gap="10px" flexDirection="column">
          <ShopDetailWrapper>
            <HomeIcon /> Shop address:OVERLAYOUT
          </ShopDetailWrapper>
          <ShopDetailWrapper>
            {" "}
            <PersonIcon />
            Follower: {tmpShop.followersNumber}
          </ShopDetailWrapper>
        </Flexbox>
        <Flexbox gap="10px" flexDirection="column">
          <ShopDetailWrapper>
            {" "}
            <InventoryIcon />
            Product: 200
          </ShopDetailWrapper>
          <ShopDetailWrapper>
            {" "}
            <StarIcon />
            Evaluation: {tmpShop.star}
          </ShopDetailWrapper>
        </Flexbox>
      </WrapperShopStyle>
    </Flexbox>
  );
};

export default ShopHeader;
