import React, { useState } from "react";
import { APIURL, EndPoints } from "../../endpoints";
//? nameOfPie, baseOfPie, crust, timeToBake, servings, ratings  we need to create useState variables for these inputs
//TODO Create a form
//TODO Have a function for submitting data
//TODO make sure we have a _____ when we submit the pie
//TODO make sure we are sending numbers not strings

const PieCreate = (props) => {
  const [nameOfPie, setNameOfPie] = useState("");
  const [baseOfPie, setBaseOfPie] = useState("");
  const [crust, setCrust] = useState("");
  const [timeToBake, setTimeToBake] = useState("");
  const [rating, setRating] = useState("");
  const [servings, setServings] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const requestObject = {
      nameOfPie: nameOfPie,
      baseOfPie: baseOfPie,
      crust: crust,
      timeToBake: Number(timeToBake),
      servings: Number(servings),
      rating: Number(rating),
    };
    fetch(APIURL + EndPoints.pie.create, {
      method: "POST",
      body: JSON.stringify(requestObject),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => props.setRefreshPieTable(!props.refreshPieTable))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of Pie"
          value={nameOfPie}
          onChange={(e) => setNameOfPie(e.target.value)}
        />

        <input
          type="text"
          placeholder="Base of Pie"
          value={baseOfPie}
          onChange={(e) => setBaseOfPie(e.target.value)}
        />

        <input
          type="text"
          placeholder="Crust"
          value={crust}
          onChange={(e) => setCrust(e.target.value)}
        />

        <input
          type="text"
          placeholder="Time to Bake"
          value={timeToBake}
          onChange={(e) => setTimeToBake(e.target.value)}
        />

        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <input
          type="text"
          placeholder="Servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
        <br />
        <button>Click to Submit a Pie</button>
      </form>
    </div>
  );
};

export default PieCreate;
