import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// CONTEXT
import { DataProvider } from "./contexts/DataContext";

export default function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Main />
        <Footer />
      </DataProvider>
    </>
  );
}
