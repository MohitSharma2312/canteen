import React, { useState } from 'react';
import Card from "../components/Card";
import "../CSS/item.css";
import cardItems from '../database/card_item.json';

const Item = ({addToCart}) => {

  return (
    <div className="container">
      <div className="card-grid">
        {cardItems.map((item, index) => (
          <div className="col-sm-4" key={index}>
            <Card item={item} addToCart={addToCart} showAddToCart={true} showFoodCourtSelect={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
