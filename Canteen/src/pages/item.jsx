import React ,{ useState, useEffect } from 'react';
import Card from "../components/Card"; // Import your Card component
import "../CSS/item.css";
import card1 from "../assets/blue-lays.png";
import card2 from "../assets/green-lays.png";
import card3 from "../assets/yellow-lays.png";
import card4 from "../assets/maxs-lays.png";
import card5 from "../assets/green-kurkure.png";
import card6 from "../assets/orange-kurkure.png";
import card7 from "../assets/MadAngles.png";
import card8 from "../assets/browine.png";
import card9 from "../assets/muffin.png";
import card10 from "../assets/MilkyBar.png";
import card11 from "../assets/Fruit&Nuts.png";
import card12 from "../assets/DairyMilk.png";
import card13 from "../assets/KitKat.png";
import card14 from "../assets/Chocobar.png";
import card15 from "../assets/Strawberrycup.png";

//import { useNavigate } from 'react-router-dom';

const Item = () => {

 const cardItems = [
    {
      image : card1 ,
      title: "Blue Lays",
      description: "₹20",
    },
    {
      image : card2 ,
      title: "Green Lays",
      description: "₹20",
    },
    {
      image : card3 ,
      title: "Yellow Lays",
      description: "₹20",
    },
    {
      image : card4,
      title: "Lays Max",
      description: "₹20",
    },
    {
      image : card5,
      title: "Green Kurkure",
      description: "₹20",
    },{
      image : card6 ,
      title: "Orange Kurkure",
      description: "₹20",
    },{
      image : card7 ,
      title: "Mad Angles",
      description: "₹20",
    },{
      image : card8 ,
      title: "Brownie",
      description: "₹50",
    },{
      image : card9 ,
      title: "Muffin",
      description: "₹15",
    },
    {
      image : card10 ,
      title: "MilkyBar",
      description: "₹20",
    },
    {
      image : card11 ,
      title: "Fruit & Nut",
      description: "₹45",
    },
    {
      image : card12 ,
      title: "Dairy Milk",
      description: "₹20",
    },
    {
      image : card13 ,
      title: "KitKat",
      description: "₹30",
    },
    {
      image : card14 ,
      title: "Chocobar",
      description: "₹20",
    },
    {
      image : card15 ,
      title: "Strawberry Cup",
      description: "₹20",
    },
    // ... other card items
  ]
  
  return (
    <div className="container">
    <div className="card-grid">
      {cardItems.map((item, index) => (
        <div className="col-sm-4" key={index}>
          <Card item={item} /> {/* Render Card */}
        </div>
      ))}
    </div>
  </div>
  );
 
};
export default Item;

