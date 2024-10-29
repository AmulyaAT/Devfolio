import React, { useRef, useEffect, useState } from "react";
import "./_Certificate.scss";

const Certificate = () => {
  const boxRef = useRef(null);
  const [degrees, setDegrees] = useState(-355);
  const rotateBox = (direction) => {
    const newDegrees = degrees + (direction === "prev" ? 45 : -45);
    setDegrees(newDegrees);
  };

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.transform = `perspective(1500px) rotateY(${degrees}deg)`;
    }
  }, [degrees]);

  return (
    <div className="certificate-container">
      <div className="box" ref={boxRef}>
        <span style={{ "--i": 1 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-m47_5c2taCIJTBRcPtOCgphqj4Dtd41vw&s" alt="Certificate 1" />
        </span>
        <span style={{ "--i": 2 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-m47_5c2taCIJTBRcPtOCgphqj4Dtd41vw&s" alt="Certificate 2" />
        </span>
        <span style={{ "--i": 3 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-m47_5c2taCIJTBRcPtOCgphqj4Dtd41vw&s" alt="Certificate 3" />
        </span>
        <span style={{ "--i": 4 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-m47_5c2taCIJTBRcPtOCgphqj4Dtd41vw&s"
            alt="Certificate 4"
          />
        </span>
        <span style={{ "--i": 5 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Certificate 5"
          />
        </span>
        <span style={{ "--i": 6 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s"
            alt="Certificate 6"
          />
        </span>
        <span style={{"--i": 7}}>
            <h2 className="heading">
                Certificates
            </h2>

        </span>
      </div>
      <div className="btns">
        <button className="btnprev" onClick={() => rotateBox("prev")}>
        </button>
        <button className="btnnext" onClick={() => rotateBox("next")}>
        </button>
      </div>
    </div>
  );
};

export default Certificate;