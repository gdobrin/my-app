import React, { useState, useEffect, useCallback, useContext } from "react";
import Header from "./components/Header";
import AsidePart from "./components/AsidePart";
import Form from "./components/Form";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [selectedUser, newSelectedUser] = useState([]);
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEditUserClicked = (userInfo) => {
    newSelectedUser(userInfo);
  };

  const fetchCard = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/users");
    const json = await response.json();
    setMembers(json);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCard();
  }, [fetchCard]);

  function removeCard(id) {
    setMembers((currentState) => currentState.filter((mem) => mem.id !== id));
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE",
    });
  }

  const content = <p className="loading">Loading...</p>;

  async function handleAddedUser(props) {
    console.log(props);
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    const data = await response.json();
    console.log(data);
    fetchCard();
  }

  let aside = (
    <AsidePart
      removeCard={removeCard}
      getEditUser={getEditUserClicked}
      members={members}
    />
  );

  return (
    <>
      <Header />
      <section className="hero">
        {isLoading ? content : aside}
        {/* <LeftPart user={selectedUser} /> */}
        {/* onAddedUserFinal={addUserHandler} */}
        <section className="left-part">
          <Form typeForm={"Add"} onAddUser={handleAddedUser} />
          <Form typeForm={"Edit"} user={selectedUser} />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
