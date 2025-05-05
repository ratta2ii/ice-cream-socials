import React from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";
import SocialProofBanner from "../SocialProofBanner/SocialProofBanner";
import iceCreamDelivered from "../../assets/images/ice-cream-delivered.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    sectionLight: {
        backgroundColor: "#fefeff",
        padding: "150px 25%",
        [theme.breakpoints.down("lg")]: {
            padding: "150px 12%",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "75px 12%",
        },
    },
    imageColLight: {
        display: "flex",
        justifyContent: "left",
    },
    imageWrapper: {
        maxWidth: 475,
        width: "100%",
    },
    oblongImage: {
        width: "100%",
        height: "auto",
        borderRadius: 10,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        border: "4px solid rgba(0, 0, 0, 0.05)",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.02)",
        },
    },
    textContent: {
        maxWidth: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    title: {
        fontWeight: 700,
        fontFamily: "system-ui !important",
        fontSize: "2rem",
        marginBottom: 10,
        color: "#1b2027",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.2rem",
        },
    },
    subtext: {
        fontSize: "1.1rem",
        color: "#444",
        marginBottom: 15,
        fontStyle: "italic",
        lineHeight: '1.4em',
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 8,
    },
    listItem: {
        padding: 0,
        paddingBottom: 5,
        '& .MuiListItemText-primary': {
            lineHeight: '1.3em',
        },
    },
    icon: {
        color: "#66bb6a",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "left",
        marginLeft: 25,
        gap: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    ctaButton: {
        backgroundColor: "#0264e3",
        color: "#ffffff",
        textTransform: "none",
        fontWeight: 500,
        padding: "10px 24px",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        width: "calc(48% - 8px)",
        "&:hover": {
            color: "#358cfd",
            backgroundColor: "#000000",
            
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(50% - 8px)",
        },
    },
    secondaryButton: {
        color: "#358cfd",
        border: "2px solid #358cfd",
        // backgroundColor: "#000000",
        textTransform: "none",
        fontWeight: 500,
        padding: "10px 24px",
        borderRadius: 8,
        transition: "all 0.3s ease",
        width: "calc(48% - 8px)",
        "&:hover": {
            backgroundColor: "#1b2027",
            // color: "#fff",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(50% - 8px)",
        },
    },
    starIcon: {
        fontSize: "2rem",
        color: "#FFD700",
        margin: "0 4px",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const DropOffEvent = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.sectionLight}>
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6} className={classes.imageColLight}>
                        <Box className={classes.imageWrapper} style={{ textAlign: "center" }}>
                            <img
                                src={iceCreamDelivered}
                                alt="Drop-off setup"
                                className={classes.oblongImage}
                            />
                            <Box mt={2} mb={1}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={classes.starIcon}>★</span>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className={classes.textContent}>
                            <Typography variant="h4" className={classes.title}>
                                Sundae Social Drop-Off
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                style={{ fontStyle: "italic", color: "#555", marginBottom: 8 }}
                            >
                                — Self-Serve Ice Cream Station —
                            </Typography>
                            <Typography className={classes.subtext}>
                                Our top-notch Cream Team delivers and sets up a stunning sundae bar, then slip away,
                                leaving you with a sleek, self-serve dessert experience brimming with modern
                                elegance and flavor.
                            </Typography>
                            <List className={classes.bulletList}>
                                {[
                                    "Expertly arranged sundae station, set up by our skilled Cream Team",
                                    "Sleek modern decor, polished setup, and a complete dessert bar",
                                    "8 premium ice cream flavors, including a non-dairy sorbet option",
                                    "Abundant toppings bar: caramel, nuts, berries, whipped cream, and more",
                                    "Ideal for birthdays, casual gatherings, and effortless celebrations",
                                ].map((item, i) => (
                                    <ListItem key={i} className={classes.listItem}>
                                        <ListItemIcon>
                                            <CheckCircleIcon className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box className={classes.buttonGroup}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.ctaButton}
                                    component={Link}
                                    to="/contact"
                                    aria-label="Get a quote for the Food Truck Experience"
                                >
                                    Get a Quote
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.secondaryButton}
                                    href="tel:4802861664"
                                    aria-label="Call now to book the Food Truck Experience"
                                >
                                    (480) 286-1664
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <SocialProofBanner message="Proudly served over 1000+ events with smiles and sundaes!" />
        </>
    );
};

export default DropOffEvent;
