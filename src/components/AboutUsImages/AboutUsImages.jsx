import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./AboutUsImages.Styles";
import ChocolateFountain from "../../assets/images/chocolate-fountain-staffed.jpg";
import SmoresBuffet from "../../assets/images/smores-buffet.jpg";

const AboutUsImages = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imageFrame}>
        <img
          src={SmoresBuffet}
          alt="smores buffet at catered event"
          className={classes.oblongImage}
        />
      </Box>
      <Box className={classes.imageFrame}>
        <img
          src={ChocolateFountain}
          alt="family enjoying ice cream catering"
          className={classes.oblongImage}
        />
      </Box>
    </Box>
  );
};

export default AboutUsImages;
