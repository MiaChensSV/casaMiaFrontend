import HomeHero from "../components/Hero/HomeHero";
import Nerja from "../assets/nerja-balcon-view.jpg";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form"
import { useParams } from "react-router-dom";                
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Pool from "../assets/pool4.jpg";
import Pool2 from "../assets/pool-1.jpg";
import Pool3 from "../assets/pool2.jpg";
import Pool4 from "../assets/pool3.jpg";

import Mia1 from "../assets/casa-mia/balcony-2.jpg";
import Mia2 from "../assets/casa-mia/bedroom1.jpg";
import Mia3 from "../assets/casa-mia/view-from-bedroom1.jpg";
import Mia4 from "../assets/casa-mia/bedroom2-1.jpg";
import Mia5 from "../assets/casa-mia/kitchen.jpg";
import Mia6 from "../assets/casa-mia/livingroom.jpg";
import Mia7 from "../assets/casa-mia/bathroom.jpg";
import Mia8 from "../assets/casa-mia/apartment.jpg";
import Mia9 from "../assets/casa-mia/balcony.jpg";
import Mia10 from "../assets/casa-mia/bedroom1-2.jpg";
import Mia11 from "../assets/casa-mia/bedroom2-2.jpg";


// 🏡 Casa Stella Balcony
import Balcony1 from "../assets/casa-stella/balcony1.jpg";
import Balcony2 from "../assets/casa-stella/balcony2.jpg";
import Balcony3 from "../assets/casa-stella/balcony3.jpg";

// 🚿 Bathroom
import Bathroom1 from "../assets/casa-stella/bathroom1.jpg";
import Bathroom2 from "../assets/casa-stella/bathroom2.jpg";
import Bathroom3 from "../assets/casa-stella/bathroom3.jpg";
import Bathroom4 from "../assets/casa-stella/bathroom4.jpg";
import Bathroom5 from "../assets/casa-stella/bathroom5.jpg";
import Bathroom6 from "../assets/casa-stella/bathroom6.jpg";
import Bathroom7 from "../assets/casa-stella/bathroom7.jpg";
import Bathroom8 from "../assets/casa-stella/bathroom8.jpg";

// 👩‍🍳 Kitchen
import Kitchen1 from "../assets/casa-stella/kitchen1.jpg";
import Kitchen2 from "../assets/casa-stella/kitchen2.jpg";
import Kitchen3 from "../assets/casa-stella/kitchen3.jpg";
import Kitchen4 from "../assets/casa-stella/kitchen4.jpg";
import Kitchen5 from "../assets/casa-stella/kitchen5.jpg";
import Kitchen6 from "../assets/casa-stella/kitchen6.jpg";
import Kitchen7 from "../assets/casa-stella/kitchen7.jpg";
import Kitchen8 from "../assets/casa-stella/kitchen8.jpg";
import Kitchen9 from "../assets/casa-stella/kitchen9.jpg";

// 🛋️ Living Room
import Livingroom1 from "../assets/casa-stella/livingroom1.jpg";
import Livingroom2 from "../assets/casa-stella/livingroom2.jpg";
import Livingroom3 from "../assets/casa-stella/livingroom3.jpg";
import Livingroom4 from "../assets/casa-stella/livingroom4.jpg";
import Livingroom5 from "../assets/casa-stella/livingroom5.jpg";
import Livingroom6 from "../assets/casa-stella/livingroom6.jpg";
import Livingroom7 from "../assets/casa-stella/livingroom7.jpg";

// 🛏️ Bedrooms
import MainBedroom1 from "../assets/casa-stella/main-bedroom1.jpg";
import MainBedroom2 from "../assets/casa-stella/main-bedroom2.jpg";
import MainBedroom3 from "../assets/casa-stella/main-bedroom3.jpg";

import SecondBedroom1 from "../assets/casa-stella/second-bedroom1.jpg";
import SecondBedroom2 from "../assets/casa-stella/second-bedroom2.jpg";
import SecondBedroom3 from "../assets/casa-stella/second-bedroom3.jpg";



function Book() {
const { apartmentId } = useParams();

  const apartmentName =
    apartmentId === "casa-mia"
      ? "Casa Mia"
      : apartmentId === "casa-stella"
      ? "Casa Stella"
      : "Book";

  const galleryImages =
    apartmentId === "casa-mia"
      ? [Mia1, Mia2, Mia3, Mia4 ,Mia5, Mia6, Mia7, Mia8, Mia9, Mia10, Mia11,Pool,Pool2,Pool3,Pool4]
      : apartmentId === "casa-stella"
      ? [Balcony1, Balcony2, Balcony3,
  Bathroom1, Bathroom2, Bathroom3, Bathroom4,Bathroom5,Bathroom6,Bathroom7,Bathroom8,
  Kitchen1, Kitchen2, Kitchen3, Kitchen4, Kitchen5, Kitchen6, Kitchen7, Kitchen8, Kitchen9,
  Livingroom1, Livingroom2, Livingroom3, Livingroom4, Livingroom5, Livingroom6, Livingroom7,
  MainBedroom1, MainBedroom2, MainBedroom3,
  SecondBedroom1, SecondBedroom2, SecondBedroom3,Pool,Pool2,Pool3,Pool4]
      : [];
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={Nerja}
        title="Book Your Stay in Nerja"
        btnClass="hide"
      />

       {/* 🖼️ Gallery Section */}
     {galleryImages.length > 0 && (
    <section className="apartment-carousel">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}              // ✅ enable autoplay
        autoplaySpeed={2000}         // ✅ interval between slides (ms)
        pauseOnHover={true}          // optional: pause if user hovers
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
          }
        ]}
      >
      {galleryImages.map((img, index) => (
        <div key={index} className="carousel-item">
          <img src={img} alt={`${apartmentName} ${index + 1}`} />
        </div>
      ))}
    </Slider>
  </section>
)}

      <Form />
      <Footer />
    </>
  );
}

export default Book;
