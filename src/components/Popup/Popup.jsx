import { useEffect, useState } from "react";
import closeIconUrl from "../../assets/close.png";
import "./Popup.css";

function Popup({ shown, setPopupShown, zIndex }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const popupSlides = [];

  popupSlides.push(
    <>
      <div className="popup-slide-item">
        <h3>01</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="popup-slide-item">
        <h3>02</h3>
        <p>Faucibus pulvinar elementum integer enim</p>
      </div>
      <div className="popup-slide-item">
        <h3>03</h3>
        <p>Faucibus pulvinar elementum integer enim</p>
      </div>
    </>
  );

  popupSlides.push(
    <>
      <div className="popup-slide-item">
        <h3>04</h3>
        <p>Mi bibendum neque egestas congue quisque egestas diam</p>
      </div>
      <div className="popup-slide-item">
        <h3>05</h3>
        <p>Venenatis lectus magna fringilla urna</p>
      </div>
      <div className="popup-slide-item">
        <h3>06</h3>
        <p>Venenatis lectus magna fringilla urna</p>
      </div>
    </>
  );

  const changeIndex = (newIndex) => {
    const slideContainer = document.querySelector(".popup-slide");

    slideContainer.classList.add("opaque");
    setTimeout(() => {
      setCurrentSlideIndex(newIndex);
      slideContainer.classList.remove("opaque");
    }, 100);
  };

  return (
    <div className={"overlay " + (shown ? "shown" : "")}>
      <div className="popup-container">
        <button onClick={() => setPopupShown(false)} className="close-popup">
          <img src={closeIconUrl} alt="close" />
        </button>
        <p className="subheading">Преимущества</p>
        <h2>
          BREND<strong>XY</strong>
        </h2>
        <div className="popup-slider">
          <div className="popup-slide">{popupSlides[currentSlideIndex]}</div>
          <div className="slider-controls">
            <button
              onClick={() => {
                const newIndex = Math.max(0, currentSlideIndex - 1);
                changeIndex(newIndex);
              }}
              className="left-arrow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>chevron-left</title>
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
            </button>
            {popupSlides.map((slide, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    changeIndex(index);
                  }}
                  className={
                    "slider-dot" +
                    (index === currentSlideIndex ? " current" : "")
                  }
                ></button>
              );
            })}
            <button
              onClick={() => {
                const newIndex = Math.min(
                  popupSlides.length - 1,
                  currentSlideIndex + 1
                );
                changeIndex(newIndex);
              }}
              className="right-arrow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>chevron-right</title>
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
