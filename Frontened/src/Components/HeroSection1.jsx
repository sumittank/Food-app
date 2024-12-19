import React, { useState, useEffect } from 'react'
import Card1 from './Card1'
import CardList from './CardList'
import { Link } from 'react-router-dom'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function HeroSection1() {
    const [favItems, setFavItems] = useState([]) // Renamed the state to "items" for clarity
    const [favCityItems, setFavCityItems] = useState([])

    useEffect(() => {
        getFavItems()
        getFavCityItems()
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
        <>
            <div className="flex justify-center ">
                <div className="flex flex-col w-3/4 justify-between pb-4 shadow-sm">
                    <hr className="border-t-2 border-gray-100" />
                    <span className='mt-6 text-xl bg-teal-100 w-28 text-center rounded-3xl'>
                        featured
                    </span>
                    <div className='h-64 flex flex-wrap '>
                        <CardList key={favItems._id} items={favItems} />
                        <div className='flex items-center justify-center w-36 ml-5'>
                            <Link to='/topitems' className='underline decoration-black text-gray-800 rounded-xl w-20 text-center'>see all
                            </Link>
                            <IoArrowForwardCircleOutline className='w-5 h-5 text-teal-500' />

                        </div>
                    </div>
                    <hr className="border-t-2 border-gray-100" />

                    <span className='mt-6 text-xl bg-teal-100 w-28 text-center rounded-3xl'>
                        top city
                    </span>
                    <div className='h-64  flex flex-wrap'>
                        <CardList key={favCityItems._id} items={favCityItems} />
                        <div className='flex items-center justify-center w-36 ml-5'>
                            <Link to='/topcity' className='underline decoration-black text-gray-800 rounded-xl w-20 text-center'>see all
                            </Link>
                            <IoArrowForwardCircleOutline className='w-5 h-5 text-teal-500' />
                        </div>
                    </div>

                </div></div>
        </>


    )
}

export default HeroSection1
