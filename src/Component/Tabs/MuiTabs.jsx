import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import orderApi from "../../utils/productApiComponent/orderApi";
import TableOrderCustomer from "../../pages/UserPurchase/Components/TableOrder";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import Skeleton from "@mui/material/Skeleton";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const token = LocalStorageUtils.getToken();
  const [value, setValue] = React.useState(0);
  const [orderCustomer, setOrderCustomer] = React.useState();
  const [orderCustomerDeliver, setOrderCustomerDeliver] = React.useState();
  const [orderCustomerHistory, setOrderCustomerHistory] = React.useState();
  const [orderCustomerCancel, setOrderCustomerCancel] = React.useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    return function cleanUp() {
      orderApi.getOrderCustomer(token).then((res) => {
        setOrderCustomer(res.data.data);
      });
      orderApi.getOrderCustomerDeliver(token).then((res) => {
        setOrderCustomerDeliver(res.data.data);
      });
      orderApi.getOrderCustomerHistory(token).then((res) => {
        setOrderCustomerHistory(res.data.data);
      });
      orderApi.getOrderCustomerCancel(token).then((res) => {
        setOrderCustomerCancel(res.data.data);
      });
    };
  }, []);
  let orderChecking = orderCustomer?.filter((el) => el.deliveryStatus === 0);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          visibleScrollbar={true}
        >
          <StyledTab label="All" {...a11yProps(0)} />
          <StyledTab label="Checking" {...a11yProps(1)} />
          <StyledTab label="Confirmed" {...a11yProps(2)} />
          <StyledTab label="Packaging" {...a11yProps(3)} />
          <StyledTab label="Delivering" {...a11yProps(4)} />
          <StyledTab label="Delivered" {...a11yProps(5)} />
          <StyledTab label="Cancelled" {...a11yProps(6)} />
          <StyledTab label="Returned" {...a11yProps(7)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        {!orderCustomer && <Skeleton />}
        <TableOrderCustomer data={orderCustomer} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableOrderCustomer data={orderChecking} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Confirmed tables
      </TabPanel>
      <TabPanel value={value} index={3}>
        Packaging tables
      </TabPanel>{" "}
      <TabPanel value={value} index={4}>
        <TableOrderCustomer data={orderCustomerDeliver} />
      </TabPanel>{" "}
      <TabPanel value={value} index={5}>
        <TableOrderCustomer data={orderCustomerHistory} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <TableOrderCustomer data={orderCustomerCancel} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        Returned tables
      </TabPanel>
    </Box>
  );
}
export const StyledTab = styled(Tab)({
  "&.MuiTab-root.Mui-selected": {
    color: "#2F5E5E",
  },
});
export const StyledTabs = styled(Tabs)({
  "&.MuiTabs-root	.MuiTabs-indicator": {
    backgroundColor: "#2F5E5E",
    borderRadius: "20px",
    padding: 3,
  },
});
