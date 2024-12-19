import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Card from './Card';
import { useFavorites } from './FavouriteProvider';
import { IoFastFoodOutline } from "react-icons/io5";
import { ImSwitch } from "react-icons/im";

function Navbar() {
    let { search, setSearch } = useFavorites();




    const inputChange = (e) => {
        // Renamed the state to "items" for clarity
        setSearch(e.target.value)
    }

    return (

        <div className='sticky top-0 flex h-16 bg-white shadow-lg z-50'>
            <ul className='w-96 flex justify-start items-center pl-28 text-4xl text-teal-600'>
                <Link className='' to='/' >Drop</Link>
            </ul>
            {/* <ul className='w-3/4 flex justify-between items-center text-xl  ml-28'>
                    <NavLink to='/'  className={({ isActive }) => 
            isActive ? 'text-teal-500' : 'text-green-500'
        }>Home</NavLink>
                    <Link to='/topcity' >Top City</Link>
                    <Link to='/topitems'>Top Items</Link>
                    <Link to='/favitem' >Favourite Items</Link>
                    <li><input type='text' placeholder='search' className='bg-teal-50 w-48 rounded-md decoration-none border-2 hover:border-teal-200 outLinkne-none text-center text-gray-700' /></li>
                </ul> */}
            <ul className='w-3/4 flex justify-between items-center text-xl ml-28'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? 'text-teal-600' : 'text-gray-700'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to='/topcity'
                    className={({ isActive }) =>
                        isActive ? 'text-teal-600' : 'text-gray-700'
                    }
                >
                    Top City
                </NavLink>
                <NavLink
                    to='/topitems'
                    className={({ isActive }) =>
                        isActive ? 'text-teal-600' : 'text-gray-700'
                    }
                >
                    Top Items
                </NavLink>
                <NavLink
                    to='/favitem'
                    className={({ isActive }) =>
                        isActive ? 'text-teal-600' : 'text-gray-700'
                    }
                >
                    Favourite Items
                </NavLink>
                <li>
                    <input
                        type='text'
                        placeholder='search'
                        className='bg-teal-50 w-48 rounded-md decoration-none border-2 hover:border-teal-200 outline-none text-center text-gray-700'
                        onChange={(e) => inputChange(e)}
                        value={search}
                    />
                </li>
            </ul>
            <ul className='w-1/3 flex justify-end items-center mr-10 text-xl'>

                {localStorage.getItem('authToken') ? <div className='flex'>
                    <NavLink to='/myorders' className={({ isActive }) =>
                        isActive ? 'text-teal-600 mr-14 flex' : 'text-gray-700 mr-14 flex'
                    }>My orders <IoFastFoodOutline className='ml-1 text-2xl' /></NavLink><NavLink to='/logout' className='flex textgray-700'>Logout<ImSwitch className='ml-2 mt-1 text-red-700' /></NavLink></div> :
                    <><Link to='/register' className='mr-14'>Register</Link> <Link to='/login' >Login</Link></>}
            </ul>
        </div>

    )
}

export default Navbar


