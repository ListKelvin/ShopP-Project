import { FilterComponent, FilterFrame, FilterTitle, NameofFilter, TypeofFilter } from "./style";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ProductFilter = () => {
  return (
    <>
      <FilterFrame>
        <FilterTitle>Search Filter</FilterTitle>
        <TypeofFilter>
          <FilterComponent>
            <NameofFilter>By Category</NameofFilter>
            <KeyboardArrowRightIcon/>
          </FilterComponent>
        </TypeofFilter>
      </FilterFrame>
    </>
  );
};

export default ProductFilter;
