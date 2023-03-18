import { createUseStyles } from "react-jss";
import { transform } from "typescript";
export const styles = createUseStyles({
  wrapper: {
    width: "100%",
    height: "auto",
    position: "fixed",
    zIndex: 99,
  },
  header: {
    position: "relative",
    width: "inherit",
    height: 58,
    background: "linear-gradient(to right,#4b06c1, #cd02bd)",
    boxShadow: "0px 6px 4px -2px rgba(75,6,193,0.34)",
    "-webkit-box-shadow": "0px 6px 4px -2px rgba(75,6,193,0.34)",
    "-moz-box-shadow": "0px 6px 4px -2px rgba(75,6,193,0.34)",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    transition: "all .3s ease-in-out",
    overflow: "hidden",
  },
  heightExpand: {
    height: 250,
  },
  iconAndNames: {
    display: "flex",
    justifyContent: "center",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      margin: "0 1rem",
    },
  },

  btn: {
    margin: "1rem 0",
    cursor: "pointer",
    width: "30%",
    border: "none",
    fontSize: "1.2rem",
    fontWeight: 500,
    background: "transparent",
    "&:focus": {
      outline: "none",
    },
  },
  "@media screen and (max-width:768px)": {
    btn: {
      "& span": {
        fontSize: "1rem",
      },
    },
  },
});
