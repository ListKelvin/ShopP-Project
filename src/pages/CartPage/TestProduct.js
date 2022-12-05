import {
  Container,
  MainTable,
  TableHeaderContainer,
  CheckBoxWrapper,
  ItemHeader,
} from "./TestStyled";

const TestProductTable = () => {
  return (
    <Container>
      <MainTable>
        <TableHeaderContainer>
          <CheckBoxWrapper>CheckBox</CheckBoxWrapper>
          <ItemHeader> Product</ItemHeader>
          <div style={{ width: "15.88022%", textAlign: "center" }}>Price</div>
          <div style={{ width: "15.4265%" }}>Amount</div>
          <div style={{ width: "10.43557%" }}>Total</div>
          <div style={{ width: "12.70417%", textAlign: "center" }}>Action</div>
        </TableHeaderContainer>
        <div className="productItem">
          <div className="shopInfo"></div>
          <div className="productInfo"></div>
          <div className="shopVoucher"></div>
          <div className="shipFee"></div>
        </div>
      </MainTable>
    </Container>
  );
};

export default TestProductTable;
