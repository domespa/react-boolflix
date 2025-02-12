// IMPORTO IL CONTESTO PER ADARE A ITERARE SU MOVIES
import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();
  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            Titolo: <strong>{movie.title}</strong> <br />
            Titolo Originale: <strong>{movie.original_title}</strong>
            <br />
            Lingua: <strong>{movie.original_language}</strong>
            <br />
            Voto: <strong>{movie.vote_average}</strong>
            <br />
          </li>
        ))}
      </ul>
    </main>
  );
}
