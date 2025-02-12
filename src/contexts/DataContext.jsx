// IMPORTO IL CONTESTO
import { createContext, useContext, useState } from "react";

// CREO IL CONTESTO
const DataContext = createContext();

// DIFINISCO UN CUSTOM PROVIDER PER TRASMETTERE I DATI DA CONVIDERE
function DataProvider({ children }) {
  //  QUI VERRANNO AGGIUNTI I USESTATE DA CONDIVIDERE
  const [movies, setMovies] = useState([]);
  const [tvmovies, setTvmovies] = useState([]);
  return (
    <DataContext.Provider value={{ movies, setMovies, tvmovies, setTvmovies }}>
      {children}
    </DataContext.Provider>
  ); // VALUE SARANNO I DATI CHE SI TRASMETTERANNO MENTRE IN CHILDREN (HEADER & MAIN) CI SARANNO I DATI MODIFICATI SECONDO VALUE
}

// CREAZIONE FUNZIONE CUSTOM PER UTILIZZARE IL CONTESTO E CHE MI SERVIRà PER RECUPERARE I DATI
function useDataContext() {
  const context = useContext(DataContext);
  return context;
}
// ESPORTO TUTTO
export { DataProvider, useDataContext };
