// 1 PER TENERE TRACCIA DELL'INPUT IMPORTO USESTATE
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState(""); // 1

  return (
    <form>
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
