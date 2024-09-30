import "./HeroSlide.css";
import cheetoUrl from "../../assets/cheeto.png";
import spongeUrl from "../../assets/sponge-bakti.png";
import spikeyUrl from "../../assets/spikey-bakti.png";
import spermUrl from "../../assets/sperm.png";
import bigUrl from "../../assets/big-bakti.png";
import CTAButton from "../CTAButton/CTAButton";

function HeroSlide({ onHeroButtonClick }) {
  return (
    <div className="slide hero-slide">
      <img src={spermUrl} alt="" className="sperm-blur" />
      <img src={spongeUrl} alt="" className="top-blur" />
      <img src={spongeUrl} alt="" className="bottom-blur" />
      <img src={cheetoUrl} alt="" className="cheeto" />
      <img src={spongeUrl} alt="" className="bottom-sponge" />
      <img src={spongeUrl} alt="" className="top-sponge" />
      <div className="content">
        <p className="subheading">Привет,</p>
        <h1>
          Это НЕ коммерческое задание{" "}
          <span className="button-wrapper">
            <CTAButton
              onClick={onHeroButtonClick}
              type="arrow"
              text="Что дальше?"
            ></CTAButton>
          </span>
        </h1>
      </div>
      <img src={spermUrl} alt="" className="sperm" />
      <img src={spikeyUrl} alt="" className="spikey" />
      <img src={bigUrl} alt="" className="big" />
    </div>
  );
}

export default HeroSlide;
