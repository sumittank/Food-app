// import React, { useEffect, useState } from 'react'

// function Home() {
//   const [get,setGet] = useState([])

//   useEffect(()=>{
//     getItems()
//   },[])

//   const getItems = async () => {
//     const result = await fetch('http://localhost:5000/getitems') 
//     result = await result.json()
//     setGet(result)

//   }

//   return (
//     get.map((data)=>{
//       return <h1>{data.name}</h1>
//     })
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import Card from './Card'
import HeroSection from './HeroSection'
import HeroSection1 from './HeroSection1'
import Footer from './Footer'
import CardCopy from './CardCopy'
import { useFavorites } from './FavouriteProvider'
import Search from './Search'

function Home() {
  const [items, setItems] = useState([]) // Renamed the state to "items" for clarity

  let {search}= useFavorites();

  useEffect(() => {
    getItems()
  }, [])

  const getItems = async () => {
    try {
      let response = await fetch('http://localhost:5000/getitems')
      let data = await response.json()
      setItems(data) // Set the fetched data into the state
    } catch (error) {
      console.error('Error fetching items:', error) // Handle fetch errors
    }
  }

  return (
    <div>
      
      {search.length > 0 ? <Search key={items._id} items={items}/> : <><HeroSection />
                <HeroSection1 />
                <div className='flex justify-center mt-12'>
                <div className='flex w-3/4 justify-start mb-4'>
              <span className='w-72 bg-teal-100 text-xl rounded-3xl h-10 justify-center flex items-center '>
              order some Yummy-Tummy 
              </span>
                </div>
                
                </div>
                {items.map((item) => (
                  <Card items={item} key={item._id}/>
                ))}
                </>}
                <Footer />
    </div>
  )
}

export default Home

