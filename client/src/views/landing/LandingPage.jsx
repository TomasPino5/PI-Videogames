import styles from './LandingPage.module.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/home');
    };

    return (
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>PI VIDEOGAMES</h1>
            <p className={styles.p}>BY:TOMAS</p>
            <button className={styles.boton} onClick={handleContinue}>CONTINUE</button>
        </div>
    )
}

export default LandingPage;