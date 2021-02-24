import { ThemeButton, Logo } from "./Styles";
import { Link } from "react-router-dom";
import logo from "./images/logo2.png";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
        <img alt="logo" src={logo} width="40" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>{" "}
        <Link to="/ProductList" style={{ margin: 10, float: "right" }}>
          {" "}
          Flowers List{" "}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
