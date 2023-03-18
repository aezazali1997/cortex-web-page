import React, { useEffect, useRef } from "react";
import useWebanimations from "@wellyshen/use-web-animations";
import { AiFillCaretDown } from "react-icons/ai";
import { styles } from "./Navbar.style";
const Navbar = () => {
  const btn = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLDivElement>(null);
  /* animations */
  const keys = [
    { color: "rgba(30,255,0,.8)" },
    { color: "skyblue" },
    { color: "pink" },
    { color: "rgba(253,86,45,1)" },
  ];
  const fifteen = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 0,
    },
  });
  const fourteen = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 150,
    },
  });
  const thirteen = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 300,
    },
  });
  const twelve = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 450,
    },
  });
  const eleven = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 600,
    },
  });
  const ten = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 750,
    },
  });
  const nine = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 900,
    },
  });
  const eight = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 1050,
    },
  });
  const seven = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 1200,
    },
  });
  const six = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 1350,
    },
  });
  const five = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 1500,
    },
  });
  const four = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 1750,
    },
  });
  const three = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 1900,
    },
  });
  const two = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 2050,
    },
  });
  const one = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 2200,
    },
  });
  const zero = useWebanimations({
    keyframes: keys,
    animationOptions: {
      duration: 2500,
      iterations: Infinity,
      direction: "normal",
      easing: "ease-in-out",
      delay: 2350,
    },
  });
  /* animations end */
  useEffect(() => {
    if (btn.current) {
      btn.current.addEventListener("click", () => {
        if (header.current) {
          header.current.classList.toggle(`${classes.heightExpand}`);
        }
      });
    }
  }, []);
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div ref={header} className={classes.header}>
        <button ref={btn} className={classes.btn}>
          <span ref={zero.ref}>S</span>
          <span ref={one.ref}>w</span>
          <span ref={two.ref}>i</span>
          <span ref={three.ref}>t</span>
          <span ref={four.ref}>c</span>
          <span ref={five.ref}>h</span> <span ref={six.ref}>e</span>
          <span ref={seven.ref}>x</span>
          <span ref={eight.ref}>p</span>
          <span ref={nine.ref}>e</span>
          <span ref={ten.ref}>r</span>
          <span ref={eleven.ref}>i</span>
          <span ref={twelve.ref}>e</span>
          <span ref={thirteen.ref}>n</span>
          <span ref={fourteen.ref}>c</span>
          <span style={{ color: "rgba(30,255,0,1)" }}>e</span>
          <AiFillCaretDown style={{ color: "#1eff00" }}></AiFillCaretDown>
        </button>
        <div className={classes.iconAndNames}>
          <div>
            <p>icon</p>
            <span>names</span>
          </div>
          <div>
            {" "}
            <p>icon</p>
            <span>names</span>
          </div>
          <div>
            {" "}
            <p>icon</p>
            <span>names</span>
          </div>
          <div>
            {" "}
            <p>icon</p>
            <span>names</span>
          </div>
          <div>
            {" "}
            <p>icon</p>
            <span>names</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
