import Card from "./components/Card";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <main
      className="flex justify-center items-center bg-gh-100 h-screen
    dark:bg-gh-900 "
    >
      <div className="md:w-3xl">
        <NavBar />
        <SearchBar />
        <Card />
      </div>
    </main>
  );
};

export default App;
