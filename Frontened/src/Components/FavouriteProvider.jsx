import React, { useReducer, useState } from 'react'
import { createContext,useContext } from 'react'

const FavoritesContext = createContext();

function FavouriteProvider({children}) {

    let  [giveFav,setGiveFav] = useState([]);
    const  [order,setOrder] = useState([]);
    const [search,setSearch]= useState('');

    const toggleFav = (item=[]) => {
        const isItemInFavorites = giveFav.some(favItem => favItem._id === item._id);

    if (!isItemInFavorites) {
        // If the item is not in the list, add it
        setGiveFav([...giveFav, item]);
    }
        
    }


   


  return (
    <div>
        <FavoritesContext.Provider value={{toggleFav,giveFav,setGiveFav,search,setSearch,order,setOrder}}>
            {children}
        </FavoritesContext.Provider>
     
    </div>
  )
}

export function useFavorites() {
    return useContext(FavoritesContext);
}

export default FavouriteProvider
