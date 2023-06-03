import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';
import Cards from '../../components/cards/Cards';
import styles from '../home/HomePage.module.css';

export default function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])

    return (
    <div className={styles.contenedor}>
        <Cards />
    </div>
    );
 }