import React, { useRef } from "react";
import "./_Project.scss";
import "./_MediaProject.scss";

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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s" alt="Project 1" className="project__images" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s" alt="Project 2" className="project__images" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s" alt="Project 3" className="project__images" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s" alt="Project 4" className="project__images" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s" alt="Project 5" className="project__images" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s" alt="Project 6" className="project__images" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGeXSppe4nT8j48e1-6n2JwLBecraRn0TkQ&s" alt="Project 7" className="project__images" />
      </div>
    </div>
  );
};
