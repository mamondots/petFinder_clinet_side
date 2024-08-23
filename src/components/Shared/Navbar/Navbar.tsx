"use client"
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  accessToken?: string;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: "Home", href: "/" },
  { label: "Pets", href: "/pets" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Donate Us", href: "/donate" },
];

export default function Navbar({ accessToken, window }: NavbarProps) {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Petfinder
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              href={item.href}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {accessToken && (
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              href="/dashboard"
            >
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "80px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ boxShadow: "none", height: "80px" }}>
        <Container>
          <Toolbar
             sx={{
              maxHeight: "60px", 
              height: "60px",
              marginTop: 1,
              alignItems: "center"
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* 1st portion */}
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Petfinder
            </Typography>
            {/* 2nd portion */}
            <Box sx={{ display: { xs: "none", sm: "block" }}}>
              {navItems.map((item) => (
                <Typography
                  key={item.label}
                  sx={{ color: "#fff", mx: 3 }}
                  component={Link}
                  href={item.href}
                >
                  {item.label}
                </Typography>
              ))}
              {accessToken && (
                <Typography
                  sx={{ color: "#fff", ml: 4 }}
                  component={Link}
                  href="/dashboard"
                >
                  Dashboard
                </Typography>
              )}
            </Box>
              {/* 3rd portion */}
            <AuthButton />
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
