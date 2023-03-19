import { NavLink } from "react-router-dom";
import css from './guest.module.scss';

export default function PublicNav() {
    return (
      <ul className={css.list}>
        <li className={css.link}>
          <NavLink to="/register">Sign up</NavLink>
        </li>
        <li className={css.link}>
          <NavLink to="/login">Sign in</NavLink>
        </li>
      </ul>
    );
}