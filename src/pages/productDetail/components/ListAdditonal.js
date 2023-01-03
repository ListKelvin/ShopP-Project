import { useState } from "react";
import Chip from "@mui/material/Chip";
import { ShopVoucherContainer } from "../styled";
const ListAdditional = ({ additional, action, value2 }) => {
  const ToggledChip = (value) => {
    if (value !== value2) {
      action(value);
      console.log("checked");
    } else {
      console.log("Un checked");
      action("");
    }
  };

  return (
    <>
      {additional?.map((el) => {
        let value = el?.value?.split(",");
        return (
          <ShopVoucherContainer key={el.id}>
            <div className="title">{el.key}</div>
            {value.map((item, id) => {
              return (
                <Chip
                  clickable
                  //   disabled={!(item === value2) || item !== value2}
                  key={id}
                  onClick={() => {
                    ToggledChip(item);
                  }}
                  label={item}
                  size="small"
                  sx={{
                    minWidth: "50px",
                    marginRight: "10px",
                    color: `${item === value2 ? "#ffffff" : "#55ABAB"}`,
                    userSelect: "none",
                    backgroundColor: `${
                      item === value2 ? "#55ABAB" : "#B6E3E3"
                    }`,
                  }}
                />
              );
            })}
          </ShopVoucherContainer>
        );
      })}
    </>
  );
};

export default ListAdditional;