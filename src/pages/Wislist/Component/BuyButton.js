import Button from "@mui/material/Button";
export default function BuyNowButton() {
  return (
    <Button
      variant="contained"
      disableElevation
      style={{
        textTransform: "none",
        backgroundColor: "#55ABAB",
      }}
    >
      <span>Buy now</span>
    </Button>
  );
}
