import "./FooterStyles.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isCasaMia = pathname.startsWith("/casa-mia");
  const isCasaStella = pathname.startsWith("/casa-stella");
  const isDefault = !isCasaMia && !isCasaStella;

   // Dynamic data based on apartment
  const apartmentName = isCasaStella ? "Casa Stella" : "Casa Mia";
  const basePath = isCasaStella ? "/casa-stella" : "/casa-mia";
  const email = isCasaStella
    ? "casastellaguests@gmail.com"
    : "casamiaguests@gmail.com";

  const facebookLink = isCasaStella
    ? "https://www.facebook.com/profile.php?id=61552953946352" // TODO CASA STELLA FACEBOOK WEBSITE NEEDS CHANGE
    : "https://www.facebook.com/profile.php?id=61552953946352";

  const license = isCasaStella ? "VUT/MA/08181" : "VUT/MA/75214"; // replace with real Stella license

  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1 className="footer-logo-multi">
              <a href="/casa-mia/apartment" className="footer-link">
                Casa Mia
              </a>{" "}
              /{" "}
              <a href="/casa-stella/apartment" className="footer-link">
                Casa Stella
              </a>
            </h1>
          </div>
          <div>
            {/* should the number be hidden? */}
            <a href="https://api.whatsapp.com/send?phone=46760666658">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          <a
            href={
              isDefault
                ? "https://www.facebook.com/profile.php?id=61552953946352"
                : facebookLink
            }
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          </div>
        </div>

        {/* Non-default footer sections */}
      {!isDefault && (
        <div className="bottom">
          <div>
            <h4>About Apartment</h4>
            <a href={`${basePath}/apartment`}>Apartment Details</a>
            <a href={`${basePath}/price`}>Availabilities</a>
            <a href={`${basePath}/price`}>Price</a>
          </div>

          <div>
            <h4>Nerja</h4>
            <a href="/activities">Activities</a>
            <a href="/excursions">Excursions</a>
            <a href="/restaurants">Restaurants</a>
          </div>

          <div className="contact-footer">
            <h4>Contact Us</h4>
            <div className="contact">
              <p className="title">Email: </p>
              <a
                href={`mailto:${email}?cc=miachensv@gmail.com&subject=Request%20from%20VacationNerja`}
              >
                {email}
              </a>
            </div>
            <div className="contact">
              <p className="title">Facebook: </p>
              <a href={facebookLink} target="_blank" rel="noreferrer">
                {apartmentName}
              </a>
            </div>
            <div className="contact">
              <p className="title">Tourist License: {license}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Footer;
