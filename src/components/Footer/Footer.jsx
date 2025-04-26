import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CompanyLogo from "../../assets/images/company-logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        color: "#eceff1",
    },
    customerCommentGridItm: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid #1c222a",
        [theme.breakpoints.down("md")]: {
            border: "none",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none", // <-- Hide on sm and below
        },
    },
    referenceBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 450,
        textAlign: "justify",
        color: "#efefef",
        fontFamily: "emoji",
        padding: "0 20%",
        [theme.breakpoints.down("md")]: {
            width: 775,
            textAlign: "center",
        },
        [theme.breakpoints.down("sm")]: {
            width: 635,
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "left",
            padding: "0 12%",
            fontSize: 15,
        },
    },
    reference: {
        fontFamily: "emoji",
        fontSize: 18,
    },
    signatureCon: {
        height: 30,
        textAlign: "right",
        width: "100%",
        marginTop: 20,
        fontFamily: "emoji",
        fontSize: 17,
        color: "#efefef",
        [theme.breakpoints.down("md")]: {
            textAlign: "right",
            marginTop: 10,
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 5,
            fontSize: 16,
        },
    },
    signature: {
        fontFamily: "emoji",
        display: "inline",
    },
    stars: {
        color: "#ffd700",
        fontSize: 16,
        marginLeft: 5,
        display: "inline",
    },
    aboutMeCardGridItm: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderLeft: "1px solid #1c222a",
        [theme.breakpoints.down("md")]: {
            border: "none",
            alignItems: "unset",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 40,
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 0,
            padding: "0 12%",
            borderLeft: "none",
            borderTop: "none",
            // position: "relative",
            // "&::after": {
            //     content: '""',
            //     position: "absolute",
            //     top: 0,
            //     left: "50%",
            //     transform: "translateX(-50%)",
            //     width: "280px",
            //     height: "1px",
            //     backgroundColor: "#ffffff52",
            //     borderRadius: "2px",
            // },
        },
    },
    cardBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: 450,
        textAlign: "left",
        color: "#efefef",
        fontFamily: "emoji",
        paddingLeft: 40,
        [theme.breakpoints.down("xs")]: {
            padding: "2%",
            maxHeight: 400,
            textAlign: "center",
        },
    },
    copyrightGridItm: {
        backgroundColor: "#0d1117",
        borderTop: "2px solid #1c222a",
        height: 80,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            marginTop: 90,
        },
        [theme.breakpoints.down("xs")]: {
            height: 60,
            marginTop: -50,
        },
    },
    copyrightSig: {
        color: "#ffffff52",
        fontSize: 16,
        fontFamily: "monospace",
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    infoLine: {
        display: "flex",
        alignItems: "center",
        marginBottom: 16,
        fontSize: 18,
    },
    infoIcon: {
        marginRight: 12,
        fontSize: 20,
    },
    infoText: {
        fontSize: 18,
    },
    companyLogo: {
        width: 240,
        display: "block",
        margin: "0 auto 24px auto",  // <-- Center horizontally and maintain bottom spacing
        [theme.breakpoints.down("xs")]: {
            width: 200,
            marginTop: -50,
            marginBottom: 20,
        },
    },
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            {/* Left Grid Item */}
            <Grid item xs={12} lg={6} className={classes.customerCommentGridItm}>
                <Box className={classes.referenceBox}>
                    <Typography className={classes.reference}>
                        "Just wanted to say THANK YOU SO MUCH for making our company’s Ice Cream Social a Hit! We appreciate you being so accommodating and able to do our event, even with short notice. And we are so glad you were able to offer such a great event and more importantly stay within our budget. We look forward to the next one! Thank you again!"
                    </Typography>
                    <Box className={classes.signatureCon}>
                        <Typography className={classes.signature} component="span">
                            — Sandra, Pheonix
                        </Typography>
                        <span className={classes.stars}>★★★★★</span>
                    </Box>
                </Box>
            </Grid>
            {/* Right Grid Item */}
            <Grid item xs={12} lg={6} className={classes.aboutMeCardGridItm}>
                <Box className={classes.cardBox}>
                    <img
                        className={classes.companyLogo}
                        src={CompanyLogo}
                        alt="Ice Cream Socialables Company Logo"
                    />
                    <Box className={classes.infoLine}>
                        <i className={`fas fa-envelope ${classes.infoIcon}`}></i>
                        <Typography className={classes.infoText}>
                            <a href="mailto:info@icecreamsociables.com" style={{ color: "#efefef", textDecoration: "none", fontSize: 18 }}>
                                info@icecreamsociables.com
                            </a>
                        </Typography>
                    </Box>
                    <Box className={classes.infoLine}>
                        <i className={`fas fa-phone ${classes.infoIcon}`}></i>
                        <Typography className={classes.infoText}>
                            <a href="tel:4802861664" style={{ color: "#efefef", textDecoration: "none", fontSize: 18 }}>
                                480-286-1664
                            </a>
                        </Typography>
                    </Box>
                    <Box className={classes.infoLine} style={{ marginBottom: 0 }}>
                        <i className={`fas fa-paper-plane ${classes.infoIcon}`}></i>
                        <Typography className={classes.infoText}>
                            <a href="/contact" style={{ color: "#efefef", textDecoration: "underline", fontSize: 18 }}>
                                Contact Us
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item className={classes.copyrightGridItm}>
                <Typography className={classes.copyrightSig}>
                    Presented By icecreamsocialables.com © 2025
                </Typography>
            </Grid>
        </Grid>
    );
};

Footer.propTypes = {
    location: PropTypes.object,
};

export default Footer;
