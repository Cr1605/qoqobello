import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slide1 from "./slide/Screen1";
import Slide2 from "./slide/Screen2";
import Slide3 from "./slide/Screen3";
import Slide4 from "./slide/Screen4";
import arrowLeft from "../../asset/arrow-left.png";
import arrowRight from "../../asset/arrow-right.png";
import arrowRightLast from "../../asset/arrow-right-last.png";
import "./index.css";

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visiable, setVisiable] = useState(false);
  const [valueCheckbox, setValueCheckbox] = useState(false);
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];
  const dots = Array.from({ length: slides.length }, (_, i) => i);
  const navigate = useNavigate();

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? prevSlide : prevSlide + 1
    );
    if (currentSlide === 2) {
      setVisiable(true);
    } else {
      setVisiable(false);
    }
    if (currentSlide === 3) {
       navigate("/bids");
    }
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? prevSlide : prevSlide - 1
    );
    setVisiable(false);
    setValueCheckbox(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleChangeCheckbox = (value) => {
    setValueCheckbox(value);
  };

  return (
    <div className="main">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide active" : "slide"}
        >
          {slide}
        </div>
      ))}

      {currentSlide === 3 && (
        <div className="check-box">
          <input
            type="checkbox"
            onChange={(e) => {
              handleChangeCheckbox(e.target.checked);
            }}
          />
          <p>J’accepte les conditions de l’application</p>
        </div>
      )}

      <div className={`button-slide ${visiable ? "last" : ""}`}>
        <button
          className={`${visiable ? "btn-left-last" : "btn-left"}`}
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
        >
          <img src={arrowLeft} alt="arrow-left" />
        </button>
        <div className={`dots ${visiable ? "hidden" : ""}`}>
          {dots.map((dotIndex) => (
            <span
              key={dotIndex}
              className={dotIndex === currentSlide ? "dot active" : "dot"}
              onClick={() => goToSlide(dotIndex)}
            />
          ))}
        </div>
        <button
          className={`${visiable ? "btn-right-last" : "btn-right"} ${
            valueCheckbox ? "checked" : ""
          }`}
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1 && !valueCheckbox}
        >
          {visiable ? "Je confirme" : ""}
          <img
            src={
              currentSlide != 3 || valueCheckbox ? arrowRight : arrowRightLast
            }
            alt="arrow-right"
          />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
