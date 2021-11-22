import React from "react";
import hero from "../../styles/assets/hero.jpg";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <img className="hero" src={hero} alt="couple confessing love" />
        <p className="hero-text text-center">
          Welcome to Ani-mate! <br />
          An exclusive dating site for the 2D lonely hearts looking for their
          one true love. <br />
          Tired of not finding "the one" in your universe? <br />
          Too busy fighting those villians to meet someone new?
          <br />
          Then look no further, and register above to start your journey. <br />{" "}
          Believe it! <br />
          がんばって!
        </p>
      </div>
    </>
  );
};

export default Home;
