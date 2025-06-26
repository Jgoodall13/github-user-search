import ProfilePic from "../assets/images/icon-company.svg";

const Card = () => {
  return (
    <div className="bg-white shadow-2xl p-8 rounded-xl dark:bg-gh-800">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="col-span-10 grid grid-cols-2">
          <div>
            <h4>The Octocat</h4>
            <p>@octocat</p>
          </div>
          <p>Joined 25 Jan 2011</p>
          <div>
            <p>This profile has ho bio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// <img src={ProfilePic} alt="" />
