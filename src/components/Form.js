import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  console.log("left part", props.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAndNumber, setStreetAndNumber] = useState("");
  const [zipCode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [sports, setSports] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      address: {
        streetAndNumber: streetAndNumber,
        postalCode: zipCode,
        city: city,
        country: country,
      },
      sports: sports,
      gender: gender,
      age: age,
      activity_class: activity,
    };

    console.log(newUser);
    props.onAddUser(newUser);
    setFirstName("");
    setLastName("");
    setZipcode("");
    setStreetAndNumber("");
    setCity("");
    setCountry("");
    setAge("");
  };

  return (
    <section
      className={props.typeForm === "Add" ? "add-member" : "edit-member"}
    >
      <h2>{props.typeForm === "Add" ? "Add member" : "Edit member"}</h2>
      <form target="_self" id="firstForm" onSubmit={handleSubmit}>
        <section className="first-last">
          <div>
            <label htmlFor="fname">First name</label>
            <input
              required
              type="text"
              id="fname"
              name="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lname">Last name</label>
            <input
              required
              type="text"
              id="lname"
              name="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </section>

        <section className="address first-last">
          <div>
            <label htmlFor="address">Address</label>
            <input
              required
              type="text"
              id="address"
              name="address"
              value={streetAndNumber}
              onChange={(e) => setStreetAndNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="zip">Zip code</label>
            <input
              required
              type="text"
              id="zip"
              name="zip"
              value={zipCode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input
              required
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input
              required
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </section>

        <section className="gender-age first-last">
          <div>
            <label htmlFor="gender">Gender</label>
            <select required id="gender" name="gender">
              <option value="" disabled hidden>
                Choose here
              </option>
              <option className="genderAdd" value="female">
                female
              </option>
              <option className="genderAdd" value="male">
                male
              </option>
              <option className="genderAdd" value="not specified">
                not specified
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="fname">Age</label>
            <input
              required
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <label>Activity class</label>
            <fieldset>
              <input
                className="activityAdd"
                type="radio"
                id={
                  props.typeForm === "Add" ? "professional" : "professionalEdit"
                }
                name="activity"
                value="professional"
              />
              <label
                id={
                  props.typeForm === "Add"
                    ? "professionalLabel"
                    : "professionalLabelEdit"
                }
                htmlFor="professional"
              >
                professional
              </label>
              <input
                className="activityAdd"
                type="radio"
                id={props.typeForm === "Add" ? "amateur" : "amateurEdit"}
                name="activity"
                value="amateur"
              />
              <label
                id={
                  props.typeForm === "Add" ? "amateurLabel" : "amateurLabelEdit"
                }
                htmlFor="amateur"
              >
                amateur
              </label>
            </fieldset>
          </div>
        </section>

        <section className="sports">
          <label className="title">Practiced sports</label>
          <div>
            <input
              className="checkAdd"
              type="checkbox"
              id="running"
              name="running"
              value="running"
            />
            <label htmlFor="running">running</label>
            <input
              className="checkAdd"
              type="checkbox"
              id="cycling"
              name="cycling"
              value="cycling"
            />
            <label htmlFor="cycling">cycling</label>
            <input
              className="checkAdd"
              type="checkbox"
              id="swimming"
              name="swimming"
              value="swimming"
            />
            <label htmlFor="swimming">swimming</label>
            <input
              className="checkAdd"
              type="checkbox"
              id="walking"
              name="walking"
              value="walking"
            />
            <label htmlFor="walking">walking</label>
            <input
              className="checkAdd"
              type="checkbox"
              id="skiing"
              name="skiing"
              value="skiing"
            />
            <label htmlFor="skiing">skiing</label>
          </div>
        </section>
        <button type="submit" id="addNewMemberButton">
          {props.typeForm === "Add" ? "Save" : "Update"}
        </button>
      </form>
    </section>
  );
};

export default Form;
