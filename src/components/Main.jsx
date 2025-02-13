// FUNCTION STARS
import RateFunction from "./RateFunction";

// IMPORTO IL CONTESTO PER ADARE A ITERARE SU MOVIES
import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();
  const { tvmovies } = useDataContext();

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
        {/*SECTION PER I FILM */}
        {movies.length > 0 && <h1>I film che abbiamo trovato...</h1>}
        <div className="movies-list">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <div className="cover-hover">
                <p>
                  <strong>Titolo:</strong> {movie.original_title} <br />
                  <br />
                  <strong>Titolo Originale:</strong> {movie.title} <br />
                  {/* Lingua: <strong>{movie.original_language}</strong> */}
                  {/* <img
                    className="flag-cont"
                    src={flags(movie.original_language)}
                    alt=""
                  /> */}
                  {/* <br /> */}
                  <strong>
                    {" "}
                    Voto: {movie.vote_average}{" "}
                    <RateFunction voteaverage={movie.vote_average} />{" "}
                  </strong>
                  <br />
                  <strong>Overview:</strong>
                  {movie.overview}
                </p>
              </div>
              <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
          ))}
        </div>

        {tvmovies.length > 0 && <h1>Le serie che abbiamo trovato...</h1>}
        <div className="movies-list">
          {tvmovies.map((tvmovie) => (
            <div className="movie-card" key={tvmovie.id}>
              <div className="cover-hover">
                <p>
                  <strong>Titolo:</strong> {tvmovie.name} <br />
                  <br />
                  <strong>Titolo Originale:</strong> {tvmovie.original_name}{" "}
                  <br />
                  {/* Lingua: <strong>{movie.original_language}</strong> */}
                  {/* <img
                    className="flag-cont"
                    src={flags(movie.original_language)}
                    alt=""
                  /> */}
                  {/* <br /> */}
                  <strong>
                    {" "}
                    Voto: {tvmovie.vote_average}{" "}
                    <RateFunction voteaverage={tvmovie.vote_average} />{" "}
                  </strong>
                  <br />
                  <strong>Overview:</strong>
                  {tvmovie.overview}
                </p>
              </div>
              <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/w342/${tvmovie.poster_path}`}
                alt={tvmovie.original_title}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
