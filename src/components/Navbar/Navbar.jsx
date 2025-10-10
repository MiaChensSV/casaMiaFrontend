import React, { Component } from "react";
import { Link, useLocation , useNavigate  } from "react-router-dom";
import { getMenuItems } from "./MenuItems";
import { Helmet } from "react-helmet-async";
import "./NavbarStyles.css";

function NavbarWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const isCasaMia = location.pathname.startsWith("/casa-mia");
  const isCasaStella = location.pathname.startsWith("/casa-stella");
  const pathRoot = location.pathname.split("/")[1];

  let title = "Vacation Nerja";

  if (path.startsWith("/casa-mia")) {
    title = "Casa Mia | Vacation Nerja";
  } else if (path.startsWith("/casa-stella")) {
    title = "Casa Stella | Vacation Nerja";
  } else if (path === "/" || path === "") {
    title = "Casa Mia | Casa Stella | Vacation Nerja";
  } 

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
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${title} - Book your stay in Nerja.`} />
      </Helmet>
      <Navbar
        location={location}
        pathRoot={pathRoot}
        navigate={navigate} 
      />
    </>
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
    const pathname = this.props.location.pathname;

    // exact for "/", prefix for others (with trailing-slash normalization)
    const isActivePath = (href) => {
      if (!href) return false;
      const a = href.replace(/\/+$/, "");        // "/casa-mia/price/" -> "/casa-mia/price"
      const p = pathname.replace(/\/+$/, "");
      if (a === "" || a === "/") return p === "/";        // ✅ Home must be exactly "/"
      return p === a || p.startsWith(a + "/");            // ✅ section + children
    };
    // 🧠 Load stored apartment if not currently on /casa-mia or /casa-stella
    const storedApartment = localStorage.getItem("selectedApartment");

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
    if (pathRoot === "casa-mia") {
        logoText = "Casa Mia";
      } else if (pathRoot === "casa-stella") {
        logoText = "Casa Stella";
      } else {
        // 👇 Show both when no apartment selected
        logoText = (
          <>
            <Link to="/casa-mia/apartment" className="nav-apartment-link">
              Casa Mia
            </Link>
            {" | "}
            <Link to="/casa-stella/apartment" className="nav-apartment-link">
              Casa Stella
            </Link>
          </>
        );
  }

    const showBookButton = true;

    return (
      <>
        <nav className="NavbarItems">
            <div className={`navbar-logo ${showBookButton ? "hidden" : ""}`}>
              <Link to="/casa-mia/apartment" className="nav-apartment-link">Casa Mia</Link>
              {" | "}
              <Link to="/casa-stella/apartment" className="nav-apartment-link">Casa Stella</Link>
            </div>


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

              const activeSelf = isActivePath(targetUrl);

              if (item.dropdown) {
                const parentActive = activeSelf || item.dropdown.some((si) => isActivePath(si.url));

                // Normal menu items
                return (
                  <li key={index} className="nav-item dropdown">
                    {item.url ? (
                      <Link
                        to={targetUrl}
                        className={`${item.cName} ${parentActive ? "active" : ""}`}
                        onClick={() => this.setState({ clicked: false })}
                      >
                        <i className={item.icon}></i>
                        {item.title}
                      </Link>
                    ) : (
                      <span className={`${item.cName} ${parentActive ? "active" : ""}`}>
                        <i className={item.icon}></i>
                        {item.title}
                      </span>
                    )}
                  <ul className="dropdown-menu">
                    {item.dropdown.map((subItem, subIndex) => {
                     const subActive = isActivePath(subItem.url);
                      return (
                        <li key={subIndex}>
                          <Link
                            className={`${subItem.cName} ${subActive ? "active" : ""}`}
                            to={subItem.url}
                            onClick={() => this.setState({ clicked: false })}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <Link
                    className={`${item.cName} ${activeSelf ? "active" : ""}`}
                    to={targetUrl}
                    onClick={() => this.setState({ clicked: false })}
                  >
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
