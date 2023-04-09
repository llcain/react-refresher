import React from 'react';

function GroceryList(props) {
    const items = [
        {id: 1, name: 'bread'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'eggs'},
        {id: 4, name: 'salad'}
    ];
    return (
        <>
            <h1>Grocery List</h1>
            <ul>
                {items.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
        </>
    )
}

export default GroceryList;