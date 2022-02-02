import logo from "./logo.svg";
import "./App.css";
import PgHeader from "./components/pg-header/PgHeader";
import PgAboutMe from "./components/pg-challenge/PGAboutMe";
import ClickCounter from "./components/pg-clickcounter/PgClickCounter";

function AppPlayground() {
  let name = "Brenda";
  let location = "I'm from Fort Wayne Indiana";
  const favoriteFoods = ["tacos", "pizza", "indian food", "chocolate"];
  //? Create an array to house the locations that you had in your PG About me & use the .map() to loop through and display the locations.
  return (
    <div className="App">
      <PgHeader />
      <h1>Welcome to React, {name}</h1>
      <h2>We just Modified our root App Component</h2>
      <PgAboutMe
        name={name}
        location={location}
        favoriteFoods={favoriteFoods}
      />
      <ClickCounter />
    </div>
  );
}

export default AppPlayground;
