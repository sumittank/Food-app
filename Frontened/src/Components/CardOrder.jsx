import React, { useState } from 'react';

function CardOrder({ items }) {
    const [itemVisible, setItemVisible] = useState(true); // State to manage visibility of the item
    const [qty, setQty] = useState(1);

    const handleIncrease = () => {
        setQty(qty + 1);
    };

    const handleDecrease = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    const handleDelete = () => {
        setItemVisible(false); // Set the item as not visible
    };

    console.log(items)

    if (!itemVisible) return null; // If item is deleted, return null to remove from DOM

    return (
        <div className="flex justify-center">
            <div className="flex w-3/4 justify-between pt-8 pb-8 shadow-sm">
                <div><img src={items.img} className='w-28 h-28 rounded-full' /></div>
                <div className='flex items-center'>{items.name || items.dishName}</div>
                <div className='flex items-center'>{items.price * qty}</div>
                <div className='flex items-center w-28 justify-around font-medium'>
                    <div><button onClick={handleIncrease}>+</button></div>
                    <div>{qty}</div>
                    <div><button onClick={handleDecrease}>-</button></div>
                </div>
                <div className='flex items-center text-xl'>
                    <button onClick={handleDelete}>X</button>
                </div>
            </div>
        </div>
    );
}

export default CardOrder;



