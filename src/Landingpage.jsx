import React from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Paper,
  Chip,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import warehouse from "./images/warehouse.jpg";
import logo from "./images/logo.png";
import del from "./images/del.png";
import MyPhoto from "./images/myphoto.png";
import Rel from "./images/rel.png";

function Landing() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Modern Navigation Bar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(12, 24, 46, 0.82)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", py: 1.5, gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ width: 48, height: 48, borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
              />
              <Typography variant="h6" sx={{ color: "white", fontWeight: 700, letterSpacing: 0.8 }}>
                WMS
              </Typography>
            </Box>

            <Stack direction="row" spacing={1.5} sx={{ flex: 1, justifyContent: "center" }}>
              {[
                { label: "Features", to: "/Features" },
                { label: "Why Us", to: "/Why" },
                { label: "About", to: "/About" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  sx={{
                    color: "rgba(255,255,255,0.88)",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    px: 2.5,
                    borderRadius: "999px",
                    transition: "background 0.25s ease, transform 0.25s ease",
                    "&:hover": {
                      background: "rgba(255,255,255,0.12)",
                      color: "white",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Button
              component={RouterLink}
              to="/Login"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.72)",
                borderRadius: "999px",
                px: 3,
                py: 1.1,
                fontWeight: 700,
                textTransform: "none",
                transition: "background 0.25s ease, border-color 0.25s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.14)",
                  borderColor: "white",
                },
              }}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)",
          padding: "80px 40px",
          flex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Daulatwal Godown's"
                sx={{
                  background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                  color: "white",
                  fontWeight: 600,
                  marginBottom: 2,
                  fontSize: 16,
                  padding: 2,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                  marginBottom: 2,
                }}
              >
                Intelligent Warehouse Management, Simplified.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#666", fontSize: 16, marginBottom: 3, lineHeight: 1.8 }}
              >
                From inventory tracking to order fulfillment, Warehouse Pro provides
                the tools you need to optimize your supply chain and scale your business.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  component={RouterLink}
                  to="/Register"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                    padding: "12px 32px",
                    fontWeight: 600,
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: 15,
                  }}
                >
                  Get Started Free
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#1976d2",
                    color: "#1976d2",
                    padding: "12px 32px",
                    fontWeight: 600,
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: 15,
                  }}
                >
                  View Demo
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={warehouse}
                alt="Warehouse"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Features Section */}
      <Box sx={{ padding: "80px 40px", background: "#fff" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", marginBottom: 6 }}>
            <Chip
              label="Key Features"
              sx={{
                background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                color: "white",
                marginBottom: 2,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
              4 Pillars of Smarter Warehousing
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", fontSize: 16 }}>
              Discover how our modern warehouse platform combines automation, analytics,
              and intelligent workflows to keep your business running smoothly.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                title: "Smart Inventory",
                description:
                  "Keep your stock accurate with automated tracking, alerts, and reorder workflows.",
              },
              {
                title: "Fast Fulfillment",
                description:
                  "Reduce lead times with optimized picking, packing, and shipment coordination.",
              },
              {
                title: "Insightful Analytics",
                description:
                  "Visual dashboards reveal trends, bottlenecks, and performance across your supply chain.",
              },
              {
                title: "Secure Operations",
                description:
                  "Protect your data and control access with modern warehouse security features.",
              },
            ].map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <Card
                  sx={{
                    borderRadius: "24px",
                    minHeight: 260,
                    p: 3,
                    boxShadow: "0 18px 45px rgba(15, 34, 76, 0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    border: "1px solid rgba(25, 118, 210, 0.12)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 26px 60px rgba(15, 34, 76, 0.14)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      boxShadow: "0 14px 30px rgba(25, 118, 210, 0.16)",
                    }}
                  >
                    <Typography sx={{ color: "white", fontWeight: 700, fontSize: 18 }}>
                      {feature.title.split(" ").map((word) => word[0]).join("")}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 1.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.8 }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box
        sx={{
          padding: "80px 40px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", marginBottom: 6 }}>
            <Chip
              label="Pricing"
              sx={{
                background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                color: "white",
                marginBottom: 2,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
              Plans for Every Stage
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", fontSize: 16 }}>
              Whether you're just starting out or running a large-scale operation, we have
              a plan that fits your needs.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                name: "Basic",
                subtitle: "Essential coverage",
                price: "$25/week",
                features: ["Inventory tracking", "1 location", "Email support"],
                highlight: false,
              },
              {
                name: "Gold",
                subtitle: "Most popular",
                price: "$50/week",
                features: ["Multi-location", "Automated alerts", "Priority support"],
                highlight: true,
              },
              {
                name: "Platinum",
                subtitle: "Advanced control",
                price: "$75/week",
                features: ["Analytics dashboard", "Custom workflows", "Dedicated support"],
                highlight: false,
              },
              {
                name: "Ultra",
                subtitle: "Enterprise-grade",
                price: "$120/week",
                features: ["Unlimited orders", "Premium automation", "24/7 support"],
                highlight: false,
              },
            ].map((plan) => (
              <Grid item xs={12} sm={6} md={3} key={plan.name}>
                <Card
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: plan.highlight
                      ? "2px solid #1976d2"
                      : "1px solid rgba(25, 118, 210, 0.12)",
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: plan.highlight
                      ? "0 24px 60px rgba(25, 118, 210, 0.14)"
                      : "0 18px 40px rgba(15, 34, 76, 0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 28px 70px rgba(15, 34, 76, 0.12)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 4,
                      background: plan.highlight
                        ? "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)"
                        : "rgba(25, 118, 210, 0.08)",
                      color: plan.highlight ? "white" : "#1976d2",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 1.2 }}>
                      {plan.name}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, mt: 1, mb: 1 }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                      {plan.subtitle}
                    </Typography>
                  </Box>
                  <CardContent>
                    <Stack spacing={1.5} sx={{ mb: 3 }}>
                      {plan.features.map((featureText) => (
                        <Box key={featureText} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: "#1976d2",
                              mt: 0.9,
                            }}
                          />
                          <Typography variant="body2" sx={{ color: "#555" }}>
                            {featureText}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button
                      component={RouterLink}
                      to="/Register"
                      variant={plan.highlight ? "contained" : "outlined"}
                      fullWidth
                      sx={{
                        borderRadius: "999px",
                        textTransform: "none",
                        fontWeight: 700,
                        px: 0,
                        py: 1.3,
                        ...(plan.highlight
                          ? { background: "white", color: "#1976d2" }
                          : { borderColor: "rgba(25, 118, 210, 0.35)", color: "#1976d2" }),
                      }}
                    >
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          padding: "80px 40px",
          background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
            Ready to Transform Your Warehouse?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4, fontSize: 16 }}>
            Sign up today and get started with a free plan. No credit card required.
          </Typography>
          <Button
            component={RouterLink}
            to="/Features"
            variant="contained"
            sx={{
              background: "white",
              color: "#1976d2",
              fontWeight: 600,
              padding: "12px 32px",
              fontSize: 15,
              textTransform: "none",
              "&:hover": { background: "#f0f0f0" },
            }}
          >
            Learn More About Features
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
          color: "white",
          padding: "60px 40px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
                Company
              </Typography>
              <Stack spacing={1}>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  About Us
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Careers
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Blog
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
                Support
              </Typography>
              <Stack spacing={1}>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Help Center
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  FAQ
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Feedback
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
                Legal
              </Typography>
              <Stack spacing={1}>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Privacy Policy
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Terms of Service
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Cookies
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
                Follow Us
              </Typography>
              <Stack spacing={1}>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Facebook
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Twitter
                </Button>
                <Button color="inherit" sx={{ justifyContent: "flex-start" }}>
                  Instagram
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.2)", marginTop: 4, paddingTop: 3, textAlign: "center" }}>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              © 2024 Daulatwal Godown. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Landing;

