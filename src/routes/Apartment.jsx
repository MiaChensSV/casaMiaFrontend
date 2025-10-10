import HomeHero from "../components/Hero/HomeHero";
import AboutApartment from "../components/AboutApartment/AboutApartment";
import Footer from "../components/Footer/Footer";
import CasaMiaImg from "../assets/casa-mia/balcony-2.jpg";
import CasaStellaImg from "../assets/casa-stella/balcony2.jpg";
import Map from "../components/Location/Location";
import { useLocation } from "react-router-dom";

function Apartment() {
  const location = useLocation();
  const isCasaMia = location.pathname.includes("/casa-mia");
  const heroImage = isCasaMia ? CasaMiaImg : CasaStellaImg;
  return (
    <>
      <HomeHero cName="hero-apartment" heroImg={heroImage} btnClass="hide" />
      <AboutApartment />
      <Map />
      <Footer />
    </>
  );
}

export default Apartment;
