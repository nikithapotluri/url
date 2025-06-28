import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar({ mode, toggleMode }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          AffordMed URL Shortener
        </Typography>
        <div>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/stats">
            Analytics
          </Button>
          <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
            <IconButton color="inherit" onClick={toggleMode}>
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}
