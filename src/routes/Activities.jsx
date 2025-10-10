import ActivityList from "../components/Activities/Activities";
import HomeHero from "../components/Hero/HomeHero";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/activities.jpg";
function Activities() {
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        btnClass="hide"
        title="Activities"
      />
      <ActivityList />
      <Footer />
    </>
  );
}

export default Activities;
