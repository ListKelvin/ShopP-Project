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
  FilterCategory,
  WrapperFlexColumn,
} from "./style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Accordion from "./components/Accordion";
import GridView from "../ProductList/ProductList";
import { selectProducts } from "../../selectors/productSelect";
import { useSelector, useDispatch } from "react-redux";
import {
  loadFilterProduct,
  updateFilterValues,
  filterProducts,
} from "../../slices/filterReducer";
import { useEffect } from "react";
import { selectFilterProducts } from "../../selectors/filterSelector";
import { selectFilters } from "../../selectors/filterSelector";
import { selectAllProducts } from "../../selectors/filterSelector";
import { selectCategories } from "../../selectors/categorySelect";
const ProductFilter = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector(selectCategories);
  const productItems = useSelector(selectProducts);
  const allProducts = useSelector(selectAllProducts);
  const filters = useSelector(selectFilters);
  const filterProduct = useSelector(selectFilterProducts);
  console.log(filterProduct);
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };
  const categoryData = getUniqueData(allCategories.data, "name");
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch(updateFilterValues({ name, value }));
  };
  useEffect(() => {
    dispatch(filterProducts());
  }, [allProducts, filters]);

  useEffect(() => {
    dispatch(loadFilterProduct(productItems[0]));
  }, [productItems, dispatch]);
  return (
    <>
      <h1>Product</h1>
      <Layout>
        <FilterFrame>
          <FilterTitle>Search Filter</FilterTitle>
          <Accordion>
            <TypeofFilter label="By Category">
              {categoryData.map((el, index) => {
                return (
                  <FilterCategory
                    key={index}
                    type="button"
                    name="category"
                    value={el}
                    onClick={updateFilterValue}
                  >
                    {el}
                  </FilterCategory>
                );
              })}
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
        <WrapperFlexColumn>
          <SortFrame>
            <SortTitle>Sort by</SortTitle>
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
          <GridView products={filterProduct} />
        </WrapperFlexColumn>
      </Layout>
    </>
  );
};

export default ProductFilter;
