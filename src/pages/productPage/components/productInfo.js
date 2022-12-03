import { ProductName, ProductEvaluated } from "../styled";
import CountDown from "../../../Component/Countdown/CountDown";
import { ReactComponent as FlashIcon } from "../../../assets/image 68.svg";
import { getAllProduct } from "../../../utils/productApi";
const ProductInfo = () => {
  return (
    <>
      <ProductName> Name of productInfo</ProductName>
      <ProductEvaluated>
        <div> star</div>
        <div> evaluation</div>
        <div> sold</div>
      </ProductEvaluated>
      <div
        className="CountDownn"
        style={{
          width: "100%",
          height: "50px",
          background: "#2F5E5E",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#ffffff",
          marginBottom: "10px",
        }}
      >
        <div className="" style={{ display: "flex", marginLeft: "20px" }}>
          <FlashIcon />
          FLASH SALE
        </div>
        <div
          className=""
          style={{
            display: "flex",
            marginRight: "30px",
            justifyContent: "space-between",
          }}
        >
          <CountDown />
          <button
            style={{
              background: "#B6E3E3",
              padding: "10px 10px",
              border: "none",
              borderRadius: "10px",
            }}
          >
            See All
          </button>
        </div>
      </div>
      <div> Shop Voucher</div>
      <button
        onClick={() => {
          const data = getAllProduct()
            .then((category) => {
              console.log(category);
              return category;
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {" "}
        click me{" "}
      </button>
      <div>
        <div> additional infor</div>
      </div>
      <div> quantity</div>
    </>
  );
};

export default ProductInfo;
