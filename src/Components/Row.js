import React, { useState, useEffect } from "react";
import axios from "axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //pulling information from the tmdb using its API
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${process.env.REACT_APP_BASE_URL}` + fetchUrl
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            src={`${base_url}` + movie.poster_path}
            alt={movie.name}
            key={movie.id}
            className="row__poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
