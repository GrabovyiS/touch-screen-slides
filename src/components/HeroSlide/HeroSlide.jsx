import "./HeroSlide.css";
import cheetoUrl from "../../assets/cheeto.png";
import spongeUrl from "../../assets/sponge-bakti.png";
import spikeyUrl from "../../assets/spikey-bakti.png";
import spermUrl from "../../assets/sperm.png";
import bigUrl from "../../assets/big-bakti.png";
import CTAButton from "../CTAButton/CTAButton";

function HeroSlide() {
  return (
    <div className="slide hero-slide">
      <img src={spermUrl} alt="" className="sperm-blur" />
      <img src={spongeUrl} alt="" className="top-blur" />
      <img src={spongeUrl} alt="" className="bottom-blur" />
      <img src={spermUrl} alt="" className="sperm" />
      <img src={cheetoUrl} alt="" className="cheeto" />
      <img src={spongeUrl} alt="" className="bottom-sponge" />
      <img src={spongeUrl} alt="" className="top-sponge" />
      <img src={spikeyUrl} alt="" className="spikey" />
      <img src={bigUrl} alt="" className="big" />
      <div className="text-container">
        <p className="subheading">Привет,</p>
        <h1>
          Это <b>НЕ</b> коммерческое задание{" "}
          <span className="button-wrapper">
            <CTAButton type="arrow" text="Что дальше?"></CTAButton>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default HeroSlide;
