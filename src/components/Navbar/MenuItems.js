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
        cName: "nav-links",
        icon: "fa-solid fa-image",
        dropdown: [
          { title: "Casa Mia",    url: "/casa-mia/contact",    cName: "dropdown-link" },
          { title: "Casa Stella", url: "/casa-stella/contact", cName: "dropdown-link" },
        ],
      },
      {
        title: "Nerja",
        cName: "nav-links",
        icon: "fa-solid fa-circle-info",
        url: "/nerja",
        dropdown: [
          { title: "Activities", url: "/activities", cName: "dropdown-link" },
          { title: "Excursions", url: "/excursions", cName: "dropdown-link" },
          { title: "Restaurants", url: "/restaurants", cName: "dropdown-link" },
          { title: "Beaches", url:"/beaches", cName: "dropdown-link"}
        ],
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
      url: "/apartment",
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
      cName: "nav-links",
      icon: "fa-solid fa-circle-info",
      url: "/nerja",
      dropdown: [
        { title: "Activities", url: "/activities", cName: "dropdown-link" },
        { title: "Excursions", url: "/excursions", cName: "dropdown-link" },
        { title: "Restaurants", url: "/restaurants", cName: "dropdown-link" },
        { title: "Beaches", url:"/beaches", cName: "dropdown-link"}
      ],
    },
  ];
};
