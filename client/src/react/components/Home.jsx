import React from "react";
import BreedCard from "./BreedCard";
import ButtonsHome from "./ButtonsHome";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className='home'>
      <ButtonsHome />
      <BreedCard />
    </section>
  );
};

export default Home;
