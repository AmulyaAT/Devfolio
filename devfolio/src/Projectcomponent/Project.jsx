import React, { useRef } from "react";
import "./_Project.scss";
import "./_MediaProject.scss";

import Copd from "./Project-images/Copd.svg";
import Ecompage from "./Project-images/Ecompage.svg";
import Tradetrack from "./Project-images/Tradetrack.svg";
import LoginPage from "./Project-images/LoginPage.svg";
import todo from "./Project-images/todo.svg";
export const Project = () => {
  // Create a reference for the container
  const containerRef = useRef(null);

  // Handler function to set up the Intersection Observer
  const setupObserver = () => {
    const options = {
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        entry.target.style.transform = `scale(${entry.intersectionRatio})`;
      });
    };

    // Initialize the observer
    const observer = new IntersectionObserver(callback, options);

    // Observe each image within the container
    if (containerRef.current) {
      const images = containerRef.current.querySelectorAll(".project__images");
      images.forEach((image) => observer.observe(image));
    }
  };

  // Call the handler manually after rendering
  React.useEffect(() => {
    setupObserver(); // Call setupObserver when the component mounts
  }, []);

  return (
    <div className="project__container">
  <section className="projectheading">Projects</section>
  <div className="project__images-container" ref={containerRef}>
    <a href="https://github.com/AmulyaAT/iVoyant-Assignment-1-ecom-webpage-" target="_blank" rel="noopener noreferrer">
      <img src={Ecompage} alt="Project 1" className="project__images" />
    </a>
    <a href="https://github.com/AmulyaAT/Login_Signup_page" target="_blank" rel="noopener noreferrer">
      <img src={LoginPage} alt="Project 2" className="project__images" />
    </a>
    <a href="https://github.com/AmulyaAT/Analysis-and-classification-of-COPD-using-Deep-Learning" target="_blank" rel="noopener noreferrer">
      <img src={Copd} alt="Project 3" className="project__images" />
    </a>
    <a href="https://github.com/yourusername/Tradetrack" target="_blank" rel="noopener noreferrer">
      <img src={Tradetrack} alt="Project 4" className="project__images" />
    </a>
    <a href="https://github.com/yourusername/todo" target="_blank" rel="noopener noreferrer">
      <img src={todo} alt="Project 5" className="project__images" />
    </a>
  </div>
</div>
  );
};
