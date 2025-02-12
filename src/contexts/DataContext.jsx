// IMPORTO IL CONTESTO
import { createContext, useContext } from "react";

// CREO IL CONTESTO
const DataContext = createContext();

// DIFINISCO UN CUSTOM PROVIDER PER TRASMETTERE I DATI DA CONVIDERE
function DataProvider({ children }) {
  //  QUI VERRANNO AGGIUNTI I VALUE DA CONVIDIDERE

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>; // VALUE SARANNO I DATI CHE SI TRASMETTERANNO MENTRE IN CHILDREN (HEADER & MAIN) CI SARANNO I DATI MODIFICATI SECONDO VALUE
}

// CREAZIONE FUNZIONE CUSTOM PER UTILIZZARE IL CONTESTO E CHE MI SERVIRà PER RECUPERARE I DATI
function useDataContext() {
  const context = useContext(DataContext);
  return context;
}
// ESPORTO TUTTO
export { DataProvider, useDataContext };
