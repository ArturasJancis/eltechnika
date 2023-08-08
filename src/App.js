import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import HomeFeature from "./components/HomeFeature";
import HomeStats from "./components/HomeStats";
import ProductsPage from "./components/ProductsPage";
import News from "./components/News";
import Partners from "./components/Partners";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeFeature />
      <HomeStats />
      <ProductsPage />
      <News />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;