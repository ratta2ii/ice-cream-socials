import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const BioParagraph = styled.p`
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const BioAnchor = styled.a`
  color: #29b6f6;
  text-decoration: none;
  &:visited {
    color: #29b6f6;
  }
  @media only screen and (max-width: 600px) {
    color: #0264e3;
    &:visited {
      color: #0264e3;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 140,
        marginBottom: -15,
        marginLeft: 40,
        fontSize: "2.8rem",
        backgroundImage:
          "radial-gradient(circle farthest-side at 50% 50%, #eceff1, #616161)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontWeight: 600,
        fontFamily: "system-ui",
        [theme.breakpoints.down("lg")]: {

        },
        [theme.breakpoints.down("md")]: {
            marginTop: 87,
            fontSize: "2.7rem",
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            fontSize: "3rem",
            marginTop: 100,
            marginBottom: 20,
        },
        [theme.breakpoints.down("xs")]: {
            // background: "-webkit-linear-gradient(#ca3a7b, #ffffff)",
            // backgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            marginTop: 20,
            fontSize: "1.3rem",
            marginLeft: 0,
        },
    },
    bio: {
        marginLeft: 40,
        fontSize: "1.3em",
        color: "#eceff1",
        fontFamily: "system-ui, sans-serif",
        [theme.breakpoints.down("sm")]: {
            padding: "0 50px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "0 0 0 4%",
            marginLeft: 0,
            textAlign: "unset",
        },
    },
    logo: {
        width: "70%",
        marginLeft: "15%",
        marginBottom: -20,
    }
}));

export default useStyles;
