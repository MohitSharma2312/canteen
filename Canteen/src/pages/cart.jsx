import React from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code'; // Add this line
import "../CSS/cart.css";

const Cart = ({ cart, setCart }) => {
  var total = 0;
  cart.forEach(element => {
    total += (element.description * element.quantity)
  });

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const adjustQuantity = (indexToAdjust, quantity) => {
    setCart(cart.map((item, index) => 
      index === indexToAdjust 
        ? { ...item, quantity } 
        : item
    ));
  };
  const upiId = "mohitsharmajsrjee23@oksbi"; // Replace with your UPI ID
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p><span>₹</span>{item.description}</p>
                <p>{item.foodCourt}</p>
                <div className="quantity-selector">
                  <button onClick={() => adjustQuantity(index, Math.max(1, item.quantity - 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => adjustQuantity(index, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <div className="total">Total: ₹{total.toFixed(2)}</div>
          
          <QRCode value={`upi://pay?pa=mohitsharmajsrjee23@oksbi&pn=MohitSharma&mc=0000&tid=00000000&tr=7667189162&tn=thanks for payment &am=${total.toFixed(2)}&cu=INR&url=www.google.com`} />
</>
      ) : (
        <p><b>Your cart is empty. Start shopping!</b></p>
      )}
    </div>
  );
};

export default Cart;
