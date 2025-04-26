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
      overflowY: "auto", // Enable scrolling
      "&::-webkit-scrollbar": {
        display: "none", // Hide scrollbar in WebKit browsers
      },
      scrollbarWidth: "none", // Hide scrollbar in Firefox
      "-ms-overflow-style": "none", // Hide scrollbar in IE/Edge
    },
  },
}));

const AppBarCom = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const location = useLocation();
  let pathname = useLocation().pathname;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isLocationActive = [
    "/spokane",
    "/liberty-lake",
    "/post-falls",
    "/spokane-valley",
    "/coeur-d-alene",
    "/kootenai-county",
    "/spokane-county",
    "/bellevue",
    "/redmond",
    "/seattle",
    "/bothell",
    "/issaquah",
    "/king-county",
    "/snohomish-county",
  ].includes(location.pathname);

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
              onClick={handleMenuClick}
              className={`${classes.locationsMenuItem} ${
                isLocationActive ? classes.locationsActive : ""
              }`}
            >
              <Typography>Our Locations</Typography>
            </MenuItem>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{ "aria-labelledby": "our-locations-button" }}
              className={classes.locationsMenu} // Apply scrollbar-hiding style
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/spokane">
                Spokane
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/liberty-lake"
              >
                Liberty Lake
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/post-falls"
              >
                Post Falls
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/spokane-valley"
              >
                Spokane Valley
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/coeur-d-alene"
              >
                Coeur d'Alene
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/kootenai-county"
              >
                Kootenai County
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/spokane-county"
              >
                Spokane County
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleMenuClose} component={Link} to="/bellevue">
                Bellevue
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/redmond">
                Redmond
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/seattle">
                Seattle
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/bothell">
                Bothell
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/issaquah"
              >
                Issaquah
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/king-county"
              >
                King County
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/snohomish-county"
              >
                Snohomish County
              </MenuItem>
            </Menu>
            <MenuItem
              component={Link}
              to="/pricing"
              selected={"/pricing" === pathname}
              className={classes.menuItems}
            >
              <Typography>Pricing</Typography>
            </MenuItem>
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

/**
 * ! Transition dynamic navbar on scroll (so its not jumpy)
 *   transition: "3s ease-in-out",
    -webkit-transition: padding .1s ease-in,-webkit-box-shadow .1s ease-in;
    transition: padding .1s ease-in,-webkit-box-shadow .1s ease-in;
    -o-transition: padding .1s ease-in,box-shadow .1s ease-in;
    transition: padding .1s ease-in,box-shadow .1s ease-in;
    transition: padding .1s ease-in,box-shadow .1s ease-in,-webkit-box-shadow .1s ease-in;

      // useEffect(() => {
  //   // adds a fixed position navBar to mobile version
  //   var windowWidth = window.innerWidth;
  //   const navbar: any = document.querySelector("#appBarId");
  //   if (windowWidth < 600) {
  //     window.onscroll = () => {
  //       if (window.scrollY > 25) {
  //         navbar.style.position = "fixed";
  //       } else {
  //         navbar.style.position = "static";
  //       }
  //     };
  //   }
  //   return () => {};
  // }, []);
 */