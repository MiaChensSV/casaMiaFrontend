import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import Price from "../components/Price/Price";
import Availability from "../components/Calendar/Availability";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/PlayaElChucho.jpg";
import PriceInclude from "../components/RentingInclude/Include";
import Gallery from "../components/Gallery/Gallery";
import ScrollToTop from "../util/ScrollToTop";
import { useParams } from "react-router-dom";
import { apartmentImages } from "../components/Data/ImageData";

function AvailabilityAndPrice() {
  const { apartmentId } = useParams(); // "casa-mia" or "casa-stella"
  const images = apartmentImages[apartmentId] || [];
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Availablity and prices"
        btnClass="hide"
      />
      <PriceInclude />
      <Price />
      <Availability monthsShown={3} />
      <Gallery images={images} />
      <Footer />
    </>
  );
}

export default AvailabilityAndPrice;
