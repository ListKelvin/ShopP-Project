import React from "react";
import CategoryCard from "./CategoryCard";
const SuggestList = [
  {
    id: 1,
    label: "for you",
  },
  {
    id: 2,
    label: "Hot deal",
  },
  {
    id: 3,
    label: "Supermarket",
  },
  {
    id: 4,
    label: "New Products",
  },
  {
    id: 5,
    label: "Fashion Trend",
  },
  {
    id: 6,
    label: "Book Market",
  },
  {
    id: 7,
    label: "Book Marke",
  },
  {
    id: 8,
    label: "for you",
  },
  {
    id: 9,
    label: "Hot deal",
  },
  {
    id: 10,
    label: "Supermarket",
  },
  {
    id: 11,
    label: "New Products",
  },
  {
    id: 12,
    label: "Fashion Trend",
  },
  {
    id: 13,
    label: "Book Market",
  },
  {
    id: 14,
    label: "Book Marke",
  },
  {
    id: 15,
    label: "for you",
  },
  {
    id: 16,
    label: "Hot deal",
  },
  {
    id: 17,
    label: "Supermarket",
  },
  {
    id: 18,
    label: "New Products",
  },
  {
    id: 19,
    label: "Fashion Trend",
  },
  {
    id: 20,
    label: "Book Market",
  },
  {
    id: 21,
    label: "Book Marke",
  },
  {
    id: 22,
    label: "for you",
  },
  {
    id: 23,
    label: "Hot deal",
  },
  {
    id: 24,
    label: "Supermarket",
  },
  {
    id: 25,
    label: "New Products",
  },
  {
    id: 26,
    label: "Fashion Trend",
  },
  {
    id: 27,
    label: "Book Market",
  },
  {
    id: 28,
    label: "Book Marke",
  },
  {
    id: 29,
    label: "Hot deal",
  },
  {
    id: 30,
    label: "Supermarket",
  },
];
const CategoryContainer = () => {
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
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {SuggestList.map(({ id, label }) => {
          return <CategoryCard label={label} id={id} />;
        })}
      </div>
    </div>
  );
};

export default CategoryContainer;
