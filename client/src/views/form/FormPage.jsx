import { useState, useEffect } from 'react';
import { getGenres, getPlatforms, postVideogame } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../form/FormPage.module.css';

export default function FormPage() {
    
    const [form, setForm] = useState({
        name: '',
        image: '',
        description: '',
        genres: [],
        rating: '',
        platforms: [],
        released: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        image: '',
        description: '',
        genres: [],
        rating: '',
        platforms: [],
        released: '',
    })

    const dispatch = useDispatch();

    const genres = useSelector(state => state.genres);

    const platforms = useSelector(state => state.platforms);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, [dispatch]);

    const changeHandler = (event) => {
        const property = event.target.name;
        let value = event.target.value;
        validate({...form, [property]: value})
        setForm({...form, [property]: value})

        if (event.target.type === "date") {
            const [year, month, day] = value.split("-");
            value = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
          }
    }

    const validate = (form) => {

        if (/^.{3,20}$/.test(form.name)) {
            setErrors({...errors, name:""})
        } else {
            setErrors({...errors, name:"Debe tener entre 3 y 20 characteres"})
        }

        if (/^.{5,250}$/.test(form.description)) {
            setErrors({...errors, description:""})
        } else {
            setErrors({...errors, description:"Debe tener entre 5 y 250 characteres"})
        }

    }

    const handleGenreChange = (event) => {
        const genre = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setForm({ ...form, genres: [...form.genres, genre] });
        } else {
            setForm({ ...form, genres: form.genres.filter(item => item !== genre) });
        }
    };

    const handleRatingChange = (event) => {
        const rating = event.target.value;
        setForm({ ...form, rating });
      };

      
      const handlePlatformChange = (event) => {
          const platform = event.target.value;
          const isChecked = event.target.checked;
          
          if (isChecked) {
              setForm({ ...form, platforms: [...form.platforms, platform] });
            } else {
          setForm({ ...form, platforms: form.platforms.filter(item => item !== platform) });
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const platformString = form.platforms.join(', ');
        const videogame = { ...form, platforms: platformString };

        dispatch(postVideogame(videogame))
        .then(() => {
            alert('¡El videojuego se creó exitosamente!');
            setForm({
                name: '',
                image: '',
                description: '',
                genres: [],
                rating: '',
                platforms: [],
                released: '',
            });
        })
        .catch((error) => {
            alert('Ocurrió un error al crear el videojuego:');
            console.error(error);
        });
    };


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" placeholder='Nombre del videojuego' />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Image: </label>
                <input type="url" value={form.image} onChange={changeHandler} name="image" placeholder='URL de la imagen' />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" value={form.description} onChange={changeHandler} name="description" placeholder='Descripcion del videojuego' />
                {errors.description && <span>{errors.description}</span>}
            </div>
            <div>
                <label>Genres: </label>
                <div className={styles.checkboxContainer}>
                {genres.map((genre, index) => (
                    <div key={index} className={styles.checkboxItem}>
                        <input
                            type="checkbox"
                            value={genre}
                            onChange={handleGenreChange}
                            checked={form.genres.includes(genre)}
                        />
                        <label>{genre}</label>
                    </div>
                ))}
                </div>
            </div>
            <div>
                <label>Rating: </label>
                <select value={form.rating} onChange={handleRatingChange} name="rating">
                    <option value="">Selecciona un puntaje</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <label>Platforms: </label>
                <div className={styles.checkboxContainer}>
                    {platforms.map((platform, index) => (
                    <div key={index} className={styles.checkboxItem}>
                        <input type="checkbox" value={platform} onChange={handlePlatformChange} checked={form.platforms.includes(platform)} />
                        <label>{platform}</label>
                    </div>
                    ))}
                </div>
            </div>
            <div>
                <label>Released: </label>
                <input type="date" value={form.released} onChange={changeHandler} name="released" />
            </div>
            <button type="submit">ENVIAR</button>
        </form>
    )
}