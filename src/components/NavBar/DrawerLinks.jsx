import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import CancelIcon from "@material-ui/icons/Cancel";
import HomeIcon from "@material-ui/icons/Home";

import { makeStyles } from "@material-ui/core/styles";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#0d1117",
        marginTop: 85,
        paddingBottom: 52,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    linkStyles: {
        textDecoration: "none",
        color: "#555050",
    },
    icons: {
        color: "#74c2ff",
        height: 20,
    },
    cancelIcon: {
        color: "#74c2ff",
        height: 23,
    },
    listItemText: {
        fontSize: "1rem",
        letterSpacing: "0.03rem",
        fontWeight: 500,
        color: "#e6e9eb",
        marginTop: 6,
    },
}));


const DrawerLinks = ({ drawerToggle }) => {
    const classes = useStyles();
    let pathname = useLocation().pathname;

    return (
        <Box className={classes.root}>
            <Box className={classes.toolbar}></Box>
            <List onClick={() => drawerToggle()}>
                <ListItem
                    button
                    key="Home"
                    component={Link}
                    to="/"
                    style={{
                        borderLeft: "/" === pathname ? "8px solid #ff0071" : "unset",
                        backgroundColor: "/" === pathname ? "#24313e" : "unset",
                        paddingLeft: "/" === pathname ? "8px" : "16px",
                        paddingTop: 12,
                        paddingBottom: 12,
                    }}
                >
                    <ListItemIcon>
                        <HomeIcon className={classes.icons} />
                    </ListItemIcon>
                    <Typography className={classes.listItemText}>Home</Typography>
                </ListItem>
                <ListItem
                    button
                    key="Locations"
                    component={Link}
                    to="/locations"
                    style={{
                        borderLeft: "/locations" === pathname ? "8px solid #ff0071" : "unset",
                        backgroundColor: "/locations" === pathname ? "#24313e" : "unset",
                        paddingLeft: "/locations" === pathname ? "8px" : "16px",
                        paddingTop: 12,
                        paddingBottom: 12,
                    }}
                >
                    <ListItemIcon>
                        <DesktopMacIcon className={classes.icons} />
                    </ListItemIcon>
                    <Typography className={classes.listItemText}>Locations</Typography>
                </ListItem>

                {/* // TODO: There is currently link to linkedIn in Navbar (Leave both?) */}
                {/* <a
          className={classes.linkStyles}
          href="https://www.linkedin.com/in/trevor-mackin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem button key="LinkedIn">
            <ListItemIcon>
              <LinkedInIcon className={classes.icons} />
            </ListItemIcon>
            <Typography className={classes.listItemText}>LinkedIn</Typography>
          </ListItem>
        </a> */}
                <ListItem
                    button
                    key="Pricing"
                    component={Link}
                    to="/pricing"
                    style={{
                        borderLeft: "/pricing" === pathname ? "8px solid #ff0071" : "unset",
                        backgroundColor: "/pricing" === pathname ? "#24313e" : "unset",
                        paddingLeft: "/pricing" === pathname ? "8px" : "16px",
                        paddingTop: 12,
                        paddingBottom: 12,
                    }}
                >
                    <ListItemIcon>
                        <ContactMailIcon className={classes.icons} />
                    </ListItemIcon>
                    <Typography className={classes.listItemText}>Pricing</Typography>
                </ListItem>
                <ListItem
                    button
                    key="Contact"
                    component={Link}
                    to="/contact"
                    style={{
                        borderLeft: "/contact" === pathname ? "8px solid #ff0071" : "unset",
                        backgroundColor: "/contact" === pathname ? "#24313e" : "unset",
                        paddingLeft: "/contact" === pathname ? "8px" : "16px",
                        paddingTop: 12,
                        paddingBottom: 12,
                    }}
                >
                    <ListItemIcon>
                        <ContactMailIcon className={classes.icons} />
                    </ListItemIcon>
                    <Typography className={classes.listItemText}>Contact</Typography>
                </ListItem>
                <ListItem
                    button
                    key="Close"
                    style={{ paddingTop: 12, paddingBottom: 12 }}
                >
                    <ListItemIcon>
                        <CancelIcon className={classes.cancelIcon} />
                    </ListItemIcon>
                    <Typography className={classes.listItemText}>Close</Typography>
                </ListItem>
            </List>
        </Box>
    );
};

export default DrawerLinks;
