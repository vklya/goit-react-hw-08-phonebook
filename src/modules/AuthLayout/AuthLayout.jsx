import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fecthCurrent } from 'redux/auth/operations';

const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fecthCurrent());
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthLayout;
