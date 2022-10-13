import React, { useState } from "react";
import "./Hero.css";
import AsidePart from "./AsidePart";
import LeftPart from "./LeftPart";

const Hero = () => {
  const [selectedUser, newSelectedUser] = useState([]);

  const getEditUserClicked = (userInfo) => {
    newSelectedUser(userInfo);
  };

  return (
    <section className="hero">
      <AsidePart getEditUser={getEditUserClicked} />

      <LeftPart user={selectedUser} />
    </section>
  );
};

export default Hero;
