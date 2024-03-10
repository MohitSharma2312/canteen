import React from 'react';
import "../CSS/item.css";
import { useNavigate } from 'react-router-dom';
const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/item');
  };
  return (
    <div className="card" >
      <img src={item.image} alt={item.title} /> {/* Use the image from the item object */}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <a href="/billing" className="btn btn-primary">Go to Billing</a>
      </div>
    </div>
  );
};

export default Card;
