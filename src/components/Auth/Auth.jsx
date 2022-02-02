import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Auth = (props) => {
  return (
    <div>
      <h1>Hello from Auth</h1>
      <Signup updateLocalStorage={props.updateLocalStorage} />
      <Login updateLocalStorage={props.updateLocalStorage} />
    </div>
  );
};

export default Auth;
