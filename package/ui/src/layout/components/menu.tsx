import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Fragment } from "react";

import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();
  const currentPathname: string = location.pathname;

  function getPathnameElements(n: number): string {
    return currentPathname
      .split("/")
      .slice(0, 1 + n)
      .join("/");
  }

  return (
    <Fragment>
      <Box>
        <MuiLink
          to="/"
          color={"secondary"}
          sx={{
            textDecoration: "none",
            display: "flex",
          }}
          component={Link}
        >
          <img src="/logo.png" width="60%" style={{ margin: "40px auto" }} />
        </MuiLink>
      </Box>
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="notification-type"
        // subheader={
        //   <ListSubheader component="div" sx={{ background: "none" }}>
        //     Menu section
        //   </ListSubheader>
        // }
      >
        <List component="div" disablePadding>
          <ListItemButton
            component={Link}
            to={"/"}
            selected={getPathnameElements(2) === "/"}
          >
            <ListItemIcon>
              <MarkEmailUnreadIcon />
            </ListItemIcon>
            <ListItemText primary="Menu item" />
          </ListItemButton>
        </List>
      </List>
    </Fragment>
  );
}
