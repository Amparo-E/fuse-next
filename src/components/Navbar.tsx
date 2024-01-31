"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { CustomDrawer } from "./CustomDrawe";

const languages = [
  { code: "EN", name: "English", flag: "/US.svg" },
  { code: "TR", name: "Turkey", flag: "/TR.svg" },
  { code: "AR", name: "Arabic", flag: "/SA.svg" },
];

export default function Navbar({
  sidebarOpen,
  drawerWidth,
  toggleSidebar,
  isMobile,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Función para alternar el drawer
  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };


  const handleLanguageIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    handleLanguageMenuClose();
  };

  const selectedLanguageData = languages.find(
    (lang) => lang.code === selectedLanguage
  );
  return (
    <>
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)` },
        ml: { sm: `${sidebarOpen ? drawerWidth : 0}px` },
        backgroundColor: "white",
        color: "#6b7280",
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{ mr: 2, ...(sidebarOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {!isMobile && (
            <IconButton>
              <StarIcon sx={{ color: "#ffb300" }} />
            </IconButton>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              mr: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleLanguageIconClick}
            >
              <img src={selectedLanguageData.flag} alt="flag" />
              <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                {selectedLanguageData.code}
              </Typography>
            </Box>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleLanguageMenuClose}
            >
              {languages.map((language) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                  }}
                >
                  <img src={language.flag} alt="flag" />
                  <MenuItem
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                  >
                    {language.name}
                  </MenuItem>
                </Box>
              ))}
              <MenuItem>Learn more</MenuItem>
            </Menu>
            <IconButton>
              <FormatSizeIcon />
            </IconButton>
            <IconButton>
              <FullscreenIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={toggleDrawer(true)}>
              <TurnedInNotIcon />
            </IconButton>
          </Box>
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                mr: 1, // Si quieres mantener el margen
              }}
            >
              <Typography variant="body2" noWrap sx={{ color: "#000000DE" }}>
                Abbott Keitch
              </Typography>
              <Typography variant="body2" noWrap sx={{ fontSize: "0.7rem" }}>
                Admin
              </Typography>
            </Box>
          )}
          <Avatar src="/brian-hughes.jpg" alt="Admin" />
        </Box>
      </Toolbar>
    </AppBar>
    <CustomDrawer isDrawerOpen={isDrawerOpen} handleDrawerClose={handleDrawerClose}/>
  </>
  );
}
