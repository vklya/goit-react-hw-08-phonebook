import { NavLink } from "react-router-dom";

export default function PublicNav() {
    return (
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    );
}