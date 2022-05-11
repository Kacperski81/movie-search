import React,{useState} from "react"
import MovieCard from "./MovieCard"
function SearchMovie() {
const [query, setQuery]  = useState('')
const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()
    const query = 'holmes'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1e486444a6fc06af6bff3301133f8513&language=en-UK&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url);
      const data = await res.json()
      setMovies(data.results)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <input type="text" className="input" name="query" placeholder="movie title here"
          value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  )
}

export default SearchMovie
