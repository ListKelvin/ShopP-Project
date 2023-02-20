import React, { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";
import FullScreenLoader from "../../../Component/FulllScreenLoader/FullScreenLoader";
import {
  selectCategories,
  selectIsLoading,
  selectIsError,
} from "../../../selectors/categorySelect";
import { CategoriesGrid } from "../style";
import CategoryTest from "./TestCategoryCard";
const CategoryContainer = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const categories = useSelector(selectCategories);
  // if (status === STATUS.LOADING) return <FullScreenLoader />;

  let content;
  if (isLoading === true) {
    content = <FullScreenLoader />;
  } else if (isLoading === false) {
    content = categories.data.map((el) => {
      return <CategoryTest key={el.id} category={el} />;
    });
  } else if (isError === true) {
    content = <p>some error</p>;
  }
  return (
    <div
      style={{
        display: "grid",
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
      <CategoriesGrid>
        <div className="category-items ">{content} </div>
      </CategoriesGrid>
    </div>
  );
};

export default CategoryContainer;

// <div
//   style={{
//     // padding: "20px 30px",
//     background: "#B6E3E3",
//     width: "100%",
//     display: "flex",

//     justifyContent: "left",

//     overflowX: "scroll",
//   }}
// >
//   {content}
// </div>
