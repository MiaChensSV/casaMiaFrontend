import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/Running.jpg";
import Footer from "../components/Footer/Footer";
import DayTrips from "../components/DayTrips/DayTrips";

function Excursions() {
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Excursions"
        btnClass="hide"
      />
      <DayTrips />
      <Footer />
    </>
  );
}

export default Excursions;
