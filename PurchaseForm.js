// src/components/PurchaseForm.js
import React, { useState } from 'react';
import realEstateContract from '../contracts/RealEstateContract';

function PurchaseForm() {
  const [buyer, setBuyer] = useState('');
  const [price, setPrice] = useState('');

  const handlePurchase = async () => {
    try {
      await realEstateContract.methods.purchase(buyer, price).send({ from: 'YOUR_BUYER_ADDRESS' });
      alert('Purchase successful!');
    } catch (error) {
      console.error('Error purchasing property:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buyer address" value={buyer} onChange={(e) => setBuyer(e.target.value)} />
      <input type="number" placeholder="Purchase price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handlePurchase}>Purchase Property</button>
    </div>
  );
}

export default PurchaseForm;
