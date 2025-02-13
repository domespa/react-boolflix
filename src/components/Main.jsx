// FUNCTION STARS
import RateFunction from "./RateFunction";

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
      <div className="main-cont">
        {movies.length > 0 && <h1>Quello che abbiamo trovato...</h1>}
        <div className="movies-list">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <h3>{movie.original_title}</h3>
              <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={movie.original_title}
              />
              <p>
                Titolo Originale: <strong>{movie.title}</strong> <br />
                Lingua: <strong>{movie.original_language}</strong>
                <img
                  className="flag-cont"
                  src={flags(movie.original_language)}
                  alt=""
                />
                <br />
                Voto: <strong>{movie.vote_average}</strong>
                <br />
              </p>
              <RateFunction voteaverage={movie.vote_average} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
