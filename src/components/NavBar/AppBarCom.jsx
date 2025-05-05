import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, Typography, Divider, Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CompanyLogo from "./../../assets/images/company-logo.png";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "static",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000000",
        boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        [theme.breakpoints.down("xs")]: {
            overflowX: "hidden",
            position: "fixed",
            height: 85,
        },
    },
    menuButtonCon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    menuIcon: {
        width: 42,
        height: 42,
        marginLeft: 6,
        borderRadius: "50%",
        boxShadow: `0 0 0.06em 0.06em #ccf5f5`,
        "&:hover": {
            marginLeft: 7,
            marginTop: 1,
            width: 40,
            height: 40,
            boxShadow: "unset",
        },
    },
    companyLogo: {
        width: 180,
        [theme.breakpoints.down("xs")]: {
            width: 140,
            marginRight: 8,
            opacity: 1,
        },
    },
    navLinkContainer: {
        color: "#29373d",
        minWidth: 500,
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "auto",
        [theme.breakpoints.down("sm")]: {
            marginRight: "auto",
        },
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    tmLinkContainer: {
        marginTop: 12,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginLeft: "auto",
            marginRight: 5,
        },
    },
    linkStyles: {
        textDecoration: "none",
        color: "#bdbdbd",
    },
    linkedInText: {
        fontSize: ".6rem",
        position: "relative",
        top: -12,
        left: 75,
        color: "#e6171e",
        [theme.breakpoints.down("xs")]: {
            top: -10,
            left: 50,
        },
    },
    menuList: {
        float: "left",
        outline: "0 !important",
        marginLeft: 50,
    },
    menuItems: {
        float: "left",
        marginRight: 25,
        color: "#bdbdbd",
        "&:selected": {
            border: "5px solid red",
        },
    },
    locationsMenuItem: {
        float: "left",
        marginRight: 25,
        color: "#bdbdbd",
    },
    locationsActive: {
        borderBottom: "8px solid #ff0071",
    },
    locationsMenu: {
        "& .MuiPaper-root": {
            minWidth: 280,
            borderRadius: 8,
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            padding: "8px 0",
            backgroundColor: "#fff",
        },
        "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
        },
        "& .MuiMenu-root": {
            overflow: "visible",
        },
    },
    sectionTitle: {
        fontWeight: 700,
        fontSize: "1.1rem",
        color: "#1b2027",
        padding: "8px 16px",
        textTransform: "uppercase",
        lineHeight: "1.5em",
    },
    menuItem: {
        padding: "8px 16px 8px 32px",
        fontSize: "0.95rem",
        color: "#444",
        "&:hover": {
            backgroundColor: "#f5f5f5",
        },
        "& .MuiTypography-root": {
            fontSize: "0.95rem",
        },
    },
    menuDivider: {
        margin: "8px 0",
    },
}));

