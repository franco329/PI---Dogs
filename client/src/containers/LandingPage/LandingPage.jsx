import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import breedLogo from "./breedLogo.jpg";

export class LandingPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <img src={breedLogo} alt='logo' width={400} />
        <button>
          <Link to='/home'>Breeds App</Link>
        </button>
      </div>
    );
  }
}
