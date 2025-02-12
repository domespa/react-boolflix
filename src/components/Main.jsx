// IMPORTO IL CONTESTO PER ADARE A PRENDERE ITERARE SU MOVIES
import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();
  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}
