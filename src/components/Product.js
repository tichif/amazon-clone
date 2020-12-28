import React from 'react';
import { useStateValue } from '../context/StateProvider';
import './Product.css';

const Product = ({ title, image, price, rating, id }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the action to the dataLayer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='book' />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
