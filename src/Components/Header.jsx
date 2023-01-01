import style from'./Header.module.css';
import igniteLogo from '../assets/Ignite-simbol.svg';

export function Header() {
    return (
        <header className={style.header}>
            <img src={igniteLogo} alt="Logo ignite" />
        </header>
    );
}