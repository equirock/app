import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
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
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="notification-type"
        subheader={<ListSubheader component="div">Menu section</ListSubheader>}
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
