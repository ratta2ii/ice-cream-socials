import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import useStyles, { BioParagraph, BioAnchor } from "./AboutUsBio.Styles";
import CompanyLogo from "../../assets/images/company-logo.png";

const AboutUsBio = () => {
    const classes = useStyles();

    return (
        <Grid item>
            <Box className="slideInRight animated">
                <Typography className={classes.title}>Ice Cream Sociables</Typography>
                {/* <img src={CompanyLogo} alt="Ice Cream Socials Logo" className={classes.logo} /> */}
            </Box>
            <Box className={`slideInRight animated ${classes.bio}`}>
                <BioParagraph>
                    Welcome to our ice cream wonderland, where we transform moments into
                    memories! Our small business is bursting with passion for crafting
                    unforgettable experiences at every event. We’re not just about the ice cream—we’re
                    about sparking joy and celebration, no matter the occasion.
                </BioParagraph>
                <BioParagraph>
                    Our white-glove service sets us apart. Picture fully staffed events with the
                    finest ice creams, served as custom sundaes piled high with decadent toppings.
                    From setup to scoop, we handle every detail with care, ensuring your guests
                    savor every bite and smile. It’s an experience that delights all ages,
                    tailored to your vision.
                </BioParagraph>
                <BioParagraph>
                    Ready to elevate your next gathering? Explore our{" "}
                    <BioAnchor href="#/events">EVENT OPTIONS</BioAnchor> and book your ice cream
                    extravaganza today!
                </BioParagraph>
            </Box>
        </Grid>
    );
};

export default AboutUsBio;
