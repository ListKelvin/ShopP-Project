import { useState } from "react";
import Wrapper from "../../Component/Wrapper";
import { DivStyle } from "./styled";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import productApi from "../../utils/productApiComponent/productApi";
import InputLabel from "@mui/material/InputLabel";
import SplitButton from "./SelectSplitButton/MuiComponent";
import Flexbox from "../../Component/Flexbox";
import Button from "../../Component/Button";
import { IncreaseDecreaseInput } from "./SelectSplitButton/IncreaseDecreaseInput";
import UploadImg from "./SelectSplitButton/UploadImg";
import CreateVariants from "./SelectSplitButton/CreateVariants";
import { useSelector } from "react-redux";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { selectCategories } from "../../selectors/categorySelect";
import { jsonToFormData } from "../../utils/helper";
const CHARACTER_LIMIT = 1000;
const AddProductPage = () => {
  const token = LocalStorageUtils.getToken();
  const category = useSelector(selectCategories);
  const [amount, setAmount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [categoryId, setCategoryId] = useState("");
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [state, setState] = useState(0);

  const [product, setProduct] = useState({
    name: "",
    detail: "",
  });
  const handleChangeProduct = (props) => (e) => {
    setProduct({ ...product, [props]: e.target.value });
  };
  // const formData = new FormData();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formatData = {
      name: product.name,
      detail: product.detail,
      categoryId: categoryId?.id?.toString(),
      amount: amount,
      quantity: quantity,
    };
    let formData = jsonToFormData(formatData);
    for (let i = 0; i < files.length; i++) {
      formData.append("productImages", files[i]);
    }

    const result = await productApi.postProduct(formData, token);
    console.log(result);
    if (result.status === 201) {
      setAmount(1);
      setQuantity(1);
      setCategoryId("");
      setFiles([]);
      setProduct({
        name: "",
        detail: "",
      });
      setPreview([]);
    }
    for (const value of formData.values()) {
      console.log(value);
    }
  };

  return (
    <Wrapper minHeight="100vh" widthNew="1100">
      <DivStyle>
        <Flexbox flexDirection="column" gap="10px">
          <InputLabelStyle htmlFor="label" required>
            Name
          </InputLabelStyle>
          <TextField
            id="label"
            fullWidth
            required
            value={product.name}
            onChange={handleChangeProduct("name")}
            inputProps={{
              classes: {
                root: classes.textField,
              },
            }}
            placeholder="Please enter product name"
          />
        </Flexbox>

        <Flexbox
          style={{ marginTop: "10px" }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SplitButton
            category={category}
            action={setCategoryId}
            categoryId={categoryId}
          />
          <IncreaseDecreaseInput
            name="Quantity"
            action={setQuantity}
            value={quantity}
          />
          <IncreaseDecreaseInput
            name="Amount"
            action={setAmount}
            value={amount}
          />
        </Flexbox>
        <Flexbox
          flexDirection="column"
          style={{ marginTop: "10px" }}
          gap="10px"
        >
          <InputLabelStyle htmlFor="description" required>
            Description
          </InputLabelStyle>
          <TextField
            id="description"
            fullWidth
            value={product.detail}
            required
            inputProps={{
              maxlength: CHARACTER_LIMIT,
              classes: {
                root: classes.textField,
              },
            }}
            onChange={handleChangeProduct("detail")}
            multiline
            minRows={7}
            placeholder="Please enter a detailed description of the product"
            helperText=<span
              style={{ textAlign: "end" }}
            >{`${state}/${CHARACTER_LIMIT}`}</span>
          />
        </Flexbox>
        {/* Upload 5 img section */}
        <UploadImg
          setFiles={setFiles}
          files={files}
          setPreview={setPreview}
          preview={preview}
        />
        {/* create variant of product */}
        <CreateVariants />
        <Flexbox justifyContent="flex-end" gap="10px">
          <Button buttonType={"light"}> cancel</Button>
          <Button type="submit" onClick={(e) => onSubmit(e)}>
            add
          </Button>
        </Flexbox>
      </DivStyle>
    </Wrapper>
  );
};

export default AddProductPage;
export const InputLabelStyle = styled(InputLabel)({
  display: "flex",
  color: "#2F5E5E",
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  gap: "4px",
  fontWeight: "700",
  fontSize: "20px",
});
export const classes = styled((theme) => ({
  textField: {
    "&:focus": {
      borderColor: "red",
    },
  },
}));
