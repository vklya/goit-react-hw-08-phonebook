import { useSelector, useDispatch } from "react-redux";
import { fetchLogout } from "redux/auth/operations";
import { getUser } from "redux/auth/selectors";

export default function PrivateNav() {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(fetchLogout());
    }
    
    return (
      <div>
        <p>
          Hi, {name} <span>👋</span>
            </p>
            <button onClick={onLogOut}>Log out</button>
      </div>
    );
}