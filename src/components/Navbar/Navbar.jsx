import React, { Component } from "react";
import { Link, useLocation , useNavigate  } from "react-router-dom";
import { getMenuItems } from "./MenuItems";
import "./NavbarStyles.css";

function NavbarWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCasaMia = location.pathname.startsWith("/casa-mia");
  const isCasaStella = location.pathname.startsWith("/casa-stella");
  const pathRoot = location.pathname.split("/")[1];
  
   // 📝 Remember selected apartment in localStorage
  React.useEffect(() => {
    if (isCasaMia) {
      localStorage.setItem("selectedApartment", "casa-mia");
    } else if (isCasaStella) {
      localStorage.setItem("selectedApartment", "casa-stella");
    }
  }, [pathRoot,isCasaMia,isCasaStella]);
  // 🧹 Clear apartment selection when back on home page
  React.useEffect(() => {
    if (location.pathname === "/") {
      localStorage.removeItem("selectedApartment");
    }
  }, [location.pathname]);

  return (
    <Navbar
      location={location}
      pathRoot={pathRoot}
      navigate={navigate} 
    />
  );
}

class Navbar extends Component {
  state = { clicked: false, showBookingBanner: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  openBookingBanner = () => {
    this.setState({ showBookingBanner: true });
  };

  closeBookingBanner = () => {
    this.setState({ showBookingBanner: false });
  };

  handleApartmentSelect = (apartment) => {
    this.closeBookingBanner();
    this.props.navigate(`/${apartment}/contact`);
  };
  render() {
    const { pathRoot } = this.props;

    // 🧠 Load stored apartment if not currently on /casa-mia or /casa-stella
    const storedApartment = localStorage.getItem("selectedApartment");
    const effectiveRoot =
      pathRoot === "casa-mia" || pathRoot === "casa-stella"
        ? pathRoot
        : storedApartment;

    // Determine apartment from URL root (e.g. "casa-mia" or "casa-stella")
    
    const isApartmentRoot = pathRoot === "casa-mia" || pathRoot === "casa-stella";
    let basePath = isApartmentRoot ? `/${pathRoot}` : "";

    // Determine if this is a shared Nerja route
    const sharedPages = ["/activities", "/excursions", "/restaurants", "/beaches"];
    const isSharedPage = sharedPages.some((p) => this.props.location.pathname.startsWith(p));
    // If on shared page but have stored apartment, use that as basePath
    if (!isApartmentRoot && isSharedPage && storedApartment) {
      basePath = `/${storedApartment}`;
    }

    // Build the menu based on either current or stored apartment
    const menu =
      isApartmentRoot || (storedApartment && isSharedPage)
        ? getMenuItems("apartment")
        : getMenuItems("home");
      
     // Determine the logo text dynamically
    let logoText = "";
    if (pathRoot === "casa-mia") logoText = "Casa Mia";
    if (pathRoot === "casa-stella") logoText = "Casa Stella";

    const showBookButton = true;

    return (
      <>
        <nav className="NavbarItems">
            <Link
            className={`navbar-logo ${showBookButton ? "hidden" : ""}`}
            to={
              effectiveRoot === "casa-mia"
                ? "/casa-mia/apartment"
                : effectiveRoot === "casa-stella"
                ? "/casa-stella/apartment"
                : "/"
            }
          >
            {logoText}
          </Link>
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
         {/* mobile title + book (always render; title is optional) */}
        <div className="mobile-title-container">
          {logoText && <span className="mobile-title">{logoText}</span>}
          <button className="mobile-book-btn" onClick={this.openBookingBanner}>
            Book
          </button>
        </div>
          <ul className={
            (this.state.clicked ? "nav-menu active" : "nav-menu") +
            (showBookButton ? " nav-center" : "")
          }>
            {menu.map((item, index) => {
              let targetUrl = item.url;
              if (
                    (isApartmentRoot || (storedApartment && isSharedPage)) &&
                    [
                      "/apartment",
                      "/price",
                      "/photos",
                      "/contact",
                      "/activities",
                      "/excursions",
                      "/restaurants",
                      "/beaches",
                    ].includes(item.url)
                  ) {
                    targetUrl = `${basePath}${item.url}`;
                  }

              if (item.dropdown) {
                // Normal menu items
                return (
                  <li key={index} className="nav-item dropdown">
                    <span className={item.cName}>
                      <i className={item.icon}></i>
                      {item.title}
                    </span>
                    <ul className="dropdown-menu">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link className={subItem.cName} to={subItem.url}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <Link className={item.cName} to={targetUrl}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* 📌 Book Button — only shows if no apartment selected */}
              {showBookButton && (
                <li className="nav-book-btn" onClick={this.openBookingBanner}>
                  <button>Book</button>
                </li>
              )}
        </nav>
       {/* 🧭 Booking Banner */}
        {this.state.showBookingBanner && (
          <div className="booking-banner">
            <div className="banner-content">
              <h3>Select Apartment</h3>
              <div className="banner-buttons">
                <button onClick={() => this.handleApartmentSelect("casa-mia")}>
                  Casa Mia
                </button>
                <button onClick={() => this.handleApartmentSelect("casa-stella")}>
                  Casa Stella
                </button>
              </div>
              <button className="close-banner" onClick={this.closeBookingBanner}>
                ✕
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

// // // 👇 Wrap with location provider
// export default function NavbarWithLocation(props) {
//   const location = useLocation();
//   return <Navbar {...props} location={location} />;
// }

export default NavbarWrapper;
