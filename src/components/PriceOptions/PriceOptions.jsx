// import React from 'react';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => { 
    const priceOptions =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30.00,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "WiFi access",
            "One guest pass per month"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 50.00,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Access to group fitness classes",
            "One personal training session per month",
            "WiFi access",
            "Two guest passes per month",
            "Access to nutritional workshops"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 75.00,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Access to group fitness classes",
            "Four personal training sessions per month",
            "Unlimited guest passes",
            "Access to sauna and steam room",
            "WiFi access",
            "Access to nutritional workshops",
            "Free sports drinks",
            "Priority equipment reservation"
          ]
        },
        {
          "id": 4,
          "name": "VIP Membership",
          "price": 100.00,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Access to group fitness classes",
            "Eight personal training sessions per month",
            "Unlimited guest passes",
            "Access to sauna and steam room",
            "WiFi access",
            "Nutrition consultation",
            "Priority booking for classes and equipment",
            "Free sports drinks",
            "Monthly massage session",
            "Dedicated locker",
            "Access to exclusive VIP lounge"
          ]
        }
      ];
      

      
    return (
        <div>
             <h2 className="text-5xl">Best Price in the towm</h2>
             <div className="grid mt-10 sm:grid-cols-4 gap-10">
             {
                priceOptions.map(priceOption => <PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)
             }
             </div>
        </div>
    );
};

export default PriceOptions;