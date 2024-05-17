// import React from 'react';
import PropTypes from 'prop-types';
import { TiTick } from "react-icons/ti";


const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex gap-2 items-center'><TiTick className='text-green-400' /> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;