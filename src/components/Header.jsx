import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </nav>
  );
};

export default Header;
