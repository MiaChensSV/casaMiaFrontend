import HomeHero from "../components/Hero/HomeHero";
import HomeComponent from "../components/HomeComponent";
import Footer from "../components/Footer/Footer";
import Trip from "../components/WhatToDo/Trip";
import nerja from "../assets/balconyDeEuropa.jpg";

function Home() {
  return (
    <>
      <HomeHero
        cName="hero"
        heroImg={nerja}
        title="Experience the magic of Nerja"
        text="Book with us and discover why it's the Costa del Sol’s best-kept secret."
      />
      <HomeComponent />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
