import React from "react";

const CategoryTest = ({ category }) => {
  console.log(category);
  return (
    <>
      <div className="category-item">
        <div className="category-item-img">
          <img
            src={`https://shopp-be.lethanhlong.me/file/${category.image.filename}`}
            alt=""
          />
        </div>
        <div className="category-item-name text-center">
          <h6 className="fs-20">{category.name}</h6>
        </div>
      </div>
    </>
  );
};

export default CategoryTest;
