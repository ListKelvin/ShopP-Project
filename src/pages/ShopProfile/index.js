import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LogoImg from "../../assets/Logo/ShopP.png";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import StarIcon from "@mui/icons-material/Star";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import BackgroundShopImg from "../../assets/BackGroundShop.jpg";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import orderApi from "../../utils/productApiComponent/orderApi";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import { FormateDateType } from "../../utils/helper";
const ShopProfile = () => {
  const token = LocalStorageUtils.getToken();
  const [orderChecking, setOrderChecking] = useState();
  console.log(orderChecking);
  useEffect(() => {
    orderApi
      .getOrderShopChecking(token)
      .then((res) => setOrderChecking(res.data.data));
  }, []);
  return (
    <Box my={3} mx="auto">
      <Grid
        container
        sx={{
          backgroundColor: "gray",
          height: "auto",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Grid item xs={5} p={4}>
          <Card
            sx={{
              maxWidth: "100%",
              position: "relative",
              backgroundColor: "#B6E3E3",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image={BackgroundShopImg}
              title="green iguana"
            />
            <Avatar
              sx={{
                width: 70,
                height: 70,
                position: "absolute",
                left: 12,
                top: 165,
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" mt={3}>
                Lizard
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <PersonIcon
                      sx={{ width: 40, height: 40, color: "#2F5E5E" }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <GroupIcon
                      sx={{ width: 40, height: 40, color: "#2F5E5E" }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <StoreIcon
                      sx={{ width: 40, height: 40, color: "#2F5E5E" }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <StarIcon
                      sx={{ width: 40, height: 40, color: "#2F5E5E" }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7} p={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                width: "100%",
                backgroundColor: "#B6E3E3",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h4">Total Products</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <InventoryIcon
                  sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }}
                />
                <Typography variant="h4">34</Typography>
              </Box>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                width: "100%",
                backgroundColor: "#B6E3E3",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h4">Total Orders</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <ReceiptIcon
                  sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }}
                />
                <Typography variant="h4">34</Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                bgcolor: "#B6E3E3",
                color: "#2F5E5E",
              }}
            >
              <Box>
                <Typography>Recently checking Order</Typography>
                <List>
                  {orderChecking?.slice(0, 4).map((user, i) => (
                    <Box key={user.id}>
                      <ListItem
                        secondaryAction={
                          <button aria-label="comments">
                            <StoreIcon />
                          </button>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt={"order"}
                            variant="rounded"
                            sx={{ bgcolor: "#2F5E5E" }}
                          >
                            <ReceiptIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={`Order of ${user?.customer.name}`}
                          secondary={
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                color: "#2F5E5E",
                              }}
                            >
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                              >
                                Created at: {FormateDateType(user.createdAt)}
                              </Typography>
                              <Box>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                >
                                  Total: ${user?.totalBill}
                                </Typography>
                                {" — "}
                                <Chip
                                  label="Checking"
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    bgcolor: "#FEDBA2",
                                    color: "#D28402",
                                    borderColor: "#D28402",
                                  }}
                                />
                              </Box>
                            </Box>
                          }
                        />
                      </ListItem>
                      {i !== 3 && <Divider variant="inset" />}
                    </Box>
                  ))}
                </List>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopProfile;
