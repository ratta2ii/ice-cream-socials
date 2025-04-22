import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    color: "#eceff1",
  },
  jobRefGridItm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #1c222a",
    [theme.breakpoints.down("md")]: {
      border: "none",
    },
  },
  referenceBox: {
    display: "flex",
    flexDirection: "column", // Stack comment and signature vertically
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    height: 450,
    textAlign: "justify",
    color: "#efefef",
    fontFamily: "emoji",
    padding: "0 12%",
    [theme.breakpoints.down("md")]: {
      width: 775,
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: 635,
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      padding: "0 4%",
      fontSize: 15,
    },
  },
  reference: {
    fontFamily: "emoji",
  },
  signatureCon: {
    height: 30,
    textAlign: "right",
    width: "100%", // Ensure it spans the container
    marginTop: 20, // Space above signature
    fontFamily: "emoji",
    fontSize: 15,
    color: "#efefef",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
      marginTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
      fontSize: 14,
    },
  },
  signature: {
    fontFamily: "emoji",
    display: "inline", // Keep signature inline with stars
  },
  stars: {
    color: "#ffd700", // Yellow (gold) color
    fontSize: 14, // Small stars
    marginLeft: 5, // Space between signature and stars
    display: "inline", // Inline with signature
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
      marginTop: -4,
    },
  },
  cardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    textAlign: "justify",
    color: "#efefef",
    fontFamily: "emoji",
    [theme.breakpoints.down("xs")]: {
      padding: "2%",
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
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {/* Left Grid Item */}
      <Grid item xs={12} lg={6} className={classes.jobRefGridItm}>
        <Box className={classes.referenceBox}>
          <Typography className={classes.reference}>
            "Just wanted to say THANK YOU SO MUCH for making our company’s Ice Cream Social a Hit! Our team members were so excited that their leaders came around and served them custom Ice Cream Sundaes with all the different topping choices. The leaders looked like true Ice Cream Parlor workers wearing the Aprons you provided and the Paper Hats too, very fun! We appreciate you being so accommodating and able to do our event, even with short notice. And we are so glad you were able to offer such a great event and more importantly stay within our budget. We look forward to the next one! Thank you again!"
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
          THIS SHOULD BE CENTERED IN THE BOX... RIGHT BOX
        </Box>
      </Grid>
      <Grid item className={classes.copyrightGridItm}>
        <Typography className={classes.copyrightSig}>
          Presented By icecreamsocials.com © 2025
        </Typography>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  location: PropTypes.object,
};

export default Footer;
