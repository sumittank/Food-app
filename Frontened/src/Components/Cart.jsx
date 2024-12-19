import React, { useState } from 'react'
import MyOrders from './MyOrders'
import { useFavorites } from './FavouriteProvider'

function Cart({items}) {

    let [value,setValue] = useState(0)
    let {order,setOrder} = useFavorites()

    const handleIncrease = (item) => {
        value = value+1
        setValue(value)
        setOrder([...order,item])


        
    }
    const handleDecrease = (item) => {
        if(value<=0){
            setValue(1)
        }
        else{
            value=value-1
            setValue(value)
        }
        setOrder([...order,item])
    }

  return (
    <div className='flex justify-around items-center' key={items._id} >
        {value > 0 ? <><button className='ml-4 font-semibold' onClick={()=>handleIncrease(items)}>+</button>
      <button className='font-semibold'>{value}</button>
      <button className='mr-4 font-semibold' onClick={()=>handleDecrease(items)}>-</button></>:<button onClick={()=>handleIncrease(items)}>Add</button>}
    </div>
  )
}

export default Cart


