import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {v4 as uuidv4} from "uuid";

function Directors() {

  const [directorsData, setDirectorsData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(resp => resp.json())
      .then(ans => {
        setDirectorsData(ans)
      })
      .catch(error => alert("Fetch Fail"))
  },[])

  const movieList = (arr) => {
    return arr.map(element => <li key={uuidv4()} >{element}</li>)
  }

  const directorList = directorsData.map(directorObj =>
    <article key={uuidv4()}>
      <h2>{directorObj.name}</h2>
      <ul>{movieList(directorObj.movies)}</ul>
    </article>
  )

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
