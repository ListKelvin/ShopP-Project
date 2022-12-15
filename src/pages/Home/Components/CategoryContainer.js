import React, { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

import {
  selectCategories,
  selectIsLoading,
  selectIsError,
} from "../../../selectors/categorySelect";

const CategoryContainer = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const categories = useSelector(selectCategories);

  let content;
  if (isLoading === true) {
    content = <p>"Loading..."</p>;
  } else if (isLoading === false) {
    content = categories.data.map((el) => {
      return <CategoryCard key={el.id} label={el.name} img={el.image} />;
    });
  } else if (isError === true) {
    content = <p>some error</p>;
  }
  return (
    <div
      style={{
        background: "#B6E3E3",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "League Spartan",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "18px",
          marginBottom: "10px",
          color: "#2F5E5E",
        }}
      >
        CATEGORY
      </div>
      <div
        style={{
          // padding: "20px 30px",
          background: "#B6E3E3",
          width: "100%",
          display: "flex",

          justifyContent: "left",
          // gap: "10px",
          overflowX: "scroll",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default CategoryContainer;
