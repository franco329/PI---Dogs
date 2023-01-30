import React from "react";
import BreedCard from "./BreedCard";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <BreedCard />
      </header>
    </>
  );
};

export default Home;
