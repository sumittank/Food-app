import React,{useState,useEffect} from 'react'
import Card from './Card'
import Search from './Search'
import { useFavorites } from './FavouriteProvider'
import Footer from './Footer'

function TopCity() {

    const [favCityItems, setFavCityItems] = useState([])
    let { search } = useFavorites();




    useEffect(() => {
        getFavCityItems()
    }, [])

    const getFavCityItems = async () => {
        try {
            let response = await fetch('http://localhost:5000/getfavcities')
            let data = await response.json()
            setFavCityItems(data) // Set the fetched data into the state
        } catch (error) {
            console.error('Error fetching items:', error) // Handle fetch errors
        }
    }




  return (
    <div>
      {search.length > 0 ? <Search key={favCityItems._id} items={favCityItems}/> : favCityItems.map((items)=>(<Card key={items._id} items={items} />))} 
      <Footer />
    </div>
  )
}

export default TopCity
