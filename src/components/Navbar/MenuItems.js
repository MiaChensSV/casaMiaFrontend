// src/components/Navbar/MenuItems.js
export const getMenuItems = (mode = "home") => {
  if (mode === "home") {
    return [
      {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: "fa-solid fa-house-user",
      },
      {
        title: "Apartment",
        cName: "nav-links",
        icon: "fa-solid fa-circle-info",
        dropdown: [
          { title: "Casa Mia",    url: "/casa-mia/apartment",    cName: "dropdown-link" },
          { title: "Casa Stella", url: "/casa-stella/apartment", cName: "dropdown-link" },
        ],
      },
      {
        title: "Availability and Price",
        cName: "nav-links",
        icon: "fa-solid fa-magnifying-glass-dollar",
        dropdown: [
          { title: "Casa Mia",    url: "/casa-mia/price",    cName: "dropdown-link" },
          { title: "Casa Stella", url: "/casa-stella/price", cName: "dropdown-link" },
        ],
      },
      {
        title: "Photos",
        cName: "nav-links",
        icon: "fa-solid fa-image",
        dropdown: [
          { title: "Casa Mia",    url: "/casa-mia/photos",    cName: "dropdown-link" },
          { title: "Casa Stella", url: "/casa-stella/photos", cName: "dropdown-link" },
        ],
      },
      {
        title: "Contact",
        url: "/contact",
        cName: "nav-links",
        icon: "fa-solid fa-address-book",
      },
      {
        title: "Nerja",
        url: "/nerja",
        cName: "nav-links",
        icon: "fa-solid fa-circle-info",
      },
    ];
  }

  // when already inside /casa-mia or /casa-stella
  return [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
      icon: "fa-solid fa-house-user",
    },
    {
      title: "Apartment",
      url: "/apartment", // Navbar will prefix /casa-xxx automatically
      cName: "nav-links",
      icon: "fa-solid fa-circle-info",
    },
    {
      title: "Availability and Price",
      url: "/price",
      cName: "nav-links",
      icon: "fa-solid fa-magnifying-glass-dollar",
    },
    {
      title: "Photos",
      url: "/photos",
      cName: "nav-links",
      icon: "fa-solid fa-image",
    },
    {
      title: "Contact",
      url: "/contact",
      cName: "nav-links",
      icon: "fa-solid fa-address-book",
    },
    {
      title: "Nerja",
      url: "/nerja",
      cName: "nav-links",
      icon: "fa-solid fa-circle-info",
    },
  ];
};
