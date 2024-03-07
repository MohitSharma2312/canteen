import React ,{ useState, useEffect } from 'react';
import Card from "../components/Card"; // Import your Card component
import "../CSS/item.css";
import card1 from "../assets/Humaaans - Friend Meeting.png";
import card2 from "../assets/baking.png";
//import { useNavigate } from 'react-router-dom';

const Item = () => {

 const cardItems = [
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
    {
      image : card1 ,
      title: "Card 2 Title",
      description: "Card 2 Description",
    },
    {
      image : card1 ,
      title: "Card 2 Title",
      description: "Card 2 Description",
    },{
      image : card1 ,
      title: "Card 2 Title",
      description: "Card 2 Description",
    },{
      image : card1 ,
      title: "Card 2 Title",
      description: "Card 2 Description",
    },{
      image : card1 ,
      title: "Card 2 Title",
      description: "Card 2 Description",
    },{
      image : card1 ,
      title: "Card 2 Title",
      description: "Card 2 Description",
    },
    {
      image : card2 ,
      title: "Card 2 Title",
      description: "Card 2 Description",
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

