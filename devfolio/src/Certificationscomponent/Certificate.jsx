import React from "react";
import "./_Certificate.scss";
import "./_Mediacertificate.scss";

import C from "./Certificates/C.svg";
import Datastructure from "./Certificates/Datastructure.svg";
import Digitalarts from "./Certificates/Digitalarts.svg";
import Genesis from "./Certificates/Genesis.svg";
import Internshala from "./Certificates/Internshala.svg";
import Oasis from "./Certificates/Oasis.svg";
import Paypal from "./Certificates/Paypal.svg";
import Udyamsheel from "./Certificates/udyamsheel.svg";

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
            <img src={C} alt="Certification C" />
          </div>
          <div className="item">
            <img src={Datastructure} alt="Data Structure Certification" />
          </div>
          <div className="item">
            <img src={Digitalarts} alt="Digital Arts Certification" />
          </div>
          <div className="item">
            <img src={Genesis} alt="Genesis Certification" />
          </div>
          <div className="item">
            <img src={Internshala} alt="Internshala Certification" />
          </div>
          <div className="item">
            <img src={Oasis} alt="Oasis Certification" />
          </div>
          <div className="item">
            <img src={Paypal} alt="Paypal Certification" />
          </div>
          <div className="item">
            <img src={Udyamsheel} alt="Udyamsheel Certification" />
          </div>
        </div>
        <div className="buttons">
          <span className="prev" onClick={handlePrev}></span>
          <span className="next" onClick={handleNext}></span>
        </div>
      </div>
    </div>
  );
};
