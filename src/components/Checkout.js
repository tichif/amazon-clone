import React from 'react';

import './Checkout.css';
import SubTotal from './SubTotal'

const Checkout = () => {
  return <div className='checkout'>
    <div className="checkout__left">
      <img className="checkout__ad " src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/BGCLP/updates/1218/BGC_EOY_GCLP_EN_2.jpg" alt="ad"/>
      <div>
        <h2 className="checkout__title">Your shopping basket</h2>
      </div>
    </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
  </div>;
};

export default Checkout;
