import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/services/Service";
import Feature from "./components/features/Feature";
import Payment from "./components/payments/Payment";
import Video from "./components/Video/Video";
import Security from "./components/Security/Security";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="project">
      <Header />
      <Hero />
      <Portfolio />
      <Service />
      <Feature />
      <Payment />
      <Video />
      <Security />
      <Footer />
    </div>
  );
}

export default App;
