import { useState } from "react";

import MainSlider from "./components/MainSlider/MainSlider";

import "./App.css";

import logoUrl from "./assets/logo.svg";
import homeImageUrl from "./assets/home.png";

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="app-container">
      <nav>
        <button onClick={() => setCurrentSlideIndex(0)} className="home-button">
          <img src={homeImageUrl} alt="home, project" />
        </button>
      </nav>
      <main>
        <MainSlider
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
        ></MainSlider>
      </main>
      <footer>
        <img src={logoUrl} alt="onpoint logo" />
      </footer>
    </div>
  );
}

export default App;
