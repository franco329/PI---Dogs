import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import breedLogo from "../../images/breedLogo.jpg";

export class LandingPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <button>
          <Link to='/home'>Breeds App</Link>
        </button>
        <img src={breedLogo} alt='logo' />
      </div>
    );
  }
}
