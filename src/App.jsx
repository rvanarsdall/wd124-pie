import logo from "./logo.svg";
import "./App.css";
import PgHeader from "./components/pg-header/PgHeader";
import PgAboutMe from "./components/pg-challenge/PGAboutMe";

function App() {
  let name = "Rob";
  return (
    <div className="App">
      <PgHeader />
      <h1>Welcome to React, {name}</h1>
      <h2>We just Modified our root App Component</h2>
      <PgAboutMe />
    </div>
  );
}

export default App;
