
import { useState, useEffect } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'
//6468deab
const API_URL = 'http://www.omdbapi.com/?apikey=6468deab'



const App = () => {
    const [Movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm]=useState('');

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovie('Spiderman')
    }, [])
    return (

        <div className='app'>
            <h1>Movie Land</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => searchMovie(searchTerm)}
                />

            </div>
            {
                Movies?.length > 0
                    ? (
                        <div className='container'>
                            {Movies.map((movie)=>(
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    )
                    :
                    (
                        <div className='empty'>
                            <div>No movies found</div>
                        </div>
                    )
            }

        </div>
    )
}
export default App;
