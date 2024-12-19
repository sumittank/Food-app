import React from 'react'

function Card1({ items }) {
    return (
        <div className='pt-3 pb-3 mr-10'>
            <div className='w-64 pt-4 pb-4 h-56'>
                
                {/* <div className='text-lg'>₹{item.price}</div>
                <div className='text-sm pt-4'>{item.description}</div> */}
                <div><img src={items.img} className='w-64 h-40 rounded-lg mb-4'/></div>
                <div className='text-xl mt-2'>{items.name}</div>
                <div className='text-xl mt-2'>{items.city}</div>

            </div>
        </div>
    )
}

export default Card1
