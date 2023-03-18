import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "redux/auth/selectors";

import PrivateRoute from "modules/PrivateNav";
import PublicRoute from "modules/PublicNav";

export default function NavBar() {
    const isLogin = useSelector(isUserLogin);

    return (
        <header>
            <NavLink to='/'>Home</NavLink>
            {isLogin ? <PrivateRoute /> : <PublicRoute />}
        </header>
    )
}