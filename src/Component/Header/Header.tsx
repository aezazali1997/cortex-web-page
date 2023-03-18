import React from "react";
import { styles } from "./Header.style";
import brain from "../images/Intro_Brain.svg";
import featured from "../images/Intro_Featured_Image_Empty.svg";
import frontLayor from "../images/Intro_Front_Layer.svg";
import useWebAnimations from "@wellyshen/use-web-animations";
const Header = () => {
  const light = useWebAnimations<HTMLImageElement>({
    keyframes: [
      { opacity: ".7" },
      { opacity: ".9" },
      { opacity: "1" },
      { opacity: ".7" },
    ],
    animationOptions: {
      duration: 200,
      direction: "alternate",
      easing: "ease-in",
      iterations: Infinity,
    },
  });
  const brainAnimation = useWebAnimations<HTMLImageElement>({
    keyframes: [
      { transform: "translateY(-3%)" },
      { transform: "translateY(8%)" },
    ],
    animationOptions: {
      duration: 7000 / 2,
      direction: "alternate",
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.textContainer}>
          <h1>
            Cortex <span>CopyWriter</span>
          </h1>
          <h3>
            Enhance your communications with psychology-based copywriting and UX
            writing
          </h3>
          <button>Send a message</button>
        </div>
        <div className={classes.animationContainer}>
          <img
            src={brain}
            ref={brainAnimation.ref}
            className={classes.brain}
            alt=""
          />
          <img src={featured} className={classes.frame} alt="" />
          <img
            src={frontLayor}
            ref={light.ref}
            className={classes.light}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
