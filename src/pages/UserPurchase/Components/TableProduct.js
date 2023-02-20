import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [createRow("Paperclips (Box)", 100, 1.15)];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable({ orderProduct, order }) {
  console.log("order: ", order);
  console.log("orderProduct: ", orderProduct);

  return (
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
          {order?.id}
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
          {order?.totalBill}
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
          {order?.shop.placeOfReceipt}
        </Typography>
      </Box>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 400 }} aria-label="spanning table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Shop</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Into</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <StyledTableCellBody align="left">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      src={
                        "https://phunugioi.com/wp-content/uploads/2020/03/hinh-nen-may-tinh-4k-thien-nhien-scaled.jpg"
                      }
                      width="100px"
                      height="100px"
                      alt=""
                    />
                    <span>{orderProduct?.product.name} </span>
                  </Box>
                </StyledTableCellBody>
                <StyledTableCellBody align="center">
                  {order?.shop.name}
                </StyledTableCellBody>
                <StyledTableCellBody align="center">
                  {orderProduct?.price}
                </StyledTableCellBody>
                <StyledTableCellBody align="center">
                  {orderProduct?.quantity}
                </StyledTableCellBody>
                <StyledTableCellBody align="center">
                  {priceRow(orderProduct?.price, orderProduct?.quantity)}
                </StyledTableCellBody>
              </TableRow>
            ))}

            <TableRow>
              <StyledTableCellBody rowSpan={3} />
              <StyledTableCellBody rowSpan={3} />
              <StyledTableCellBody rowSpan={3} />

              <StyledTableCellBody colSpan={1}>Subtotal</StyledTableCellBody>
              <StyledTableCellBody align="right">
                {ccyFormat(invoiceSubtotal)}
              </StyledTableCellBody>
            </TableRow>
            <TableRow>
              <StyledTableCellBody>Transport fee</StyledTableCellBody>
              <StyledTableCellBody align="right">
                {order.transportFee}
              </StyledTableCellBody>
            </TableRow>
            <TableRow>
              <StyledTableCellBody colSpan={1}>Total</StyledTableCellBody>
              <StyledTableCellBody align="right">
                {ccyFormat(invoiceTotal)}
              </StyledTableCellBody>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export const StyledTableCell = styled(TableCell)({
  color: "#2F5E5E",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 600,
  borderBottom: "1px solid #55ABAB",
});
export const StyledTableCellBody = styled(TableCell)({
  color: "#2F5E5E",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "400",
  borderBottom: "1px solid #55ABAB",
});
