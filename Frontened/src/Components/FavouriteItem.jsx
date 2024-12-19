import React from 'react'
import { useFavorites } from './FavouriteProvider'
import CardCopy from './CardCopy';
import Search from './Search'
import Footer from './Footer';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function FavouriteItem() {

  const { giveFav, search } = useFavorites();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
}


  return (
    <div>
      {search.length > 0 ? <Search key={giveFav._id} items={giveFav} /> : giveFav.length > 0 ? giveFav.map((data) => (
        <CardCopy key={data._id} items={data} />
      )) :
        <div className='flex flex-col items-center h-screen justify-center pb-32'>
          <div className='w-1/2 h-80'>
            <p className='text-4xl'>no <span className='text-teal-500' > Favourite </span>item found !!</p>
            <div className='flex text-3xl pt-2'>
              <p className=''>explore other <span className='text-teal-500' >Yummy </span>food items </p>
              <p className='ml-4 text-teal-500'><button><FaHome className='ml-4 mr-2' onClick={handleClick} /></button><span className='text-black cursor-pointer' onClick={handleClick}>Click</span></p>
            </div>
          </div>
        </div>}
      <Footer />
    </div>
  )
}

export default FavouriteItem
