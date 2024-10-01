import "./ProductSlide.css";
import calendarIconUrl from "../../assets/calendar-icon.png";
import plateIconUrl from "../../assets/plate-icon.png";
import bottleUrl from "../../assets/bottle.png";
import blueSmallBubbleUrl from "../../assets/blue-small.png";
import blueBigBubbleUrl from "../../assets/blue-big.png";
import pinkBubbleUrl from "../../assets/pink.png";
import redBubbleUrl from "../../assets/red.png";
import Popup from "../Popup/Popup";
import CTAButton from "../CTAButton/CTAButton";
import { useState } from "react";

function ProductSlide() {
  const [popupShown, setPopupShown] = useState(false);

  return (
    <div className="slide product-slide">
      <Popup shown={popupShown} setPopupShown={setPopupShown}></Popup>
      <div className="content">
        <p className="subheading">Ключевое сообщение</p>
        <h2 className="miryad-heading">BRENDXY</h2>
        <div className="cards">
          <div className="card left-card">
            <img
              src={plateIconUrl}
              alt="plate with a knife and a fork"
              className="icon"
            />
            <p>
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </p>
          </div>
          <div className="card right-card">
            <img src={calendarIconUrl} alt="calendar" className="icon" />
            <p>
              A arcu <br />
              cursus vitae
            </p>
          </div>
          <CTAButton
            onClick={() => {
              setPopupShown(true);
            }}
            type={"plus"}
            text="Подробнее"
          ></CTAButton>
        </div>
      </div>

      <img src={redBubbleUrl} alt="" className="redBubble" />
      <img src={blueSmallBubbleUrl} alt="" className="blueSmallBubble1" />
      <img src={blueSmallBubbleUrl} alt="" className="blueSmallBubble2" />
      <img src={pinkBubbleUrl} alt="" className="pinkBubble2" />

      <img src={bottleUrl} alt="spray bottle" className="bottle" />

      <img src={blueSmallBubbleUrl} alt="" className="blueSmallBubble3" />
      <img src={blueSmallBubbleUrl} alt="" className="blueSmallBubble4" />
      <img src={pinkBubbleUrl} alt="" className="pinkBubble1" />
      <img src={blueBigBubbleUrl} alt="" className="blueBig" />
    </div>
  );
}

export default ProductSlide;
