import Beaches from "../components/Beaches/Beaches";
import HomeHero from "../components/Hero/HomeHero";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/burriana.jpg";

function NerjaBeaches() {
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Beaches"
        btnClass="hide"
      />
      <Beaches />
      <Footer />
    </>
  );
}

export default NerjaBeaches;
