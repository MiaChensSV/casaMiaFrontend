import React, { Component } from "react";
import { Link, useLocation  } from "react-router-dom";
import { getMenuItems } from "./MenuItems";
import "./NavbarStyles.css";

function NavbarWrapper() {
  const location = useLocation();
  const isCasaMia = location.pathname.startsWith("/casa-mia");
  const isCasaStella = location.pathname.startsWith("/casa-stella");
  const apartmentSelected = isCasaMia || isCasaStella;
  const pathRoot = location.pathname.split("/")[1];
  
  return (
      <Navbar
        location={location}
        pathRoot={pathRoot}
        apartmentSelected={apartmentSelected}
      />
    );
}

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { pathRoot, apartmentSelected } = this.props;
    // Determine apartment from URL root (e.g. "casa-mia" or "casa-stella")
    
    const isApartmentRoot = pathRoot === "casa-mia" || pathRoot === "casa-stella";
    const basePath = isApartmentRoot ? `/${pathRoot}` : "";

     // Determine the logo text dynamically
    let logoText = ""; // default
    if (pathRoot === "casa-stella") logoText = "Casa Stella";

    const menu = apartmentSelected
      ? getMenuItems("apartment")
      : getMenuItems("home");

    return (
      <nav className="NavbarItems">
         <Link
            className="navbar-logo"
            to={
              pathRoot === "casa-mia"
                ? "/casa-mia/apartment"
                : pathRoot === "casa-stella"
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

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menu.map((item, index) => {
             // For Apartment / Price / Photos, prepend basePath if inside casa-mia or casa-stella
            let targetUrl = item.url;
            if (isApartmentRoot && ["/apartment", "/price", "/photos"].includes(item.url)) {
              targetUrl = `${basePath}${item.url}`; // e.g. /casa-mia/apartment
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
      </nav>
    );
  }
}

// // // 👇 Wrap with location provider
// export default function NavbarWithLocation(props) {
//   const location = useLocation();
//   return <Navbar {...props} location={location} />;
// }

export default NavbarWrapper;
