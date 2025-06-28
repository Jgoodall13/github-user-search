import Search from "../assets/images/icon-search.svg";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  setName,
  setLogin,
  setBio,
  setAvatar,
  setCreated,
  setLocation,
  setTwitter,
  setBlog,
  setCompany,
  setFollowers,
  setFollowing,
  setRepos,
  setUrl,
} from "../store/searchSlice";
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
      dispatch(setName(ghData.name || ""));
      dispatch(setLogin(ghData.login || ""));
      dispatch(setBio(ghData.bio || ""));
      dispatch(setAvatar(ghData.avatar_url || ""));
      dispatch(setCreated(ghData.created_at || ""));
      dispatch(setLocation(ghData.location || ""));
      dispatch(setTwitter(ghData.twitter_username || ""));
      dispatch(setBlog(ghData.blog || ""));
      dispatch(setCompany(ghData.company || ""));
      dispatch(setFollowers(ghData.followers || 0));
      dispatch(setFollowing(ghData.following || 0));
      dispatch(setRepos(ghData.public_repos || 0));
      dispatch(setUrl(ghData.html_url || ""));
      dispatch(setSearch(""));
    } catch (err) {
      console.log("error: ", err, error, data);
      dispatch(setSearch("")); // Clear the search bar on error
    }
  };

  return (
    <div className="bg-white shadow-2xl py-3 flex flex-col gap-4 my-6 rounded-2xl md:p-6 dark:bg-gh-800">
      <div className="flex justify-between items-center">
        <div className="relative">
          <img src={Search} className="absolute" alt="" />
          <input
            type="text"
            className="pl-8 text-md focus:outline-0 md:w-[300px] dark:placeholder:text-white"
            placeholder="Github username..."
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
