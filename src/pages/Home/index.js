import ProductCard from "../../Component/ProductCard";
import { ProductWrapper } from "./style";
import { Wrapper } from "../../Component/ProductList/style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SuggestContainer from "./Components/CategoryFilter";
import Branding from "./Components/Branding";
import { selectProducts } from "../../selectors/productSelect";
import FlashSale from "./Components/FlashSale";
import { Box } from "@mui/material";
import CategoryContainer from "../../pages/Home/Components/CategoryContainer";
import Brand from "../../assets/Branding/image 69.png";
import { STATUS } from "../../utils/status";
import { setUser, deleteUser } from "../../slices/user";
import FullScreenLoader from "../../Component/FulllScreenLoader/FullScreenLoader";
import LocalStorageUtils from "../../utils/LocalStorageUtils";

const Home = () => {
  const dispatch = useDispatch();
  const AllProducts = useSelector(selectProducts);

  const token = LocalStorageUtils.getToken();
  useEffect(() => {
    const getUser = async () => {
      const user = await LocalStorageUtils.getUser();

      if (user === undefined) {
        dispatch(deleteUser());
        // toastError("Please login again your account has expired");
      }
      const simplifyUser = {
        customer: user.data.customer,
        email: user.data.email,
        id: user.data.id,
        role: user.data.role,
        shop: user.data.shop,
        phone: user.data.phone,
      };
      dispatch(setUser(simplifyUser));
    };
    if (token) {
      getUser();
    }
  }, [dispatch, token]);

  return (
    <>
      <Branding />
      <FlashSale />
      <Box sx={{ width: "100%" }}>
        <img src={Brand} width="100%" alt="" />
      </Box>
      <SuggestContainer />
      <CategoryContainer />
      <Wrapper className="section">
        <div className="container grid grid-three-column">
          {AllProducts[0] !== undefined ? (
            AllProducts[0].map((el, index) => {
              const { amount, name, star, sold, productImage, id } = el;

              return (
                <ProductCard
                  id={id}
                  name={name}
                  price={amount}
                  rate={star}
                  sold={sold}
                  img={productImage}
                  key={index}
                />
              );
            })
          ) : (
            <FullScreenLoader />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
//
