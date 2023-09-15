import { useEffect, useState } from "react";
import "./App.css";
/**
 * Movie Data
 * @typedef {Object} Movie
 * @property {string} name
 * @property {string} rate
 * @property {Object} duration
 * @property {string} duration.year
 * @property {string} duration.hour
 * @property {string} img
 */
const fetchImdb = async () => {
  const response = await fetch("../imdbData.json");
  const data = await response.json()
  
  //deletes "Rate" string on rate
  for (var i = 0; i < data.length; i++) {
    var rateDegeri = data[i].rate;
    data[i].rate = rateDegeri.replace('Rate', '').trim();
  }
  return data;
};

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchImdb().then((data) => setMovies(data))
  }, []);
  
  return (
    <div style={{display:"flex", flexDirection:"column", gap:16}}>
      {movies.length > 0 ?
        movies.map((/** @type {Movie} */ movie, index) => 
        (
        <div key={index} style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <img height={140} src={movie.img} alt={movie.name} loading="lazy"/>
            <div style={{marginLeft:16, fontSize:21}}>
                <p>{movie.name}</p>
                <div>
                    <p>{movie.rate ? movie.rate : "Rating Not Found"}</p> 
                    <p>{movie.duration.year ? movie.duration.year : "Not Found"} - {movie.duration.hour ? movie.duration.hour : "Not Found"}</p>
                </div>
            </div>
        </div>
        )
        ): <h1 style={{display:"flex", justifyContent:"center", height:"80vh", alignItems:"center"}}>Cannot Reach Data Or Loading...</h1>}
    </div>
  );
}

export default App;
