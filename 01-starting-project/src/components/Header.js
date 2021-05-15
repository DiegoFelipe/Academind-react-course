import classes from "./Header.module.css";
import Headernav from "./Headernav";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && <Headernav />}
    </header>
  );
};

export default Header;
