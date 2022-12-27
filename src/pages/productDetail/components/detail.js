import {
  StyleDetailWrapper,
  Title,
  StyleSmallDetail,
  ItemDetail,
  DescriptionWrapper,
} from "../styled";
import Flexbox from "../../../Component/Flexbox";
const fakeDate = [
  { Category: "Ao Quan" },
  { Branch: "Something" },
  { Safe: "Yes" },
  { Quantity: "1000" },
];
const Detail = ({ product }) => {
  const { shop } = product;
  return (
    <StyleDetailWrapper>
      <Flexbox flexDirection="column">
        <Title> PRODUCT DETAIL</Title>
        <ItemDetail>
          <Flexbox width="50%" flexDirection="column" gap="10">
            <Flexbox height="10" justifyContent="space-between">
              <StyleSmallDetail className="key">Category:</StyleSmallDetail>
              <StyleSmallDetail className="value">
                {product.category.name}
              </StyleSmallDetail>
            </Flexbox>
            <Flexbox height="10" justifyContent="space-between">
              <StyleSmallDetail className="key">Quantity:</StyleSmallDetail>
              <StyleSmallDetail className="value">
                {product.quantity}
              </StyleSmallDetail>
            </Flexbox>
            <Flexbox height="10" justifyContent="space-between">
              <StyleSmallDetail className="key">Status:</StyleSmallDetail>
              <StyleSmallDetail className="value">
                {product.status}
              </StyleSmallDetail>
            </Flexbox>
          </Flexbox>
        </ItemDetail>
      </Flexbox>
      <Flexbox flexDirection="column">
        <Title> PRODUCT DESCRIPTION</Title>
        <ItemDetail>
          <Flexbox flexDirection="column" gap="10">
            <Flexbox height="10" justifyContent="space-between">
              <DescriptionWrapper className="description">
                Màn hình lớn hơn, trải nghiệm nhiều hơn Thưởng thức nhiều nội
                dung cực mãn nhãn với màn hình tràn viền Infinity-V 6.5". Cụm
                Camera cao cấp bậc nhất trong phân khúc Bộ đôi Camera sau 48MP
                sở hữu độ phân giải cao bậc nhất, cho chất lượng hình ảnh rõ nét
                cả khi phóng to.
              </DescriptionWrapper>
            </Flexbox>
          </Flexbox>
        </ItemDetail>
      </Flexbox>
    </StyleDetailWrapper>
  );
};

export default Detail;
