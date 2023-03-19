import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "redux/auth/selectors";

import PrivateNav from "modules/PrivateNav";
import PublicNav from "modules/PublicNav";

import css from './nav.module.scss';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: inherit;
  &.active {
    color: #ffd700;
  }
`;

export default function NavBar() {
    const isLogin = useSelector(isUserLogin);

    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <StyledLink to="/" className={css.home}>
            Home
          </StyledLink>
          {isLogin ? <PrivateNav /> : <PublicNav />}
        </nav>
      </header>
    );
}