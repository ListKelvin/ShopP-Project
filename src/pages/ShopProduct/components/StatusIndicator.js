import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/material";

const CustomFooterStatusComponent = (props) => {
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color:
            props.status === "AVAILABLE"
              ? "#4caf50"
              : props.status === "OUT_OF_ORDER"
              ? "#FDA81B"
              : "#d9182e",
        }}
      />
      {props.status}
    </Box>
  );
};
export default CustomFooterStatusComponent;
