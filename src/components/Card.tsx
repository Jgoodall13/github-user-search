import ProfilePic from "../assets/images/icon-company.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Card = () => {
  const {
    name,
    login,
    bio,
    created,
    avatar,
    location,
    twitter,
    blog,
    company,
    followers,
    following,
    repos,
    url,
  } = useSelector((state: RootState) => state.search);
  return (
    <div className="bg-white shadow-2xl p-6 md:p-8 rounded-xl dark:bg-gh-800 dark:text-white">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
        <div className="flex justify-center md:col-span-2">
          <img
            src={avatar || ProfilePic}
            alt="Profile"
            className="rounded-full h-25 md:w-full"
          />
        </div>
        <div className="hidden md:block md:col-span-1" />
        <div className="md:col-span-9 flex flex-col gap-2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h4 className="font-bold text-xl">{name || "Name not found"}</h4>
              <p className="text-gh-blue">
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    @{login || "unknown"}
                  </a>
                ) : (
                  `@${login || "unknown"}`
                )}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              Joined {created ? new Date(created).toLocaleDateString() : "N/A"}
            </p>
          </div>
          <p className="mt-4">{bio || "This profile has no bio"}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 bg-gh-100 dark:bg-gh-900 mt-6 p-4 rounded-lg text-center text-xs md:text-sm">
        <div>
          <p className="text-gray-500">Repos</p>
          <p className="text-lg font-bold">{repos}</p>
        </div>
        <div>
          <p className="text-gray-500">Followers</p>
          <p className="text-lg font-bold">{followers}</p>
        </div>
        <div>
          <p className="text-gray-500">Following</p>
          <p className="text-lg font-bold">{following}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm">
        <p>📍 {location || "Not available"}</p>
        <p>🔗 {blog ? <a href={blog}>{blog}</a> : "Not available"}</p>
        <p>
          🐦{" "}
          {twitter ? (
            <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
          ) : (
            "Not available"
          )}
        </p>
        <p>🏢 {company || "Not available"}</p>
      </div>
    </div>
  );
};

export default Card;
