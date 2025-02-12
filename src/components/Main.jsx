// IMPORTO IL CONTESTO PER ADARE A ITERARE SU MOVIES
import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();

  // CREO UNA FUNZIONE PER IMPLEMENTARE LE BANDIERE
  function flags(lang) {
    const nationflags = {
      en: "GB",
      it: "IT",
      es: "ES",
      fr: "FR",
      de: "DE",
      jp: "JP",
    };
    const nationflag = nationflags[lang];
    return nationflag
      ? `https://purecatamphetamine.github.io/country-flag-icons/3x2/${nationflag}.svg`
      : `https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_1280.png`;
  }
  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            Titolo: <strong>{movie.title}</strong> <br />
            Titolo Originale: <strong>{movie.original_title}</strong>
            <br />
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <br />
            Lingua: <strong>{movie.original_language}</strong>
            <img
              className="flag-cont"
              src={flags(movie.original_language)}
              alt=""
            ></img>
            <br />
            Voto: <strong>{movie.vote_average}</strong>
            <br />
          </li>
        ))}
      </ul>
    </main>
  );
}
