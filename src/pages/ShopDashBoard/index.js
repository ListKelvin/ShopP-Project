import Flexbox from "../../Component/Flexbox";
import Button from "../../Component/Button";
const ShopDashBoard = () => {
  return (
    <div>
      <Flexbox
        width="100%"
        height="500px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button buttonType={"reset"}> test 1 </Button>
        <div> test 1 </div>
        <div> test 1 </div>
        <div> test 1 </div>
        <div> test 1 </div>
      </Flexbox>
    </div>
  );
};

export default ShopDashBoard;
