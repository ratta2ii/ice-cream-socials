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
import useStyles from "./EventsSection.Styles";

const EventsSection = () => {
  const classes = useStyles();

  return (
    <>
      {/* Fully Staffed Section (image on right) */}
      <Box className={classes.sectionDark}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Text on left */}
          <Grid item xs={12} md={6}>
            <Box className={classes.textContent}>
              <Typography variant="h4" className={classes.title}>
                Fully Staffed Events
              </Typography>
              <Typography className={classes.subtext}>
                Let our trained “Socialites” bring smiles and sundaes to your next event:
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "Sundaes in 12oz bowls, waffle cones, or waffle bowls",
                  "Friendly, uniformed attendants serve your guests",
                  "10 Thrifty flavors + non-dairy Italian Ice",
                  "Sundae bar with warm fudge, sprinkles & more",
                  "Decor, tables, linens, jukebox — all included",
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
                  aria-label="Learn more about Fully Staffed Events"
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.secondaryButton}
                  aria-label="Get a quote for Fully Staffed Events"
                >
                  Get a Quote
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Image on right */}
          <Grid item xs={12} md={6} className={classes.imageColDark}>
            <Box className={classes.imageWrapper} style={{ textAlign: "center" }}>
              <img
                src="https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
                alt="Staffed Event"
                className={classes.oblongImage}
              />
              <Box mt={2} mb={1}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ fontSize: "2rem", color: "#FFD700", margin: "0 4px" }}>★</span>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Drop-Off Section (image on left) */}
      <Box className={classes.sectionLight}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Image on left */}
          <Grid item xs={12} md={6} className={classes.imageColLight}>
            <Box className={classes.imageWrapper} style={{ textAlign: "center" }}>
              <img
                src="https://picsum.photos/seed/dropoff/600/400"
                alt="Drop-off setup"
                className={classes.oblongImage}
              />
              <Box mt={2} mb={1}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ fontSize: "2rem", color: "#FFD700", margin: "0 4px" }}>★</span>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Text on right */}
          <Grid item xs={12} md={6}>
            <Box className={classes.textContent}>
              <Typography variant="h4" className={classes.title}>
                Drop-Off Sundae Bar Setup
              </Typography>
              <Typography className={classes.subtext}>
                All the fun without the staff — our drop-off social is the perfect self-serve solution:
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "12oz sundaes with lids, pre-labeled",
                  "Delivered in dry ice coolers (yours to keep)",
                  "10 ice cream flavors including sugar-free & non-dairy",
                  "Includes all toppings, syrups, spoons & napkins",
                  "Trained delivery by our uniformed Socialites",
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
                  aria-label="Learn more about Drop-Off Sundae Bar Setup"
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.secondaryButton}
                  aria-label="Get a quote for Drop-Off Sundae Bar Setup"
                >
                  Get a Quote
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Social Proof Footer */}
      <Box className={classes.socialProof}>
        <Typography variant="h6" align="center">
          Proudly served over <span className={classes.highlight}>1000+</span> events with smiles and sundaes!
        </Typography>
      </Box>
    </>
  );
};

export default EventsSection;
