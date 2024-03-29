"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  ListItemAvatar,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import StarIcon from "@mui/icons-material/Star";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StarBorder } from "@mui/icons-material";

const links = [
  {
    name: "Example",
    href: "/example",
  },
  {
    name: "HOME",
    href: "/home",
  },
];

const languages = [
  { code: "EN", name: "English", flag: "/US.svg" },
  { code: "TR", name: "Turkey", flag: "/TR.svg" },
  { code: "AR", name: "Arabic", flag: "/SA.svg" },
];

const drawerWidth = 280;

const Main = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: open ? "100ms" : "100ms",
  }),
  marginLeft: useMediaQuery(theme.breakpoints.down("sm"))
    ? 0
    : open
    ? `${drawerWidth}px`
    : 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: "100ms",
    }),
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const useResponsiveDrawerWidth = (open) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return useMemo(() => {
    if (open && !isMobile) {
      return {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      };
    }
    return {};
  }, [open, isMobile]);
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => {
  const responsiveStyle = useResponsiveDrawerWidth(open);

  return {
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: "100ms",
    }),
    ...responsiveStyle,
  };
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navigation({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const pathname = usePathname();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ color: "#757575", ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            {!isMobile && (
              <IconButton>
                <StarIcon sx={{ color: "#ffb300" }} />
              </IconButton>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: 'nowrap', overflow: 'auto', ml: 8 }}>
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
                  justifyContent: 'space-between',
                  cursor: "pointer",
                }}
                onClick={handleLanguageIconClick}
              >
                <img src={selectedLanguageData.flag} alt="flag" />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 1, marginRight: 3, color: "#6b7280", fontWeight: 900 }}
                >
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
                    key={language.code}
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
              <IconButton>
                <TurnedInNotIcon />
              </IconButton>
              <IconButton>
                {!isMobile && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      mr: 1,
                      color: "#000000DE",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Abbott Keitch
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                      Admin
                    </Typography>
                  </Box>
                )}
                <Avatar src="/brian-hughes.jpg" alt="Admin" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={open}
        onClose={isMobile ? handleDrawerClose : undefined}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#111828",
            color: "#ffffffb3",
            boxSizing: "border-box",
            ...(isMobile && {
              position: "absolute",
            }),
            transition: theme.transitions.create("all", {
              easing: theme.transitions.easing.sharp,
              duration: "100ms",
            }),
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <img src="/logo.svg" alt="logo" />
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "#121212",
                  color: "#61dafb",
                  padding: "2px 4px",
                  ml: 1,
                }}
              >
                React
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "#3078C6",
                  padding: "4px 8px",
                  ml: 1,
                  borderRadius: "5px",
                }}
              >
                Typescript
              </Typography>
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  <MenuIcon sx={{ color: "#ffffff" }} />
                </IconButton>
              </DrawerHeader>
            </Box>
          </Toolbar>
          <Divider />
          <Box sx={{ color: "#ffffffb3" }}>
            <ListItemAvatar sx={{ justifyContent: "center", display: "flex" }}>
              <Avatar
                sx={{ width: 97, height: 97, marginBottom: 3 }}
                src="/brian-hughes.jpg"
              />
            </ListItemAvatar>
            <Typography variant="body2" align="center" sx={{ color: "white" }}>
              Abbott Keitch
            </Typography>
            <Typography
              variant="body2"
              align="center"
              gutterBottom
              sx={{ color: "#94A3B8" }}
            >
              admin@fusetheme.com
            </Typography>
          </Box>
          <List sx={{ width: "90%" }}>
            {links.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <ListItem
                  sx={{
                    borderRadius: "7px",
                    color: pathname === link.href ? "#ffffff" : "#ffffffb3",
                    backgroundColor:
                      pathname === link.href
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                    mb: 0.5,
                    py: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                    },
                  }}
                >
                  <ListItemIcon>
                    <StarBorder sx={{ color: "#ffffffb3" }} />
                  </ListItemIcon>
                  <ListItemText primary={link.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
      <Box
        sx={{
          height: 75,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          position: "fixed",
          backgroundColor: "#111828",
          color: "#ffffff",
          bottom: 0,
          boxShadow:
            "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <Typography
          sx={{
            marginLeft: `${!isMobile && open ? drawerWidth + 20 : 20}px`,
            transition: "margin-left 0.08s ease-in-out",
          }}
        >
          Footer
        </Typography>
      </Box>
    </Box>
  );
}
