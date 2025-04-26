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
import iceCreamDelivered from "../../assets/images/ice-cream-delivered.jpg";
import useStyles from "./EventsSection.Styles";

const EventsSection = () => {
  const classes = useStyles();

  // Common text content to avoid duplication
  const textContent = (
    <Box className={classes.textContent}>
      <Typography variant="h4" className={classes.title}>
        The Cream Team Experience
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ fontStyle: "italic", color: "#555", marginBottom: 8 }}
      >
        — Fully Staffed Ice Cream Event —
      </Typography>
      <Typography className={classes.subtext}>
        Our Creamers, dressed in vintage Soda Jerk attire, deliver a sundae
        service as elegant as it is fun. We bring the charm of an old-school soda
        fountain to your modern event, complete with upscale decor.
      </Typography>
      <List className={classes.bulletList}>
        {[
          "Personalized sundaes served by our professional Cream Team",
          "Elegant black tablecloths, classic décor, and full sundae station",
          "8 premium ice cream flavors, including a non-dairy Italian Ice option",
          "Full bar of toppings: fudge, sprinkles, fruit, whipped cream & more",
          "Perfect for corporate events, weddings, and upscale parties",
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
          aria-label="Learn more about The Cream Team Experience"
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.secondaryButton}
          aria-label="Get a quote for The Cream Team Experience"
        >
          Get a Quote
        </Button>
      </Box>
    </Box>
  );

  // Common image content to avoid duplication
  const imageContent = (
    <Box className={classes.imageWrapper} style={{ textAlign: "center" }}>
      <img
        src="https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
        alt="Staffed Event"
        className={classes.oblongImage}
      />
      <Box mt={2} mb={1}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={classes.starIcon} >
            ★
          </span>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      {/* Fully Staffed Section (Responsive Layout) */}
      <Box className={classes.sectionDark}>
        {/* Mobile Layout: Image on top (xs, sm) */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          className={classes.mobileLayout}
        >
          <Grid item xs={12} className={classes.imageColDark}>
            {imageContent}
          </Grid>
          <Grid item xs={12}>
            {textContent}
          </Grid>
        </Grid>

        {/* Desktop Layout: Image on right (md+) */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          className={classes.desktopLayout}
        >
          <Grid item xs={12} md={6}>
            {textContent}
          </Grid>
          <Grid item xs={12} md={6} className={classes.imageColDark}>
            {imageContent}
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
                src={iceCreamDelivered}
                alt="Drop-off setup"
                className={classes.oblongImage}
              />
              <Box mt={2} mb={1}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={classes.starIcon}
                  >
                    ★
                  </span>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Text on right */}
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
                  aria-label="Learn more about Sundae Social Drop-Off"
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.secondaryButton}
                  aria-label="Get a quote for Sundae Social Drop-Off"
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