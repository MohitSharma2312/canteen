import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
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
