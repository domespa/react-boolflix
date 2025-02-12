// IMPORTO IL CONTESTO PER ADARE A ITERARE SU MOVIES
import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();

  // CREO UNA FUNZIONE PER IMPLEMENTARE LE BANDIERE
  function flags(lang) {
    const nationflags = {
      en: "EN",
      it: "IT",
      es: "ES",
      fr: "FR",
      de: "DE",
    };
    const nationflag = nationflags[lang];
    return (
      nationflag &&
      `https://purecatamphetamine.github.io/country-flag-icons/3x2/${nationflag}.svg`
    );
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
