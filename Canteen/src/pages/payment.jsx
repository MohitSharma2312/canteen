import React from 'react';
import QRCode from 'qrcode.react'; // Import QRCode from qrcode.react

const Payment = ({ total }) => {
  return (
    <div className="payment">
      <h1>Payment</h1>
      <p>Total: ${total.toFixed(2)}</p>
      <QRCode value={`Total: ${total.toFixed(2)}`} /> {/* Generate QR code */}
    </div>
  );
};

export default Payment;
