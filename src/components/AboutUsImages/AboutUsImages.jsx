import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./AboutUsImages.Styles";

const AboutUsImages = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imageFrame}>
        <img
          src="/smores-buffet.jpg"
          alt="smores buffet at catered event"
          className={classes.oblongImage}
        />
      </Box>
      <Box className={classes.imageFrame}>
        <img
          src="/chocolate-fountain-staffed.jpg"
          alt="family enjoying ice cream catering"
          className={classes.oblongImage}
        />
      </Box>
    </Box>
  );
};

export default AboutUsImages;
