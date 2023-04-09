import React from 'react';

import Car from './Car';
import GroceryList from './GroceryList';

function Garage() {
    const cars = [
        {id: 1, brand: "Ford"},
        {id: 2, brand: "BMW"},
        {id: 3, brand: "Totota"}
    ];

    return (       

        <>
            <h1>Who lives in my Garage?</h1>
            <p>THis is  a paragraph!!</p>
           <ul>
           {cars.map((car) => <Car key={car.id} brand={car.brand} color="blue" />)}
            </ul>
            <GroceryList />
        </>
    )
}

export default Garage;