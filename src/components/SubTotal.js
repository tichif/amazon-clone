import React from 'react';
import CurrencyFormat from 'react-currency-format'

import './SubTotal.css';

const SubTotal = () => {
  return <div className='subtotal'>
    <CurrencyFormat
      renderText={(value) => (
        <>
        <p>Subtotal (0 items):
        <strong>{` ${value} `}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={0}
      displayType="text"
      thousandSeparator
      prefix="$"
    />
    <button>Process to Checkout</button>
  </div>;
};

export default SubTotal;
