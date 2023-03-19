import { useDispatch } from "react-redux";

import Register from "components/Register";
import Section from "components/Section";

import { fetchSignup } from "redux/auth/operations";

import css from './app.module.scss';

export default function RegisterPage() {
    const dispatch = useDispatch();

    const handleRegister = data => {
        dispatch(fetchSignup(data));
    }

    return (
      <main>
        <h1 className={css.heading}>Don't have an account?</h1>
        <div className={css.div}>
          <Section title="Sign up">
            <Register onSubmit={handleRegister} />
          </Section>
        </div>
      </main>
    );
}
