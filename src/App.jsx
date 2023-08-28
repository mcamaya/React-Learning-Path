import React from "react";
import "./App.css";
import buscadorIcon from "./buscador.svg";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";
// API KEY d4ccfc8a

const urlApi = "http://www.omdbapi.com/?apikey=d4ccfc8a";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams , setSearchParams] = useState('');
  const buscadorPeliculas = async (titulo) => {
    const response = await fetch(`${urlApi}&s=${titulo}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    buscadorPeliculas("");
  }, []);

  const introKey = (e) => {if (e.key === "Enter") buscadorPeliculas(searchParams)  }

  return (
    <div className="app">
      <h1>CineColombia</h1>

      <nav className="busqueda">
        <input
          placeholder="¡Busaca tu película favorita!"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          onKeyDown={introKey}
        />
        <img src={buscadorIcon} alt="Buscar-Icon" onClick={() => buscadorPeliculas(searchParams)} />
      </nav>

      {console.log(movies)}

      {
        movies?.length > 0 ? (
          <div className="contenedor">
            {/* {movies.forEach((e) => (
              <MovieCard props = {movie1}/>
            ))} */}
            {
              movies.map((e)=>(
                <MovieCard props = {e}/>
              ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No se encontraron coincidencias</h2>
          </div>
        )
      }

    </div>
  );
};

export default App;
