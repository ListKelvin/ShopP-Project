import React, { useEffect } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../config/config";
import {
  fetchApiData,
  fetchApiError,
  setLoading,
} from "../../../slices/categoryReducer";
import { getFIleImage } from "../../../utils/productApi";
import {
  selectCategories,
  selectIsLoading,
} from "../../../selectors/categorySelect";

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const urlGetCategories = API_URL + "/category/list-all";
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  const getCategories = async (url) => {
    dispatch(setLoading());
    try {
      const res = await axios.get(url);
      const data = await res.data;
      dispatch(fetchApiData(data));
    } catch (error) {
      dispatch(fetchApiError());
    }
  };
  useEffect(() => {
    getCategories(urlGetCategories);
  }, []);
  console.log(isLoading);
  if (isLoading) {
    return <div> ......Loading </div>;
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
        {isLoading
          ? ""
          : categories.data.map(({ id, name, image }) => {
              return <CategoryCard label={name} id={id} img={image} />;
            })}
      </div>
    </div>
  );
};

export default CategoryContainer;
