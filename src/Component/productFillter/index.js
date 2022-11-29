import { FilterComponent, FilterFrame, FilterTitle, Layout, NameofFilter, SortButton, SortFrame, SortTitle, TypeofFilter } from "./style";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from "@mui/material";

const ProductFilter = () => {
  return (
    <>
      <h1>Product</h1>
      <Layout>
        <FilterFrame>
          <FilterTitle>Search Filter</FilterTitle>
          <TypeofFilter>
            <FilterComponent>
              <NameofFilter>By Category</NameofFilter>
              <KeyboardArrowRightIcon />
            </FilterComponent>
          </TypeofFilter>
          <TypeofFilter>
            <FilterComponent>
              <NameofFilter>Price Range</NameofFilter>
              <KeyboardArrowRightIcon />
            </FilterComponent>
          </TypeofFilter>
          <TypeofFilter>
            <FilterComponent>
              <NameofFilter>Rating</NameofFilter>
              <KeyboardArrowRightIcon />
            </FilterComponent>
          </TypeofFilter>
          <TypeofFilter>
            <FilterComponent>
              <NameofFilter>Service and Promotion</NameofFilter>
              <KeyboardArrowRightIcon />
            </FilterComponent>
          </TypeofFilter>
          <TypeofFilter>
            <FilterComponent>
              <NameofFilter>Shipping options</NameofFilter>
              <KeyboardArrowRightIcon />
            </FilterComponent>
          </TypeofFilter>
          <TypeofFilter>
            <FilterComponent>
              <NameofFilter>Shipping froms</NameofFilter>
              <KeyboardArrowRightIcon />
            </FilterComponent>
          </TypeofFilter>
          <TypeofFilter>
            <FilterComponent>
              <NameofFilter>Brands</NameofFilter>
              <KeyboardArrowRightIcon />
            </FilterComponent>
          </TypeofFilter>
        </FilterFrame>

        <SortFrame>
          <SortTitle>Sort by</SortTitle>
          <SortButton><b>Relevence</b> </SortButton>
          <SortButton><b>Latest</b></SortButton>
          <SortButton><b>Top Sales</b></SortButton>
          <SortButton><b>Price</b></SortButton>
        </SortFrame>
      </Layout>
    </>
  );
};

export default ProductFilter;
