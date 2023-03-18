import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  wrapper: {
    padding: "3rem 1rem",
    minHeight: "100vh",
    background: "linear-gradient(to right,#4b06c1,#7704bf)",
  },
  header: {
    display: "flex",
    margin: "3rem 0",
    height: "auto",
  },
  textContainer: {
    marginLeft: "3rem",
    width: "30%",
    "& h1": {
      fontWeight: 600,
      fontSize: "6rem",
      textTransform: "uppercase",
      color: "#fff",
      lineHeight: "5rem",
      letterSpacing: ".2rem",
      "& span": {
        letterSpacing: 0,
        fontSize: "4rem",
        fontWeight: 400,
      },
    },
    "& h3": {
      marginTop: "2rem",
      color: "#fff",
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    "& button": {
      marginTop: "3rem",
      background: "linear-gradient(to bottom,#23f9da,#1c68c1)",
      border: "1px solid #7704bf",
      borderRadius: 30,
      padding: ".5rem 1rem",
      fontSize: "1.3rem",
      color: "#fff",
      fontWeight: 300,
      "&:focus": {
        outline: "none",
      },
    },
  },
  animationContainer: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "& img": {
      position: "absolute",
      width: 600,
    },
  },
  light: {
    top: 40,
    "animation-iteration-count": "infinite",
    "animation-duration": "12s",
  },
  brain: {
    top: 1,
  },
  frame: {
    top: 40,
  },
});
