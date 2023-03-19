import { useDispatch } from "react-redux";
import { fetchLogin } from "redux/auth/operations";

import css from './app.module.scss';

import Login from "components/Login";
import Section from "components/Section";

export default function LoginPage() {
    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(fetchLogin(data));
    }

    return (
      <main>
        <h1 className={css.heading}>Do you have an account?</h1>
        <div className={css.div}>
          <Section title="Sign in">
            <Login onSubmit={handleLogin} />
          </Section>
        </div>
      </main>
    );
}