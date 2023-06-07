import styles from './SearchBar.module.css'
import { getVideogamesByName } from '../../redux/actions';
import { useState } from 'react';

export default function SearchBar() {

   const [searchValue, setSearchValue] = useState('');

   const onSearch = () => {
      getVideogamesByName(searchValue);
   };

   const handleChange = (event) => {
      setSearchValue(event.target.value);
   };
    

   return (
      <div className={styles.searchDiv}>
         <input className={styles.searchInput} value={searchValue} onChange={handleChange} />
         <button className={styles.boton} onClick={onSearch}>BUSCAR</button>
      </div>
   );
}