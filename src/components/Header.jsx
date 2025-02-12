import SearchBar from "./SearchBar";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
}
