import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import OurStory from "./Components/OurStory";
import Academy from "./Components/Academy";
import QualityGolf from "./Components/QualityGolf";
import Control from "./Components/Control";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="relative m-3 bg-neutral-50">
        <Navbar />
        <Hero />
        <OurStory />
        <Academy />
        <QualityGolf />
        <Control />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default App;
