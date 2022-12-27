import { ShopContainer } from "./style";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShopHeader from "./components/ShopHeader";
import shopApi from "../../utils/productApiComponent/shopApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import FullScreenLoader from "../../Component/FulllScreenLoader/FullScreenLoader";
import { useSelector } from "react-redux";
import { selectProducts } from "../../selectors/productSelect";
const ShopPage = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState();
  const token = LocalStorageUtils.getToken();
  const { id } = useParams();
  const productItems = useSelector(selectProducts);
  const listProducts = productItems[0];

  const navigate = useNavigate();

  useEffect(() => {
    let item = null;
    for (let i = 0; i < listProducts.length; i++) {
      if (listProducts[i]?.shop?.id === id) {
        console.log(listProducts[i]);
        item = listProducts[i].shop;
        break;
      }
    }
    if (item != null) {
      setState(item);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [id]);
  if (loading) {
    return <FullScreenLoader />;
  }
  console.log(state);
  return (
    <ShopContainer>
      <ShopHeader shop={state} />
    </ShopContainer>
  );
};

export default ShopPage;
