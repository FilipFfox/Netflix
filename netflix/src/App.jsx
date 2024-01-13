import "./App.css";

import { useState } from "react";
import YouTube from "react-youtube";

const MOVIES = [
  {
    src: "https://image.tmdb.org/t/p/original//vcFW09U4834DyFOeRZpsx9x1D3S.jpg",
    videoId: "tEkC6InjWQ8",
  },
  {
    src: "https://image.tmdb.org/t/p/original//t9i4Icf1LsGIgkpnokQaC4hzxLa.jpg",
    videoId: "JLHsM4bpfxY",
  },
  {
    src: "https://image.tmdb.org/t/p/original//tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    videoId: "UaVTIH8mujA",
  },
  {
    src: "https://image.tmdb.org/t/p/original//bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
    videoId: "otNh9bTjXWg",
  },
  {
    src: "https://image.tmdb.org/t/p/original//ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    videoId: "pBk4NYhWNMM",
  },
];

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function App() {
  const [trailerID, setTrailerID] = useState("");

  const handleClick = (id) => {
    setTrailerID(id);
  };

  return (
    <>
      <div className="nav nav_black">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
      </div>

      {/* Banner */}
      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">Oppenheimer</h1>
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
          <h2 className="banner__description">
            The story of the development of the Oppenheimer atomic bomb.
          </h2>
        </div>
      </header>

      {/* Row */}
      <div className="row">
        <h2 className="row__header">Trending now</h2>
        <div className="row__posters">
          {MOVIES.map((movie) => {
            return (
              <img
                className="row__poster"
                key={movie.videoId}
                src={movie.src}
                alt="Movie"
                onClick={() => handleClick(movie.videoId)}
              />
            );
          })}
        </div>
      </div>

      {/* YouTube */}
      {trailerID && <YouTube videoId={trailerID} opts={opts} />}
    </>
  );
}

export default App;
