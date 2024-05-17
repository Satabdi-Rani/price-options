// import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({priceOption}) => {
    const {name, price, features} = priceOption;
    return (
        <div className='bg-blue-500 rounded-lg flex flex-col p-2 sm:p-4 text-white'>
            <h2 className='text-center'><span className='text-4xl sm:text-7xl font-extrabold'>{price}</span>
            <span className='text-lg sm:text-3xl'>/mon</span></h2>
            <h4 className='text-md sm:text-4xl text-center my-8'>{name}</h4>
           <div className='flex-grow'>
           {
                features.map((feature, idx) => <Feature  key={idx} feature={feature}></Feature>)
            }
           </div>
           <button className='bg-green-400 w-full px-4 py-2 text-black font-bold mt-6 border rounded-lg'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    priceOption: PropTypes.object
}

export default PriceOption;