import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 50,
        padding: "80px 0",
        backgroundColor: "#0d1117", // or leave out if inherited
        animation: "fadeIn ease 2.2s",
        [theme.breakpoints.down("xs")]: {
            gap: 40,
            padding: "40px 0",
        },
    },
    imageFrame: {
        width: "100%",
        maxWidth: 350,
        [theme.breakpoints.down("xs")]: {
            maxWidth: 280,
        },
    },
    oblongImage: {
        width: "100%",
        height: "auto",
        // borderRadius: "30% / 20%",
        borderRadius: 10,
        boxShadow: "0 6px 20px rgba(255, 255, 255, 0.08)",
        border: "3px solid rgba(255, 255, 255, 0.2)",
    },
}));

export default useStyles;
