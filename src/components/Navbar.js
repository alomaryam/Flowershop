import { ThemeButton, Logo, FlowersList } from "./Styles";
import logo from "./images/logo2.png";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <Logo to="/">
          <img alt="logo" src={logo} width="40" className="navbar-brand" />
        </Logo>
        <div className="navbar-nav ml-auto">
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
          <FlowersList to="/ProductList">Flowers List</FlowersList>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
