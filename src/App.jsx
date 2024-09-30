import { useState } from "react";

import HeroSlide from "./components/HeroSlide/HeroSlide";
import DescriptionSlide from "./components/DescriptionSlide/DesciprtionSlide";
import ProductSlide from "./components/ProductSlide/ProductSlide";
import "./App.css";

import logoUrl from "./assets/logo.svg";
import homeImageUrl from "./assets/home.png";

function App() {
  return (
    <div className="app-container">
      <nav>
        <button className="home-button">
          <img src={homeImageUrl} alt="home, project" />
        </button>
      </nav>
      <main>
        <ProductSlide></ProductSlide>
        {/* <DescriptionSlide animated={true}></DescriptionSlide> */}
      </main>
      <footer>
        <img src={logoUrl} alt="onpoint logo" />
      </footer>
    </div>
  );
}

export default App;
