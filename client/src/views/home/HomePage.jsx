import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions';
import Cards from '../../components/cards/Cards';
import styles from '../home/HomePage.module.css';

export default function HomePage() {

    const dispatch = useDispatch();
    const nameVideogames = useSelector(state => state.nameVideogames);

    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])


    return (
    <div className={styles.contenedor}>
        <Cards videogames={nameVideogames} />
    </div>
    );
 }