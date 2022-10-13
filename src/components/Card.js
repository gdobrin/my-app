import React from "react";

const Card = (props) => {
  // useEffect(() => {
  //   setList(props);
  // }, [props]);

  return props.members.map((user) => (
    <section className="info-card" key={user.id}>
      <div className="card-top">
        <div className="initial">D</div>
        <div className="person-info">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.id}</p>
          <p>
            {user.firstName.toLowerCase()}
            {user.lastName.toLowerCase()}@gmail.com
          </p>
        </div>
      </div>
      <div className="card-bottom">
        <button className="edit" onClick={() => props.onEdit(user)}>
          Edit
        </button>
        <button className="delete" onClick={() => props.onDelete(user.id)}>
          Delete
        </button>
      </div>
    </section>
  ));
};

export default Card;
