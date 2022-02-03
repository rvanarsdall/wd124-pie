//TODO In the JSX we need have table HTML code to display our data to include table headers

//TODO Write a function that will fetch all of our pies and store the response in a useState variable

//? Create a useState variable pies  store that data from the fetch into pies

import React, { useState, useEffect } from "react";
import { APIURL, EndPoints } from "../../endpoints";
import PieRow from "./PieRow/PieRow";
import "./PieTable.css";

const PieTable = (props) => {
  const [pies, setPies] = useState([]);

  useEffect(() => {
    fetchPies();
  }, [props.refreshPieTable]);

  async function fetchPies() {
    const requestOptions = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    };

    try {
      const response = await fetch(
        APIURL + EndPoints.pie.getAllPies,
        requestOptions
      );

      const data = await response.json();

      console.log(data);
      setPies(data);
    } catch (error) {
      console.error(error);
    }
  }
  //TODO Perform a .MAP on the pies and pass the pie data to the PieRow component
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name of Pie</th>
            <th>Base of Pie</th>
            <th>Crust</th>
            <th>Bake Time</th>
            <th>Servings</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {pies.map((pie) => (
            <PieRow pie={pie} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PieTable;
