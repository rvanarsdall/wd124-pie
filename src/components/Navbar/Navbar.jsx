import piePic from "../../assets/piePic.jpg";
import "./navbar.css";
const Navbar = (props) => {
  return (
    <div>
      <nav>
        <img src={piePic} alt="" id="piePic" />
      </nav>
    </div>
  );
};

export default Navbar;
