import { useState } from "react";
import "./App.css";
import logoUrl from "./assets/logo.svg";
import homeImageUrl from "./assets/home.png";

function App() {
  return (
    <div className="main-container">
      <nav>
        <button className="home-button">
          <img src={homeImageUrl} alt="home, project" />
        </button>
      </nav>
      <main></main>
      <footer>
        <img src={logoUrl} alt="onpoint logo" />
      </footer>
    </div>
  );
}

export default App;
