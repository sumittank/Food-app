import React,{useState,useEffect} from 'react'
import Card from './Card'
import Search from './Search';
import { useFavorites } from './FavouriteProvider';
import Footer from './Footer';

function TopItems() {

    const [favItems, setFavItems] = useState([]) // Renamed the state to "items" for clarity
    let { search } = useFavorites();
   

    useEffect(() => {
        getFavItems()
       
    }, [])

    const getFavItems = async () => {
        try {
            let response = await fetch('http://localhost:5000/getfavitems')
            let data = await response.json()
            setFavItems(data) // Set the fetched data into the state
        } catch (error) {
            console.error('Error fetching items:', error) // Handle fetch errors
        }
    }


  return (
    <div>
        {search.length > 0 ? <Search key={favItems._id} items={favItems}/> : favItems.map((items)=>(<><Card key={items._id} items={items} /></>))}
        <Footer /> 
    </div>
  )
}

export default TopItems
