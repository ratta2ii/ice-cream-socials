import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1200,
    minHeight: 850,
    margin: "auto",
    marginTop: 80,
    backgroundColor: "#0d1117",
    overflowX: "hidden",
    [theme.breakpoints.down("lg")]: {
      width: 934,
    },
    [theme.breakpoints.down("md")]: {
      width: 821,
    },
    [theme.breakpoints.down("sm")]: {
      width: 703,
    },
    [theme.breakpoints.down("xs")]: {
      width: "unset",
      padding: "0 5%",
      marginBottom: 25,
      marginTop: 20,
      paddingBottom: 30,
    },
  },
  footerCon: {
    width: "100%",
    height: 455,
    [theme.breakpoints.down("sm")]: {
      padding: "5%",
    },
  },
}));

export default useStyles;

