import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import {v4 as uuidv4} from "uuid";

function Home() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(resp => resp.json())
    .then(ans => {
      setMovieList(ans)
    })
  },[])

  const displayedMovies = movieList.map( movieObject => <MovieCard key={uuidv4()} id={movieObject.id} title={movieObject.title} />)
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Home Page</h1>
      <main>
        {displayedMovies}
      </main>
    </>
  );
};

export default Home;
