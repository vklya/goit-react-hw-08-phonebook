import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchLogout } from "redux/auth/operations";
import { getUser } from "redux/auth/selectors";
import css from './user.module.scss';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: inherit;
  &.active {
    color: #ffd700;
  }
`;

export default function PrivateNav() {
  const {name} = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(fetchLogout());
    }
    
    return (
      <div className={css.list}>
        <StyledLink to="/contacts" className={css.link}>
          Contacts
        </StyledLink>
        <p className={css.name}>Hello, {name} 👋</p>
        <button onClick={onLogOut} className={css.button}>
          Log out
        </button>
      </div>
    );
}