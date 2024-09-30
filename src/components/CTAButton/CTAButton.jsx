import "./CTAButton.css";
import arrowUrl from "../../assets/right-arrow.svg";
import plusUrl from "../../assets/plus.svg";

function CTAButton({ type, text, onClick }) {
  return (
    <button onClick={onClick} className="CTAButton">
      {type === "arrow" ? (
        <div className="type-indicator-wrapper">
          <div className="type-indicator">
            <img src={arrowUrl} alt="" />
          </div>
        </div>
      ) : type === "plus" ? (
        <div className="type-indicator-wrapper">
          <div className="type-indicator">
            <img src={plusUrl} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}

      {text}
    </button>
  );
}

export default CTAButton;
