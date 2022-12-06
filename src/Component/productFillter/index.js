import {
  FilterComponent,
  FilterFrame,
  FilterTitle,
  Layout,
  NameofFilter,
  SortButton,
  SortFrame,
  SortTitle,
  TypeofFilter,
} from "./style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Accordion from "./components/Accordion";

const ProductFilter = () => {
  return (
    <>
      <h1>Product</h1>
      <Layout>
        <FilterFrame>
          <FilterTitle>Search Filter</FilterTitle>
          <Accordion>
            <TypeofFilter label="By Category">
              <NameofFilter>By Category</NameofFilter>
              <KeyboardArrowRightIcon />
              <NameofFilter>By Category</NameofFilter>
              <KeyboardArrowRightIcon />
            </TypeofFilter>
            <TypeofFilter label="test1">
              <FilterComponent>
                <NameofFilter>Price Range</NameofFilter>
                <KeyboardArrowRightIcon />
              </FilterComponent>
            </TypeofFilter>
            <TypeofFilter label="test2">
              <FilterComponent>
                <NameofFilter>Rating</NameofFilter>
                <KeyboardArrowRightIcon />
              </FilterComponent>
            </TypeofFilter>
            <TypeofFilter label="test3">
              <FilterComponent>
                <NameofFilter>Service and Promotion</NameofFilter>
                <KeyboardArrowRightIcon />
              </FilterComponent>
            </TypeofFilter>
            <TypeofFilter label="test4">
              <FilterComponent>
                <NameofFilter>Shipping options</NameofFilter>
                <KeyboardArrowRightIcon />
              </FilterComponent>
            </TypeofFilter>
            <TypeofFilter label="test5">
              <FilterComponent>
                <NameofFilter>Shipping froms</NameofFilter>
                <KeyboardArrowRightIcon />
              </FilterComponent>
            </TypeofFilter>
            <TypeofFilter label="test6">
              <FilterComponent>
                <NameofFilter>Brands</NameofFilter>
                <KeyboardArrowRightIcon />
              </FilterComponent>
            </TypeofFilter>
          </Accordion>
        </FilterFrame>

        <SortFrame>
          <SortTitle>Sort by</SortTitle>
          <SortButton>
            <b>Relevence</b>{" "}
          </SortButton>
          <SortButton>
            <b>Latest</b>
          </SortButton>
          <SortButton>
            <b>Top Sales</b>
          </SortButton>
          <SortButton>
            <b>Price</b>
          </SortButton>
        </SortFrame>
      </Layout>
    </>
  );
};

export default ProductFilter;
