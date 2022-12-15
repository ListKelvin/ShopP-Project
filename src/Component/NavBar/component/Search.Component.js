import SearchIcon from "@mui/icons-material/Search";
import { StyledInputBase, Search, SearchIconWrapper } from "../style";
import { updateFilterValues } from "../../../slices/filterReducer";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value);
    if (value) {
      dispatch(updateFilterValues({ name, value }));
    }
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "white" }} />
      </SearchIconWrapper>
      <StyledInputBase
        name="text"
        onChange={updateFilterValue}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
