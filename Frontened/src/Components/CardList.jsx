import React from 'react'
import Card1 from './Card1'

function CardList({ items  }) {
    // Function to shuffle the array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle the items and select the first three
    const randomItems = shuffleArray([...items]).slice(0, 3);

    return (
        <div className='flex flex-wrap'>
            {randomItems.map((item, index) => (
                <Card1 key={index} items={item} />
            ))}
           
        </div>
    )
}

export default CardList
