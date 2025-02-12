// 1 PER TENERE TRACCIA DELL'INPUT IMPORTO USESTATE
import { useState } from "react";
// IMPORTO IL CONTESTO
import { useDataContext } from "../contexts/DataContext";
// IMPORTO AXIOS
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState(""); // 1

  const { setMovies } = useDataContext();
  const { setTvmovies } = useDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    const apis = [
      "https://api.themoviedb.org/3/search/movie",
      "https://api.themoviedb.org/3/search/tv",
    ];
    //  UTILIZZO AXIOS.ALL PER ITERARE SU DUE RICHIESTE API - USO POI SPREAD PER RICHIAMARE I RISULTATI
    axios
      .all(
        apis.map((api) =>
          axios.get(api, {
            params: {
              api_key: "2f6764f9e34d5ba8605084acb6808433",
              query: search,
            },
          })
        )
      )
      .then(
        axios.spread((movieRes, TvmoviesRes) => {
          setMovies(movieRes.data.results);
          setTvmovies(TvmoviesRes.data.results);
        })
      );
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name=""
        id=""
        placeholder="Inserisci un titolo..."
        value={search} // 1
        onChange={(e) => setSearch(e.target.value)} // 1
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
