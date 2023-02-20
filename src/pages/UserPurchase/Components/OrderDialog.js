import { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import Button from "../../../Component/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import SpanningTable from "./TableProduct";
import orderProductApi from "../../../utils/productApiComponent/orderProductApi";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& 	.MuiDialog-paper": {
    borderRadius: "10px",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
const OrderDialog = ({ order }) => {
  const [open, setOpen] = useState(false);
  const [orderProduct, setOrderProduct] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(orderProduct);
  useEffect(() => {
    if (open) {
      console.log("run");
      orderProductApi.getOrderOfCustomer(order.id).then((res) => {
        setOrderProduct(res.data.data);
      });
    }
  }, [open]);
  return (
    <div>
      <Button onClick={handleClickOpen}>Open dialog</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="lg"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Order Information
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              mb: 2,
              gap: 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                width: "100%",
                minHeight: "200px",
                backgroundColor: "transparent",
                borderRadius: "20px",
                border: "1px solid rgba(85, 171, 171, 0.75)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  color: "#2F5E5E",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                Total Products
              </Typography>
              <Divider sx={{ borderColor: "#55ABAB", mb: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#2F5E5E",
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  Nguyen van A
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#2F5E5E",
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  Thu Duc District HoChiMinh
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#2F5E5E",
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  Tel: 0123456789
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                width: "100%",
                minHeight: "200px",

                backgroundColor: "transparent",
                borderRadius: "20px",
                border: "1px solid rgba(85, 171, 171, 0.75)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  color: "#2F5E5E",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                Shipping Unit
              </Typography>
              <Divider sx={{ borderColor: "#55ABAB", mb: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#2F5E5E",
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  {order?.shoppingUnit.name}
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                width: "100%",
                minHeight: "200px",

                backgroundColor: "transparent",
                borderRadius: "20px",
                border: "1px solid rgba(85, 171, 171, 0.75)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  color: "#2F5E5E",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                Payment
              </Typography>
              <Divider sx={{ borderColor: "#55ABAB", mb: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#2F5E5E",
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  {order?.payment.name}
                </Typography>
              </Box>
            </Paper>
          </Box>
          <SpanningTable orderProduct={orderProduct} order={order} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default OrderDialog;
// <DialogActions>
//   <Button autoFocus onClick={handleClose}>
//     Save changes
//   </Button>
// </DialogActions>
