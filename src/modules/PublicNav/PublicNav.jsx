import { NavLink } from "react-router-dom";
import css from './guest.module.scss';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: inherit;
  &.active {
    color: #ffd700;
  }
`;

export default function PublicNav() {
    return (
      <ul className={css.list}>
        <li className={css.link}>
          <StyledLink to="/register">Sign up</StyledLink>
        </li>
        <li className={css.link}>
          <StyledLink to="/login">Sign in</StyledLink>
        </li>
      </ul>
    );
}