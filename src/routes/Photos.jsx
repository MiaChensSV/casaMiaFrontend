import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/burriana.jpg";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import { useParams } from "react-router-dom";
import { apartmentImages } from "../components/Data/ImageData";

function Photos() {
  const { apartmentId } = useParams(); // "casa-mia" or "casa-stella"
  const images = apartmentImages[apartmentId] || [];

  const bannerName =
    apartmentId === "casa-mia"
      ? "Casa Mia Photos"
      : apartmentId === "casa-stella"
      ? "Casa Stella Photos"
      : "Photos";
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title={bannerName}
        btnClass="hide"
      />
      <Gallery images={images} />
      <Footer />
    </>
  );
}

export default Photos;
