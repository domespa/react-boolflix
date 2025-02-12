// 1 PER TENERE TRACCIA DELL'INPUT IMPORTO USESTATE
import { useState } from "react";
// IMPORTO IL CONTESTO
import { useDataContext } from "../contexts/DataContext";
// IMPORTO AXIOS
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState(""); // 1

  const { setMovies } = useDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "2f6764f9e34d5ba8605084acb6808433",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name=""
        id=""
        placeholder="Cerca"
        value={search} // 1
        onChange={(e) => setSearch(e.target.value)} // 1
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
