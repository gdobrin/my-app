import React, { useEffect, useState, useReducer } from "react";
import "./aside.css";
import Card from "./Card";

const AsidePart = (props) => {
  const [members, setMembers] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const fetchCard = async () => {
    const response = await fetch("http://localhost:3000/users");
    const json = await response.json();
    forceUpdate();
    setMembers(json);
  };

  function removeCard(id) {
    setMembers((currentState) => currentState.filter((mem) => mem.id !== id));
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE",
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCard();
    }, 3000);
    return () => clearTimeout(timer);
  }, [ignored]);

  const editCard = (user) => {
    props.getEditUser(user);
  };

  return (
    <aside>
      <Card members={members} onDelete={removeCard} onEdit={editCard} />
    </aside>
  );
};

export default AsidePart;
