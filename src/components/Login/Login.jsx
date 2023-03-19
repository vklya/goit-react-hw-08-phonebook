import { useState } from 'react';
import shortid from 'shortid';
import css from './login.module.scss';

export default function Login({onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const emailInputId = shortid.generate();
    const passwordInputId = shortid.generate();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
        case 'email':
            setEmail(value);
            break;

        case 'password':
            setPassword(value);
            break;

        default:
            break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ email, password });

        setEmail('');
        setPassword('');
    };

    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={emailInputId}>Email</label>
        <input
          className={css.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          id={emailInputId}
          // className={css.input}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email may contain only letters, one or more dots and @. For example abc@gmail.com"
          required
        />
        <label htmlFor={passwordInputId}>Password</label>
        <input
          className={css.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          id={passwordInputId}
          // className={css.input}
          pattern=".{6,}"
          title="Password must contain at least 6 characters"
          required
        />
        <button type="submit" className={css.button}>
          Sign in
        </button>
      </form>
    );
}