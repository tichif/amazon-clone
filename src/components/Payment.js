import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';

import './Payment.css';

const Payment = () => {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
          <Link to='/checkout'>
            {basket.length} {basket.length > 1 ? 'items' : 'item'}
          </Link>
          )
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Girardo, PV</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map(({ id, title, rating, price, image }, i) => (
              <CheckoutProduct
                key={i}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            ))}
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
