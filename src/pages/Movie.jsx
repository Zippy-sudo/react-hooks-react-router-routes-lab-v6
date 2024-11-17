import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { v4 as uuidv4 } from "uuid"

function Movie() {

  const [movieToDisplay, setMovieToDisplay] = useState({})
  const [genreArray, setGenreArray] = useState([])

  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(resp => resp.json())
      .then(ans => {
        setMovieToDisplay(ans)
        setGenreArray(ans.genres)
      })
      .catch(error => console.log(error))
  }, [])

  const genreList = genreArray.map((element) => <li><span key={uuidv4()}> genre : {element}</span></li>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieToDisplay.title}</h1>
        <p>{movieToDisplay.time}</p>
        <ul>
          {genreList}
          </ul>
      </main>
    </>
  );
};

export default Movie;
