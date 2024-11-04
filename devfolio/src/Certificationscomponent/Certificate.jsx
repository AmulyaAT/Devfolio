import React from "react";
import "./_Certificate.scss";
import "./_Mediacertificate.scss";

export const Certificate = () => {

  const handleNext = () => {
    const items = document.querySelectorAll(".item");
    if (items.length > 0) {
      document.querySelector(".box").appendChild(items[0]);
    }
  };

  const handlePrev = () => {
    const items = document.querySelectorAll(".item");
    if (items.length > 0) {
      document.querySelector(".box").prepend(items[items.length - 1]);
    }
  };

  return (
    <div>
      <h2 className="mainheading">Certifications</h2>
      <div className="body">
      <div className="box">
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Carousel item"
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Carousel item"
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Carousel item"
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Carousel item"
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Carousel item"
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Carousel item"
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Carousel item"
          />
        </div>
      </div>
      <div className="buttons">
        <span className="prev" onClick={handlePrev}>
          
        </span>
        <span className="next" onClick={handleNext}>
          
        </span>
      </div>
    </div>
    </div>
  );
};
