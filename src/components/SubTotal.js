import React from 'react';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/reducer';

import './SubTotal.css';

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} {basket.length > 1 ? 'items' : 'item'}):
              <strong>{` ${value} `}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType='text'
        thousandSeparator
        prefix='$'
      />
      <button>Process to Checkout</button>
    </div>
  );
};

export default SubTotal;
