import { useState } from "react";
import shortid from 'shortid';
import css from './register.module.scss';

export default function Register({onSubmit}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameInputId = shortid.generate();
    const emailInputId = shortid.generate();
    const passwordInputId = shortid.generate();

      const handleChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
          case 'name':
            setName(value);
            break;

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

        onSubmit({name, email, password});
    
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={nameInputId}>Name</label>
        <input
            className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          // className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
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
          Sign up
        </button>
      </form>
    );
}