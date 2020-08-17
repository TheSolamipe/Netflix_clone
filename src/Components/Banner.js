import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./../helpers/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${process.env.REACT_APP_BASE_URL}${requests.fetchNetflixOriginals}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);

  return (
    <header>
      {" "}
      {/* background Image */}
      <h1> I am the banner component</h1>
      {/* title */}
      {/* div 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
