import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="nav bg-light d-flex justify-content-between">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/register" className="nav-link">
        Register
      </Link>
    </nav>
  );
};

export default TopNav;
