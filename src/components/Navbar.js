import { ThemeButton } from "./Styles";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <h4 className="navbar-brand">add your logo</h4>
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
