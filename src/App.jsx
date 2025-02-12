import Header from "./components/Header";
import Main from "./components/Main";

// CONTEXT
import { DataProvider } from "./contexts/DataContext";

export default function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </>
  );
}
