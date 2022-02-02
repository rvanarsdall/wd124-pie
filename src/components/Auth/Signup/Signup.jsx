//? firstName, lastName, email, password
import React, { useState } from "react"; //imrs
import { APIURL, EndPoints } from "../../endpoints";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button was clicked");
    console.log(APIURL + EndPoints.user.register);
    const reqestObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    fetch(APIURL + EndPoints.user.register, {
      method: "POST",
      body: JSON.stringify(reqestObject),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <h1>Hello from Signup</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          id="firstName"
          placeholder="Type first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email Name</label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <label htmlFor="passwrd">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
