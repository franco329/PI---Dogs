import React from "react";
import logoBreed from "../../images/logo-breed.JPG";
import dogLogo from "../../images/dog.jpg";
import gitHub from "../../images/github.ico";
import linkedin from "../../images/linkedin.ico";

export const LandingPage = () => {
  return (
    <>
      <img src={logoBreed} alt='breedLogo' className='lanImg' />
      <div className='circle'></div>
      <div className='content'>
        <div className='textBox'>
          <h2>
            <span>Api Dogs</span> by Franco Kuperman
          </h2>
          <p>
            Este es mi proyecto individual requerido en el Bootcamp de Henry.
          </p>
          <a href='http://localhost:3000/home'>Ingresar</a>
        </div>
        <div className='imgBox'>
          <img src={dogLogo} className='dog' alt='dogLogo'></img>
        </div>
      </div>
      <ul className='sci'>
        <li>
          <a href='http://www.github.com/franco329'>
            <img src={gitHub} alt='gitHub' className='gitHub' />
          </a>
        </li>
        <li>
          <a
            className='linkedin'
            href='https://www.linkedin.com/in/franco-kuperman'
          >
            <img src={linkedin} alt='linkedin' />
          </a>
        </li>
      </ul>
    </>
  );
};
