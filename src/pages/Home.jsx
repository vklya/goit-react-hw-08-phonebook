import phonebook from '../images/phonebook.png';
import css from './app.module.scss';

export default function Home() {
    return (
      <main>
        <h1 className={css.heading}>Welcome to the virtual phonebook!</h1>
        <img src={phonebook} alt="phonebook" className={css.image} />
      </main>
    );
}