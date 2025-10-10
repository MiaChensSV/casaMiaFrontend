import HomeHero from "../components/Hero/HomeHero";
import AboutNerja from "../components/Nerja/Nerja";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/nerja1.jpg";

function Nerja() {
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Nerja, Costa del Sol"
        btnClass="hide"
      />
      <AboutNerja />
      <Footer />
    </>
  );
}

export default Nerja;
