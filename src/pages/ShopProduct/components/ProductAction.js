import { useState } from "react";
import { Delete, Edit, Preview } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import ProductDialog from "./ProductDialog";
const ProductActions = ({ params }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Tooltip title="View product details">
        <IconButton
          //   onClick={() => dispatch({ type: "UPDATE_ROOM", payload: params.row })}
          onClick={handleClickOpen}
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this product">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this product">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <ProductDialog open={open} onClose={handleClose} item={params.row} />
    </Box>
  );
};

export default ProductActions;
