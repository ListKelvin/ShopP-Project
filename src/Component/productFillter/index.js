import { useEffect } from "react";
import { useState } from "react";
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
  InputRange,
  WrapperFlex,
  ApplyFlex,
  WrapperFlexStyled,
} from "./style";
import { FilterProductApi } from "../../slices/filterReducer";
import { loadFilterProductAPi } from "../../slices/filterReducer";
import Button from "../Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Accordion from "./components/Accordion";
import GridView from "../ProductList/ProductList";
import productApi from "../../utils/productApiComponent/productApi";
import { selectProducts } from "../../selectors/productSelect";
import { useSelector, useDispatch } from "react-redux";
import {
  loadFilterProduct,
  updateFilterValues,
  filterProducts,
} from "../../slices/filterReducer";
import { clearFilterProducts } from "../../slices/filterReducer";
import { selectCategories } from "../../selectors/categorySelect";
import { selectFilterProductsApi } from "../../selectors/filterSelector";
import { updateFilterProductByPrice } from "../../slices/filterReducer";
const ProductFilter = () => {
  const [userinfo, setUserInfo] = useState({
    category: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring

    const { value, checked, id } = e.target;
    const { category } = userinfo;

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        category: [...category, parseInt(id)],
        response: [...category, parseInt(id)],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        category: category.filter((e) => e !== parseInt(id)),
        response: category.filter((e) => e !== parseInt(id)),
      });
    }
  };

  const dispatch = useDispatch();
  const allCategories = useSelector(selectCategories);
  const productItems = useSelector(selectProducts);
  const filterProduct = useSelector(selectFilterProductsApi);

  const [minRange, setMinRange] = useState();
  const [maxRange, setMaxRange] = useState();

  const handleChangeMax = (e) => {
    if (e.target.value > 10000000000) {
      setMaxRange(100000000);
    } else setMaxRange(e.target.value);
  };
  const handleChangeMin = (e) => {
    if (e.target.value < 0) {
      setMinRange(1);
    } else setMinRange(e.target.value);
  };

  const ApplyPriceRange = async (product) => {
    console.log(product);
    dispatch(clearFilterProducts());

    const result = await productApi.filterProductByPrice(product);
    if (result.status === 200) {
      console.log(result.data.data);
      dispatch(updateFilterProductByPrice(result.data.data));
    }
    console.log(result.status == 200);
  };

  useEffect(() => {
    if (userinfo.response.length !== 0) {
      const formatCategories = {
        take: 11,
        skip: 0,
        categoryIds: userinfo.response,
      };
      dispatch(FilterProductApi(formatCategories));
    } else {
      dispatch(loadFilterProductAPi(productItems[0]));
    }
  }, [userinfo.response, dispatch]);
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
              {allCategories?.data.map((el, index) => {
                return (
                  <WrapperFlexStyled>
                    <FilterCategory
                      key={index}
                      id={el.id}
                      name="category"
                      value={el.name}
                      label={el.name}
                      onClick={handleChange}
                    ></FilterCategory>
                    <label htmlFor={el.name}>{el.name}</label>
                  </WrapperFlexStyled>
                );
              })}
            </TypeofFilter>
            <TypeofFilter label="Price Range">
              {/* <WrapperFlex>
                <InputRange
                  type="number"
                  placeholder="Min"
                  onChange={handleChangeMin}
                />
                <InputRange
                  type="number"
                  placeholder="Max"
                  onChange={handleChangeMax}
                />
              </WrapperFlex>
              <ApplyFlex>
                <Button onClick={() => ApplyPriceRange({ minRange, maxRange })}>
                  Apply
            </Button>
              </ApplyFlex>*/}
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
