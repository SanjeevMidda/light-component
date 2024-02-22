import React from "react";

const Light = ({ color, delay }) => {
  let lightStyles = {
    backgroundColor: color,
    transitionDelay: delay,
  };

  return <div className="light" style={lightStyles}></div>;
};

export default Light;
