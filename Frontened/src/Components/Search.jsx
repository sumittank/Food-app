import React from 'react';
import { useFavorites } from './FavouriteProvider';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


function Search({ items }) {
    let { search, setSearch } = useFavorites();
    const navigate = useNavigate()

    // Filter items based on the search term
    const filteredItems = items.filter(
        (fill) =>
            (fill.name && fill.name.toLowerCase().includes(search.toLowerCase())) ||
            (fill.dishName && fill.dishName.toLowerCase().includes(search.toLowerCase()))
    );

    const handleClick = () => {
        navigate('/')
        setSearch('')
    }
    

    return (
        <>
            {filteredItems.length > 0 ? (
                filteredItems.map((fillItem) => (
                    <div key={fillItem._id}>
                        <Card items={fillItem} />
                    </div>
                ))
            ) : (
                        <div className='flex flex-col items-center h-screen justify-center pb-32'>
                            <div className='w-1/2 h-80'>
                            <p className='text-4xl'>item <span className='text-teal-500' >Not Found</span> !!</p>
                            <div className='flex text-3xl pt-2'>
                            <p className=''>explore other <span className='text-teal-500' >Yummy </span>food items </p>
                            <p className='ml-4 text-teal-500'><FaHome className='ml-4' onClick={handleClick} /><span className='text-black'>Click</span></p>
                            </div>
                            </div>
                        </div>  
            )}
        </>
    );
}

export default Search;
