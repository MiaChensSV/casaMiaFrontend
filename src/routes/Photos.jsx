import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/burriana.jpg";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import ScrollToTop from "../util/ScrollToTop";
import { useParams } from "react-router-dom";
import { apartmentImages } from "../components/Data/ImageData";

function Photos() {
  const { apartmentId } = useParams(); // "casa-mia" or "casa-stella"
  const images = apartmentImages[apartmentId] || [];
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Photos"
        btnClass="hide"
      />
      <Gallery images={images} />
      <Footer />
    </>
  );
}

export default Photos;
