import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = ({ sidebarOpen, drawerWidth }) => (
  <Box
    sx={{
      p: 2.7,
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      width: { sm: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)` },
      ml: { sm: `${sidebarOpen ? drawerWidth : 0}px` },
      backgroundColor: "#111828",
      color: "#ffffff",
    }}
  >
    <Typography variant="body2">Footer</Typography>
  </Box>
);

export default Footer;
