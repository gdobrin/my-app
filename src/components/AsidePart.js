import React, { useEffect, useState, useReducer } from "react";
import "./aside.css";
import Card from "./Card";

const AsidePart = (props) => {
  const editCard = (user) => {
    props.getEditUser(user);
  };

  const removeCard = (user) => {
    props.removeCard(user);
  };

  return (
    <aside>
      <Card members={props.members} onDelete={removeCard} onEdit={editCard} />
    </aside>
  );
};

export default AsidePart;