const AppBarCom = ({ handleDrawerToggle }) => {
    const classes = useStyles();
    const location = useLocation();
    const pathname = location.pathname;
    const [anchorEl, setAnchorEl] = useState(null);
    const [partyAnchorEl, setPartyAnchorEl] = useState(null);

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const handlePartyClick = (event) => setPartyAnchorEl(event.currentTarget);
    const handlePartyClose = () => setPartyAnchorEl(null);

    const isLocationActive = [
        "/scottsdale",
        "/tempe",
        "/mesa",
        "/spokane",
        "/liberty-lake",
        "/coeur-d-alene",
    ].includes(pathname);

    return (
        <AppBar id="appBarId" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    className={classes.menuButtonCon}
                >
                    <MenuIcon />
                </IconButton>
                <Box className={classes.tmLinkContainer}>
                    <a
                        className={classes.linkStyles}
                        href="https://icecreamsocialables.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className={classes.companyLogo}
                            src={CompanyLogo}
                            alt="Ice Cream Socialables Company Logo"
                        />
                    </a>
                </Box>
                <Box className={classes.navLinkContainer}>
                    <MenuList className={classes.menuList}>
                        <MenuItem
                            component={Link}
                            to="/"
                            selected={"/" === pathname}
                            className={classes.menuItems}
                        >
                            <Typography>Home</Typography>
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/food-truck-event"
                            selected={"/food-truck-event" === pathname}
                            className={classes.menuItems}
                        >
                            <Typography>Food Truck</Typography>
                        </MenuItem>
                        <MenuItem onClick={handlePartyClick} className={classes.menuItems}>
                            <Typography>Party Options</Typography>
                        </MenuItem>
                        <Menu
                            anchorEl={partyAnchorEl}
                            open={Boolean(partyAnchorEl)}
                            onClose={handlePartyClose}
                            MenuListProps={{ "aria-labelledby": "party-options-button" }}
                            className={classes.locationsMenu}
                            disableScrollLock
                        >
                            <Typography className={classes.sectionTitle}>Ice Cream Socials</Typography>
                            <MenuItem
                                onClick={handlePartyClose}
                                component={Link}
                                to="/staffed-event"
                                className={classes.menuItem}
                            >
                                Premier Staffed Events
                            </MenuItem>
                            <MenuItem
                                onClick={handlePartyClose}
                                className={classes.menuItem}
                                component={Link}
                                to="/drop-off-event"
                            >
                                Drop-Off Events
                            </MenuItem>
                            <MenuItem
                                onClick={handlePartyClose}
                                component={Link}
                                to="/food-truck-event"
                                className={classes.menuItem}
                            >
                                Food Truck Events
                            </MenuItem>
                            <MenuItem
                                onClick={handlePartyClose}
                                component={Link}
                                to="/economy-event"
                                className={classes.menuItem}
                            >
                                Economy Events
                            </MenuItem>
                            <Divider className={classes.menuDivider} />
                            <Typography className={classes.sectionTitle}>Specialty Catering</Typography>
                            <MenuItem
                                onClick={handlePartyClose}
                                component={Link}
                                to="/smores-buffet"
                                className={classes.menuItem}
                            >
                                S’mores Buffet
                            </MenuItem>
                            <MenuItem
                                onClick={handlePartyClose}
                                component={Link}
                                to="/breakfast-bar"
                                className={classes.menuItem}
                            >
                                Breakfast Bar
                            </MenuItem>
                            <MenuItem
                                onClick={handlePartyClose}
                                component={Link}
                                to="/chocolate-fountain"
                                className={classes.menuItem}
                            >
                                Chocolate Fountain
                            </MenuItem>
                        </Menu>
                        <MenuItem
                            onClick={handleMenuClick}
                            className={`${classes.locationsMenuItem} ${isLocationActive ? classes.locationsActive : ""}`}
                        >
                            <Typography>Our Locations</Typography>
                        </MenuItem>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{ "aria-labelledby": "our-locations-button" }}
                            className={classes.locationsMenu}
                            disableScrollLock
                        >
                            <Typography className={classes.sectionTitle}>Phoenix Metro</Typography>
                            <MenuItem
                                onClick={handleMenuClose}
                                component={Link}
                                to="/scottsdale"
                                className={classes.menuItem}
                            >
                                Scottsdale
                            </MenuItem>
                            <MenuItem
                                onClick={handleMenuClose}
                                component={Link}
                                to="/tempe"
                                className={classes.menuItem}
                            >
                                Tempe
                            </MenuItem>
                            <MenuItem
                                onClick={handleMenuClose}
                                component={Link}
                                to="/mesa"
                                className={classes.menuItem}
                            >
                                Mesa
                            </MenuItem>
                            <Divider className={classes.menuDivider} />
                            <Typography className={classes.sectionTitle}>Spokane - CDA</Typography>
                            <MenuItem
                                onClick={handleMenuClose}
                                component={Link}
                                to="/spokane"
                                className={classes.menuItem}
                            >
                                Spokane
                            </MenuItem>
                            <MenuItem
                                onClick={handleMenuClose}
                                component={Link}
                                to="/coeur-d-alene"
                                className={classes.menuItem}
                            >
                                Coeur d'Alene
                            </MenuItem>
                            <MenuItem
                                onClick={handleMenuClose}
                                component={Link}
                                to="/liberty-lake"
                                className={classes.menuItem}
                            >
                                Liberty Lake
                            </MenuItem>
                        </Menu>
                        <MenuItem
                            component={Link}
                            to="/contact"
                            selected={"/contact" === pathname}
                            className={classes.menuItems}
                        >
                            <Typography>Contact</Typography>
                        </MenuItem>
                    </MenuList>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarCom;
