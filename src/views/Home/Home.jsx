import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./Home.Styles";
import AboutUsBio from "../../components/AboutUsBio/AboutUsBio";
import AboutUsImages from "../../components/AboutUsImages/AboutUsImages";
import EventsSection from "../../components/EventsSection/EventsSection";

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={5} className={classes.profilePicGridItem}>
            <AboutUsImages />
          </Grid>
          <Grid item xs={12} md={7}>
            <AboutUsBio />
          </Grid>
        </Grid>
      </Box>

      <EventsSection />
    </>
  );
};

export default Home;
