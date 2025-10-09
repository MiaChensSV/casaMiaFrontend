import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutApartment from "../components/AboutApartment/AboutApartment";
import Footer from "../components/Footer/Footer";
import CasaMiaImg from "../assets/casa-mia/balcony-2.jpg";
import CasaStellaImg from "../assets/casa-stella/balcony2.jpg";
import Map from "../components/Location/Location";
import ScrollToTop from "../util/ScrollToTop";
import { useLocation } from "react-router-dom";

function Apartment() {
  const location = useLocation();
  const isCasaMia = location.pathname.includes("/casa-mia");
  const heroImage = isCasaMia ? CasaMiaImg : CasaStellaImg;
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero cName="hero-apartment" heroImg={heroImage} btnClass="hide" />
      <AboutApartment />
      <Map />
      <Footer />
    </>
  );
}

export default Apartment;
