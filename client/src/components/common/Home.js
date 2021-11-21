import React from "react";
import hero from "../../styles/assets/hero.jpg";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <img className="hero" src={hero} alt="couple confessing love" />
        <p className="hero-text">
          Welcome to Ani-mate! An exclisive dating site for the 2D lonely hearts
          looking for true love. Tired of not finding "the one" in your
          universe? Too busy fighting those villians to meet someone new? Then
          look no further! Register above to start your journey. <br /> Believe
          it!
        </p>
      </div>
    </>
  );
};

export default Home;
