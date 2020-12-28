import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3196_HOL20_Acquisition/Amazon_GW_DesktopTallHero_ENG_RB-3196_HOL20_v2_Acquisition_1500x600._CB415330765_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='123456789'
            title='The lean startup'
            price={29.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
          />
          <Product
            id='234567891'
            title='
        Nurxiovo 3 in 1 Stand Mixer Commercial Multifunctional Food Electric Kitchen Mixer 850W Tilt-Head Dough Machine with 6-1/2 Qt Stainless Steel Bowl,'
            price={125.99}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/613Yve24%2B1L._AC_SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='345678912'
            title='New Alienware m15 R3 15.6inch FHD Gaming Laptop'
            price={1729.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/81SS6xBc4tL._AC_SL1500_.jpg'
          />

          <Product
            id='456789123'
            title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone'
            price={24.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/61cSwIDSVbL._AC_SL1000_.jpg'
          />
          <Product
            id='567891234'
            title='New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model, 8th Generation)'
            price={329.0}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71UddJ3JSLL._AC_SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='678912345'
            title='SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, Whitee'
            price={649.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
