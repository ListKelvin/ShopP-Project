import { useState } from "react";
import Chip from "@mui/material/Chip";
import { ShopVoucherContainer } from "../styled";
const ListAdditional = ({ additional, action, value2 }) => {
  const handleSelect = (variationId, option) => {
    let newSelectedVariations = [...value2];
    let selected = [];
    let selectedVariationIndex = newSelectedVariations.findIndex(
      (variation) =>
        variation.id === variationId &&
        variation.option.trim() === option.trim()
    );
    let checkedId = newSelectedVariations.findIndex(
      (variation) => variation.id === variationId
    );

    if (selectedVariationIndex !== -1) {
      console.log("check run 3");

      newSelectedVariations.splice(selectedVariationIndex, 1);
      selected = [...newSelectedVariations];
    } else if (checkedId !== -1) {
      selected = newSelectedVariations.map((variant) => {
        if (variant.id === variationId) {
          return { ...variant, option: option.trim() };
        }

        return variant;
      });
    } else {
      selected = [
        ...newSelectedVariations,
        { id: variationId, option: option.trim() },
      ];
      // selected;
    }
    action(selected);
  };

  function checkInArray(option) {
    return value2.findIndex((el) => el.option.trim() === option.trim());
  }
  return (
    <>
      {additional?.map((el) => {
        let options = el?.value?.split(",");

        return (
          <ShopVoucherContainer key={el.id}>
            <div className="title">{el.key}</div>

            {options.map((option, id) => {
              return (
                <Chip
                  clickable
                  key={option}
                  onClick={() => {
                    handleSelect(el.id, option);
                  }}
                  label={option}
                  size="small"
                  sx={{
                    minWidth: "50px",
                    marginRight: "10px",
                    color: `${
                      checkInArray(option) !== -1 ? "#ffffff" : "#55ABAB"
                    }`,

                    backgroundColor: `${
                      checkInArray(option) !== -1 ? "#55ABAB" : "#B6E3E3"
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
