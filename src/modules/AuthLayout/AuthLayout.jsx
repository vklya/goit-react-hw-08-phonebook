import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrent } from 'redux/auth/operations';

const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrent());
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthLayout;
