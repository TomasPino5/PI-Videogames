import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import SearchBar from '../search/SearchBar';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <button className={styles.botones}>
                <Link to="/home">Home</Link>
            </button>
            <button className={styles.botones}>
                <Link to="/form">Form</Link>
            </button>
            <SearchBar />
        </nav>
    )
}

export default Nav