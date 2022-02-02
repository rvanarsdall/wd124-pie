import "./App.css";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Auth />
    </div>
  );
};

export default App;
