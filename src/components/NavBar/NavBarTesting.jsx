// src/components/NavBar/NavBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Typography,
    MenuItem,
    MenuList,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Menu,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CancelIcon from "@mui/icons-material/Cancel";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import CompanyLogo from "./../../assets/images/company-logo.png";

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                height: 130,
                display: "flex",
                backgroundImage: "url('/binary.jpeg')",
                backgroundSize: "contain",
                borderBottom: "17px solid rgba(14, 18, 24, .7)",
                backgroundPositionY: -279,
                '@media (max-width:1200px)': {
                    borderBottom: "16px solid rgba(14, 18, 24, .7)",
                    backgroundPositionY: -282,
                },
                '@media (max-width:600px)': {
                    backgroundSize: "unset",
                    height: 105,
                    backgroundPositionY: -234,
                    borderBottom: "20px solid rgba(0,0,0,0)",
                },
            }}
        >
            <CssBaseline />
            <AppBar
                position="static"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#000000",
                    boxShadow:
                        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                    '@media (max-width:600px)': {
                        overflowX: "hidden",
                        position: "fixed",
                        height: 85,
                    },
                }}
            >
                <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            sx={{
                                ml: 1,
                                "& .MuiSvgIcon-root": {
                                    width: 42,
                                    height: 42,
                                    ml: 0.75,
                                    borderRadius: "50%",
                                    boxShadow: "0 0 0.06em 0.06em #ccf5f5",
                                    '&:hover': {
                                        ml: 1,
                                        mt: 0.125,
                                        width: 40,
                                        height: 40,
                                        boxShadow: "unset",
                                    }
                                }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Link to="/">
                            <img
                                src={CompanyLogo}
                                alt="Company Logo"
                                style={{ height: 85, marginTop: 14, marginRight: 20 }}
                                loading="lazy"
                            />
                        </Link>
                    </Box>

                    <Box sx={{ display: { xs: "block", sm: "none" } }}>
                        <Link to="/">
                            <img
                                src={CompanyLogo}
                                alt="Company Logo"
                                style={{ height: 50, marginTop: 6, marginRight: 8 }}
                                loading="lazy"
                            />
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            minWidth: 500,
                            display: { xs: "none", sm: "flex" },
                            justifyContent: "space-between",
                            ml: "auto",
                        }}
                    >
                        <MenuList>
                            <MenuItem
                                component={Link}
                                to="/"
                                selected={location.pathname === "/"}
                                sx={{
                                    float: "left",
                                    mr: 3,
                                    color: "#bdbdbd",
                                    borderBottom: location.pathname === "/" ? "5px solid cyan" : "none",
                                }}
                            >
                                <Typography>Home</Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={handleMenuClick}
                                sx={{
                                    float: "left",
                                    mr: 3,
                                    color: "#bdbdbd",
                                    borderBottom: [
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
                                        "/snohomish-county"
                                    ].includes(location.pathname)
                                        ? "5px solid cyan"
                                        : "none",
                                }}
                            >
                                <Typography>Our Locations</Typography>
                            </MenuItem>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                MenuListProps={{ 'aria-labelledby': 'our-locations-button' }}
                            >
                                <MenuItem onClick={handleMenuClose} component={Link} to="/spokane">Spokane</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/liberty-lake">Liberty Lake</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/post-falls">Post Falls</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/spokane-valley">Spokane Valley</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/coeur-d-alene">Coeur d'Alene</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/kootenai-county">Kootenai County</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/spokane-county">Spokane County</MenuItem>
                                <Divider />
                                <MenuItem onClick={handleMenuClose} component={Link} to="/bellevue">Bellevue</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/redmond">Redmond</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/seattle">Seattle</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/bothell">Bothell</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/issaquah">Issaquah</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/king-county">King County</MenuItem>
                                <MenuItem onClick={handleMenuClose} component={Link} to="/snohomish-county">Snohomish County</MenuItem>
                            </Menu>
                            <MenuItem
                                component={Link}
                                to="/contact"
                                selected={location.pathname === "/contact"}
                                sx={{
                                    float: "left",
                                    mr: 3,
                                    color: "#bdbdbd",
                                    borderBottom: location.pathname === "/contact" ? "5px solid cyan" : "none",
                                }}
                            >
                                <Typography>Contact</Typography>
                            </MenuItem>
                        </MenuList>

                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: 220,
                        backgroundColor: "#0d1117",
                        mt: "85px",
                        pb: "52px",
                    }
                }}
                ModalProps={{ keepMounted: false }}
            >
                <Box sx={{ minHeight: 64 }}>
                    <Box sx={{ px: 2, pt: 1 }}>
                        <Link to="/">
                            <img
                                src={CompanyLogo}
                                alt="Company Logo"
                                style={{ width: "100%", height: "auto" }}
                                loading="lazy"
                            />
                        </Link>
                    </Box>
                </Box>
                <List onClick={handleDrawerToggle}>
                    {["/", "/projects", "/contact"].map((path, index) => {
                        const labels = ["Home", "Projects", "Contact"];
                        const icons = [HomeIcon, DesktopMacIcon, ContactMailIcon];
                        const Icon = icons[index];
                        return (
                            <ListItem
                                button
                                key={path}
                                component={Link}
                                to={path}
                                sx={{
                                    borderLeft: location.pathname === path ? "8px solid cyan" : "unset",
                                    backgroundColor: location.pathname === path ? "#24313e" : "unset",
                                    pl: location.pathname === path ? 1 : 2,
                                    py: 1.5,
                                }}
                            >
                                <ListItemIcon>
                                    <Icon sx={{ color: "#74c2ff", height: 20 }} />
                                </ListItemIcon>
                                <Typography
                                    sx={{ fontSize: "1rem", letterSpacing: "0.03rem", fontWeight: 500, color: "#e6e9eb", mt: 0.75 }}
                                >
                                    {labels[index]}
                                </Typography>
                            </ListItem>
                        );
                    })}
                    <a
                        style={{ textDecoration: "none", color: "#bdbdbd" }}
                        href="https://drive.google.com/file/d/1knecKbIKEkatxTH8qaBLH62_9fLaN7jf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ListItem button key="Resume">
                            <ListItemIcon>
                                <SystemUpdateAltIcon sx={{ color: "#74c2ff", height: 20 }} />
                            </ListItemIcon>
                            <Typography
                                sx={{ fontSize: "1rem", letterSpacing: "0.03rem", fontWeight: 500, color: "#e6e9eb", mt: 0.75 }}
                            >
                                Resume
                            </Typography>
                        </ListItem>
                    </a>
                    <ListItem button key="Close">
                        <ListItemIcon>
                            <CancelIcon sx={{ color: "#ef5350", height: 23 }} />
                        </ListItemIcon>
                        <Typography
                            sx={{ fontSize: "1rem", letterSpacing: "0.03rem", fontWeight: 500, color: "#e6e9eb", mt: 0.75 }}
                        >
                            Close
                        </Typography>
                    </ListItem>
                </List>
            </Drawer>
            <Box sx={{ minHeight: 64 }}></Box>
        </Box>
    );
};

export default NavBar;
