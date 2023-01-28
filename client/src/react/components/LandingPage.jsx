import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import breedLogo from "../../images/breedLogo.jpg";
const LandingPage = () => {
  return (
    <>
      <section>
        <button>
          <Link to='/home'>Welcome!</Link>
        </button>
        <div className='img'>
          <img src={breedLogo} alt='logo' />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
