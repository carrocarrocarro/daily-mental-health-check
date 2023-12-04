import { Link } from "react-router-dom";

export const Nav = () => {
  return(
    <nav className="nav-wrapper">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/mental-check">Mental health</Link>
        </li>
        <li className="nav-li">
          <Link to="/motivate-me">Check me</Link>
        </li>
      </ul>
    </nav>
  );
}; 