import { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import CustomFooterStatusComponent from "./components/StatusIndicator";
// import { useValue } from "../../../context/ContextProvider";
// import { getRooms } from "../../../actions/room";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../selectors/userSelector";
import { grey } from "@mui/material/colors";
import ProductActions from "./components/ProductAction";
import { selectShopProducts } from "../../selectors/productSelect";
import { fetchShopProduct } from "../../slices/productReducer";
import { formatPrice } from "../../utils/helper";
import { API_URL } from "../../config/config";
const ShopProduct = () => {
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const ShopProducts = useSelector(selectShopProducts);

  const rows = [
    {
      id: 1,
      title: "Minh 1",
      images: [
        "https://th.bing.com/th/id/R.8c682824f8970b3ecb1fa253f4329d98?rik=QP%2ftkfKN6UEOgg&riu=http%3a%2f%2fthuthuatphanmem.vn%2fuploads%2f2017%2f11%2f05%2fhinh-nen-4k-dep-10_124945.jpg&ehk=%2fR3uXbmRi7sZ0KF13%2bBx5WwvaZEnoLHRbzWQhHWRa18%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.adbf8bc808ebc773b532bcf4b8f9751e?rik=G2HloAeKz1iyMQ&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.adbf8bc808ebc773b532bcf4b8f9751e?rik=G2HloAeKz1iyMQ&pid=ImgRaw&r=0",
      ],
      quantity: "25",
      category: "chao",
      status: "connected",
      price: "123",
      createdAt: "12/02/2023",
      actions: "test",
    },
    {
      id: 2,
      title: "Minh 2",
      images: [
        "https://th.bing.com/th/id/R.30eea40e007263de6d6e2051ef35d6b3?rik=WqmowqAqLFJqEQ&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.adbf8bc808ebc773b532bcf4b8f9751e?rik=G2HloAeKz1iyMQ&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.30eea40e007263de6d6e2051ef35d6b3?rik=WqmowqAqLFJqEQ&pid=ImgRaw&r=0",
      ],
      quantity: "25",
      category: "chao",
      status: "connected",
      price: "123",
      createdAt: "12/02/2023",
      actions: "test",
    },
    {
      id: 3,
      title: "Minh 3",
      images: [
        "https://th.bing.com/th/id/R.adbf8bc808ebc773b532bcf4b8f9751e?rik=G2HloAeKz1iyMQ&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.adbf8bc808ebc773b532bcf4b8f9751e?rik=G2HloAeKz1iyMQ&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.adbf8bc808ebc773b532bcf4b8f9751e?rik=G2HloAeKz1iyMQ&pid=ImgRaw&r=0",
      ],
      quantity: "25",
      category: "chao",
      status: "disconnected",
      price: "123",
      createdAt: "12/02/2023",
      actions: "test",
    },
  ];
  const columns = useMemo(
    () => [
      {
        field: "images",
        headerName: "Photo",
        width: 70,
        renderCell: (params) => {
          return (
            <Avatar
              src={`${API_URL}/file/${params.row.productImage[0]?.localFile?.filename}`}
              variant="rounded"
            />
          );
        },
        sortable: false,
        filterable: false,
      },
      { field: "name", headerName: "Product", width: 170 },

      { field: "quantity", headerName: "Quantity", width: 80 },

      {
        field: "amount",
        headerName: "Cost",
        width: 100,
        renderCell: (params) => formatPrice(params.row.amount),
      },
      {
        field: "sold",
        headerName: "Sold",
        width: 200,
        renderCell: (params) => params.row.sold + " item",
      },
      {
        field: "category",
        headerName: "Category",
        width: 200,
        renderCell: (params) => params.row.category.name,
      },
      {
        field: "status",
        headerName: "Status",
        width: 200,
        renderCell: (params) => (
          <CustomFooterStatusComponent status={params.row.status} />
        ),
      },
      {
        field: "actions",
        headerName: "Actions",
        // type: "actions",
        width: 237,
        renderCell: (params) => <ProductActions {...{ params }} />,
      },
    ],
    []
  );
  useEffect(() => {
    if (ShopProducts.length === 0) dispatch(fetchShopProduct(user?.shop?.id));
  }, []);
  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Manage Products
      </Typography>
      <DataGridStyled
        columns={columns}
        loading={ShopProducts?.length === 0}
        rows={ShopProducts}
        getRowId={(row) => {
          return row.id;
        }}
        rowsPerPageOptions={[5, 10, 20]}
        hideFooterSelectedRowCount
        disableColumnMenu
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? grey[200] : grey[900],
          },
        }}
      />
    </Box>
  );
};

export default ShopProduct;
export const DataGridStyled = styled(DataGrid)({
  "& 		.MuiDataGrid-main": {
    // backgroundColor: "#2F5E5E",
    // // borderRadius: "20px",
    // padding: 3,
  },
  "& 	.MuiDataGrid-columnHeader": {
    backgroundColor: "#B6E3E3",
    color: "#2F5E5E",
    // borderRadius: "20px",
    // padding: 3,
  },
});
