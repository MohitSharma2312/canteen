import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/item.css";

const Card = ({ item, addToCart, showAddToCart, showFoodCourtSelect }) => {
  const navigate = useNavigate();
  const [selectedFoodCourt, setSelectedFoodCourt] = useState(null);
  const foodCourts = ['Food Court 1', 'Food Court 2', 'Food Court 3']; // Add your food courts here

  const handleAddToCart = () => {
    if (selectedFoodCourt) {
      addToCart({ ...item, foodCourt: selectedFoodCourt });
    } else {
      alert('Please select a food court first.');
    }
  };

  const handleFoodCourtChange = (event) => {
    setSelectedFoodCourt(event.target.value);
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text"><span>&#8377;</span>{item.description}</p>
        {showFoodCourtSelect && (
          <div>
            <select className="select-button" onChange={handleFoodCourtChange}>
              <option value="">Select Food Court</option>
              {foodCourts.map((foodCourt, index) => (
                <option key={index} value={foodCourt}>{foodCourt}</option>
              ))}
            </select>
          </div>
        )}
        {showAddToCart && selectedFoodCourt && (
          <div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
