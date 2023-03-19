import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "redux/auth/selectors";

import PrivateNav from "modules/PrivateNav";
import PublicNav from "modules/PublicNav";

import css from './nav.module.scss';

export default function NavBar() {
    const isLogin = useSelector(isUserLogin);

    return (
      <header className={css.header}>
        <NavLink to="/" className={css.home}>
          Home
        </NavLink>
        {isLogin ? <PrivateNav /> : <PublicNav />}
      </header>
    );
}