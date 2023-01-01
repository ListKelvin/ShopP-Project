import TitleCartPage from "./components/tilte";
import AddressUser from "./components/AddressUser";
import TableOrder from "./components/TableOrder";
const OrderPage = () => {
  return (
    <>
      <TitleCartPage />
      {/* user address */}
      <AddressUser />
      {/* order table  */}
      <TableOrder />
    </>
  );
};

export default OrderPage;
