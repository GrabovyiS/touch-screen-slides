import "./MainSlider.css";
import { useEffect, useState } from "react";
import HeroSlide from "../HeroSlide/HeroSlide";
import DescriptionSlide from "../DescriptionSlide/DescriptionSlide";
import ProductSlide from "../ProductSlide/ProductSlide";

function MainSlider({}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const count = 3;
  const widthVW = count * 100;

  useEffect(() => {
    const mainSlider = document.querySelector(".main-slider");
    mainSlider.style.transform = `translateX(${-currentSlideIndex * 100}vw)`;
  }, [currentSlideIndex]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].pageX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;

    if (Math.abs(touchEnd - touchStart) > 100) {
      if (touchStart < touchEnd) {
        setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1));
      } else {
        setCurrentSlideIndex(Math.min(count - 1, currentSlideIndex + 1));
      }
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="main-slider-window"
    >
      <div style={{ width: widthVW + "vw" }} className="main-slider">
        <HeroSlide
          onHeroButtonClick={() => setCurrentSlideIndex(1)}
        ></HeroSlide>
        <DescriptionSlide animated={true}></DescriptionSlide>
        <ProductSlide></ProductSlide>
      </div>
    </div>
  );
}

export default MainSlider;
