import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SettingsIcon from "@mui/icons-material/Settings";

export function CustomDrawer({ isDrawerOpen, handleDrawerClose }) {
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isDrawerOpen}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          color: "#6b7280"
        },
      }}
    >
      <div style={{ width: 250 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Today"
              secondary={
                <Typography variant="h4">Wednesday 31st January"</Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Events" />
          </ListItem>
          <Box>
            <ListItem>
              <ListItemText
                primary="Group Meeting"
                secondary="In 32 Minutes, Room 1B"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Public Beta Release"
                secondary="11:00 PM"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dinner with David" secondary="17:30 PM" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Q&A Session" secondary="20:30 PM" />
            </ListItem>
          </Box>
          <Divider />
          <ListItem>
            <ListItemText primary="Notes" />
          </ListItem>
          <Box>
            <ListItem>
              <ListItemText
                primary="Best songs to listen while working"
                secondary="Last edit: May 8th, 2015"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Useful subreddits"
                secondary="Last edit: January 12th, 2015"
              />
            </ListItem>
          </Box>
          <Divider />
          <ListItem>
            <ListItemText primary="Quick Settings" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
            <Switch />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CloudQueueIcon />
            </ListItemIcon>
            <ListItemText primary="Cloud Sync" />
            <Switch />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Retro Thrusters" />
            <Switch />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
