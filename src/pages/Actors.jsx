import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {v4 as uuidv4} from "uuid";

function Actors() {

  const [actorsData, setActorsData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(resp => resp.json())
      .then(ans => {
        setActorsData(ans)
      })
},[])

  const movieList = (arr) => {
    return arr.map(element => <li key={uuidv4()} >{element}</li>)
  }

  const actorsList = actorsData.map(actorObj => 
    <article key={uuidv4()}>
    <h2>{actorObj.name}</h2>
    <ul>{movieList(actorObj.movies)}</ul>
    </article>
  )
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
