"use client";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation({ children }) {
  const drawerWidth = 280;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        pathname={pathname}
        drawerWidth={drawerWidth}
      />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar
          sidebarOpen={sidebarOpen}
          drawerWidth={drawerWidth}
          toggleSidebar={toggleSidebar}
        />
        <Box>{children}</Box>

        <Footer sidebarOpen={sidebarOpen} drawerWidth={drawerWidth} />
      </Box>
    </Box>
  );
}
