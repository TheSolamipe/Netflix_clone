import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./helpers/requests";

function App() {
  return (
    <div className="App">
      <h1>Sholly the Confident and Great</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
