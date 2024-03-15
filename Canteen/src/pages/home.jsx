import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import Card from "../components/Card"; // Import your Card component
import "../CSS/home.css";
import card1 from "../assets/blue-lays.png";
import card4 from "../assets/green-lays.png";
import card3 from "../assets/yellow-lays.png";
import card2 from "../assets/baking.png";
import { useNavigate } from 'react-router-dom'; 
const homeData = {
  title: "COLLEGE CRAVINGS",
  image : card2,
  description: "Indule Your Taste Buds in our Vibrant College Food Court!", 
  CarouselItems: [
    {
      image : card2,
      title: "Slide 1 Ttle",
      description: "Slide 1 Description",
    },
    // ... other carousel items
  ],
    cardItems: [
      {
        image : card1 ,
        title: "Blue Lays",
        description: "₹20",
      },

      {
        image : card4 ,
        title: "Green Lays",
        description: "₹20",
      },
      {
        image : card3 ,
        title: "Yellow Lays",
        description: "₹20",
      },
      

      // ... other card items
    ],
    Baking:[]
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
         <div className="container">
          <div className="row">
            <div className="col-sm-6">
          <div className="has-text-left">
            <h1>{homeData.title}</h1>
            <p>{homeData.description}
            </p>
            <a href="#about" className="btn btn-primary">About Us</a>
            
          </div>
        </div>
        <div className="col-sm-6">
          <div className="has-text-right">
            <img src={card2} alt="Your Image" style={{ width: '110%' }} />
          </div>
        </div>
        </div>
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
