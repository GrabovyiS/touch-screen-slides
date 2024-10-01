import "./MainSlider.css";
import { useEffect, useState } from "react";
import HeroSlide from "../HeroSlide/HeroSlide";
import DescriptionSlide from "../DescriptionSlide/DescriptionSlide";
import ProductSlide from "../ProductSlide/ProductSlide";

function MainSlider({ currentSlideIndex, setCurrentSlideIndex }) {
  const [touchStart, setTouchStart] = useState(null);
  const [triggerAnimation, setTriggerAnimation] = useState(Math.random());

  const count = 3;
  const widthVW = count * 100;

  useEffect(() => {
    const mainSlider = document.querySelector(".main-slider");
    mainSlider.style.transform = `translateX(${-currentSlideIndex * 100}vw)`;
  }, [currentSlideIndex]);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].pageX);
  };

  const onTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;

    if (Math.abs(touchEnd - touchStart) > 100) {
      if (touchStart < touchEnd) {
        const newIndex = Math.max(0, currentSlideIndex - 1);
        if (newIndex === 1) {
          setTriggerAnimation(Math.random());
        }
        setCurrentSlideIndex(newIndex);
      } else {
        const newIndex = Math.min(count - 1, currentSlideIndex + 1);
        if (newIndex === 1) {
          setTriggerAnimation(Math.random());
        }
        setCurrentSlideIndex(newIndex);
      }
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="main-slider-window"
    >
      <div style={{ width: widthVW + "vw" }} className="main-slider">
        <HeroSlide
          onHeroButtonClick={() => {
            setTriggerAnimation(Math.random());
            setCurrentSlideIndex(1);
          }}
        ></HeroSlide>
        <DescriptionSlide
          key={triggerAnimation}
          animated={true}
        ></DescriptionSlide>
        <ProductSlide></ProductSlide>
      </div>
    </div>
  );
}

export default MainSlider;
