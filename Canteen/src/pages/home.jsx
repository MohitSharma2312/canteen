import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Import your Navbar component
import Carousel from "../components/Carousel"; // Import your Carousel component
import Footer from "../components/Footer"; // Import your Footer component
import "../CSS/home.css"; // Import your CSS file

const homeData = {
  // Replace with your actual home page content
  title: "Your Awesome Website",
  description: "Welcome to your homepage!",
  carouselItems: [
    {
      image : "C:/web development/canteen/Canteen/src/assets/Humaaans - Friend Meeting.png", // Replace with your actual image URL
      title: "Slide 1 Ttle",
      description: "Slide 1 Description",
    },
    // ... other carousel items
  ],
};

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollTop(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid">
      <Navbar scrollTop={scrollTop} /> {/* Pass scrollTop to Navbar */}
      {/* <Carousel items={homeData.carouselItems} /> Pass carousel items to Carousel */}
      <section id="home" className="hero is-full height">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>{homeData.title}</h1>
            <p>{homeData.description}</p>
            {/* Add more content to your home section */}
          </div>
        </div>
      </section>
      <Footer /> {/* Render Footer */}
    </div>
  );
}
