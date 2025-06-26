import Search from "../assets/images/icon-search.svg";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../store/searchSlice";
import { useLazyGetGithubUserByNameQuery } from "../store/apiSlice";

const SearchBar = () => {
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );
  const dispatch = useDispatch();

  const [triggerSearch, { data, error, isLoading, isError }] =
    useLazyGetGithubUserByNameQuery();

  const handleSearch = async () => {
    if (!searchInput.trim()) return;

    try {
      const ghData = await triggerSearch(searchInput).unwrap(); // We’ll use `data` elsewhere
      console.log(ghData);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <div className="bg-white shadow-2xl flex flex-col gap-4 p-6 my-6 rounded-2xl dark:bg-gh-800">
      <div className="flex justify-between items-center">
        <div className="relative">
          <img src={Search} className="absolute" alt="" />
          <input
            type="text"
            className="pl-8 w-[300px] text-lg focus:outline-0"
            placeholder="Search Github username..."
            value={searchInput}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
        <button
          className="bg-primary-blue text-white py-4 px-8 rounded-xl cursor-pointer hover:bg-blue-hover"
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>

      {isError && (
        <p className="text-red-500 font-semibold">User not found. Try again.</p>
      )}
    </div>
  );
};

export default SearchBar;
