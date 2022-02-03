import piePic from "../../assets/piePic.jpg";
import Logout from "./Logout/Logout";
import "./navbar.css";
const Navbar = (props) => {
  return (
    <div>
      <nav>
        <img src={piePic} alt="" id="piePic" />
        <Logout />
      </nav>
    </div>
  );
};

export default Navbar;
