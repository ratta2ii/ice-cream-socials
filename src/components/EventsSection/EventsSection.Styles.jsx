import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    sectionDark: {
        backgroundColor: "#fff4e5",
        padding: "150px 25%",
        [theme.breakpoints.down("lg")]: {
            padding: "150px 12%",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "75px 12%",
        },
    },
    sectionLight: {
        backgroundColor: "#fefeff",
        padding: "150px 25%",
        [theme.breakpoints.down("lg")]: {
            padding: "150px 12%",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "75px 12%",
        },
    },
    imageColDark: {
        display: "flex",
        justifyContent: "center",
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
        borderRadius: 10,
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
        fontFamily: "system-ui !important",
        fontSize: "2rem",
        marginBottom: 10,
        color: "#1b2027",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.2rem",
        },
    },
    subtext: {
        fontSize: "1.1rem",
        color: "#444",
        marginBottom: 15,
        fontStyle: "italic",
        lineHeight: '1.4em',
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 8,
    },
    listItem: {
        padding: 0,
        paddingBottom: 5,
        '& .MuiListItemText-primary': {
            lineHeight: '1.3em',
        },
    },
    icon: {
        color: "#66bb6a",     
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "left",
        marginLeft: 25,
        gap: theme.spacing(2), // 16px gap between buttons
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    ctaButton: {
        // backgroundColor: "#1b2027",
        // color: "#fff",
        textTransform: "none",
        fontWeight: 600,
        padding: "10px 24px",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        width: "calc(48% - 8px)", // 8px accounts for half the 16px gap
        "&:hover": {
            backgroundColor: "#333",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(50% - 8px)", // match ctaButton width 
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
        width: "calc(48% - 8px)", // match ctaButton width
        "&:hover": {
            backgroundColor: "#1b2027",
            color: "#fff",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(50% - 8px)", // match ctaButton width 
        },
    },
    socialProof: {
        // backgroundColor: "#e7f7fe",
        backgroundColor: "#ffeaea",
        // backgroundColor: "#f5f5f5",
        padding: theme.spacing(4),
        textAlign: "center",
    },
    highlight: {
        // color: "#66bb6a",
        fontWeight: 700,
    },
    mobileLayout: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    desktopLayout: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    starIcon: {
        fontSize: "2rem",
        color: "#FFD700",
        margin: "0 4px",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }
}));

export default useStyles;