import { useSelector, useDispatch } from "react-redux";
import { fetchLogout } from "redux/auth/operations";
import { getUser } from "redux/auth/selectors";
import css from './user.module.scss';

export default function PrivateNav() {
  const {name} = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(fetchLogout());
    }
    
    return (
      <div className={css.list}>
        <p>Hello, {name} 👋</p>
        <button onClick={onLogOut} className={css.button}>
          Log out
        </button>
      </div>
    );
}