import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ProductPieChart from "./ProductPieChart";

function Homepage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState("");
  const [newStatus, setNewStatus] = useState("Pending");

  // 🔐 Auth check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // Data
  const [shipments] = useState([
    { id: 1, name: "Shipment 1", status: "In Transit" },
    { id: 2, name: "Shipment 2", status: "Delivered" },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", status: "Pending" },
    { id: 2, product: "Mobile", status: "Completed" },
    { id: 3, product: "PC", status: "Completed" },
  ]);

  const menuItems = ["Dashboard", "Orders", "Shipments", "Reports", "Suppliers", "Analytics"];

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!newProduct) return;
    setOrders([...orders, { id: orders.length + 1, product: newProduct, status: newStatus }]);
    setNewProduct("");
    setNewStatus("Pending");
    setShowForm(false);
  };

  const getStatusChip = (status) => {
    let color = "default";
    if (status === "Completed") color = "success";
    if (status === "Pending") color = "warning";
    if (status === "In Transit") color = "info";
    return <Chip label={status} color={color} size="small" variant="outlined" />;
  };

  // Dynamic content
  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 3 }}>
              Dashboard Overview
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3, color: "#666" }}>
              Welcome to Daulatwal Godown Dashboard
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)", color: "white" }}>
                  <CardContent>
                    <Typography color="inherit" gutterBottom>
                      Total Orders
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {orders.length}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ background: "linear-gradient(135deg, #43a047 0%, #388e3c 100%)", color: "white" }}>
                  <CardContent>
                    <Typography color="inherit" gutterBottom>
                      Total Shipments
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {shipments.length}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ background: "linear-gradient(135deg, #fb8c00 0%, #f57c00 100%)", color: "white" }}>
                  <CardContent>
                    <Typography color="inherit" gutterBottom>
                      Completed
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {orders.filter((o) => o.status === "Completed").length}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        );

      case "Orders":
        return (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Orders
              </Typography>
              <Button
                variant="contained"
                sx={{ background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)" }}
                onClick={() => setShowForm(!showForm)}
              >
                + Add Product
              </Button>
            </Box>

            {showForm && (
              <Card sx={{ marginBottom: 3, padding: 3 }}>
                <Box component="form" onSubmit={handleAddOrder} sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <TextField
                    placeholder="Product name"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                    sx={{ flex: 1, minWidth: 200 }}
                    required
                  />
                  <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel>Status</InputLabel>
                    <Select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} label="Status">
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="Hold">Hold</MenuItem>
                    </Select>
                  </FormControl>
                  <Button type="submit" variant="contained">
                    Save
                  </Button>
                </Box>
              </Card>
            )}

            <TableContainer component={Card}>
              <Table>
                <TableHead sx={{ background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: 600 }}>ID</TableCell>
                    <TableCell sx={{ color: "white", fontWeight: 600 }}>Product</TableCell>
                    <TableCell sx={{ color: "white", fontWeight: 600 }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((o) => (
                    <TableRow key={o.id} hover>
                      <TableCell>{o.id}</TableCell>
                      <TableCell>{o.product}</TableCell>
                      <TableCell>{getStatusChip(o.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );

      case "Shipments":
        return (
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 3 }}>
              Shipments
            </Typography>
            <Grid container spacing={2}>
              {shipments.map((s) => (
                <Grid item xs={12} sm={6} md={4} key={s.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 1 }}>
                        {s.name}
                      </Typography>
                      {getStatusChip(s.status)}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case "Reports":
        return (
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Reports Section
            </Typography>
          </Box>
        );

      case "Suppliers":
        return (
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Suppliers Section
            </Typography>
          </Box>
        );

      case "Analytics":
        return (
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 3 }}>
              Analytics
            </Typography>
            <Card>
              <CardContent>
                <ProductPieChart orders={orders} />
              </CardContent>
            </Card>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={isOpen}
        sx={{
          width: 280,
          "& .MuiDrawer-paper": {
            width: 280,
            background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
            color: "white",
            marginTop: "64px",
          },
        }}
      >
        <List sx={{ paddingTop: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                selected={activeSection === item}
                onClick={() => setActiveSection(item)}
                sx={{
                  "&.Mui-selected": {
                    background: "rgba(255, 255, 255, 0.15)",
                    borderLeft: "4px solid white",
                  },
                  color: "white",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        {/* AppBar */}
        <AppBar
          position="fixed"
          sx={{
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            zIndex: 1300,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                color="inherit"
                onClick={() => setIsOpen(!isOpen)}
                sx={{ display: { xs: "block", md: "block" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Daulatwal Godown's
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="inherit"
              endIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{ borderColor: "white" }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box
          sx={{
            marginTop: "64px",
            padding: 3,
            paddingLeft: isOpen ? 3 : 3,
            transition: "padding 0.3s ease",
          }}
        >
          <Container maxWidth="lg">{renderContent()}</Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
