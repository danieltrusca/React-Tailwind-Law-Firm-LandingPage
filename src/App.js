import React from "react";

// import components
// import Header from "./components/Header";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <div className="h-[2000px]"></div>
    </>
  );
};

export default App;
