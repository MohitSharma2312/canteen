import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Card from "../components/Card"; // Import your Card component
import "../CSS/home.css";
import card1 from "../assets/Humaaans - Friend Meeting.png";
import card2 from "../assets/baking.png";
import { useNavigate } from 'react-router-dom'; 
const homeData = {
  title: "Your Awesome Website",
  description: "Welcome to your homepage!",
  CarouselItems: [
    {
      image : "Canteen\src\assets\Humaaans - Friend Meeting.png",
      title: "Slide 1 Ttle",
      description: "Slide 1 Description",
    },
    // ... other carousel items
  ],
    cardItems: [
      {
        image : card1 ,
        title: "Card 2 Title",
        description: "Card 2 Description",
      },
      {
        image : card1 ,
        title: "Card 2 Title",
        description: "Card 2 Description",
      },
      {
        image : card1 ,
        title: "Card 2 Title",
        description: "Card 2 Description",
      },
      
      // ... other card items
    ],
  };

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
 const navigate = useNavigate(); 
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
  const handleSeeMore = () => {
    navigate('/item'); // Navigate to Item page
    window.scrollTo(0, 0);
  };
  return (
    <div className="container-fluid">
      <Navbar scrollTop={scrollTop} />
      <section id="home" className="hero is-full height">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>{homeData.title}</h1>
            <p>{homeData.description}</p>
          </div>
        </div>
      </section>
      <div className="container">
      <div className="card-grid">
      {homeData.cardItems.map((item, index) => (
        <div className="col-sm-4" key={index}>
          <Card item={item} /> {/* Render Card */}
        </div>
      ))}
    </div>
</div>
<div className="see-more">
        <button className="details" onClick={handleSeeMore} scrollTop={scrollTop} >See More&gt;&gt;</button> {/* Add See More button */}
      </div>
      <Footer />
    </div>
  );
}
