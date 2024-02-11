import React, { useState, useEffect } from "react";
import "../CSS/carousel.css"; // Import your CSS file

const Carousel = ({ items }) => {
  // Destructure items from props
  const [index, setIndex] = useState(0); // Create a state for the current index of the carousel
  const [length, setLength] = useState(items.length); // Create a state for the length of the items array

  // Set the length to match the current items length if it changes
  useEffect(() => {
    setLength(items.length);
  }, [items]);

  // Increment the index by one
  const next = () => {
    setIndex((index + 1) % length); // Use modulo (%) operator to loop back to 0
  };

  // Decrement the index by one
  const prev = () => {
    setIndex((index - 1 + length) % length); // Use modulo (%) operator to loop back to the last item
  };

  return (
    <div className="carousel">
      {/* Add a className for styling */}
      <div className="carousel-inner">
        {/* Add a className for styling */}
        {items.map((item, i) => {
          // Map the items array to JSX elements
          return (
            <div
              className={`carousel-item ${i === index ? "active" : ""}`}
              // Add a className for styling and a conditional className for the active item
              key={i}
            >
              <img src={item.image} alt={item.title} /> {/* Render the image */}
              <div className="carousel-caption">
                {/* Add a className for styling */}
                <h2>{item.title}</h2> {/* Render the title */}
                <p>{item.description}</p> {/* Render the description */}
              </div>
            </div>
          );
        })}
      </div>
      <button className="carousel-control-prev" onClick={prev}>
        {/* Add a className for styling and an onClick handler */}
        Prev
      </button>
      <button className="carousel-control-next" onClick={next}>
        {/* Add a className for styling and an onClick handler */}
        Next
      </button>
    </div>
  );
};

export default Carousel;
