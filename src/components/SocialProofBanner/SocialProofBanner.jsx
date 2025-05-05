import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    socialProof: {
        // backgroundColor: "#e7f7fe",
        backgroundColor: "#ffeaea",
        padding: "30px 0px",
        color: '#000000',
        textAlign: "center",
    },
  highlight: {
    color: "#ff0071",
    fontWeight: "bold",
  },
}));

const SocialProofBanner = ({ message }) => {
  const classes = useStyles();

  return (
    <Box className={classes.socialProof}>
      <Typography variant="h6" align="center">
        {message.split(/(\d+\+?)/).map((part, i) =>
          /\d+\+?/.test(part) ? (
            <span key={i} className={classes.highlight}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </Typography>
    </Box>
  );
};

export default SocialProofBanner;
