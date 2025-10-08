import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Apartment from "./routes/Apartment";
import Nerja from "./routes/Nerja";
import AvailabilityAndPrice from "./routes/AvailabilityAndPrice";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Pictures from "./routes/Photos";
import NerjaBeaches from "./routes/NerjaBeaches";
import Activities from "./routes/Activities";
import Restaurants from "./routes/Restaurants";
import Excursions from "./routes/Excursions";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    // <div className="App">
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/nerja" element={<Nerja />} />
    //     <Route path="/apartment" element={<Apartment />} />
    //     <Route path="/price" element={<AvailabilityAndPrice />} />
    //     <Route path="/photos" element={<Pictures />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/beaches" element={<NerjaBeaches />}></Route>
    //     <Route path="/activities" element={<Activities />}></Route>
    //     <Route path="/restaurants" element={<Restaurants />}></Route>
    //     <Route path="/excursions" element={<Excursions />}></Route>
    //   </Routes>
    // </div>

      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ✅ Dynamic apartment pages */}
          <Route path="/:apartmentId" element={<Home />} />
          <Route path="/:apartmentId/apartment" element={<Apartment />} />
          <Route path="/:apartmentId/price" element={<AvailabilityAndPrice />} />
          <Route path="/:apartmentId/photos" element={<Pictures />} />

          {/* ✅ Keep existing general routes */}
          <Route path="/nerja" element={<Nerja />} />
          <Route path="/beaches" element={<NerjaBeaches />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/excursions" element={<Excursions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
