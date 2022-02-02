//? firstName, lastName, email, password

/*
TODO: 
Update the name of SIGNUP to Login
TODO:
Update the export default from SIGNUP to Login
TODO:
Remove unnecessary useState/form collection/handle submit
TODO:
Update Endpoint file and handle reference for the fetch


*/
import React, { useState } from "react"; //imrs
import { APIURL, EndPoints } from "../../endpoints";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button was clicked");
    console.log(APIURL + EndPoints.user.login);
    const reqestObject = {
      email: email,
      password: password,
    };

    fetch(APIURL + EndPoints.user.login, {
      method: "POST",
      body: JSON.stringify(reqestObject),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => props.updateLocalStorage(data.token))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <h1>Hello from Login</h1>
      <form>
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

export default Login;
