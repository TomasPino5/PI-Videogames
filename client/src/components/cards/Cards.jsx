import { useSelector } from "react-redux";
import Card from "../card/Card";
import styles from "../cards/Cards.module.css";

export default function Cards() {

    const videogames = useSelector(state => state.videogames)

    return (
        <div className={styles.divStyle}>
            {videogames.map(({ id, name, genres, background_image, rating }) => (
            <Card
            key={id}
            id={id}
            name={name}
            image={background_image}
            genres={genres}
            rating={rating}
            />
            ))}
        </div>
    );
}