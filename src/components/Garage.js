import React from 'react';

import Car from './Car';

function Garage() {
    const cars = ["bmw", "ford", "totoyya"];

    return (       

        <>
            <h1>Who lives in my Garage?</h1>
            <p>THis is  a paragraph!!</p>
           <ul>
           {cars.map((car) => <Car brand={car} color="blue" />)}
            </ul>
        </>
    )
}

export default Garage;