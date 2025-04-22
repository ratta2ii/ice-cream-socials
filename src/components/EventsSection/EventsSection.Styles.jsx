import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sectionDark: {
    backgroundColor: "antiquewhite",
    padding: "150px 25%",
    [theme.breakpoints.down("lg")]: {
      padding: "150px 12%",
    },
  },
  sectionLight: {
    backgroundColor: "#fefeff",
    padding: "150px 25%",
    [theme.breakpoints.down("lg")]: {
      padding: "150px 12%",
    },
  },
  imageColDark: {
    display: "flex",
    justifyContent: "left",
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
    borderRadius: "30% / 20%",
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
    fontFamily: "Mathieu !important",
    fontSize: "2rem",
    marginBottom: 10,
    color: "#1b2027",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
  subtext: {
    fontSize: "1.1rem",
    color: "#444",
    marginBottom: 15,
    fontStyle: "italic",
  },
  bulletList: {
    marginBottom: 25,
    paddingLeft: 8,
  },
  listItem: {
    paddingLeft: 0,
  },
  icon: {
    color: "#66bb6a",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "left", // Center buttons horizontally
    marginLeft: 25,
    gap: theme.spacing(2), // Space between buttons
  },
  ctaButton: {
    backgroundColor: "#1b2027",
    color: "#fff",
    textTransform: "none",
    fontWeight: 600,
    padding: "10px 24px",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    minWidth: 120, // Consistent button width
    "&:hover": {
      backgroundColor: "#333",
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    },
  },
  secondaryButton: {
    borderColor: "#1b2027",
    color: "#1b2027",
    textTransform: "none",
    fontWeight: 600,
    padding: "10px 24px",
    borderRadius: 8,
    transition: "all 0.3s ease",
    minWidth: 120, // Consistent button width
    "&:hover": {
      backgroundColor: "#1b2027",
      color: "#fff",
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    },
  },
  socialProof: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(4),
    textAlign: "center",
  },
  highlight: {
    color: "#66bb6a",
    fontWeight: 700,
  },
}));

export default useStyles;
