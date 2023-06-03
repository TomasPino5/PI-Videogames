import { Link } from 'react-router-dom';
import styles from "../card/Card.module.css";

function Card({ id, name, image, genres, rating }) {

    const nameGenres = genres.map(genre => genre.name).join(", ");

    return (
        <Link to={`/detail/${id}`} className={styles.link}>
            <div className={styles.divCard}>
                <h1 className={styles.name}>{name}</h1>
                <img className={styles.imagen} src={image} alt='' />
                <h2 className={styles.h2}>{nameGenres}</h2>
                <h2 className={styles.h2}>{rating}⭐</h2>
            </div>
        </Link>
    );
}

export default Card;