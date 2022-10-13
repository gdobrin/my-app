import React from "react";
import "./LeftPart.css";
import Footer from "./Footer";
import Form from "./Form";

const LeftPart = (props) => {
  return (
    <section className="left-part">
      <Form typeForm={"Add"} />
      <Form typeForm={"Edit"} user={props.user} />
      <Footer />
    </section>
  );
};

export default LeftPart;
