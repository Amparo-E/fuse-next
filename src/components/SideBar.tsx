import React from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  ListItemAvatar,
  Avatar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { StarBorder } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';

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

export default function Sidebar({
  sidebarOpen,
  toggleSidebar,
  pathname,
  drawerWidth,
}) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerVariant = isMobile ? 'temporary' : 'persistent';

  return (
    <Drawer
      variant={drawerVariant}
      open={sidebarOpen}
      onClose={isMobile ? toggleSidebar : undefined} 
      ModalProps={{
        keepMounted: true, 
      }}
      sx={{
        width: sidebarOpen ? drawerWidth : '0',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor: "#111828",
          color: "#ffffffb3",
          boxSizing: 'border-box',
          ...(isMobile && {
            position: 'absolute',
          }),
        },
      }}
    >

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
            <img src="/logo.svg" alt="" />
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
            <IconButton onClick={toggleSidebar}>
              <MenuIcon sx={{ color: "#ffffff" }} />
            </IconButton>
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
  );
}
