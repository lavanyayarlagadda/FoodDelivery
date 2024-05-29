import React from "react";
import UserDetails from "./UserClass";

const About = () => {
  return (
    <div>
      AboutUs
      <UserDetails
        name={"Lavanya"}
        location={"Nizamabad"}
        contact={"lavanya@react.com"}
      />
    </div>
  );
};

export default About;
