import "./landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <Link to="/home"><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Landing;
