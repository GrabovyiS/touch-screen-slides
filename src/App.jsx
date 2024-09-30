import { useState } from "react";

import MainSlider from "./components/MainSlider/MainSlider";

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
        <MainSlider></MainSlider>
      </main>
      <footer>
        <img src={logoUrl} alt="onpoint logo" />
      </footer>
    </div>
  );
}

export default App;
