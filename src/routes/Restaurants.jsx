import RestaurantTips from "../components/RestaurantTips/RestaurantTips";
import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/tapas-casares.jpg";
import Footer from "../components/Footer/Footer";

function Restaurants() {
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        btnClass="hide"
        title="Restaurants Tips"
      />
      <RestaurantTips />
      <Footer />
    </>
  );
}

export default Restaurants;
